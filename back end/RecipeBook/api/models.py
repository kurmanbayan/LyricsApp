from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Recipe(models.Model):
    recipe_id = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=400, blank=True)
    description = models.CharField(max_length=1000, blank=True)
    imgPath = models.CharField(max_length=1000, blank=True)
    time = models.CharField(max_length=1000, blank=True)

    def __str__(self):
        return self.name

class CookStep(models.Model):
    howto_step = models.CharField(max_length=1000, blank=True)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.howto_step

class IngredientsFull(models.Model):
    ingredient = models.CharField(max_length=1000, blank=True)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.ingredient

class Ingredient(models.Model):
    name = models.CharField(max_length=1000, blank=True)
    amount = models.IntegerField()
    recipe = models.ManyToManyField(Recipe, related_name = 'recipe')

    # recipe = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    # recipeID = models.PositiveIntegerField()
    # recipe_object = GenericForeignKey('recipe', 'recipeID')

    # recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)


    def __str__(self):
        return self.name
