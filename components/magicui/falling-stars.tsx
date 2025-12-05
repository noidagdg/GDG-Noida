"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface FallingStarsProps {
  color: string;
  count?: number;
}

interface Star {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  xOffset: number;
}

const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 7,
    size: 2 + Math.random() * 4,
    xOffset: (Math.random() - 0.5) * 100,
  }));
};

export default function FallingStars({ color, count = 30 }: FallingStarsProps) {
  const [stars] = useState(() => generateStars(count));

  // Convert hex to rgba with low opacity
  const hexToRgba = (hex: string, alpha: number = 0.3) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            width: star.size * 1.5,
            height: star.size * 1.5,
            background: `radial-gradient(circle, ${hexToRgba(color, 0.85)} 0%, ${hexToRgba(color, 0.5)} 50%, ${hexToRgba(color, 0.15)} 80%, transparent 100%)`,
            boxShadow: `0 0 ${star.size * 4}px ${hexToRgba(color, 0.7)}, 0 0 ${star.size * 8}px ${hexToRgba(color, 0.3)}`,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 1, 1, 0],
            x: [0, star.xOffset],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0,
          }}
        />
      ))}
      
      {/* Additional sparkle elements for variety */}
      {stars.slice(0, Math.floor(count / 3)).map((star) => (
        <motion.div
          key={`sparkle-${star.id}`}
          className="absolute"
          style={{
            left: `${star.x + 10}%`,
            width: star.size * 0.8,
            height: star.size * 0.8,
          }}
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 1, 1, 0],
            scale: [1, 1.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration * 1.2,
            delay: star.delay + 1,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0,
          }}
        >
          <div
            className="w-full h-full rounded-full blur-sm"
            style={{
              backgroundColor: hexToRgba(color, 0.8),
              boxShadow: `0 0 ${star.size * 3}px ${hexToRgba(color, 0.6)}`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

