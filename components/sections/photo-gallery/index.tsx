"use client";

import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

interface PhotoGalleryProps {
  readonly className?: string;
}

// Custom Push Pin SVG Component
const PushPin = ({ color, angle }: { color: string, angle: string }) => (
  <div className={cn("absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 z-20 drop-shadow-md", angle)}>
    <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pin needle */}
      <path d="M16 26L15 14H17L16 26Z" fill="#94a3b8" />
      {/* Pin base */}
      <path d="M13 14H19L18 17H14L13 14Z" fill={color} />
      {/* Pin head */}
      <circle cx="16" cy="11" r="5" fill={color} />
      {/* Shine/Reflection */}
      <circle cx="14.5" cy="9.5" r="1.5" fill="white" fillOpacity="0.6" />
    </svg>
  </div>
);

// Polaroid Frame Component
const Polaroid = ({
  src,
  alt,
  frameColor,
  pinColor,
  pinAngle,
  rotateAngle,
  aspectRatio,
  delay
}: any) => (
  <BlurFade delay={delay} inView className="relative flex-shrink-0 z-10">
    <div
      className={cn(
        "relative flex flex-col p-3 sm:p-4 pb-12 sm:pb-16 rounded-xl shadow-[0_15px_40px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105 hover:z-30 cursor-pointer w-[240px] sm:w-[280px] md:w-[320px]",
        frameColor,
        rotateAngle
      )}
    >
      <PushPin color={pinColor} angle={pinAngle} />

      {/* Photo Container */}
      <div className={cn("relative w-full overflow-hidden rounded border border-black/5 bg-zinc-100 shadow-inner", aspectRatio)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
        />
      </div>

      {/* Polaroid Caption */}
      <div className="absolute bottom-3 sm:bottom-5 left-0 w-full text-center px-4">
        <p className="text-zinc-800 font-medium text-[14px] sm:text-[16px] tracking-tight">
          Supporting Text Here
        </p>
      </div>
    </div>
  </BlurFade>
);

export default function PhotoGallery({ className }: PhotoGalleryProps) {
  return (
    <section id="gallery" className={cn("relative w-full overflow-hidden bg-white py-16 md:py-32", className)}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="relative mb-24 md:mb-36 text-center flex flex-col items-center z-20">
          <BlurFade delay={0.2} inView>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl text-zinc-900 tracking-tight">
                Photo Gallery
              </h2>
              {/* CS Badge */}
              <div className="flex items-center -ml-2 mt-1 relative">
                <div className="flex h-[38px] w-[38px] sm:h-[46px] sm:w-[46px] items-center justify-center rounded-full bg-[#fbbc04] shadow-[0_2px_10px_rgba(0,0,0,0.15)] z-10 border-2 border-white">
                  <span className="text-base sm:text-lg font-bold text-zinc-900">C</span>
                </div>
                <div className="flex h-[38px] w-[38px] sm:h-[46px] sm:w-[46px] -ml-3 items-center justify-center rounded-full bg-[#4285f4] shadow-[0_2px_10px_rgba(0,0,0,0.15)] z-20 border-2 border-white">
                  <span className="text-base sm:text-lg font-bold text-white">S</span>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="mt-4 text-lg text-zinc-500 sm:text-xl md:text-2xl font-medium max-w-2xl mx-auto">
              A glimpse into our most memorable moments
            </p>
          </BlurFade>
        </div>

        {/* Gallery Section */}
        <div className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center py-10">

          {/* Wavy Line SVG Background */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[300px] flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <svg
              className="w-[200%] md:w-full h-full text-zinc-900"
              viewBox="0 0 1440 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* A smooth bezier curve crossing the section */}
              <path
                d="M-100,200 C200,50 450,280 720,200 C1000,120 1200,280 1540,150"
                stroke="currentColor"
                strokeWidth="3.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Polaroids Container */}
          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 px-4">

            {/* Polaroid 1 (Left) - Pink Frame */}
            <div className="md:-mt-16 xl:-mt-24">
              <Polaroid
                src="/Images/polariod1.png"
                alt="Memorable moment 1"
                frameColor="bg-[#ffeef2]" // Light Pink
                pinColor="#a855f7" // Purple pin
                pinAngle="-rotate-[10deg]"
                rotateAngle="-rotate-6 md:-rotate-12 hover:rotate-0"
                aspectRatio="aspect-square"
                delay={0.4}
              />
            </div>

            {/* Polaroid 2 (Middle) - Green Frame */}
            <div className="md:mt-24 xl:mt-32">
              <Polaroid
                src="/Images/polaroid2.png"
                alt="Memorable moment 2"
                frameColor="bg-[#eef8f0]" // Light Green
                pinColor="#3b82f6" // Blue pin
                pinAngle="rotate-[12deg]"
                rotateAngle="rotate-3 md:rotate-6 hover:rotate-0"
                aspectRatio="aspect-[4/3]"
                delay={0.5}
              />
            </div>

            {/* Polaroid 3 (Right) - Blue Frame */}
            <div className="md:-mt-20 xl:-mt-32">
              <Polaroid
                src="/Images/polaroid3.png"
                alt="Memorable moment 3"
                frameColor="bg-[#eef4ff]" // Light Blue
                pinColor="#ef4444" // Red pin
                pinAngle="rotate-[5deg]"
                rotateAngle="-rotate-2 md:-rotate-3 hover:rotate-0"
                aspectRatio="aspect-[3/4]"
                delay={0.6}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
