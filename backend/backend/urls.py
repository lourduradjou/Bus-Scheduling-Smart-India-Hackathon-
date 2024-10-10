from django.contrib import admin
from django.urls import path, include
from API import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from API.views import CustomTokenObtainPairView 

urlpatterns = [
    path('admin/', admin.site.urls),

    path("api/user/register/", views.create_user, name="register"),
    # path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),

    path("api/", include("API.urls")),
]
