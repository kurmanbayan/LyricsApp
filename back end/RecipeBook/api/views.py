from .models import Recipe, CookStep, IngredientsFull, Ingredient
from django.http import HttpResponse, JsonResponse

def index(request):
    recipes = Recipe.objects.values()
    resultJson = []
    for recipe in recipes:
        steps = CookStep.objects.filter(recipe_id=recipe["recipe_id"])
        stepList = []
        for step in steps.values():
            stepList.append(step["howto_step"])
        recipe["howto"] = stepList

        ingredients = IngredientsFull.objects.filter(recipe_id=recipe["recipe_id"])
        ingredientList = []
        for ingredient in ingredients.values():
            ingredientList.append(ingredient["ingredient"])
        recipe["ingredients_full"] = ingredientList

        # ingredientSmall = Ingredient.objects.filter(recipe_id=recipe["recipe_id"])
        # ingredientSmall = Ingredient.objects.get(pk=recipe["id"])
        ing = Ingredient.objects.values()
        print(ing["recipe_id"])
        # print(Ingredient.objects.filter(pk = recipe["recipe_id"]))
        # ingredientSmallList = []
        # for ingredient in ingredientSmall.values():
        #     ingredientSmallList.append({'name': ingredient["name"], 'amount': ingredient["amount"]})
        # recipe["ingredients"] = ingredientSmallList

        resultJson.append(recipe)

    return JsonResponse(list({"asd": "Asd"}), safe=False)
