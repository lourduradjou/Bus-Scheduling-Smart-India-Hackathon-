from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Bus,CrewMember
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import UserRole 

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        try:
            user_role = UserRole.objects.get(user=user)
            token['role'] = user_role.role
            
        except UserRole.DoesNotExist:
            token['role'] = 'undefined'  # Default value or error handling

        return token
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email","password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user



class BusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bus
        fields = '__all__'

class CrewSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrewMember
        fields = ["crew_id","name","age","phone","join_date","role","years_of_experience","assigned_bus_id","assigned_route_id","shift_start_time","shift_end_time"]