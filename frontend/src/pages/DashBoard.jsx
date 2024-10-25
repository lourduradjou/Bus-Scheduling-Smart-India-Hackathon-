import DashBoardStatsGrid from '../components/DashBoardStatsGrid' //shows the statistics
import RevenueChart from '../components/RevenueChart' //shows the revenue related details to the admin 


export default function DashBoard() {
	return (
		<div className=' max-w-[1400px] ml-[17%] mr-[3%] flex flex-col min-h-screen bg-center bg-contain bg-no-repeat'>
			<DashBoardStatsGrid />
			<RevenueChart />
		</div>
	)
}

