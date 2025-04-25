"use client"; // Required for animations in Next.js

import React, { useEffect, useRef } from 'react';

function GradientDiv({children, className}: {children: React.ReactNode, className?: string}) {

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;

    let angle = 0;
    const speed = 1; // Rotation speed (degrees per frame)

    const updateGradient = () => {
      if (!divRef.current) return;
      angle = (angle + speed) % 360;
      divRef.current.style.background = `linear-gradient(${angle}deg, #64748b, #0f172a 70%)`;
      requestAnimationFrame(updateGradient);
    };

    updateGradient();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`flex justify-evenly w-full  mt-3 p-[2px] rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default GradientDiv;