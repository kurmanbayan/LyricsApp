from django.db.models import Q
from rest_framework.filters import (
SearchFilter,
OrderingFilter,
)

from rest_framework.generics import (
CreateAPIView,
DestroyAPIView,
ListAPIView,
UpdateAPIView,
RetrieveAPIView,
RetrieveUpdateAPIView,

)

from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth import get_user_model
from rest_framework.views import APIView

from rest_framework.permissions import (
AllowAny,
IsAuthenticated,
IsAdminUser,
IsAuthenticatedOrReadOnly
)

User = get_user_model()

from .serializers import (UserCreateSerializer,UserLoginSerializer)


class UserCreateAPIView(CreateAPIView):
    serializer_class = UserCreateSerializer
    queryset = User.objects.all()

class UserLoginAPIVIew(APIView):
    permission_classes = [AllowAny]
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            new_data = serializer.data
            return Response(new_data, status=status.HTTP_200_OK)
        return Response(serializer.error_messages,status=status.HTTP_400_BAD_REQUEST)



