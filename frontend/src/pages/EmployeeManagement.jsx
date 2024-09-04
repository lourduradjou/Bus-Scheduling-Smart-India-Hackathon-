// EmployeeManagement.js
import React, { useState } from 'react';
import './EmployeeManagement.css'; // Import the CSS file for styling

// Main Employee Management Component
const EmployeeManagement = () => {
  const [showTable, setShowTable] = useState(false); // State to toggle table visibility
  const [employees, setEmployees] = useState([]); // State to store employee list
  const [newEmployee, setNewEmployee] = useState({ name: '', position: '', email: '' }); // State for new employee input
  const [viewEmployee, setViewEmployee] = useState(null); // State to view employee details

  // Toggle the visibility of the employee table
  const handleToggleTable = () => {
    setShowTable(!showTable);
  };

  // Handle input change for new employee form
  const handleInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  // Add new employee to the list
  const handleAddEmployee = () => {
    setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
    setNewEmployee({ name: '', position: '', email: '' }); // Clear input fields
  };

  // Delete employee from the list
  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  // View employee details
  const handleViewEmployee = (employee) => {
    setViewEmployee(employee);
  };

  return (
    <div className="employee-management">
      <button className="toggle-btn" onClick={handleToggleTable}>
        {showTable ? 'Hide Employees' : 'Show Employees'}
      </button>

      {showTable && (
        <div className="table-container">
          {/* Employee Table */}
          <h2>Employee List</h2>
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => handleViewEmployee(employee)}
                    >
                      View
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Employee Section */}
          <div className="add-employee">
            <h3>Add Employee</h3>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newEmployee.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={newEmployee.position}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={handleInputChange}
            />
            <button className="add-btn" onClick={handleAddEmployee}>
              Add Employee
            </button>
          </div>

          {/* View Employee Details */}
          {viewEmployee && (
            <div className="view-employee">
              <h3>Employee Details</h3>
              <p>
                <strong>Name:</strong> {viewEmployee.name}
              </p>
              <p>
                <strong>Position:</strong> {viewEmployee.position}
              </p>
              <p>
                <strong>Email:</strong> {viewEmployee.email}
              </p>
              <button className="close-btn" onClick={() => setViewEmployee(null)}>
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;



