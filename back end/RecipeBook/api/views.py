from .models import Recipe, CookStep, IngredientsFull, Ingredient
from django.http import HttpResponse, JsonResponse
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView

)

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
    recipes = Recipe.objects.values()
    return JsonResponse(list(recipes), safe=False)



from .serializers import (RecipeSerializer,
                          RecipeCreateUpdateSerializer,
                          IngredientSerializer,
                          IngredientCreateUpdateSerializer
                          )


class RecipeAPIView(ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeDetailAPIView(RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeUpdateAPIView(UpdateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeCreateUpdateSerializer


class RecipeDeleteAPIView(DestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class RecipeCreateAPIView(CreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeCreateUpdateSerializer



# INgredient

class IngredientAPIView(ListAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class IngredientDetailAPIView(RetrieveAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class IngredientUpdateAPIView(UpdateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientCreateUpdateSerializer


class IngredientDeleteAPIView(DestroyAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class IngredientCreateAPIView(CreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientCreateUpdateSerializer






# cookSteps = Recipe.objects.get(id=recipe["id"])
# stepList = []
# for el in cookSteps.cook_steps.values_list("howto_step"):
#     stepList.append(el)
# recipe["howto"] = stepList



