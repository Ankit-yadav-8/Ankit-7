import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="glass"
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%'
      }}
    >
      <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#00f3ff' }}>TIC IITR</div>
      
      <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
        <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
        <a href="#internship" style={{ color: 'white', textDecoration: 'none' }}>Internship</a>
        <a href="#blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</a>
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <button style={{ background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer' }}>Login</button>
        <button style={{ 
          background: '#00f3ff', color: '#000', padding: '8px 20px', 
          borderRadius: '20px', border: 'none', fontWeight: 'bold', cursor: 'pointer' 
        }}>Sign Up</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;