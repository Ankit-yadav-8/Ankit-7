import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";

import Navbar from './Navbar';
import Hero from './Hero';
import Events from './Events';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Auth from './Auth';
import Dashboard from './Dashboard';

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('Home');
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setView('Home');
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <h2 style={{ color: '#00f3ff' }}>Think India Loading...</h2>
      </div>
    );
  }

  const renderContent = () => {
    if (view === 'About Us') {
      return <AboutUs />;
    }
    
    if (view === 'Auth' || view === 'Login' || view === 'Sign Up') {
      return <Auth setView={setView} />;
    }

    if (view === 'Dashboard') {
      return <Dashboard setView={setView} handleLogout={handleLogout} />;
    }

    if (view === 'Home') {
      return (
        <>
          <Hero setView={setView} user={user} handleLogout={handleLogout} />
          <Events />
        </>
      );
    }

    return <div style={{padding: '100px', color: '#fff'}}>Content for {view} coming soon!</div>;
  };

  return (
    <div style={{ backgroundColor: '#050511', minHeight: '100vh', color: '#fff' }}>
      {view !== 'Auth' && view !== 'Dashboard' && <Navbar setView={setView} user={user} />}
      {renderContent()}
      {view !== 'Auth' && view !== 'Dashboard' && <Footer />}
    </div>
  );
}

const styles = {
  loadingContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050511'
  }
};

export default App;