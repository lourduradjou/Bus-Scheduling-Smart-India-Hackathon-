import React, { useState, useEffect } from 'react'
import './EmployeeManagement.css' // Import the CSS file for styling
import axios from 'axios' // Import axios for API requests
import { ClipLoader } from 'react-spinners' // Loading spinner

// TODO: Daryl work : starts at line 23

const EmployeeManagement = () => {
	const [employees, setEmployees] = useState([]) // State to store employee list
	const [loading, setLoading] = useState(true) // Loading state
	const [showModal, setShowModal] = useState(false) // State to control modal visibility
	const [newEmployee, setNewEmployee] = useState({
		busId: '',
		shiftStart: '',
		shiftEnd: '',
		crewId: '',
	}) // State for new employee input
	const [editEmployeeId, setEditEmployeeId] = useState(null) // State for the employee being edited
	const [scheduledEmployees, setScheduledEmployees] = useState([]) // Missing state to store scheduled employees

	// Fetch employees data from backend
	// ! work here daryl
	useEffect(() => {
		const fetchEmployees = async () => {
			try {
				const response = await axios.get(
					'https://api.example.com/employees'
				) // ! change according to your need here
				// This is initial loading employees ...
				// firstly the alloted values will be null, after the use the schedule method, it will change as discussed
				setEmployees(response.data)
			} catch (error) {
				console.error('Error fetching employee data!', error)
			} finally {
				setLoading(false)
			}
		}

		fetchEmployees()
	}, []) // Run once when the component mounts

	// TODO: One work pending here to connect the backend rest api to send back the scheduled changes...
	const efficientSchedule = () => {
		axios
			.post('/backend/api/efficientSchedule')
			.then((res) => {
				setScheduledEmployees(res.data)
			})
			.catch((err) => console.log(err))
	}

	// TODO: One work pending here to connect the backend rest api to send back the scheduled changes...
	const balancedSchedule = () => {
		axios
			.post('/backend/api/balancedSchedule')
			.then((res) => {
				setScheduledEmployees(res.data)
			})
			.catch((err) => console.log(err))
	}

	// Handle input change for employee form
	const handleInputChange = (e) => {
		setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
	}

	// Add a new employee via API
	const handleAddEmployee = async () => {
		try {
			const response = await axios.post(
				'https://api.example.com/employee/add',
				newEmployee
			)
			setEmployees([...employees, { ...response.data, id: Date.now() }]) // Assuming backend returns the new employee data
			setNewEmployee({
				busId: '', // Clear input fields
				shiftStart: '',
				shiftEnd: '',
				crewId: '',
			})
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
			busId: '', // Initialize input fields
			shiftStart: '',
			shiftEnd: '',
			crewId: '',
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

	// Conditional rendering for loading and employee table
	if (loading) {
		return (
			<div className='ml-[10%] mr-[6%] loader-container flex items-center justify-center w-full min-h-screen'>
				<ClipLoader size={50} color={'#123abc'} loading={loading} />
				<p className='ml-[10px]'>Loading employees...</p>
			</div>
		)
	}

	return (
		<div className='ml-[17%] mr-[6%] employee-management'>
			<div className='table-container'>
				{/* Add Employee Button */}
				<div className='flex justify-between items-center'>
					{/* Employee Table */}
					<h2 className='bg-slate-100 px-4 py-2 rounded-md font-semibold text-3xl '>
						Scheduled List
					</h2>
					<div className='drop-shadow-2xl bg-slate-200 px-4 py-4 m-2 text-slate-200 rounded-md flex flex-col tracking-wide'>
						<div className='font-semibold text-xl text-black'>
							Auto Schedule
						</div>
						<div className='flex justify-evenly w-full gap-3 items-center'>
							<button
								className='add-btn hover:bg-[#218838] duration-200 active:scale-95 tracking-wider'
								onClick={efficientSchedule}
							>
								Efficient
							</button>
							<button
								className='add-btn bg-orange-400 hover:bg-orange-500 duration-200 active:scale-95 tracking-wider'
								onClick={balancedSchedule}
							>
								Balanced
							</button>
						</div>
					</div>
					<button
						className='add-btn bg-blue-500 mb-4 mr-2 hover:bg-blue-600 active:scale-95 duration-200'
						onClick={handleAddNewEmployee}
					>
						Add Employee
					</button>
				</div>
				<table className='employee-table'>
					<thead>
						<tr>
							<th>Bus ID</th>
							<th>Shift Start</th>
							<th>Shift End</th>
							<th>Crew ID</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((employee) => (
							<tr key={employee.shift_id}>
								<td>{employee.bus_id}</td>
								<td>{employee.shift_start}</td>
								<td>{employee.shift_end}</td>
								<td>{employee.crew_id}</td>
								<td className='space-x-6 mx-auto'>
									<button
										className='view-btn transition-transform duration-300 active:scale-95 tracking-wider px-5 py-2'
										onClick={() =>
											handleEditEmployee(employee)
										}
									>
										Edit
									</button>
									<button
										className='delete-btn transition-transform tracking-wider active:scale-95 duration-300 px-5 py-2'
										onClick={() =>
											handleDeleteEmployee(
												employee.shift_id
											)
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
							name='busId'
							placeholder='Bus ID'
							value={newEmployee.busId}
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
							onKeyDown={handleKeyDown}
						/>
						<input
							className='input-field'
							type='text'
							name='shiftEnd'
							placeholder='Shift End'
							value={newEmployee.shiftEnd}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
						/>
						<input
							className='input-field'
							type='text'
							name='crewId'
							placeholder='Crew ID'
							value={newEmployee.crewId}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
						/>
						<button
							className='save-btn'
							onClick={handleSaveEmployee}
						>
							{editEmployeeId !== null ? 'Update' : 'Add'}
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default EmployeeManagement
