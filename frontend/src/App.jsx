import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Login from './auth/Login'; // Assuming you have a login page
import SignUp from './auth/SignUp'; // Assuming you have a signup page
import MainLayout from './components/shared/MainLayout';
import EmployeeManagement from './pages/EmployeeManagement';
import ProtectesRoutes from './components/ProtectedRoutes';
import NotFound from './pages/NotFound';

function RegisterAndLogout() {
  localStorage.clear()
  return <SignUp />
}

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes (without sidebar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterAndLogout />} />

        {/* Protected routes (with sidebar) */}
        <Route
          path="/"
          element={
            // Ensures that the users are logged in 
            <ProtectesRoutes >    
              <MainLayout>
                <DashBoard />
              </MainLayout>
            </ProtectesRoutes>
          }
        />
        <Route
          path="/employeeManagement"
          element={
            <ProtectesRoutes >
              <MainLayout>
                <EmployeeManagement />
              </MainLayout>
            </ProtectesRoutes>
          }
        />

        <Route path='*' element={<NotFound />}></Route>

        {/* Add other routes that require the sidebar here */}
      </Routes>
    </Router>
  );
};

export default App;
