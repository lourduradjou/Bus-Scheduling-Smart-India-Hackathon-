from django.urls import path
from .views import employee_list, employee_add,employee_edit,employee_delete

urlpatterns = [
    path('employees/', employee_list, name='employee-list'),
    path('employee/add/', employee_add, name='employee-add'),
    path('employee/edit/<int:pk>/', employee_edit, name='employee-edit'),
    path('employee/delete/<int:pk>/', employee_delete, name='employee_delete'),
]
