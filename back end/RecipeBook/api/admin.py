from django.contrib import admin
from .models import Recipe, CookStep, IngredientsFull, Ingredient, Category

# Register your models here.
admin.site.register(Recipe)
admin.site.register(CookStep)
admin.site.register(IngredientsFull)
admin.site.register(Ingredient)
admin.site.register(Category)
