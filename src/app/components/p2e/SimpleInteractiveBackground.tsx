// SimpleInteractiveBackground.tsx
'use client'
import React, { useRef } from 'react';
import './SimpleInteractiveBackground.css';
import dynamic from 'next/dynamic';

const DynamicSketch = dynamic(
  () => import('./SimpleInteractiveSketchComponent'),  // Ensure the import path matches the file name exactly
  {
    loading: () => <p>Loading...</p>, // Optional: a component to display while the component is being loaded
    ssr: false, // Optional: set to false to only render this component on the client side
  }
);

const SimpleInteractiveBackground: React.FC = () => {
    const haloBackgroundRef = useRef(null);

    return (
        <div className="halo-background" ref={haloBackgroundRef}>
            <DynamicSketch haloBackgroundRef={haloBackgroundRef} />
            <div className="content">
                {/* Your content here */}
            </div>
            <a href="https://spaceglide.vercel.app/" target="_blank" className="game-link">
            <img src="/assets/gameIcon.png" alt="Play Game" />
            </a>
        </div>
    );
};

export default SimpleInteractiveBackground;
