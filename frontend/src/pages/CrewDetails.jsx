import React, { useState, useEffect } from 'react'
import './EmployeeManagement.css' // Import the CSS file for styling
import { ClipLoader } from 'react-spinners' // Loading spinner
import api from '../api'

// TODO: Adding flashcards to represent various kind of alerts , like (success/failures/errors/delays/etc)

const CrewDetails = () => {
	const [crew, setCrew] = useState([]) // State to store employee list
	const [loading, setLoading] = useState(false) // Loading state
	// const [showModal, setShowModal] = useState(false) // State to control modal visibility
	// const [newEmployee, setNewEmployee] = useState({
	// 	bus_id: '',
	// 	shift_start: '',
	// 	shift_end: '',
	// 	crew_id: '',
	// }) // State for new employee input
	// const [editEmployeeId, setEditEmployeeId] = useState(null) // State for the employee being edited
	// const [scheduledEmployees, setScheduledEmployees] = useState([]) // Missing state to store scheduled employees

	// Fetch employees data from backend
	// ! work here daryl
	useEffect(() => {
		const fetchCrew = async () => {
			try {
				const response = await api.get('api/Crew/')
				// This is initial loading employees ...
				// firstly the alloted values will be null, after the use the schedule method, it will change as discussed
				// yeah that is fine!
				setCrew(response.data)
			} catch (error) {
				console.error('Error fetching employee data!', error)
			} finally {
				setLoading(false)
			}
		}

		fetchCrew()
	}, []) // Run once when the component mounts

	// // TODO: One work pending here to connect the backend rest api to send back the scheduled changes...
	// const efficientSchedule = () => {
	// 	axios
	// 		.post('/backend/api/efficientSchedule')
	// 		.then((res) => {
	// 			setScheduledEmployees(res.data)
	// 		})
	// 		.catch((err) => console.log(err))
	// }

	// // TODO: One work pending here to connect the backend rest api to send back the scheduled changes...
	// const balancedSchedule = () => {
	// 	axios
	// 		.post('/backend/api/balancedSchedule')
	// 		.then((res) => {
	// 			setScheduledEmployees(res.data)
	// 		})
	// 		.catch((err) => console.log(err))
	// }

	// Handle input change for employee form
	// const handleInputChange = (e) => {
	// 	setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
	// }

	// // Add a new employee via API
	// const handleAddEmployee = async () => {
	// 	try {
	// 		const response = await api.post('api/employee/add/', newEmployee)
	// 		setEmployees([...employees, { ...response.data, id: Date.now() }]) // Assuming backend returns the new employee data
	// 		// setNewEmployee({
	// 		// 	bus_id: '', // Clear input fields
	// 		// 	shift_start: '',
	// 		// 	shift_end: '',
	// 		// 	crew_id: '',
	// 		// })
	// 		setShowModal(false) // Hide modal after submission
	// 	} catch (error) {
	// 		console.error('There was an error adding the employee!', error)
	// 	}
	// }

	// // Delete employee from the list
	// const handleDeleteEmployee = async (id) => {
	// 	try {
	// 		await api.delete(api/employee/delete/${id}/)
	// 		setEmployees(employees.filter((employee) => employee.id !== id))
	// 	} catch (error) {
	// 		console.error('There was an error deleting the employee!', error)
	// 	}
	// }

	// const handleSaveEmployee = async () => {
	// 	if (editEmployeeId !== null) {
	// 		try {
	// 			const response = await api.put(
	// 				api/employee/edit/${editEmployeeId}/,
	// 				newEmployee
	// 			)
	// 			setEmployees(
	// 				employees.map((employee) =>
	// 					employee.id === editEmployeeId
	// 						? { ...response.data }
	// 						: employee
	// 				)
	// 			)
	// 			setEditEmployeeId(null) // Reset after saving
	// 		} catch (error) {
	// 			console.error(
	// 				'There was an error updating the employee!',
	// 				error
	// 			)
	// 		}
	// 	} else {
	// 		handleAddEmployee() // Add new employee if not editing
	// 	}
	// 	setShowModal(false) // Close modal
	// }

	// const handleEditEmployee = (employee) => {
	// 	console.log('Editing Employee:', employee.id) // Check if employee object has valid data
	// 	setNewEmployee(employee)
	// 	setEditEmployeeId(employee.id) // Check if employee.id is defined here
	// 	setShowModal(true)
	// }

	// // Open modal for adding a new employee
	// const handleAddNewEmployee = () => {
	// 	setNewEmployee({
	// 		bus_id: '', // Initialize input fields
	// 		shift_start: '',
	// 		shift_end: '',
	// 		crew_id: '',
	// 	})
	// 	setEditEmployeeId(null)
	// 	setShowModal(true)
	// }

	// // Handle the Enter key press for form submission
	// const handleKeyDown = (e) => {
	// 	if (e.key === 'Enter') {
	// 		handleSaveEmployee()
	// 	}
	// }

	// Conditional rendering for loading before employee details where fetched
	if (loading) {
		return (
			<div className='ml-[10%] mr-[6%] loader-container flex items-center justify-center w-full min-h-screen'>
				<ClipLoader size={50} color={'#123abc'} loading={loading} />
				<p className='ml-[10px]'>Loading employees...</p>
			</div>
		)
	}

	return (
		<div className='ml-[17%] mr-[2%] employee-management'>
			<div className='table-container'>
				{/* Add Employee Button */}
				<div className='flex justify-around items-center'>
					{/* Employee Table */}
					<h2 className='bg-slate-100 px-4 py-2 rounded-md font-semibold text-3xl '>
						Crew List
					</h2>
					{/* <div className='drop-shadow-2xl bg-slate-200 px-4 py-4 m-2 text-slate-200 rounded-md flex flex-col tracking-wide'>
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
					</div> */}
					{/* <button
						className='add-btn bg-blue-500 mb-4 mr-2 hover:bg-blue-600 active:scale-95 duration-200'
						onClick={handleAddNewEmployee}
					>
						Add Employee
					</button> */}
				</div>
				<table className='employee-table'>
					<thead>
						<tr>
							<th className='tracking-wider'>Crew Id</th>
							<th className='tracking-wider'>Name</th>
							<th className='tracking-wider'>Age</th>
							<th className='tracking-wider'>Phone No</th>
							<th className='tracking-wider'>Join Date</th>
							<th className='tracking-wider'>Role</th>
							<th className='tracking-wider'>Years of Exp</th>
							<th className='tracking-wider'>Shift Start Time</th>
							<th className='tracking-wider'>Shift End Time</th>
						</tr>
					</thead>
					<tbody>
						{crew.map((crew) => (
							<tr key={crew.crew_id}>
								<td>{crew.crew_id}</td>
								<td>{crew.name}</td>
								<td>{crew.age}</td>
								<td>{crew.phone}</td>
								<td>{crew.join_date}</td>
								<td>{crew.role}</td>
								<td>{crew.years_of_experience}</td>
								<td>
									{crew.shift_start_time
										? crew.shift_start_time
										: 'NA'}
								</td>
								<td>
									{crew.shift_end_time
										? crew.shift_end_time
										: 'NA'}
								</td>
							</tr>
							/* <td className='space-x-6 mx-auto'>
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
											handleDeleteEmployee(employee.id)
										}
									>
										Delete
									</button>
								</td> */
						))}
					</tbody>
				</table>
			</div>

			{/* Modal for Add/Edit Employee */}
			{/* {showModal && (
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
							name='bus_id'
							placeholder='Bus ID'
							value={newEmployee.bus_id}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown} // Handle Enter key
						/>
						<input
							className='input-field'
							type='text'
							name='shift_start'
							placeholder='Shift Start'
							value={newEmployee.shift_start}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
						/>
						<input
							className='input-field'
							type='text'
							name='shift_end'
							placeholder='Shift End'
							value={newEmployee.shift_end}
							onChange={handleInputChange}
							onKeyDown={handleKeyDown}
						/>
						<input
							className='input-field'
							type='text'
							name='crew_id'
							placeholder='Crew ID'
							value={newEmployee.crew_id}
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
			)} */}
		</div>
	)
}

export default CrewDetails
