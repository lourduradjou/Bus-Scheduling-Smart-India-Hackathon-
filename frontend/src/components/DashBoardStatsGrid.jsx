import React from 'react'
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

import { FaBus } from "react-icons/fa";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlinePeople } from "react-icons/md";

function DashboardStatsGrid() {
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
							300
						</strong>
						{/* <span className='text-sm text-green-500 pl-2'>
							+343
						</span> */}
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
							₹3,423
						</strong>
						{/* <span className='text-sm text-green-500 pl-2'>
							-343
						</span> */}
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
							₹313
						</strong>
						{/* <span className='text-sm text-red-500 pl-2'>-30</span> */}
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
							₹600
						</strong>
						{/* <span className='text-sm text-red-500 pl-2'>-43</span> */}
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
							600
						</strong>
						{/* <span className='text-sm text-red-500 pl-2'>-43</span> */}
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return (
		<div className='bg-white rounded-xl px-10 py-6 flex-1 border border-gray-200 flex items-center hover:scale-105 duration-300 '>
			{children}
		</div>
	)
}

export default DashboardStatsGrid
