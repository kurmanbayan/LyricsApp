from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('<int:search_id>/', views.get_last_popular),
    path('rating/<int:recipe_id>/', views.update_rating),
    path('category/', views.get_categories),
    path('category/<int:category_id>/', views.get_recipes_by_category)
]
