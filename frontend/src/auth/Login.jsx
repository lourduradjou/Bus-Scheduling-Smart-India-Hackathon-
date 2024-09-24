
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
    <div style={styles.container} className='bg-black'>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>LOGIN</h2>
        <p style={styles.welcomeText}>Hi, Welcome back 👋</p>

        
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="E.g. 1234567890"
              style={styles.input}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={30}
              required
            />
            {phoneNumberError && <p style={styles.errorText}>{phoneNumberError}</p>}
          </div>
          
          <div style={styles.inputContainer}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              maxLength={12}
              required
            />
          </div>
          
          <div style={styles.optionsContainer}>
           
            <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
          </div>
          
          <button type="submit" style={styles.loginButton}>Login</button>
          
         
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${busImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  formContainer: {
    width: '500px',
    padding: '40px',
    borderRadius: '13px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backdropFilter: 'blur(8px)', 
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  welcomeText: {
    marginBottom: '20px',
    fontFamily: 'Georgia, serif',
    fontSize: '20px', 
    fontStyle: 'italic', 
  },
  googleButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4285F4',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    marginBottom: '15px',
    cursor: 'pointer',
  },
  orText: {
    marginBottom: '20px',
    color: '#fff',
  },
  inputContainer: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  forgotPassword: {
    textDecoration: 'none',
    color: '#57030b',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3F51B5',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  signUpText: {
    color: 'black',
  },
  signUpLink: {
    textDecoration: 'none',
    color: '#57030b',
  },
  errorText: {
    color: 'red',
    fontSize: '12px',
    marginTop: '5px',
    textAlign: 'left',
  },
};

export default Login;

