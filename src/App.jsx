import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Internship from './components/Internship';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#050511' }}>
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: '80px', height: '80px', border: '4px solid #00f3ff', borderTopColor: 'transparent', borderRadius: '50%' }}
        />
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, yoyo: Infinity }}
          style={{ position: 'absolute', color: '#00f3ff', marginTop: '120px' }}>
          Think India Loading...
        </motion.h2>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <Events />
      <Internship />
      <Footer />
    </div>
  );
}

export default App;

export default App;
