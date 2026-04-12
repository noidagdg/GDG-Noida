'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function AnimatedDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track this specific element's scroll progress through the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "center 40%"] // Starts animating when it enters bottom 5%, finishes slightly above center
  });

  // Scale horizontally from 0% to 100%
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Fade in smoothly as it scales
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0.6, 1]);

  return (
    <div 
        ref={ref} 
        className={`w-full py-12 md:py-20 flex items-center justify-center bg-white ${className}`}
    >
      <motion.div 
        style={{ 
            scaleX, 
            opacity,
            transformOrigin: "center" // Ensures it spreads outwards from the precise middle
        }}
        className="w-[85%] max-w-6xl h-[1px] bg-gray-300 rounded-full"
      />
    </div>
  );
}
