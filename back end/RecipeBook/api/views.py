from .models import Recipe, CookStep, IngredientsFull, Ingredient
from django.http import HttpResponse, JsonResponse
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_exempt

# cookSteps = Recipe.objects.get(id=recipe["id"])
# stepList = []
# for el in cookSteps.cook_steps.values_list("howto_step"):
#     stepList.append(el)
# recipe["howto"] = stepList

@csrf_exempt
@never_cache
def index(request):
    recipes = Recipe.objects.values()
    resultJson = []
    for recipe in recipes:
        steps = CookStep.objects.filter(recipe_id=recipe["id"])
        stepList = []
        for step in steps.values():
            stepList.append(step["howto_step"])
        recipe["howto"] = stepList

        ingredients = IngredientsFull.objects.filter(recipe_id=recipe["id"])
        ingredientList = []
        for ingredient in ingredients.values():
            ingredientList.append(ingredient["ingredient"])
        recipe["ingredients_full"] = ingredientList

        ingredientSmall = Ingredient.objects.filter(recipe_id=recipe["id"])
        ingredientSmallList = []
        for ingredient in ingredientSmall.values():
            ingredientSmallList.append({'name': ingredient["name"], 'amount': ingredient["amount"]})
        recipe["ingredients"] = ingredientSmallList

        resultJson.append(recipe)


    ingredients = Ingredient.objects.values()
    ingredientsList = []
    for ingredient in ingredients:
        ingredientsList.append(ingredient["name"])

    return JsonResponse({"menuList": list(resultJson), "ingredients": list(ingredientsList)}, safe=False)

def get_last_popular(request, search_id):
    recipes = Recipe.objects.values().order_by('-created_at')[0:4]
    return JsonResponse(list(recipes), safe=False)
