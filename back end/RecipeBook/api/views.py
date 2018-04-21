from .models import Recipe, CookStep, IngredientsFull, Ingredient
from django.http import HttpResponse, JsonResponse
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
    DestroyAPIView

)

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

