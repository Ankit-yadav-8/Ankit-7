import React, { useState, useEffect } from 'react';
import { auth } from './firebase'; // Import your firebase config
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import auth tools

// Component Imports
import Navbar from './Navbar';
import Hero from './Hero';
import Events from './Events';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Auth from './Auth';           // Your new Auth modal
import Dashboard from './Dashboard'; // Your new Dashboard

function App() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('Home'); // Tracks which "page" we are on
  const [user, setUser] = useState(null);   // Tracks the logged-in user

  useEffect(() => {
    // Simulate initial loading screen
    setTimeout(() => setLoading(false), 2500);

    // Listen for Firebase login/logout changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Save user to state if logged in
      } else {
        setUser(null); // Clear state if logged out
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // Handle Logout securely
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setView('Home'); // Redirect to home after logout
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  // Loading Screen rendering
  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <h2 style={{ color: '#00f3ff' }}>Think India Loading...</h2>
      </div>
    );
  }

  // This function decides what to show on the screen based on 'view' state
  const renderContent = () => {
    if (view === 'About Us') {
      return <AboutUs />;
    }
    
    // Show Auth page (Login/Signup flow)
    if (view === 'Auth' || view === 'Login' || view === 'Sign Up') {
      return <Auth setView={setView} />;
    }

    // Show Dashboard (Protected area)
    if (view === 'Dashboard') {
      return <Dashboard setView={setView} handleLogout={handleLogout} />;
    }

    // Default Home Page
    if (view === 'Home') {
      return (
        <>
          {/* We pass user and handleLogout to Hero so it can change the buttons if logged in */}
          <Hero setView={setView} user={user} handleLogout={handleLogout} />
          <Events />
        </>
      );
    }

    // Fallback for missing pages
    return <div style={{padding: '100px', color: '#fff'}}>Content for {view} coming soon!</div>;
  };

  return (
    <div style={{ backgroundColor: '#050511', minHeight: '100vh', color: '#fff' }}>
      {/* Hide the main Navbar if the user is in the Auth screen or Dashboard to keep it clean */}
      {view !== 'Auth' && view !== 'Dashboard' && <Navbar setView={setView} user={user} />}
      
      {renderContent()}
      
      {/* Hide footer on Dashboard and Auth screen for a cleaner app feel */}
      {view !== 'Auth' && view !== 'Dashboard' && <Footer />}
    </div>
  );
}

// Simple styles for the loading screen
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