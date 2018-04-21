from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('recipe/', views.RecipeAPIView.as_view(), name="recipe-list"),
    path('recipe/create', views.RecipeCreateAPIView.as_view() , name="recipe-create"),
    path('recipe/<pk>', views.RecipeDetailAPIView.as_view(), name="recipe-detail"),
    path('recipe/<pk>/edit/', views.RecipeUpdateAPIView.as_view(), name="recipe-update"),
    path("recipe/<pk>/delete/", views.RecipeDeleteAPIView.as_view(), name="recipe-delete"),
    path('recipe/ingredient/', views.IngredientAPIView, name="ingredient-list"),
    path('recipe/ingredient/create/', views.IngredientCreateAPIView.as_view() , name="ingredient-create"),
    path('recipe/ingredient/<id>/', views.IngredientDetailAPIView.as_view(), name="ingredient-detail"),
    path('recipe/ingredient/<id>/edit/', views.IngredientUpdateAPIView.as_view(), name="ingredient-update"),
    path("recipe/ingredient/<id>/delete/", views.IngredientDeleteAPIView.as_view(), name="ingredient-delete")
]

