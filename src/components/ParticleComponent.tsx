import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);
  const particlesCount = 5000;
  const posArray = new Float32Array(particlesCount * 9);

  // Create scattered particles
  for (let i = 0; i < particlesCount * 3; i++) {
    // Randomize positions for a scattered look
    posArray[i] = (Math.random() - 0.5) *10; // Adjust the range as needed
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  let clock = new THREE.Clock();
  let time = 3;

  useFrame(() => {
    if (meshRef.current) {
      time += clock.getDelta()* 19;
        // Rotate the mesh every frame
        meshRef.current.rotation.y += 0.00009;
    
        meshRef.current.rotation.x *=0.000009;

        meshRef.current.rotation.z -=0.00009;

      // Update the material properties for rounded particles
      const material = meshRef.current.material;
      if (material instanceof THREE.PointsMaterial) {
        // material.color.set(new THREE.Color(Math.abs(Math.sin(time)), Math.abs(Math.cos(time)), Math.abs(Math.tan(time))));
        // material.opacity = Math.abs(Math.cos(time));
        material.transparent = true;
        material.size = 0.009; // Adjust size for visible roundness
        material.sizeAttenuation = true;
      }
    }
  });

  return (
    <points ref={meshRef} geometry={particlesGeometry}>
      <pointsMaterial color={'#FF4FFF'} size={0.00009} sizeAttenuation={true} />
    </points>
  );
};

const ParticleComponent = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
      <Particles />
    </Canvas>
  );
};

export default ParticleComponent;
