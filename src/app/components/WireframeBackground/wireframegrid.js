import React, { useRef } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { LineBasicMaterial, LineSegments } from 'three';

extend({ LineBasicMaterial, LineSegments });

const WireSquare = () => {
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <lineSegments ref={meshRef}>
      <lineBasicMaterial attach="material" color="black" />
      <edgesGeometry attach="geometry" args={[10, 10, 10]} />
    </lineSegments>
  );
};

const WireframeGrid = () => {
  return (
    <Canvas>
      <WireSquare />
    </Canvas>
  );
};

export default WireframeGrid;
