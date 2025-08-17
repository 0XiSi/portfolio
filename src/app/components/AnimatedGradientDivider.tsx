"use client";
import { useEffect, useRef } from 'react';

const AnimatedGradientDivider = ({height}:{height: number}) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!divRef.current) return;

    let position = 0;
    const speed = 0.3;
    let direction = 1;
    const pointWidth = 1; // Width of the colored point in percentage
    const fadeWidth = 20; // Width of fade area on each side

    const animate = () => {
      if (!divRef.current) return;

      position += speed * direction;

      // Reverse direction before hitting edges
      if (position > (120 - pointWidth - fadeWidth)) {
        position = 120 - pointWidth - fadeWidth;
        direction = -1;
      } else if (position < fadeWidth - 20) {
        position = fadeWidth - 20;
        direction = 1;
      }

      // Gradient with fade on both ends
      divRef.current.style.backgroundImage =
        `linear-gradient(to right,
          transparent 0%,
          rgba(71, 84, 105, 0.3) ${position - fadeWidth}%,
          #475469 ${position}%,
          #475469 ${position + pointWidth}%,
          rgba(71, 84, 105, 0.3) ${position + pointWidth + fadeWidth}%,
          transparent 100%)`;

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={`border-0 w-full bg-transparent`}
      style={height ? { height: `${height}rem` } : {}}
    />
  );
};

export default AnimatedGradientDivider;