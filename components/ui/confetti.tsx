"use client";

import { useMemo } from "react";
import { motion } from "motion/react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  color: string;
  randomX: number;
}

const COLORS = ["#4285F4", "#F9AB00", "#34A853", "#EA4335"];

function generateConfettiPieces(): ConfettiPiece[] {
  return Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.2,
    duration: 2 + Math.random() * 1,
    rotation: Math.random() * 360,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    randomX: (Math.random() - 0.5) * 100,
  }));
}

export function ConfettiAnimation() {
  const pieces = useMemo(() => generateConfettiPieces(), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{
            opacity: 1,
            y: -10,
            x: 0,
            rotate: 0,
          }}
          animate={{
            opacity: 0,
            y: typeof window !== "undefined" ? window.innerHeight + 10 : 1000,
            x: piece.randomX,
            rotate: piece.rotation + 360,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeIn",
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            boxShadow: `0 0 10px ${piece.color}`,
          }}
        />
      ))}
    </div>
  );
}
