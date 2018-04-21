from rest_framework import serializers
from .models import (Recipe, CookStep,IngredientsFull,Ingredient)




class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = [
            'id',
            'recipe_id',
            'name',
            'description',
            'imgPath',
            'time'
        ]


class RecipeCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = [
            'recipe_id',
            'name',
            'description',
            'imgPath',
            'time'
        ]

# class CookStepSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CookStep
#         fields = [
#             'id',
#             'name',
#             'phone',
#             'img',
#             'city',
#             'graduateFrom'
#         ]
#
# class CookStepCreateUpdateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CookStep
#         fields = [
#             'name',
#             'phone',
#             'img',
#             'city',
#             'graduateFrom'
#         ]

# class IngredientsFullSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = IngredientsFull
#         fields = [
#             'id',
#             'name',
#             'phone',
#             'img',
#             'city',
#             'graduateFrom'
#         ]
#
# class IngredientsFullCreateUpdateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = IngredientsFull
#         fields = [
#             'name',
#             'phone',
#             'img',
#             'city',
#             'graduateFrom'
#         ]

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = [
            'id',
            'name',
            'amount',
            'recipe_id'
        ]

class IngredientCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = [
            'name',
            'amount',
            'recipe_id'
        ]

        # recipe_detail_url = HyperlinkedIdentityField(
        #         view_name='posts-api:ingredient-detail',
        #         lookup_field='slug'
        # )