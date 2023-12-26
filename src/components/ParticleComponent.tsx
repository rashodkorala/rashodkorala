import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import textureImg from './texture.png'; // Ensure this path is correct

const Particles = () => {
  const meshRef = useRef<THREE.Points>(null);
  const particlesCount = 60000;
  const posArray = new Float32Array(particlesCount * 3);
  const colorArray = new Float32Array(particlesCount * 3); // Array for colors

  // Create initial scattered particles and assign random colors
  for (let i = 0; i < particlesCount * 3; i += 3) {
    // Randomize positions for a scattered look
    posArray[i] = (Math.random() - 0.5) * 10;
    posArray[i + 1] = (Math.random() - 0.5) * 10;
    posArray[i + 2] = (Math.random() - 0.5) * 10;

    // Assign random color for each vertex
    colorArray[i] =Math.random();
    colorArray[i + 1] = Math.random()* 0.2;
    colorArray[i + 2] = Math.random();
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3)); // Add color attribute

  const texture = useLoader(THREE.TextureLoader, '/assets/texture.png');

  useFrame(() => {
    if (meshRef.current) {
      // Optional: Update logic for each frame (e.g., rotation)
      meshRef.current.rotation.y += 0.00009;
      meshRef.current.rotation.x -= 0.000009;
      meshRef.current.rotation.z += 0.0005;
    }
  });

  return (
    <points ref={meshRef} geometry={particlesGeometry}>
      <pointsMaterial
        map={texture} // Apply the texture
        size={0.01} // Adjust size as needed
        sizeAttenuation={true}
        vertexColors // Enable vertex colors
        transparent={false}
        alphaTest={0.1} // This helps with handling the texture's transparency
      />
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
