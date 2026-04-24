import React from 'react';

const Events = () => {
  const events = [1, 2, 3, 4, 5]; // Placeholder data

  return (
    <div style={{ padding: '80px 5%' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Past Events</h2>
      <div className="horizontal-scroll-container">
        {events.map((item) => (
          <div key={item} className="scroll-card">
            <div style={{ height: '150px', background: '#222', borderRadius: '8px', marginBottom: '15px' }}>
              {/* Image Placeholder */}
            </div>
            <h3>Event Name {item}</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem', marginTop: '10px' }}>
              A brief description of the amazing tech and cultural events held at IIT Roorkee.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;