from .models import Recipe, CookStep, IngredientsFull, Ingredient, Category
from django.http import HttpResponse, JsonResponse
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_exempt
from django.db.models.functions import ExtractMonth
from api.serializers import RecipeSerializer

# cookSteps = Recipe.objects.get(id=recipe["id"])
# stepList = []
# for el in cookSteps.cook_steps.values_list("howto_step"):
#     stepList.append(el)
# recipe["howto"] = stepList

@csrf_exempt
@never_cache
def index(request):
    recipes = Recipe.objects.all()
    resultJson = []
    serrecipe = RecipeSerializer(recipes, many=True)
    for recipe in serrecipe.data:
        category = Category.objects.get(category_key=recipe["category_key"])
        recipe["category"] = category.name

        try:
            steps = CookStep.objects.filter(recipe_id=recipe["id"])
        except Exception as e:
            return JsonResponse({"error": str(e), "code": 1}, status=404)

        stepList = []
        for step in steps.values():
            stepList.append(step["howto_step"])
        recipe["howto"] = stepList

        try:
            ingredients = IngredientsFull.objects.filter(recipe_id=recipe["id"])
        except Exception as e:
            return JsonResponse({"error": str(e), "code": 1}, status=404)

        ingredientList = []
        for ingredient in ingredients.values():
            ingredientList.append(ingredient["ingredient"])
        recipe["ingredients_full"] = ingredientList

        try:
            ingredientSmall = Ingredient.objects.filter(recipe_id=recipe["id"])
        except Exception as e:
            return JsonResponse({"error": str(e), "code": 1}, status=404)

        ingredientSmallList = []
        for ingredient in ingredientSmall.values():
            ingredientSmallList.append({'name': ingredient["name"], 'amount': ingredient["amount"]})
        recipe["ingredients"] = ingredientSmallList

        resultJson.append(recipe)

    ingredients = Ingredient.objects.values()
    ingredientsList = []
    for ingredient in ingredients:
        ingredientsList.append(ingredient["name"])

    return JsonResponse({"menuList": list(resultJson), "ingredients": list(ingredientsList), "code": 0}, safe=False)

def get_categories(request):
    categories = Category.objects.values()
    return JsonResponse({"categories": list(categories), "code": 0}, safe=False)

def get_recipes_by_category(request, category_id):
        main_category = Category.objects.get(id=category_id)

        recipes = Recipe.objects.all()
        resultJson = []
        serrecipe = RecipeSerializer(recipes, many=True)
        for recipe in serrecipe.data:
            category = Category.objects.get(category_key=recipe["category_key"])
            if (category.name == main_category.name):
                try:
                    steps = CookStep.objects.filter(recipe_id=recipe["id"])
                except Exception as e:
                    return JsonResponse({"error": str(e), "code": 1}, status=404)

                stepList = []
                for step in steps.values():
                    stepList.append(step["howto_step"])
                recipe["howto"] = stepList

                try:
                    ingredients = IngredientsFull.objects.filter(recipe_id=recipe["id"])
                except Exception as e:
                    return JsonResponse({"error": str(e), "code": 1}, status=404)

                ingredientList = []
                for ingredient in ingredients.values():
                    ingredientList.append(ingredient["ingredient"])
                recipe["ingredients_full"] = ingredientList

                resultJson.append(recipe)

        return JsonResponse({"recipeList": list(resultJson), "code": 0}, safe=False)

@csrf_exempt
def update_rating(request, recipe_id):
    try:
        recipe = Recipe.objects.get(id=recipe_id)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=404)

    if request.method == "POST":
        recipe.voted = request.POST["voted"]
        recipe.average = request.POST["average"]
        recipe.save()
        return JsonResponse({"": ""}, safe=False)

@csrf_exempt
def get_last_popular(request, search_id):
    recipes = Recipe.objects.values().order_by('-created_at')[0:5]

    return JsonResponse(list(recipes), safe=False)
