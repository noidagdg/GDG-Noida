'use client';

import React, { useRef, useEffect } from "react";

// Crisp, vibrant versions of Google Brand Colors 
// Using 0.35 opacity for delicate, translucent blending trails
const GOOGLE_COLORS = [
  "rgba(66, 133, 244, 0.35)",   // Blue
  "rgba(234, 67, 53, 0.35)",    // Red
  "rgba(249, 171, 0, 0.35)",    // Yellow
  "rgba(52, 168, 83, 0.35)",    // Green
];

// High-end mathematical pseudo-random noise generator to simulate wind/fluid dynamics
const pseudoNoise = (x: number, y: number, time: number) => {
  const freq = 0.002; // How wide the curves of the river are
  return (
    Math.sin(x * freq + time) + 
    Math.cos(y * freq + time) + 
    Math.sin((x + y) * freq * 0.5 - time * 0.8)
  ) * Math.PI * 2;
};

interface FlowParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speedMultiplier: number;
  color: string;
  size: number;
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Disable alpha for huge performance boost since background is solid white
    const ctx = canvas.getContext("2d", { alpha: false }); 
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    
    let mouseX = -9999;
    let mouseY = -9999;
    
    // Flow Field Config
    // 1400 particles creating continuous long-exposure lines looks breathtaking
    const particlesCount = 1400; 
    const particles: FlowParticle[] = [];
    
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particlesCount; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * Math.max(H, 1200), // Ensure they spawn deep into scroll
          vx: 0,
          vy: 0,
          speedMultiplier: Math.random() * 1.5 + 0.5,
          color: GOOGLE_COLORS[Math.floor(Math.random() * GOOGLE_COLORS.length)],
          size: Math.random() * 1.5 + 0.5, // Subtle variance in line thickness
        });
      }
    };

    const resize = () => {
      W = window.innerWidth;
      H = canvas.closest('section')?.clientHeight || window.innerHeight;
      canvas.width = W; 
      canvas.height = H;
      initParticles();
      
      // Prime the canvas frame white initially
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, W, H);
    };

    window.addEventListener('resize', resize);
    resize();

    window.addEventListener('pointermove', (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    window.addEventListener('pointerout', () => {
      mouseX = -9999;
      mouseY = -9999;
    });

    let time = 0;

    const loop = () => {
      // 1. SILKY TRAIL EFFECT
      // Instead of clearing the screen, we draw a 10% opaque white rectangle over it.
      // This leaves a long fading "ghost" of the previous frames, creating beautiful continuous lines.
      ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
      ctx.fillRect(0, 0, W, H);
      
      time += 0.003; // Slowly evolve the vector mathematics over time

      // 2. PARTICLE PHYSICS
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Flow Vector Calculation
        const angle = pseudoNoise(p.x, p.y, time);
        
        // Base river current logic
        let forceX = Math.cos(angle) * p.speedMultiplier;
        let forceY = Math.sin(angle) * p.speedMultiplier;

        // VORTEX MOUSE TURBULENCE
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 280) { // Large interaction radius
           const strength = (280 - dist) / 280;
           
           // Calculate tangential whirlpool vector
           const tangentX = -dy / dist;
           const tangentY = dx / dist;
           
           // Calculate outward repulsion vector
           const repulseX = dx / dist;
           const repulseY = dy / dist;
           
           // Inject massive kinetic force (8x multiplier) that curves and repels
           // Creating beautiful geometric spirals when crossing paths with mouse
           forceX += (tangentX * 6 + repulseX * 3) * strength * 8;
           forceY += (tangentY * 6 + repulseY * 3) * strength * 8;
        }

        // Apply friction to force to maintain smooth flow instead of snapping
        p.vx = p.vx * 0.92 + forceX * 0.15;
        p.vy = p.vy * 0.92 + forceY * 0.15;

        // Save old position for drawing the streak
        const oldX = p.x;
        const oldY = p.y;

        // Update position
        p.x += p.vx * 2;
        p.y += p.vy * 2;

        // Wrap around seamlessly
        let wrapped = false;
        if (p.x < 0) { p.x = W; wrapped = true; }
        if (p.x > W) { p.x = 0; wrapped = true; }
        if (p.y < 0) { p.y = H; wrapped = true; }
        if (p.y > H) { p.y = 0; wrapped = true; }

        // 3. DRAW LINES
        if (!wrapped) {
            ctx.beginPath();
            ctx.moveTo(oldX, oldY);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = p.color;
            ctx.lineWidth = p.size;
            ctx.lineCap = "round";
            ctx.stroke();
        }
      }

      animRef.current = requestAnimationFrame(loop);
    };

    const animRef = { current: requestAnimationFrame(loop) };

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerout', onPointerLeave);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden bg-white">
      <canvas ref={canvasRef} className="w-full h-full" style={{ display: 'block' }} />
    </div>
  );
}
