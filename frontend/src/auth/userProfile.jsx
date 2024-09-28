import React, { useState } from 'react'

const UserProfile = () => {
	const [shift1, setShift1] = useState('')
	const [shift2, setShift2] = useState('')

	const shifts = ['06:00 - 14:00', '14:00 - 22:00', '22:00 - 06:00']

	const handleShift1Change = (e) => {
		setShift1(e.target.value)
		if (shift2 === e.target.value) {
			setShift2('')
		}
	}

	const handleShift2Change = (e) => {
		setShift2(e.target.value)
		if (shift1 === e.target.value) {
			setShift1('')
		}
	}

	return (
		<div className='flex flex-col items-center min-h-screen bg-gray-100'>
			<h1 className='text-3xl font-bold text-center text-gray-800 mt-6'>
				DTC Delhi Crew Details
			</h1>
			<div className='w-full max-w-md p-6 bg-white shadow-lg rounded-lg  mb-24 mt-6'>
				<h1 className='text-3xl font-bold text-center text-white mb-6 bg-indigo-600 rounded-md'>
					Profile
				</h1>
				{/* <div className="flex flex-col items-center mb-6">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src="logo.png"
            alt="profile"
          />
        </div> */}

				{/* Input Fields */}
				<div className='space-y-4'>
					<div>
						<label className='block text-md ml-4 font-medium text-gray-700'>
							Id
						</label>
						<input
							type='text'
							placeholder='Id'
							className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						/>
					</div>
					<div>
						<label className='block text-md ml-4   font-medium text-gray-700'>
							Name
						</label>
						<input
							type='text'
							placeholder='Name'
							className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						/>
					</div>
					<div>
						<label className='block text-md ml-4   font-medium text-gray-700'>
							Phone Number
						</label>
						<input
							type='text'
							placeholder='Phone Num'
							className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						/>
					</div>
					<div>
						<label className='block text-md ml-4   font-medium text-gray-700'>
							Age
						</label>
						<input
							type='number'
							placeholder='Age'
							className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						/>
					</div>
					<div>
						<label className='block text-md ml-4   font-medium text-gray-700'>
							Role
						</label>
						<input
							type='text'
							placeholder='Role'
							className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						/>
					</div>
				</div>

				{/* Shift Selection */}
				<div className='grid grid-cols-2 gap-4 mt-6'>
					<div>
						<label className='block text-md ml-4   font-medium text-gray-700'>
							Shift 1
						</label>
						<select
							value={shift1}
							onChange={handleShift1Change}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						>
							<option value=''>Select Shift 1</option>
							{shifts.map((shift, index) => (
								<option
									key={index}
									value={shift}
									disabled={shift === shift2}
								>
									{shift}
								</option>
							))}
						</select>
					</div>
					<div>
						<label className='block text-md ml-4   font-medium text-gray-700'>
							Shift 2
						</label>
						<select
							value={shift2}
							onChange={handleShift2Change}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						>
							<option value=''>Select Shift 2</option>
							{shifts.map((shift, index) => (
								<option
									key={index}
									value={shift}
									disabled={shift === shift1}
								>
									{shift}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Submit Button */}
				<div className='mt-6'>
					<button className='w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50'>
						Submit
					</button>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
