import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Login from './auth/Login'; // Assuming you have a login page
import SignUp from './auth/SignUp'; // Assuming you have a signup page
import MainLayout from './components/shared/MainLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes (without sidebar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes (with sidebar) */}
        <Route
          path="/"
          element={
            <MainLayout>
              <DashBoard />
            </MainLayout>
          }
        />
        {/* Add other routes that require the sidebar here */}
      </Routes>
    </Router>
  );
};

export default App;
