from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .serializers import UserSerializer,BusSerializer,CustomTokenObtainPairSerializer,CrewSerializer
from .models import Bus,CrewMember,Trip
from rest_framework_simplejwt.views import TokenObtainPairView
from .dpScheduler import Scheduling 
from django.http import JsonResponse
from django.views.decorators.http import require_GET

# Create your views here.
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

@api_view(['GET'])
def crew_details(request, phone):
        crew_member = CrewMember.objects.get(phone=phone)
        serializer = CrewSerializer(crew_member)
        # print(phone)
        # print(serializer.data)
        return Response(serializer.data)

# @api_view(['GET'])
# def crew_list(request):
#     crew = CrewMember.objects.all()
#     serializer = CrewSerializer(crew,many=True)
#     return Response(serializer.data)
  

@api_view(['POST'])
@permission_classes([AllowAny])
def create_user(request):
    
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_info(request):
    user = request.user
    data = {
        'username': user.username
    }
    return Response(data)


# @api_view(['GET'])
# def employee_list(request):
#     employees = Employee.objects.all()
#     serializer = EmployeeSerializer(employees, many=True)
#     return Response(serializer.data)


# @api_view(['POST'])
# def employee_add(request):
#     if request.method == 'POST':
#         serializer = EmployeeSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['PUT'])
# def employee_edit(request,pk):
#     try:
#         employee = Employee.objects.get(pk =pk)
#     except Employee.DoesNotExist:
#         return Response({"error": "Employee not found"}, status=status.HTTP_404_NOT_FOUND)
    
#     serializer = EmployeeSerializer(employee, data=request.data)
    
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['DELETE'])
# def employee_delete(request, pk):
#     try:
#         employee = Employee.objects.get(pk=pk)
#     except Employee.DoesNotExist:
#         return Response({'error': 'Employee not found'}, status=status.HTTP_404_NOT_FOUND)

#     employee.delete()
#     return Response({'message': 'Employee deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def bus_list(request):
    bus = Bus.objects.all()
    serializer = BusSerializer(bus, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def crew_list(request):
    crew = CrewMember.objects.all()
    serializer = CrewSerializer(crew,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def run_scheduling(request):
    # Load or retrieve your crews, trips, and buses data
    crews = list(CrewMember.objects.all().values())  # Convert to list of dicts
    trips = list(Trip.objects.all().values())  # Retrieve relevant fields
    buses = list(Bus.objects.all().values())  # Convert to list of dicts

    # Run your scheduling algorithm
    full_allocated, half_allocated, no_allocated, notAssigned, notAssignedTrips, unassignedCrews = Scheduling(crews, trips, buses)

    # Prepare the response data
    response_data = {
        'full_allocated': full_allocated,
        'half_allocated': half_allocated,
        'no_allocated': no_allocated,
        'notAssigned': notAssigned,
        'notAssignedTrips': notAssignedTrips,
        'unassignedCrews': unassignedCrews,
    }

    
    print(response_data)
    return Response(response_data['full_allocated'])
