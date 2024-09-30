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
					<FaBus className='text-2xl text-slate-200' />
				</div>
				<div className=''>
					<span className='text-sm font-light'>Total Buses</span>
					<div className='flex items-center justify-center'>
						<strong className='text-xl  font-semibold'>
							{stats.totalBuses}
						</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-600'>
					<IoPieChart className='text-2xl ' />
				</div>
				<div className=''>
					<span className='text-sm  font-light'>Monthly Income</span>
					<div className='flex items-center justify-center'>
						<strong className='text-xl  font-semibold'>
							₹{stats.monthlyIncome}
						</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400'>
					<TbCoinRupeeFilled className='text-2xl text-slate-100' />
				</div>
				<div className=''>
					<span className='text-sm  font-light'>
						Yesterday Income
					</span>
					<div className='flex items-center justify-center'>
						<strong className='text-xl  font-semibold'>
							₹{stats.yesterdayIncome}
						</strong>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				
					<div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
						<FaMoneyBillTrendUp className='text-2xl ' />
					</div>
					<div className=''>
						<span className='text-sm  font-light'>
							Total Profit
						</span>
						<div className='flex items-center justify-center'>
							<strong className='text-xl  font-semibold'>
								₹{stats.totalProfit}
							</strong>
						</div>
					</div>
			
			</BoxWrapper>
			<BoxWrapper>
				<div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-600'>
					<MdOutlinePeople className='text-2xl ' />
				</div>
				<div className=''>
					<span className='text-sm  font-light'>Total Employees</span>
					<div className='flex items-center justify-center'>
						<strong className='text-xl font-semibold'>
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
		<div className='relative mt-4 bg-[#15616d] drop-shadow-lg text-slate-300 rounded-s-3xl w-full px-6 py-8 flex-1  flex items-center justify-evenly hover:scale-105 duration-300 mb-6'>
			{/* Children content */}
			{children}

			{/* Wheels */}
			<div className='absolute bottom-[-12px] left-4'>
				<div className='relative w-8 h-8 rounded-full bg-black border-[4px] border-gray-400'>
					<div className='absolute inset-0 flex items-center justify-center'>
						<div className='w-2 h-2 rounded-full bg-white'></div>
					</div>
					{/* Wheel lines (extra detailing) */}
					<div className='absolute top-0 left-0 w-full h-full border-l-[2px] border-gray-400 rotate-45'></div>
					<div className='absolute top-0 left-0 w-full h-full border-t-[2px] border-gray-400 rotate-45'></div>
					<div className='absolute top-0 left-0 w-full h-full border-r-[2px] border-gray-400 rotate-45'></div>
					<div className='absolute top-0 left-0 w-full h-full border-b-[2px] border-gray-400 rotate-45'></div>
				</div>
			</div>

			<div className='absolute bottom-[-12px] right-4'>
				<div className='relative w-8 h-8 rounded-full bg-black border-[4px] border-gray-400'>
					<div className='absolute inset-0 flex items-center justify-center'>
						<div className='w-2 h-2 rounded-full bg-white'></div>
					</div>
					{/* Wheel lines (extra detailing) */}
					<div className='absolute top-0 left-0 w-full h-full border-l-[2px] border-gray-400 rotate-45'></div>
					<div className='absolute top-0 left-0 w-full h-full border-t-[2px] border-gray-400 rotate-45'></div>
					<div className='absolute top-0 left-0 w-full h-full border-r-[2px] border-gray-400 rotate-45'></div>
					<div className='absolute top-0 left-0 w-full h-full border-b-[2px] border-gray-400 rotate-45'></div>
				</div>
			</div>

			{/* Headlamps */}
			<div className='absolute top-[-16px] left-3.5 rotate-[65deg]'>
				<div className='w-4 h-12 rounded-l-xl bg-[#114e54] drop-shadow-lg'></div>
			</div>
			{/* <div className='absolute top-[-8px] right-6'>
				<div className='w-4 h-4 rounded-full bg-gray-400 drop-shadow-lg'></div>
			</div> */}

			{/* Mirror (left side) */}
			{/* <div className='absolute top-4 left-[-7px]'>
				<div className='w-4 h-10 bg-gray-400 rounded-sm '></div>
			</div> */}
		</div>
	);
}


export default DashboardStatsGrid
