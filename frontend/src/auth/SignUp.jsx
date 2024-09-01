import React from 'react';

function Signup() {
  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Sign Up</h2>
        <p style={styles.welcomeText}>Create a new account 🚀</p>
        
        <button style={styles.googleButton}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google Icon" style={styles.googleIcon} />
          Sign up with Google
        </button>
        
        <p style={styles.orText}>or Sign up with Email</p>
        
        <div style={styles.inputContainer}>
          <label>Full Name</label>
          <input type="text" placeholder="E.g. John Doe" style={styles.input} />
        </div>
        
        <div style={styles.inputContainer}>
          <label>Email</label>
          <input type="email" placeholder="E.g. johndoe@email.com" style={styles.input} />
        </div>
        
        <div style={styles.inputContainer}>
          <label>Password</label>
          <input type="password" placeholder="Create a password" style={styles.input} />
        </div>
        
        <div style={styles.inputContainer}>
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" style={styles.input} />
        </div>
        
        <button style={styles.signupButton}>Sign Up</button>
        
        <p style={styles.loginText}>
          Already have an account? <a href="#" style={styles.loginLink}>Login here</a>
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
    backgroundColor: '#E8EAF6',
  },
  formContainer: {
    width: '400px',
    padding: '40px',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
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
  signupButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#3F51B5',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  loginText: {
    color: '#555',
  },
  loginLink: {
    textDecoration: 'none',
    color: '#4285F4',
  },
};

export default Signup;


