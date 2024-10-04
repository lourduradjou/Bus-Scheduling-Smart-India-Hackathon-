import React, { useState } from 'react';
import busImage from '../assets/authImage/bus.jpg'; 
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validateUsername = (phoneNumber) => {
    const usernamePattern = /^\d{10}$/; 
    if (!usernamePattern.test(phoneNumber)) {
      return 'Please enter a valid Phone Number.';
    }
    return '';
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const usernameErrorMsg = validateUsername(phoneNumber);
    if (usernameErrorMsg) {
      setPhoneNumberError(usernameErrorMsg);
      return;
    }

    setPhoneNumberError('');
    console.log('Form submitted with:', { phoneNumber, password });

    try {
      const res = await api.post("api/token/", { username: phoneNumber, password });
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      navigate("/");
    } catch (error) {
      alert("ENTER THE CORRECT CREDENTIALS");
    }
  };

  return (
    // style={{ backgroundImage: `url(${busImage})` }
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-gray-100" > 
      <div className="w-full max-w-md bg-white bg-opacity-80 p-8 rounded-lg shadow-lg backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex justify-center items-center w-full *:">LOGIN</h2>
        {/* <p className="text-lg font-light text-gray-700 mb-8 text-center">Hi, Welcome back 👋</p> */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label className="block text-gray-700 ml-2 my-1">Phone Number</label>
            <input
              type="text"
              placeholder="E.g. 1234567890"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={30}
              required
            />
            {phoneNumberError && <p className="text-sm text-red-500">{phoneNumberError}</p>}
          </div>
          
          <div className="space-y-1">
            <label className="block text-gray-700 ml-2 my-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              maxLength={12}
              required
            />
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a>
          </div>
          
          <button type="submit" className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
