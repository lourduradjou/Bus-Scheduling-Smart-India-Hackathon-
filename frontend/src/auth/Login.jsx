import React, { useState } from 'react';
import busImage from '../assets/authImage/bus.jpg'; 
import { useNavigate } from 'react-router-dom';
import api from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const validateUsername = (username) => {
    const usernamePattern = /^[a-zA-Z0-9_.-]{3,}$/; 
    if (!usernamePattern.test(username)) {
      return 'Please enter a valid username.';
    }
    return '';
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const usernameErrorMsg = validateUsername(username);
    if (usernameErrorMsg) {
      setUsernameError(usernameErrorMsg);
      return;
    }

    setUsernameError('');
    console.log('Form submitted with:', { username, password });

    try {
      const res = await api.post("api/token/", { username, password });
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>LOGIN</h2>
        <p style={styles.welcomeText}>Hi, Welcome back 👋</p>
        
        <button style={styles.googleButton}>
          Login with Google
        </button>
        
        <p style={styles.orText}>Or Login with Username</p>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label>Username</label>
            <input
              type="text"
              placeholder="E.g. john_doe"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={30}
              required
            />
            {usernameError && <p style={styles.errorText}>{usernameError}</p>}
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
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe"> Remember Me</label>
            </div>
            <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
          </div>
          
          <button type="submit" style={styles.loginButton}>Login</button>
          
          <p style={styles.signUpText}>
            Not registered yet? <a href="/SignUp" style={styles.signUpLink}>Create an account</a>
          </p>
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
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
