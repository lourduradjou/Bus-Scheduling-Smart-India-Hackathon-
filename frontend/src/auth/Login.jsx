import React from 'react';
import busImage from '../assets/authImage/busImage.jpg'; // Adjust the path based on where you place the image

function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Login</h2>
        <p style={styles.welcomeText}>Hi, Welcome back 👋</p>
        
        <button style={styles.googleButton}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google Icon" style={styles.googleIcon} />
          Login with Google
        </button>
        
        <p style={styles.orText}>or Login with Email</p>
        
        <div style={styles.inputContainer}>
          <label>Email</label>
          <input type="email" placeholder="E.g. johndoe@email.com" style={styles.input} />
        </div>
        
        <div style={styles.inputContainer}>
          <label>Password</label>
          <input type="password" placeholder="Enter your password" style={styles.input} />
        </div>
        
        <div style={styles.optionsContainer}>
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe"> Remember Me</label>
          </div>
          <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
        </div>
        
        <button style={styles.loginButton}>Login</button>
        
        <p style={styles.signUpText}>
          Not registered yet? <a href="#" style={styles.signUpLink}>Create an account</a>
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
    backgroundImage: `url(${busImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  formContainer: {
    width: '400px',
    padding: '40px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backdropFilter: 'blur(8px)', // Optional: adds a blur effect to the background
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  welcomeText: {
    marginBottom: '20px',
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
  googleIcon: {
    width: '20px',
    marginRight: '8px',
    verticalAlign: 'middle',
  },
  orText: {
    marginBottom: '20px',
    color: '#555',
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
    color: '#555',
  },
  signUpLink: {
    textDecoration: 'none',
    color: '#4285F4',
  },
};

export default Login;
