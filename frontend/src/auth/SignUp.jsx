import React, { useState } from 'react';
import busImage from '../assets/authImage/busimg.jpg'; 
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../api';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate()
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email) ? '' : 'Please enter a valid email address.';
  };

  const validateUsername = (username) => {
    const usernamePattern = /^[a-zA-Z0-9_-]+$/;
    return usernamePattern.test(username) ? '' : 'Username can only contain letters, numbers, underscores, and hyphens.';
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = { username: '', email: '', password: '', confirmPassword: '' };

    if (username.length < 8 || username.length > 15) {
      newErrors.username = 'Username must be between 8 and 15 characters long.';
      isValid = false;
    } else {
      const usernameError = validateUsername(username);
      if (usernameError) {
        newErrors.username = usernameError;
        isValid = false;
      }
    }

    const emailError = validateEmail(email);
    if (emailError) {
      newErrors.email = emailError;
      isValid = false;
    } else if (email.length > 30) {
      newErrors.email = 'Email must be a maximum of 30 characters.';
      isValid = false;
    }

    if (password.length < 6 || password.length > 12) {
      newErrors.password = 'Password must be between 6 and 12 characters.';
      isValid = false;
    }

    if (confirmPassword.length > 12) {
      newErrors.confirmPassword = 'Confirm Password must be a maximum of 12 characters.';
      isValid = false;
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted with:', { username, email, password });
    }

    try{
      if (validateForm()){
        const res = await api.post("/api/user/register/",{username,email,password})
        navigate("/login")

      }
    }
    catch(error){
      alert("USER NAME ALREADY EXISTS")
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>SIGN UP</h2>
        <p style={styles.welcomeText}>Join us, create your new account</p>
        
        <button style={styles.googleButton}>
          Sign Up with Google
        </button>
        
        <p style={styles.orText}>Or Sign Up with Email</p>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={15} 
            />
            {errors.username && <p style={styles.errorText}>{errors.username}</p>}
          </div>

          <div style={styles.inputContainer}>
            <label>Email</label>
            <input
              type="email"
              placeholder="E.g. john@email.com"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={30} 
            />
            {errors.email && <p style={styles.errorText}>{errors.email}</p>}
          </div>
          
          <div style={styles.inputContainer}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              maxLength={12} 
            />
            {errors.password && <p style={styles.errorText}>{errors.password}</p>}
          </div>
          
          <div style={styles.inputContainer}>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              maxLength={12} 
            />
            {errors.confirmPassword && <p style={styles.errorText}>{errors.confirmPassword}</p>}
          </div>
          
          <div style={styles.optionsContainer}>
            <div>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms"> I agree to the Terms and Conditions</label>
            </div>
          </div>
          
          <button type="submit" style={styles.loginButton}>Sign Up</button>
          
          <p style={styles.signUpText}>
            Already have an account? <a href="/login" style={styles.signUpLink}>Login here</a>
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
    backdropFilter: 'blur(1px)', 
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

export default SignUp;
