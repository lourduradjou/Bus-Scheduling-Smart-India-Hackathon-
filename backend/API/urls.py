from django.urls import path
from .views import bus_list,crew_list

urlpatterns = [
    # path('employees/', employee_list, name='employee-list'),
    # path('employee/add/', employee_add, name='employee-add'),
    # path('employee/edit/<int:pk>/', employee_edit, name='employee-edit'),
    # path('employee/delete/<int:pk>/', employee_delete, name='employee_delete'),
    path('bus/', bus_list, name='employee-list'),
    path('Crew/', crew_list, name='employee-list'),

]
