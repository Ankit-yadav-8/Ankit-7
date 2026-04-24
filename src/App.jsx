import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Events from './Events';
import Footer from './Footer';
import AboutUs from './AboutUs'; // Import the new component

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('Home'); // This tracks which "page" we are on

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  if (loading) {
    return /* keep your loading code here */;
  }

  // This function decides what to show on the screen
  const renderContent = () => {
    if (view === 'About Us') {
      return <AboutUs />;
    }
    if (view === 'Home') {
      return (
        <>
          <Hero />
          <Events />
        </>
      );
    }
    return <div style={{padding: '100px', color: '#fff'}}>Content for {view} coming soon!</div>;
  };

  return (
    <div>
      <Navbar setView={setView} />
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;