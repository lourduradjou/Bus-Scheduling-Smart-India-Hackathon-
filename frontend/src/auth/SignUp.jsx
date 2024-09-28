import React from 'react';
import busImage from '../assets/authImage/busimg.jpg'; // Adjust the path based on where you place the image

function SignUp() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>SIGN UP</h2>
        <p style={styles.welcomeText}>Join us, create your new account </p>
        
        <button style={styles.googleButton}>
          Sign Up with Google
        </button>
        
        <p style={styles.orText}>Or Sign Up with Email</p>
        
        <div style={styles.inputContainer}>
          <label>Username</label>
          <input type="text" placeholder="Choose a username" style={styles.input} />
        </div>

        <div style={styles.inputContainer}>
          <label>Email</label>
          <input type="email" placeholder="E.g. john@email.com" style={styles.input} />
        </div>
        
        <div style={styles.inputContainer}>
          <label>Password</label>
          <input type="password" placeholder="Create a password" style={styles.input} />
        </div>
        
        <div style={styles.inputContainer}>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" style={styles.input} />
        </div>
        
        <div style={styles.optionsContainer}>
          <div>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms"> I agree to the Terms and Conditions</label>
          </div>
        </div>
        
        <button style={styles.loginButton}>Sign Up</button>
        
        <p style={styles.signUpText}>
          Already have an account? <a href="#" style={styles.signUpLink}>Login here</a>
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
    backgroundRepeat: 'no-repeat',
  },
  formContainer: {
    width: '500px',
    padding: '40px',
    borderRadius: '13px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    backdropFilter: 'blur(1px)', // Optional: adds a blur effect to the background
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
  googleIcon: {
    width: '20px',
    marginRight: '8px',
    verticalAlign: 'middle',
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
    color: '#40d6db',
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
};

export default SignUp;


