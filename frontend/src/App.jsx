import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Login from './auth/Login' // Assuming you have a login page
import SignUp from './auth/SignUp' // Assuming you have a signup page
import MainLayout from './components/shared/MainLayout'
import EmployeeManagement from './pages/EmployeeManagement'
import ProtectedRoutes from './components/ProtectedRoutes'
import NotFound from './pages/NotFound'
import UserProfile from './auth/UserProfile'

function RegisterAndLogout() {
	localStorage.clear()
	return <SignUp />
}

const App = () => {
	return (
		<Router>
			<Routes>
				{/* Public routes (without sidebar) */}
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<RegisterAndLogout />} />
				<Route path='/crewDetails' element={<UserProfile />} />

				{/* Protected routes (with sidebar) */}
				<Route
					path='/'
					element={
						//<ProtectedRoutes> {/* Ensure users are logged in */}

						<MainLayout>
							<DashBoard />
						</MainLayout>

						//</ProtectedRoutes>
					}
				/>
				<Route
					path='/schedulerManagement'
					element={
						//<ProtectedRoutes> {/* Ensure users are logged in */}

						<MainLayout>
							<EmployeeManagement />
						</MainLayout>

						//</ProtectedRoutes>
					}
				/>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App
