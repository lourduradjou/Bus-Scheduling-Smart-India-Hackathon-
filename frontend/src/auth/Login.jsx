
import React from 'react';
import busImage from '../assets/authImage/bus-light-dark-glow.jpg'; // Adjust the path based on where you place the image

function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Login</h2>
        <p style={styles.welcomeText}>Hi, Welcome back 👋</p>

        <button style={styles.googleButton}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google Icon"
            style={styles.googleIcon}
          />
          Login with Google
        </button>

        <p style={styles.orText}>or Login with Email</p>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="E.g. johndoe@email.com"
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            style={styles.input}
          />
        </div>

        <div style={styles.optionsContainer}>
          <div style={styles.rememberMeContainer}>
            <input type="checkbox" id="rememberMe" style={styles.checkbox} />
            <label htmlFor="rememberMe" style={styles.rememberMeLabel}> Remember Me</label>
          </div>
          <a href="#" style={styles.forgotPassword}>
            Forgot Password?
          </a>
        </div>

        <button style={styles.loginButton}>Login</button>

        <p style={styles.signUpText}>
          Not registered yet?{' '}
          <a href="#" style={styles.signUpLink}>
            Create an account
          </a>
        </p>
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
    backgroundImage: url(${busImage}),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  formContainer: {
    width: '400px',
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Very transparent background
    textAlign: 'center',
    border: 'none', // No border for full integration
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#fff', // White text for contrast
  },
  welcomeText: {
    marginBottom: '20px',
    color: '#fff', // White text for better readability
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleIcon: {
    width: '20px',
    marginRight: '8px',
    verticalAlign: 'middle',
  },
  orText: {
    marginBottom: '20px',
    color: '#ddd', // Light text to blend with background
  },
  inputContainer: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#fff', // White text for labels
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #fff', // White border to blend with the background
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent input background
    color: '#fff', // White text for input
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  rememberMeContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '5px',
  },
  rememberMeLabel: {
    color: '#fff', // White text for Remember Me label
  },
  forgotPassword: {
    textDecoration: 'none',
    color: '#4285F4',
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
    color: '#ddd', // Light text for sign-up text
  },
  signUpLink: {
    textDecoration: 'none',
    color: '#4285F4',
  },
};

export default Login;