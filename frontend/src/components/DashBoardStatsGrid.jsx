import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoPieChart } from 'react-icons/io5'
import { FaBus, FaMoneyBillTrendUp } from 'react-icons/fa6'
import { TbCoinRupeeFilled } from 'react-icons/tb'
import { MdOutlinePeople } from 'react-icons/md'

function DashboardStatsGrid() {
	const [stats, setStats] = useState({
		totalBuses: 0,
		monthlyIncome: 0,
		yesterdayIncome: 0,
		totalProfit: 0,
		totalEmployees: 0,
	})

	useEffect(() => {
		// Fetch the stats from the backend API
		axios
			.get('https://mocki.io/v1/e67f6d02-085f-4ba4-9a3a-6c27a4c9bcf9') // Replace with your actual API endpoint
			.then((response) => {
				setStats(response.data)
				console.log(response)
			})
			.catch((error) => {
				console.error('There was an error fetching the stats!', error)
			})
	}, [])

	return (
		<div className='flex gap-4'>
			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
					<FaBus className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Total Buses
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							{stats.totalBuses}
						</strong>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
					<IoPieChart className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Monthly Income
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							₹{stats.monthlyIncome}
						</strong>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400'>
					<TbCoinRupeeFilled className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Yesterday Income
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							₹{stats.yesterdayIncome}
						</strong>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
					<FaMoneyBillTrendUp className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Total Profit
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							₹{stats.totalProfit}
						</strong>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
					<MdOutlinePeople className='text-2xl text-white' />
				</div>
				<div className='pl-4'>
					<span className='text-sm text-gray-500 font-light'>
						Total Employees
					</span>
					<div className='flex items-center'>
						<strong className='text-xl text-gray-700 font-semibold'>
							{stats.totalEmployees}
						</strong>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return (
		<div className='bg-white rounded-xl px-10 py-6 flex-1 border border-gray-200 flex items-center hover:scale-105 duration-300'>
			{children}
		</div>
	)
}

export default DashboardStatsGrid
