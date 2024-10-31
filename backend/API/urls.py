from django.urls import path
from .views import bus_list, crew_list, run_scheduling, crew_details

urlpatterns = [
    path('bus/', bus_list, name='employee-list'),
    path('Crew/', crew_list, name='employee-list'),
    path('runScheduling/', run_scheduling, name='run_scheduling'),
    path('crew/<str:phone>/', crew_details, name='crew-details'),  # New endpoint
]
