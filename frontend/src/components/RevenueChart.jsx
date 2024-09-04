import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Line,
	ReferenceLine,
} from 'recharts';

function DashboardCharts() {
	// Sample data for daily, monthly, and yearly revenues
	const dailyData = [
		{ date: '2024-08-01', revenue: 500, expense: 300 },
		{ date: '2024-08-02', revenue: 700, expense: 400 },
		{ date: '2024-08-03', revenue: 800, expense: 450 },
		{ date: '2024-08-04', revenue: 600, expense: 350 },
		{ date: '2024-08-05', revenue: 1000, expense: 600 },
		{ date: '2024-08-06', revenue: 1200, expense: 700 },
		{ date: '2024-08-07', revenue: 900, expense: 500 },
	];

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
	];

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
	];

	return (
		<div className='grid grid-cols-1 gap-4 m-10 min-h-screen'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
				{/* Daily Revenue Chart */}
				<ResponsiveContainer width='100%' height={300}>
					<BarChart data={dailyData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis
							dataKey='date'
							tickFormatter={(tick) =>
								new Date(tick).toLocaleDateString()
							}
						/>
						<YAxis />
						<Tooltip
							content={({ payload }) => {
								if (payload && payload.length) {
									const { payload: { date, revenue, expense } } = payload[0];
									return (
										<div className="custom-tooltip" style={{ background: 'rgba(0, 0, 0, 0.6)', color: '#fff', padding: '10px', borderRadius: '5px' }}>
											<p>Date: {new Date(date).toLocaleDateString()}</p>
											<p>Revenue: ${revenue}</p>
											<p>Expense: ${expense}</p>
										</div>
									);
								}
								return null;
							}}
						/>
						<Legend />
						<Bar dataKey='revenue' fill='#ff006e' animationDuration={1500} />
						<Bar dataKey='expense' fill='#00bfae' animationDuration={1500} />
						
					</BarChart>
				</ResponsiveContainer>

				{/* Monthly Revenue Chart */}
				<ResponsiveContainer width='100%' height={300}>
					<BarChart data={monthlyData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis
							dataKey='month'
							tickFormatter={(tick) =>
								new Date(tick + '-01').toLocaleString(
									'default',
									{ month: 'long', year: 'numeric' }
								)
							}
						/>
						<YAxis />
						<Tooltip
							content={({ payload }) => {
								if (payload && payload.length) {
									const { payload: { month, revenue, expense } } = payload[0];
									return (
										<div className="custom-tooltip" style={{ background: 'rgba(0, 0, 0, 0.6)', color: '#fff', padding: '10px', borderRadius: '5px' }}>
											<p>Month: {new Date(month + '-01').toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
											<p>Revenue: ${revenue}</p>
											<p>Expense: ${expense}</p>
										</div>
									);
								}
								return null;
							}}
						/>
						<Legend />
						<Bar dataKey='revenue' fill='#8338ec' stackId='a' />
						<Bar dataKey='expense' fill='#3a86ff' stackId='a' />
						
					</BarChart>
				</ResponsiveContainer>
			</div>

			{/* Yearly Revenue Chart (Full Width) */}
			<ResponsiveContainer width='100%' height={400}>
				<BarChart data={yearlyData}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='year' />
					<YAxis />
					<Tooltip
						content={({ payload }) => {
							if (payload && payload.length) {
								const { payload: { year, revenue, expense } } = payload[0];
								return (
									<div className="custom-tooltip" style={{ background: 'rgba(0, 0, 0, 0.6)', color: '#fff', padding: '10px', borderRadius: '5px' }}>
										<p>Year: {year}</p>
										<p>Revenue: ${revenue}</p>
										<p>Expense: ${expense}</p>
									</div>
								);
							}
							return null;
						}}
					/>
					<Legend />
					<Bar dataKey='revenue' fill='#3a86ff' />
					<Bar dataKey='expense' fill='#00bfae' />
					
					
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default DashboardCharts;
