import React from 'react';
import { motion } from 'framer-motion';
import logo from './think-india.png'; // Make sure this file is in your src folder

const Navbar = ({ setView }) => {
  const navItems = ['Home', 'Blog', 'Internship', 'About Us'];

  return (
    <nav style={styles.nav}>
      <motion.img 
        whileHover={{ scale: 1.05 }}
        src={logo} 
        alt="Think India Logo" 
        style={styles.logo} 
        onClick={() => setView('Home')} 
      />
      
      <div style={styles.buttonContainer}>
        {navItems.map((item) => (
          <motion.button
            key={item}
            whileHover={{ scale: 1.1, color: '#00f3ff' }}
            onClick={() => setView(item)}
            style={styles.navButton}
          >
            {item}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 60px',
    background: 'rgba(5, 5, 17, 0.95)',
    backdropFilter: 'blur(15px)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    borderBottom: '1px solid rgba(0, 243, 255, 0.1)',
  },
  logo: {
    height: '60px',
    cursor: 'pointer',
    filter: 'drop-shadow(0 0 5px rgba(0, 243, 255, 0.5))'
  },
  buttonContainer: {
    display: 'flex',
    gap: '35px',
  },
  navButton: {
    background: 'transparent',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '600',
    transition: '0.3s',
    letterSpacing: '1px'
  },
};

export default Navbar;