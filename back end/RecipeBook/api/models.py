from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=400, blank=True)
    imgPath = models.CharField(max_length=1000, blank=True)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    category_key = models.ForeignKey(Category, on_delete=models.CASCADE, default=1, related_name="category_key")
    name = models.CharField(max_length=400, blank=True)
    portion = models.IntegerField(default=0)
    difficulty = models.CharField(max_length=400, blank=True)
    description = models.CharField(max_length=1000, blank=True)
    imgPath = models.CharField(max_length=1000, blank=True)
    time = models.CharField(max_length=1000, blank=True)
    rating = models.DecimalField(max_digits=5, decimal_places=1)
    voted = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.name


class CookStep(models.Model):
    howto_step = models.CharField(max_length=1000, blank=True)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, default=1, related_name="cook_steps")

    def __str__(self):
        return self.howto_step

class IngredientsFull(models.Model):
    ingredient = models.CharField(max_length=1000, blank=True)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.ingredient

class Ingredient(models.Model):
    name = models.CharField(max_length=1000, blank=True)
    amount = models.IntegerField(default=0)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return self.name
