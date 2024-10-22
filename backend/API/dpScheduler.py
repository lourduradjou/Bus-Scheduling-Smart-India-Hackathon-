import json
import time
from datetime import datetime, time

class Crew:
    def __init__(self, crew_data):
        self.id = crew_data['crew_id']
        # self.start = crew_data['shift_start_time'] if crew_data['shift_start_time'] is not None else 0  # Default to 0 if null
        self.start = 0
        self.end = 0
        # self.end = crew_data['shift_end_time'] if crew_data['shift_end_time'] is not None else 24  # Default to 24 if null
        # self.maxWork = crew_data['maxWork']  # Max hours crew can work
        self.maxWork = 8
        self.role = crew_data['role']  # Conductor or Driver
        self.assigned = False  # Initially, no assignment

    def can_work(self, trip_start, trip_end, shift_duration):
    # Convert integers to datetime.time if necessary
        if isinstance(self.start, int):
            self.start = time(self.start, 0)  # Convert to time object (hour, minute)
        if isinstance(self.end, int):
            self.end = time(self.end, 0)      # Convert to time object (hour, minute)

        # Convert trip times to datetime.time if they are integers
        if isinstance(trip_start, int):
            trip_start = time(trip_start, 0)
        if isinstance(trip_end, int):
            trip_end = time(trip_end, 0)

        # Convert to datetime for comparison
        today = datetime.today()
        start_dt = datetime.combine(today, self.start)
        end_dt = datetime.combine(today, self.end)
        trip_start_dt = datetime.combine(today, trip_start)
        trip_end_dt = datetime.combine(today, trip_end)

        # Handle case where shift spans across midnight
        if self.start > self.end:  # Shift spanning midnight
            return ((start_dt <= trip_start_dt or trip_start_dt < end_dt) and
                    (start_dt <= trip_end_dt or trip_end_dt < end_dt) and
                    self.maxWork >= shift_duration)
        else:
            # Normal shift logic with datetime comparisons
            return (start_dt <= trip_start_dt and 
                    trip_end_dt <= end_dt and 
                    self.maxWork >= shift_duration)

    def assign(self, trip_end, shift_duration):
        """Assign the crew to a shift and update their available work hours."""
        self.assigned = True
        self.start = trip_end  # Update the crew's start time after assignment
        self.maxWork -= shift_duration  # Decrease remaining hours


def dynamic_programming_scheduling(crews, trips, buses):
    global notAssigned, notAssignedTrips, unassignedCrews, countTrips
    notAssigned = 0
    notAssignedTrips = []
    unassignedCrews = []

    countTrips = len(trips)  # Number of total trips
    trips.sort(key=lambda x: x['start_time'])  # Sort trips by start time

    full_allocated = []
    half_allocated = []
    no_allocated = []

    crew_objects = [Crew(crew) for crew in crews]  # Initialize crew objects

    # Process each trip
    for trip in trips:
        start_time = datetime.combine(datetime.today(), trip['start_time'])
        end_time = datetime.combine(datetime.today(), trip['end_time'])
        trip_duration =   end_time - start_time 
        assigned_conductor = None
        assigned_driver = None

        # Check each bus and crew
        for bus in buses:
            bus_id = bus['bus_id']  # Get bus ID
            # Check each crew for this bus
            for crew in crew_objects:
                # Check if crew can work based on time
                if crew.can_work(trip['start_time'], trip['end_time'], trip_duration):
                    # Assign based on role
                    if crew.role == 'conductor' and assigned_conductor is None:
                        assigned_conductor = crew.id
                        crew.assign(trip['end_time'], trip_duration)  # Assign crew to this trip
                    elif crew.role == 'driver' and assigned_driver is None:
                        assigned_driver = crew.id
                        crew.assign(trip['end_time'], trip_duration)  # Assign crew to this trip

                # Break if both roles have been assigned
                if assigned_conductor and assigned_driver:
                    break

        # Create assignment record
        if assigned_conductor and assigned_driver:
            full_allocated.append({
                'bus_id': bus_id,
                'conductor_id': assigned_conductor,
                'driver_id': assigned_driver,
                'route_id': trip['route_id'],
                'trip_id': trip['trip_id']
            })
        elif assigned_conductor or assigned_driver:
            half_allocated.append({
                'bus_id': bus_id,
                'conductor_id': assigned_conductor,
                'driver_id': assigned_driver,
                'route_id': trip['route_id'],
                'trip_id': trip['trip_id']
            })
        else:
            notAssigned += 1
            notAssignedTrips.append(f"Route {trip['route_id']}, Trip {trip['trip_id']}")
            no_allocated.append({
                'route_id': trip['route_id'],
                'trip_id': trip['trip_id']
            })

    # Collect unassigned crews
    for crew in crew_objects:
        if not crew.assigned:
            unassignedCrews.append(crew.id)

    return full_allocated, half_allocated, no_allocated, notAssigned, notAssignedTrips, unassignedCrews
 

# def load_test_case(filename):
#     with open(filename, 'r') as file:
#         data = json.load(file)
#     return data['crews'], data['trips'], data['buses']  # Load buses as well


# # Load the test case from the JSON file
# crews, trips, buses = load_test_case('./test_cases.json')

# # Measure the running time
# start_time = time.time()

# full_allocated, half_allocated, no_allocated, notAssigned, notAssignedTrips, unassignedCrews = dynamic_programming_scheduling(crews, trips, buses)

# # Print results
# end_time = time.time()

# print("Execution Time:", end_time - start_time, "seconds")

# # Print detailed allocations
# print("\nFull Allocated:")
# for assignment in full_allocated:
#     print(assignment)

# print(f"\nTotal Full Allocated: {len(full_allocated)}")
# full_allocated_percentage = (len(full_allocated) / len(trips)) * 100 if trips else 0
# print(f"Percentage of Full Allocated: {full_allocated_percentage:.2f}%")

# print("\nHalf Allocated:")
# for assignment in half_allocated:
#     print(assignment)

# print(f"\nTotal Half Allocated: {len(half_allocated)}")
# half_allocated_percentage = (len(half_allocated) / len(trips)) * 100 if trips else 0
# print(f"Percentage of Half Allocated: {half_allocated_percentage:.2f}%")

# print("\nNot Allocated:")
# for trip in no_allocated:
#     print(trip)

# print(f"\nTotal Not Allocated: {len(no_allocated)}")
# not_allocated_percentage = (len(no_allocated) / len(trips)) * 100 if trips else 0
# print(f"Percentage of Not Allocated: {not_allocated_percentage:.2f}%")

# print(f"\nTotal number of crews: {len(crews)}")
# print(f"Total number of unassigned crews: {len(unassignedCrews)}")
# print(f"Unassigned crews: {unassignedCrews}")

# assigned_crews = len(crews) - len(unassignedCrews)
# print(f"Total number of assigned crews: {assigned_crews}")
# print(f"Percentage of crews assigned: {assigned_crews / len(crews) * 100:.2f}%")
