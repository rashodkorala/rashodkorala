import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MousePointerTrail: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scene = useRef<THREE.Scene>(new THREE.Scene());
  const camera = useRef<THREE.PerspectiveCamera>(new THREE.PerspectiveCamera(75, 1, 0.1, 1000)); // Adjust aspect ratio later
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const positions = useRef<{ x: number; y: number; z: number }[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current || !renderer.current) return;

    const { current: container } = containerRef;

    const handleResize = () => {
      if (!renderer.current || !container) return;
      const { clientWidth, clientHeight } = container;
      camera.current.aspect = clientWidth / clientHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(clientWidth, clientHeight);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const { current: container } = containerRef;

    if (!renderer.current) {
      renderer.current = new THREE.WebGLRenderer();
    }
    renderer.current.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.current.domElement);

    camera.current.position.z = 5;

    return () => {
      if (container && renderer.current) {
        container.removeChild(renderer.current.domElement);
      }
    };
  }, []);

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    if (renderer.current) {
      requestAnimationFrame(animate);
      updateTrail();
      renderer.current.render(scene.current, camera.current);
    }
  };

  const updateTrail = () => {
    positions.current.push({ x: mouse.current.x, y: mouse.current.y, z: 0 });

    if (positions.current.length > 50) {
      positions.current.shift();
    }

    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    positions.current.forEach((pos) => {
      vertices.push(pos.x, pos.y, pos.z);
    });

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line = new THREE.Line(geometry, material);

    scene.current.add(line);
  };

  return <div ref={containerRef}></div>;
};

export default MousePointerTrail;
