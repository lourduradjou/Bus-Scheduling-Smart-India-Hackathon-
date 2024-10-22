from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class UserRole(models.Model):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('crew', 'Crew Member'),
    ]
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return f"{self.user.username} - {self.get_role_display()}"


class demand_prediction_Data(models.Model):
    ride_id = models.CharField(max_length=50, unique=True)
    seat_no = models.IntegerField() 
    travel_date = models.DateField()
    travel_time = models.TimeField() 
    travel_from = models.CharField(max_length=100)
    travel_to = models.CharField(max_length=100)
    car_type = models.CharField(max_length=50)
    max_capacity = models.IntegerField() 
    travel_from_to = models.CharField(max_length=200) 

    def __str__(self):
        return self.ride_id




class ScheduleManagement(models.Model):
    bus_id = models.AutoField(primary_key=True)  # Automatically incrementing ID
    bus_no = models.CharField(max_length=50)      # Bus number
    driver_id = models.CharField(max_length=50)   # Driver ID
    driver_name = models.CharField(max_length=255) # Driver Name
    conductor_id = models.CharField(max_length=50) # Conductor ID
    conductor_name = models.CharField(max_length=255) # Conductor Name
    bus_status = models.CharField(max_length=20)   # Status of the bus (e.g., Active, Inactive)

    def __str__(self):
        return f"{self.bus_no} ({self.bus_id})"  # String representation of the object


class Trip(models.Model):
    route_id = models.CharField(max_length=255)
    trip_id = models.CharField(max_length=255)
    start_time = models.TimeField()  # Required field
    end_time = models.TimeField()    # Required field
    return_start_time = models.TimeField()  # Required field
    return_end_time = models.TimeField()    # Required field
    class Meta:
        unique_together = (('route_id', 'trip_id'),)

    def __str__(self):
        return f'Trip {self.trip_id} on Route {self.route_id}'

class Bus(models.Model):
    bus_id = models.AutoField(primary_key=True)  # Automatically incrementing ID
    bus_no = models.CharField(max_length=50)      # Bus number
    bus_type = models.CharField(max_length=100)   # Type of the bus (e.g., Mini, Standard, etc.)
    ac_non_ac = models.CharField(max_length=10)   # AC/Non-AC designation
    avg_mileage = models.DecimalField(max_digits=5, decimal_places=2)  # Average mileage
    last_maintenance_date = models.DateField()     # Last maintenance date
    next_maintenance_date = models.DateField()     # Next maintenance date
    bus_status = models.CharField(max_length=20)   # Status of the bus (e.g., Active, Inactive)

    def __str__(self):
        return f"{self.bus_no} ({self.bus_id})"  # String representation of the object
    


class CrewMember(models.Model):
    crew_id = models.AutoField(primary_key=True)  # Automatically incrementing ID
    name = models.CharField(max_length=255)        # Name field
    age = models.PositiveIntegerField()             # Age field
    phone = models.CharField(max_length=15)         # Phone field
    join_date = models.DateField()                  # Join date
    role = models.CharField(max_length=100)         # Role field
    years_of_experience = models.PositiveIntegerField()  # Years of experience
    assigned_bus_id = models.CharField(max_length=50)    # Assigned Bus ID
    assigned_route_id = models.CharField(max_length=50)   # Assigned Route ID
    shift_start_time = models.TimeField()               # Shift Start Time
    shift_end_time = models.TimeField()                 # Shift End Time

    def __str__(self):
        return f"{self.name} ({self.crew_id})"  # String representation of the object

