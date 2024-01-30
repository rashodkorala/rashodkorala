import React from 'react';
import ParticleComponent from './ParticleComponent'; // Import your ParticleComponent
import MousePointerTrail from './main/interactive';

const Layout = ({ children }) => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* <ParticleComponent />  */}
      {/* <MousePointerTrail /> */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children} {/* Page content */}
      </div>
    </div>
  );
};

export default Layout;
