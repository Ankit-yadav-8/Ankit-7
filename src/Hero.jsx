import React from 'react';
import { motion } from 'framer-motion';
import campusImg from './iit-roorkee.jpg'; // Make sure this file is in your src folder

const Hero = () => {
  return (
    <div style={styles.heroContainer}>
      {/* LEFT SIDE: Text and Buttons */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.leftContent}
      >
        <h1 style={styles.welcomeText}>
          Think India <br/> 
          <span style={{color: '#00f3ff'}}>Welcomes You</span>
        </h1>
        
        <p style={styles.description}>
          A pan-India initiative to bind the students with the "Nation First" attitude. 
          Join the vibrant community at <b>IIT Roorkee</b> where we blend modern 
          innovation with our rich Indian values to build a stronger tomorrow.
        </p>

        <div style={styles.authContainer}>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 243, 255, 0.4)' }}
            style={styles.loginBtn}
          >
            Login
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 243, 255, 0.6)' }}
            style={styles.signUpBtn}
          >
            Sign Up
          </motion.button>
        </div>
      </motion.div>

      {/* RIGHT SIDE: Animated IIT Roorkee Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={styles.rightContent}
      >
        <motion.img 
          animate={{ y: [0, -15, 0] }} // Floating animation
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          src={campusImg} 
          alt="IIT Roorkee Campus" 
          style={styles.campusImage} 
        />
        <div style={styles.imageGlow}></div>
      </motion.div>
    </div>
  );
};

const styles = {
  heroContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 8%',
    background: 'radial-gradient(circle at center, #0a0a20 0%, #050511 100%)',
    color: '#fff',
    overflow: 'hidden'
  },
  leftContent: {
    maxWidth: '500px',
    zIndex: 2
  },
  welcomeText: {
    fontSize: '4.5rem',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '20px'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#ccc',
    marginBottom: '40px'
  },
  authContainer: {
    display: 'flex',
    gap: '20px'
  },
  loginBtn: {
    padding: '12px 35px',
    fontSize: '16px',
    fontWeight: 'bold',
    background: 'transparent',
    color: '#00f3ff',
    border: '2px solid #00f3ff',
    borderRadius: '50px',
    cursor: 'pointer'
  },
  signUpBtn: {
    padding: '12px 35px',
    fontSize: '16px',
    fontWeight: 'bold',
    background: '#00f3ff',
    color: '#050511',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer'
  },
  rightContent: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  campusImage: {
    width: '550px',
    borderRadius: '20px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
    zIndex: 2,
    border: '1px solid rgba(0, 243, 255, 0.2)'
  },
  imageGlow: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    background: '#00f3ff',
    filter: 'blur(100px)',
    opacity: 0.15,
    zIndex: 1
  }
};

export default Hero;