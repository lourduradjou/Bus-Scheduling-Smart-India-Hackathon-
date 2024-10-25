import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'

//importing authorization related components
import Login from './auth/Login'
import SignUp from './auth/SignUp'

//importing layout components
import MainLayout from './components/shared/MainLayout'
//importing main components/features
import SchedulerManagement from './pages/SchedulerManagement'
import CrewDetails from './pages/CrewDetails'
import BusDetails from './pages/BusDetails'
import UserProfile from './auth/userProfile'
//importing protection related components and notfound page components
import ProtectedRoutes from './components/ProtectedRoutes'
import NotFound from './pages/NotFound'

//function to clearout the logged details
// function RegisterAndLogout() {
// 	localStorage.clear()
// 	return <SignUp />
// }

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/login' element={<Login />} />
				{/* <Route path='/signup' element={<RegisterAndLogout />} /> */}


				<Route
					path='/crewDetails'
					element={
							<ProtectedRoutes allowedRoles={['crew','admin']}> {/* Ensure users are logged in */}
								<UserProfile />
							</ProtectedRoutes>

					}
				/>

				{/* Protected routes (with sidebar) */}
				<Route
					path='/'
					element={
						<MainLayout>
							<ProtectedRoutes allowedRoles={['admin']}> {/* Ensure users are logged in */}
								<DashBoard />
							</ProtectedRoutes>
						</MainLayout>

					}
				/>
				<Route
					path='/schedulerManagement'
					element={
						<MainLayout>
							<SchedulerManagement />
						</MainLayout>
					}
				/>
				<Route
					path='/crewInfo'
					element={
						<MainLayout>
							<CrewDetails />
						</MainLayout>
					}
				/>
				<Route
					path='/busInfo'
					element={
						<MainLayout>
							<BusDetails />
						</MainLayout>
					}
				/>
				<Route path='*' element={<NotFound />} />{' '}
				{/* to catch invalid urls */}
			</Routes>
		</Router>
	)
}

export default App
