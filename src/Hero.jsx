import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" style={{ 
      height: '100vh', display: 'flex', flexDirection: 'column', 
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      background: 'radial-gradient(circle at center, #1a1a3a 0%, #050511 100%)'
    }}>
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '4rem', marginBottom: '20px' }}
      >
        Welcome to <span style={{ color: '#00f3ff' }}>Think India</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ fontSize: '1.2rem', maxWidth: '600px', color: '#ccc' }}
      >
        Empowering minds, fostering innovation, and building the future at IIT Roorkee.
      </motion.p>
    </div>
  );
};

export default Hero;