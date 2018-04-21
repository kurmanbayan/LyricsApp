from django.urls import path
from django.contrib import admin


from .views import (
UserCreateAPIView,
UserLoginAPIVIew
)

urlpatterns = [
    path('login/', UserLoginAPIVIew.as_view(), name="login"),
    path('register/', UserCreateAPIView.as_view(), name="register"),

    # path('logout/', logout_view, name="logout")

]