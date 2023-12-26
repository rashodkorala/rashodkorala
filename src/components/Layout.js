import React from 'react';
import ParticleComponent from './ParticleComponent'; // Import your ParticleComponent

const Layout = ({ children }) => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <ParticleComponent /> {/* Particle system as background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children} {/* Page content */}
      </div>
    </div>
  );
};

export default Layout;
