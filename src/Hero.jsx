import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ setView, user, handleLogout }) => {
  return (
    <div style={styles.heroContainer}>
      {/* LEFT SIDE: Text and Buttons */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.leftContent}
      >
        <h1 style={styles.title}>
          Empowering the <br />
          <span style={styles.highlight}>Youth of India</span>
        </h1>
        <p style={styles.subtitle}>
          Join Think India to connect, learn, and grow with the brightest minds across the nation.
        </p>

        <div style={styles.authContainer}>
          {user ? (
            // WHAT USERS SEE AFTER LOGGING IN
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <p style={{ color: '#00f3ff', fontSize: '16px', margin: 0 }}>
                Logged in as: <b>{user.email}</b>
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)' }}
                  style={styles.dashboardBtn}
                  onClick={() => setView('Dashboard')}
                >
                  Go to Dashboard
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  style={styles.logoutBtn}
                  onClick={handleLogout}
                >
                  Logout
                </motion.button>
              </div>
            </motion.div>
          ) : (
            // WHAT USERS SEE BEFORE LOGGING IN
            <div style={{ display: 'flex', gap: '20px' }}>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)' }}
                style={styles.loginBtn}
                onClick={() => setView('Auth')}
              >
                Login
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 243, 255, 0.6)' }}
                style={styles.signUpBtn}
                onClick={() => setView('Auth')}
              >
                Sign Up
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>

      {/* RIGHT SIDE: Image or Graphic */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.rightContent}
      >
        <div style={styles.imagePlaceholder}>
          {/* If you have a specific image, replace this div with an <img /> tag */}
          <h2 style={{ color: '#333' }}>Think India Graphic</h2>
        </div>
      </motion.div>
    </div>
  );
};

const styles = {
  heroContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px 10%',
    minHeight: '70vh',
    backgroundColor: '#050511',
  },
  leftContent: {
    flex: 1,
    maxWidth: '500px',
  },
  title: {
    fontSize: '3.5rem',
    color: '#fff',
    lineHeight: '1.2',
    marginBottom: '20px',
  },
  highlight: {
    color: '#00f3ff',
    textShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#aaa',
    marginBottom: '40px',
    lineHeight: '1.6',
  },
  authContainer: {
    display: 'flex',
    gap: '20px',
  },
  loginBtn: {
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: '#00f3ff',
    border: '2px solid #00f3ff',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  signUpBtn: {
    padding: '12px 30px',
    backgroundColor: '#00f3ff',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  dashboardBtn: {
    padding: '12px 30px',
    backgroundColor: '#00f3ff',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  logoutBtn: {
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: '#ff4444',
    border: '2px solid #ff4444',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  rightContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  imagePlaceholder: {
    width: '400px',
    height: '400px',
    backgroundColor: '#111',
    border: '1px solid #333',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 50px rgba(0, 243, 255, 0.1)',
  }
};

export default Hero;