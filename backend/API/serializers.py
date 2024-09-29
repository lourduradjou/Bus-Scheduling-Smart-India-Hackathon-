from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Employee


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email","password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user



class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = [ 'id','bus_id', 'shift_start', 'shift_end', 'crew_id']