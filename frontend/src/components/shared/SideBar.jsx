import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { MdContentPasteSearch } from 'react-icons/md'
import { GrContactInfo } from 'react-icons/gr'
import { GrMapLocation } from 'react-icons/gr'
import { TbLogout2 } from 'react-icons/tb'

const SIDE_BAR_LINKS = [
	{
		key: 'Dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <RxDashboard />,
	},
	{
		key: 'Analysis',
		label: 'Analysis',
		path: '/analysis',
		icon: <MdContentPasteSearch />,
	},
	{
		key: 'Employee Details',
		label: 'Employees',
		path: '/employeeDetails',
		icon: <GrContactInfo />,
	},
	{
		key: 'GIS',
		label: 'GIS',
		path: '/gis',
		icon: <GrMapLocation />,
	},
	{
		key: 'auth',
		label: 'Logout',
		path: '/logout',
		icon: <TbLogout2 />,
		theme: 'red',
	},
]

const themeClasses = {
	red: 'text-red-500 hover:bg-gray-700',
	// Add other themes here
}

const SideBar = () => {
	return (
		<div className='w-60 bg-[#00245c] text-gray-300  min-h-screen'>
			<div className='w-full flex items-center justify-start p-8'>
				<h1 className='text-2xl hover:text-[#ffc404] duration-300 font-semibold pl-2'>NCT Delhi</h1>
			</div>

			<nav className='p-8'>
				<ul className='flex flex-col gap-4'>
					{SIDE_BAR_LINKS.map((link) => (
						<li
							className={`rounded-md flex gap-4 items-center p-3 cursor-pointer text-lg ${
								themeClasses[link.theme] ||
								'text-gray-300 hover:bg-[#6c757d]'
							}`}
							key={link.key}
						>
							{link.icon}
							<span>{link.label}</span>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default SideBar
