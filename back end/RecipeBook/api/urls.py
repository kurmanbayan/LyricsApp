from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('<int:search_id>', views.get_last_popular)
]
