from django.contrib import admin
from .models import demand_prediction_Data,ScheduleManagement,Bus,CrewMember,UserRole,Trip
# Register your models here.

 
admin.site.register(demand_prediction_Data)

admin.site.register(ScheduleManagement)

class BusAdmin(admin.ModelAdmin):
    list_display = ('bus_id', 'bus_no', 'bus_type', 'ac_non_ac', 'avg_mileage', 'last_maintenance_date', 'next_maintenance_date', 'bus_status')
admin.site.register(Bus, BusAdmin)

class CrewMemberAdmin(admin.ModelAdmin):
    list_display = (
        'crew_id',
        'name',
        'age',
        'phone',
        'join_date',
        'role',
        'years_of_experience',
        'assigned_bus_id',
        'assigned_route_id',
        'shift_start_time',
        'shift_end_time'
    )

admin.site.register(CrewMember, CrewMemberAdmin)

class UserRoleAdmin(admin.ModelAdmin):
    list_display = ('user', 'role')  # Display user and role in the list view

admin.site.register(UserRole, UserRoleAdmin)
admin.site.register(Trip) 
