from django.db import models
# Create your models here.

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