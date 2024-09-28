import React from 'react'
import {
	BarChart,
	Area,
	Bar,
	ComposedChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Line,
} from 'recharts'

function DashboardCharts() {
	// Sample data for daily, monthly, and yearly revenues
	const dailyData = [
		{ date: '2024-08-01', revenue: 500, expense: 300 },
		{ date: '2024-08-02', revenue: 700, expense: 400 },
		{ date: '2024-08-03', revenue: 800, expense: 450 },
		{ date: '2024-08-04', revenue: 600, expense: 350 },
		
	]

	const monthlyData = [
		{ month: '2024-01', revenue: 12000, expense: 8000 },
		{ month: '2024-02', revenue: 15000, expense: 9500 },
		{ month: '2024-03', revenue: 17000, expense: 10000 },
		{ month: '2024-04', revenue: 14000, expense: 8500 },
		{ month: '2024-05', revenue: 16000, expense: 9000 },
		{ month: '2024-06', revenue: 18000, expense: 11000 },
		{ month: '2024-07', revenue: 21000, expense: 12000 },
		{ month: '2024-08', revenue: 20000, expense: 10500 },
		{ month: '2024-09', revenue: 19000, expense: 9800 },
		{ month: '2024-10', revenue: 22000, expense: 11500 },
		{ month: '2024-11', revenue: 24000, expense: 12000 },
		{ month: '2024-12', revenue: 26000, expense: 12500 },
	]

	const yearlyData = [
		{ year: '2013', revenue: 180000, expense: 120000 },
		{ year: '2014', revenue: 185000, expense: 120000 },
		{ year: '2015', revenue: 180600, expense: 120000 },
		{ year: '2016', revenue: 187000, expense: 120000 },
		{ year: '2017', revenue: 188000, expense: 120000 },
		{ year: '2018', revenue: 189000, expense: 120000 },
		{ year: '2019', revenue: 200000, expense: 130000 },
		{ year: '2020', revenue: 220000, expense: 140000 },
		{ year: '2021', revenue: 250000, expense: 150000 },
		{ year: '2022', revenue: 270000, expense: 160000 },
		{ year: '2023', revenue: 300000, expense: 180000 },
		{ year: '2024', revenue: 320000, expense: 190000 },
		{ year: '2025', revenue: 340000, expense: 200000 },
		{ year: '2026', revenue: 360000, expense: 210000 },
	]

	return (
		<div className='grid grid-cols-1 gap-4 m-10 min-h-screen'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
				{/* Daily Revenue Chart */}
				<ResponsiveContainer width='100%' height={300}>
					<ComposedChart data={dailyData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis
							dataKey='date'
							tickFormatter={(tick) =>
								new Date(tick).toLocaleDateString()
							}
						/>
						<YAxis />
						<Tooltip />
						<Legend />
						{/* Bar and Line for Revenue and Expense */}
						<Bar
							dataKey='revenue'
							fill='#ff006e'
							animationDuration={1500}
						/>
						<Bar
							dataKey='expense'
							fill='#00bfae'
							animationDuration={1500}
						/>
						<Area
							type='monotone'
							dataKey='revenue'
							fill='#ff006e'
							stroke='#8884d8'
						/>
						<Area
							type='monotone'
							dataKey='expense'
							fill='#00bfae'
							stroke='#8884d8'
						/>
						<Line
							type='monotone'
							dataKey='revenue'
							stroke='#ff006e'
						/>
						<Line
							type='monotone'
							dataKey='expense'
							stroke='#00bfae'
						/>
					</ComposedChart>
				</ResponsiveContainer>

				{/* Monthly Revenue Chart */}
				<ResponsiveContainer width='100%' height={300}>
					<ComposedChart data={monthlyData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis
							dataKey='month'
							tickFormatter={(tick) =>
								new Date(tick + '-01').toLocaleString(
									'default',
									{
										month: 'long',
										year: 'numeric',
									}
								)
							}
						/>
						<YAxis />
						<Tooltip />
						<Legend />
						{/* Bar and Line for Revenue and Expense */}
						<Bar dataKey='revenue' fill='#8338ec' stackId='a' />
						<Bar dataKey='expense' fill='#facc15' stackId='a' />
						<Line
							type='natural'
							dataKey='revenue'
							stroke='#8338ec'
							strokeWidth={2}
						/>
						
						<Line
							type='natural'
							dataKey='expense'
							stroke='#facc15'
							strokeWidth={2}
						/>
					</ComposedChart>
				</ResponsiveContainer>
			</div>

			{/* Yearly Revenue Chart (Full Width) */}
			<ResponsiveContainer width='100%' height={400}>
				<ComposedChart data={yearlyData}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='year' />
					<YAxis />
					<Tooltip />
					<Legend />
					{/* Bar and Line for Revenue and Expense */}
					<Bar dataKey='revenue' fill='#3a86ff' />
					<Bar dataKey='expense' fill='#f18701' />
					<Line
						type='monotone'
						dataKey='revenue'
						strokeWidth={2}
						stroke='#3a86ff'
					/>
					<Line
						type='monotone'
						dataKey='expense'
						strokeWidth={2}
						stroke='#f18701'
					/>
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	)
}

export default DashboardCharts
