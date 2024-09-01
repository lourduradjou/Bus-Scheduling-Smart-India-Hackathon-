import { RxDashboard } from 'react-icons/rx'
import { MdContentPasteSearch } from 'react-icons/md'
import { GrContactInfo } from 'react-icons/gr'
import { GrMapLocation } from 'react-icons/gr'

export const SIDE_BAR_LINKS = [
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
		label: 'Employee Details',
		path: '/employeeDetails',
		icon: <GrContactInfo />,
	},
	{
		key: 'GIS',
		label: 'GIS',
		path: '/gis',
		icon: <GrMapLocation />,
	},
]

