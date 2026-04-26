import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { auth, db } from './firebase';
import { doc, getDoc } from "firebase/firestore";

const Dashboard = ({ setView, handleLogout }) => {
  const [userData, setUserData] = useState(null);

  // Fetch the user's details from Firestore when Dashboard loads
  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <div style={styles.container}>
      
      {/* LEFT SIDEBAR: User Details */}
      <motion.div initial={{ x: -200 }} animate={{ x: 0 }} style={styles.sidebar}>
        <h3 style={styles.sidebarTitle}>My Profile</h3>
        {userData ? (
          <div style={styles.detailsGroup}>
            <p style={styles.detailText}><b>Name:</b> {userData.name || 'N/A'}</p>
            <p style={styles.detailText}><b>Email:</b> {userData.email}</p>
            <p style={styles.detailText}><b>Phone:</b> {userData.phone || 'N/A'}</p>
            <p style={styles.detailText}><b>City:</b> {userData.city || 'N/A'}</p>
            <p style={styles.detailText}><b>Institute:</b> {userData.institute || 'N/A'}</p>
          </div>
        ) : (
          <p style={styles.detailText}>Loading details...</p>
        )}
        <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
      </motion.div>

      {/* RIGHT MAIN AREA */}
      <div style={styles.mainArea}>
        
        {/* HEADER MENU */}
        <nav style={styles.header}>
          <button style={styles.headerBtn}>Internship</button>
          <button style={styles.headerBtn}>Upcoming Events</button>
          <button style={styles.headerBtn}>Past Events</button>
          <button style={styles.headerBtn}>What Think India Does</button>
        </nav>

        {/* MIDDLE WATERMARK */}
        <div style={styles.content}>
          <h1 style={styles.watermark}>THINK INDIA</h1>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h2 style={{ color: '#fff', fontSize: '30px' }}>Welcome to your Dashboard</h2>
            <p style={{ color: '#aaa' }}>Select an option from the top menu to get started.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const styles = {
  container: { display: 'flex', height: '100vh', background: '#0a0a0a', fontFamily: 'sans-serif', overflow: 'hidden' },
  sidebar: { width: '250px', background: '#111', padding: '30px 20px', borderRight: '1px solid #333', display: 'flex', flexDirection: 'column' },
  sidebarTitle: { color: '#00f3ff', marginBottom: '20px', fontSize: '18px', borderBottom: '1px solid #333', paddingBottom: '10px' },
  detailsGroup: { display: 'flex', flexDirection: 'column', gap: '15px', flexGrow: 1 },
  detailText: { color: '#aaa', fontSize: '13px', margin: 0, lineHeight: '1.5' },
  logoutBtn: { marginTop: 'auto', padding: '10px', background: '#ff4444', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  
  mainArea: { flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative' },
  header: { display: 'flex', justifyContent: 'center', gap: '30px', padding: '20px', background: 'rgba(17, 17, 17, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #333', zIndex: 10 },
  headerBtn: { background: 'transparent', color: '#ddd', border: 'none', fontSize: '14px', cursor: 'pointer', transition: '0.3s' },
  
  content: { flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' },
  watermark: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '12vw', fontWeight: '900', color: '#ffffff', opacity: 0.03, whiteSpace: 'nowrap', zIndex: 1, pointerEvents: 'none' }
};

export default Dashboard;