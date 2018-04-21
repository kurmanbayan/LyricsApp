from django.contrib.auth import get_user_model
from django.db.models import Q

from rest_framework import serializers
from rest_framework.serializers import (
ModelSerializer,
ValidationError
)

User = get_user_model()

class UserCreateSerializer(ModelSerializer):
    password2 = serializers.CharField(label="Confirm Password")
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password',
            'password2'
        ]
        extra_kwargs = {"passwords":{"write_only" : True}}

    def validate_passwords(self, value):
        data = self.get_initial()
        password1 = data.get("password")
        password2 = value

        if password1 != password2:
            raise ValidationError("Passwords must match")
        return value

    def create(self,validate_data):
        username = validate_data['username']
        email = validate_data['email']
        password = validate_data['password']
        user_obj = User(
            username = username,
            email = email
        )
        user_obj.set_password(password)
        user_obj.save()
        return validate_data


class UserLoginSerializer(ModelSerializer):
    token = serializers.CharField(allow_blank=True,read_only=True)
    # username = serializers.CharField()
    class Meta:
        model = User
        fields = [
            'email',
            'password',
            'token'
        ]
        extra_kwargs = {"passwords":{"write_only" : True}}

    def validate(self, value):
        user_obj = None
        email = value.get("email")
        username = value.get("username")
        password = value['password']
        if not email and not username:
            raise ValidationError("A username or email is required to login")

        user  = User.objects.filter(
            Q(email=email) |
            Q(username=username)
        ).distinct()     #allow duplutcate

        if user.exists() and user.count() == 1:
            user_obj = user.first()
        else:
            raise ValidationError("This username or email is not valid")

        if user_obj:
            if not user_obj.check_password(password):
                raise ValidationError("Incorrect password or username")

        value["token"] = "tokenhere"

        return value

