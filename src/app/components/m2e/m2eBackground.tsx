// m2eBackground.tsx
'use client'
import React, { useEffect, useRef } from 'react';
import './m2eBackground.css';
import dynamic from 'next/dynamic';

const DynamicSketch = dynamic(
  () => import('./M2ESketchComponent'),  // Ensure the import path matches the file name exactly
  {
    loading: () => <p>Loading...</p>, // Optional: a component to display while the component is being loaded
    ssr: false, // Optional: set to false to only render this component on the client side
  }
);

const M2eBackground: React.FC = () => {
    const haloBackgroundRef = useRef(null);

    return (
        <div className="halo-background" ref={haloBackgroundRef}>
            <DynamicSketch haloBackgroundRef={haloBackgroundRef} />
            <div className="content">
                {/* Your content here */}
            </div>
            {/*<a href="https://metaarcadeclub.com/pong" className="game-link">
            <img src="/assets/pongIcon.png" alt="Play Game" />
            </a>*/}
        </div>
    );
};

export default M2eBackground;
