from rest_framework import serializers

from api.models import Recipe, Ingredient

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = "__all__"
