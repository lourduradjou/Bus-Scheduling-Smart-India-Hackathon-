import React, { useState } from 'react'
import './EmployeeManagement.css' // Import the CSS file for styling
import axios from 'axios' // Import axios for API requests

// Main Employee Management Component
const EmployeeManagement = () => {
    // Initial employees data
    const [employees, setEmployees] = useState([
        {
            id: 1,
            driverId: 'D1234', // Example driverId
            userName: 'John Doe',
            phoneNumber: '123-456-7890',
            shift: 'Morning',
            shiftStart: '08:00 AM',
            shiftEnd: '02:00 PM',
        },
        {
            id: 2,
            driverId: 'D5678', // Example driverId
            userName: 'Jane Smith',
            phoneNumber: '987-654-3210',
            shift: 'Afternoon',
            shiftStart: '02:00 PM',
            shiftEnd: '08:00 PM',
        },
        // Add more employees as needed
    ]) // State to store employee list

    const [newEmployee, setNewEmployee] = useState({
        driverId: '', // New attribute
        userName: '',
        phoneNumber: '',
        shift: '',
        shiftStart: '',
        shiftEnd: '',
    }) // State for new employee input
    const [editEmployeeId, setEditEmployeeId] = useState(null) // State for the employee being edited
    const [showModal, setShowModal] = useState(false) // State to control modal visibility

    // Handle input change for employee form
    const handleInputChange = (e) => {
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
    }

    // Add a new employee via API
    const handleAddEmployee = async () => {
        try {
            const response = await axios.post(
                '/backend/api/employee/add',
                newEmployee
            )
            setEmployees([...employees, { ...response.data, id: Date.now() }]) // Assuming backend returns the new employee data
            setNewEmployee({
                driverId: '', // Clear driverId field
                userName: '',
                phoneNumber: '',
                shift: '',
                shiftStart: '',
                shiftEnd: '',
            }) // Clear input fields
            setShowModal(false) // Hide modal after submission
        } catch (error) {
            console.error('There was an error adding the employee!', error)
        }
    }

    // Edit employee details
    const handleEditEmployee = (employee) => {
        setNewEmployee(employee)
        setEditEmployeeId(employee.id)
        setShowModal(true)
    }

    // Delete employee from the list
    const handleDeleteEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id))
    }

    // Save or update employee details
    const handleSaveEmployee = () => {
        if (editEmployeeId !== null) {
            setEmployees(
                employees.map((employee) =>
                    employee.id === editEmployeeId
                        ? { ...newEmployee, id: editEmployeeId }
                        : employee
                )
            )
            setEditEmployeeId(null)
        } else {
            handleAddEmployee()
        }
        setShowModal(false) // Hide modal after update
    }

    // Open modal for adding a new employee
    const handleAddNewEmployee = () => {
        setNewEmployee({
            driverId: '', // Initialize driverId field
            userName: '',
            phoneNumber: '',
            shift: '',
            shiftStart: '',
            shiftEnd: '',
        })
        setEditEmployeeId(null)
        setShowModal(true)
    }

    // Handle the Enter key press for form submission
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSaveEmployee()
        }
    }

    return (
        <div className='ml-[17%] employee-management'>
            <div className='table-container'>
                {/* Add Employee Button */}
                <div className='flex justify-between items-center'>
                    {/* Employee Table */}
                    <h2 className='bg-slate-200 px-4 py-2 rounded-md font-semibold text-3xl '>
                        Employee's List
                    </h2>
                    <button
                        className='add-btn mb-4 mr-14'
                        onClick={handleAddNewEmployee}
                    >
                        Add Employee
                    </button>
                </div>
                <table className='employee-table'>
                    <thead>
                        <tr>
                            <th>Bus ID</th> {/* Updated header */}
                            <th>Shift</th> {/* Updated header */}
                            <th>Shift Start</th> {/* Updated header */}
                            <th>Shift End</th> {/* Updated header */}
                            <th>Driver ID</th> {/* Updated header */}
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td> {/* Assuming bus ID is the same as employee ID */}
                                <td>{employee.shift}</td>
                                <td>{employee.shiftStart}</td>
                                <td>{employee.shiftEnd}</td>
                                <td>{employee.driverId}</td>
                                <td>
                                    <button
                                        className='view-btn transition-transform duration-300 active:scale-95 tracking-wider'
                                        onClick={() =>
                                            handleEditEmployee(employee)
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className='delete-btn transition-transform tracking-wider active:scale-95 duration-300'
                                        onClick={() =>
                                            handleDeleteEmployee(employee.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Add/Edit Employee */}
            {showModal && (
                <div className='r'>
                    <div className='modal'>
                        <div className='modal-content'>
                            <span
                                className='close'
                                onClick={() => setShowModal(false)}
                            >
                                &times;
                            </span>
                            <h3>
                                {editEmployeeId !== null
                                    ? 'Edit Employee'
                                    : 'Add Employee'}
                            </h3>
                            <input
                                className='input-field'
                                type='text'
                                name='driverId'
                                placeholder='Driver ID' // New input
                                value={newEmployee.driverId}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown} // Handle Enter key
                            />
                            <input
                                className='input-field'
                                type='text'
                                name='shift'
                                placeholder='Shift'
                                value={newEmployee.shift}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown} // Handle Enter key
                            />
                            <input
                                className='input-field'
                                type='text'
                                name='shiftStart'
                                placeholder='Shift Start'
                                value={newEmployee.shiftStart}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown} // Handle Enter key
                            />
                            <input
                                className='input-field'
                                type='text'
                                name='shiftEnd'
                                placeholder='Shift End'
                                value={newEmployee.shiftEnd}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown} // Handle Enter key
                            />
                            <button
                                className='save-btn'
                                onClick={handleSaveEmployee}
                            >
                                {editEmployeeId !== null
                                    ? 'Update Employee'
                                    : 'Save Employee'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EmployeeManagement
