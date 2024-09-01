import DashBoardStatsGrid from '../components/DashBoardStatsGrid'
import RevenueChart from '../components/RevenueChart'

export default function DashBoard() {
	return (
		<div className='flex flex-col h-screen bg-center bg-contain bg-no-repeat'>
			<DashBoardStatsGrid />
			<RevenueChart />
		</div>
	)
}
