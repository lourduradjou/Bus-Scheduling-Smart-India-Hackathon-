import DashBoardStatsGrid from '../components/DashBoardStatsGrid'
import RevenueChart from '../components/RevenueChart'


export default function DashBoard() {
	return (
		<div className=' max-w-[1400px] ml-[17%] mr-[6%] flex flex-col min-h-screen bg-center bg-contain bg-no-repeat'>
			<DashBoardStatsGrid />
			<RevenueChart />
		</div>
	)
}

