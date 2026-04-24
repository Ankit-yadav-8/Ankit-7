import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'rgba(0,0,0,0.8)', padding: '50px 5%', borderTop: '1px solid #333' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        
        <div>
          <h3 style={{ color: '#00f3ff', marginBottom: '15px' }}>Think India Club</h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>A student-driven initiative at IIT Roorkee focusing on innovation, culture, and technology.</p>
        </div>

        <div>
          <h3 style={{ marginBottom: '15px' }}>Contact Us</h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Email: contact@thinkindia-iitr.in</p>
          <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Location: SAC, IIT Roorkee</p>
        </div>

        <div>
          <h3 style={{ marginBottom: '15px' }}>Core Team</h3>
          <ul style={{ listStyle: 'none', color: '#aaa', fontSize: '0.9rem' }}>
            <li style={{ marginBottom: '8px' }}><strong>John Doe</strong> - President</li>
            <li style={{ marginBottom: '8px' }}><strong>Jane Smith</strong> - Technical Head</li>
            <li><strong>Rahul Kumar</strong> - Design Lead</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;