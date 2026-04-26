import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const team = [
    { name: "Ankit", role: "Lead Developer" },
    { name: "Sneha", role: "Project Manager" },
    { name: "Rahul", role: "Design Head" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      style={styles.container}
    >
      <h1 style={{ color: '#00f3ff' }}>Our Team</h1>
      <div style={styles.grid}>
        {team.map(member => (
          <div key={member.name} style={styles.card}>
            <h3 style={{ color: '#00f3ff' }}>{member.name}</h3>
            <p style={{ color: '#fff' }}>{member.role}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const styles = {
  container: { padding: '100px 50px', textAlign: 'center', background: '#050511', minHeight: '80vh' },
  grid: { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' },
  card: { padding: '20px', border: '1px solid #00f3ff', borderRadius: '10px', width: '200px' }
};

export default AboutUs;