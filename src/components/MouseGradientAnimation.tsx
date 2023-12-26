import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const MousePointerAnimation = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const props = useSpring({ xy: [coords.x, coords.y], config: { tension: 120, friction: 14 } });

  const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
    setCoords({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // Add the hide-cursor class to hide the cursor when the component mounts
    document.body.classList.add('hide-cursor');

    // Remove the hide-cursor class when the component unmounts
    return () => {
      document.body.classList.remove('hide-cursor');
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div onMouseMove={handleMouseMove} className="fixed inset-0 z-50">
      <animated.div
        style={{ transform: props.xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}
        className="absolute w-20 h-20 rounded-full pointer-events-none bg-amber-500 flex items-center justify-center text-white text-xs shadow-lg"
      >
        <span className="text-2xl">👆</span>
      </animated.div>
    </div>
  );
};

export default MousePointerAnimation;
