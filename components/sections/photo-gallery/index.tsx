"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

interface PhotoGalleryProps {
  readonly className?: string;
}

// Image pools by SIZE CATEGORY - images only rotate within same size
// Tall images (h-182): for columns 1 & 8
const tallImagePool = [
  "/assets/photo-gallery/column1.webp",
  "/assets/photo-gallery/column1-2.webp",
  "/assets/photo-gallery/column8-1.webp",
  "/assets/photo-gallery/column8-2.webp",
];

// Medium images (h-146): for columns 2 & 7
const mediumImagePool = [
  "/assets/photo-gallery/column2-1.webp",
  "/assets/photo-gallery/column2-2.webp",
  "/assets/photo-gallery/column2-3.webp",
  "/assets/photo-gallery/column7-1.webp",
  "/assets/photo-gallery/column7-2.webp",
  "/assets/photo-gallery/column7-3.webp",
];

// Center card images (h-250)
const centerImagePool = [
  "/assets/photo-gallery/column3.webp",
  "/assets/photo-gallery/column4.webp",
  "/assets/photo-gallery/column5.webp",
  "/assets/photo-gallery/column6.webp",
];

// Center card offsets (fixed positions)
const centerOffsets = [50, 86, 113, 50];
const maxOffset = 113;

// Simple crossfade component - uses key to force clean remount on src change
function CrossfadeImage({ 
  src, 
  alt, 
  width, 
  height, 
  fill = false,
  sizes,
  className 
}: { 
  src: string; 
  alt: string; 
  width?: number; 
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [previousSrc, setPreviousSrc] = useState<string | null>(null);
  const [opacity, setOpacity] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // If src changed, start crossfade
    if (src !== currentSrc) {
      // Clear any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Keep old image visible, start fading
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreviousSrc(currentSrc);
      setCurrentSrc(src);
      setOpacity(0);
      
      // Fade in new image
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setOpacity(1);
        });
      });
      
      // Clean up previous image after transition
      timeoutRef.current = setTimeout(() => {
        setPreviousSrc(null);
      }, 1000);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [src, currentSrc]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Previous image (fades out) */}
      {previousSrc && (
        fill ? (
          <Image
            src={previousSrc}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover absolute inset-0"
          />
        ) : (
          <Image
            src={previousSrc}
            alt={alt}
            width={width}
            height={height}
            className="h-full w-full object-cover absolute inset-0"
          />
        )
      )}
      
      {/* Current image (fades in) */}
      {fill ? (
        <Image
          src={currentSrc}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity }}
        />
      ) : (
        <Image
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity }}
        />
      )}
    </div>
  );
}

export default function PhotoGallery({ className }: PhotoGalleryProps) {
  // State arrays - each index maps to a specific slot position
  // Initialize with unique images from pools
  const [tallSlots, setTallSlots] = useState(() => [...tallImagePool]);
  const [mediumSlots, setMediumSlots] = useState(() => [...mediumImagePool]);
  const [centerSlots, setCenterSlots] = useState(() => [...centerImagePool]);

  // Every 10 seconds, swap 2 images within ONE randomly chosen category
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick which category (0=tall, 1=medium, 2=center)
      const category = Math.floor(Math.random() * 3);
      
      if (category === 0 && tallSlots.length >= 2) {
        // Swap 2 positions in tall slots
        setTallSlots(prev => {
          const arr = [...prev];
          const len = arr.length;
          const i = Math.floor(Math.random() * len);
          let j = Math.floor(Math.random() * len);
          while (j === i) j = Math.floor(Math.random() * len);
          // Swap
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          return arr;
        });
      } else if (category === 1 && mediumSlots.length >= 2) {
        // Swap 2 positions in medium slots
        setMediumSlots(prev => {
          const arr = [...prev];
          const len = arr.length;
          const i = Math.floor(Math.random() * len);
          let j = Math.floor(Math.random() * len);
          while (j === i) j = Math.floor(Math.random() * len);
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          return arr;
        });
      } else if (centerSlots.length >= 2) {
        // Swap 2 positions in center slots
        setCenterSlots(prev => {
          const arr = [...prev];
          const len = arr.length;
          const i = Math.floor(Math.random() * len);
          let j = Math.floor(Math.random() * len);
          while (j === i) j = Math.floor(Math.random() * len);
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          return arr;
        });
      }
    }, 10000);
    
    return () => clearInterval(interval);
  }, [tallSlots.length, mediumSlots.length, centerSlots.length]);

  // Column 1 uses tallSlots[0] and tallSlots[1]
  // Column 8 uses tallSlots[2] and tallSlots[3]
  // Column 2 uses mediumSlots[0], [1], [2]
  // Column 7 uses mediumSlots[3], [4], [5]
  // Center uses centerSlots[0], [1], [2], [3]

  return (
    <section id="gallery" className={cn("relative w-full overflow-hidden bg-linear-to-b from-gray-50 to-white py-12 lg:py-0", className)}>
      <div className="relative mx-auto max-w-[1920px]">
        {/* Mobile View - Only 3 columns */}
        <div className="lg:hidden px-2 sm:px-4">
          {/* Title Section - Mobile */}
          <div className="mb-6 sm:mb-8 text-center">
            <BlurFade delay={0.2} inView>
              <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl text-zinc-900">
                Photo Gallery
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-600">
                A glimpse into our most memorable moments
              </p>
            </BlurFade>
          </div>

          {/* 3-Column Mobile Grid */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8 max-w-full">
            {/* Column 1 - Two Photos (tall) */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
              {[0, 1].map((idx) => (
                <BlurFade key={`mobile-col1-${idx}`} delay={0.1} inView>
                  <div className="group relative h-[120px] w-[85px] sm:h-[150px] sm:w-[105px] md:h-[182px] md:w-[134px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <CrossfadeImage
                      src={tallSlots[idx]}
                      alt={`Gallery ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 85px, (max-width: 768px) 105px, 134px"
                      className="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                  </div>
                </BlurFade>
              ))}
            </div>

            {/* Center - Single Photo */}
            <div className="flex items-center justify-center flex-shrink-0">
              <BlurFade delay={0.15} inView>
                <div className="group relative h-[200px] w-[140px] sm:h-[250px] sm:w-[175px] md:h-[300px] md:w-[220px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <CrossfadeImage
                    src={centerSlots[0]}
                    alt="Center Gallery"
                    fill
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 175px, 220px"
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                </div>
              </BlurFade>
            </div>

            {/* Column 8 - Two Photos (tall) */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
              {[2, 3].map((idx) => (
                <BlurFade key={`mobile-col8-${idx}`} delay={0.1} inView>
                  <div className="group relative h-[120px] w-[85px] sm:h-[150px] sm:w-[105px] md:h-[182px] md:w-[134px] overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <CrossfadeImage
                      src={tallSlots[idx]}
                      alt={`Gallery ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 85px, (max-width: 768px) 105px, 134px"
                      className="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop View - Full Layout */}
        <div className="hidden lg:block relative">
          <div className="relative flex items-start justify-center gap-[30px]">
            {/* Left Side - Column 1 & 2 */}
            <div className="flex gap-[30px]">
              {/* Column 1 - Tall images (h-182) */}
              <div className="flex flex-col items-center justify-start gap-[30px] pt-[70px]">
                {[0, 1].map((idx) => (
                  <div key={`col1-${idx}`} className="group relative h-[182px] w-[134px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <CrossfadeImage
                      src={tallSlots[idx]}
                      alt={`Gallery ${idx + 1}`}
                      width={134}
                      height={182}
                      className="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                  </div>
                ))}
              </div>

              {/* Column 2 - Medium images (h-146) */}
              <div className="flex flex-col items-center justify-start gap-[19px]">
                {[0, 1, 2].map((idx) => (
                  <div key={`col2-${idx}`} className="group relative h-[146px] w-[134px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <CrossfadeImage
                      src={mediumSlots[idx]}
                      alt={`Gallery ${idx + 1}`}
                      width={134}
                      height={146}
                      className="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Section - Center cards and text */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative flex flex-col items-center justify-center">
                {/* 4 Center Cards (h-250) */}
                <div className="relative flex items-start justify-center gap-[30px] mt-2" style={{ marginBottom: `${maxOffset}px` }}>
                  {[0, 1, 2, 3].map((idx) => (
                    <div
                      key={`center-${idx}`}
                      style={{ marginTop: `${maxOffset - centerOffsets[idx]}px` }}
                      className="group relative h-[250px] w-[135px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                      <CrossfadeImage
                        src={centerSlots[idx]}
                        alt={`Center Gallery ${idx + 1}`}
                        width={135}
                        height={250}
                        className="h-full w-full"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                    </div>
                  ))}
                </div>

                {/* Text */}
                <div className="relative text-center">
                  <BlurFade delay={0.9} inView>
                    <h2 className="whitespace-nowrap font-semibold text-5xl text-zinc-900 sm:text-6xl md:text-7xl lg:text-[64px]">
                      Photo Gallery
                    </h2>
                  </BlurFade>
                  <BlurFade delay={1.0} inView>
                    <p className="mt-4 text-lg text-zinc-600 sm:text-xl md:text-2xl">
                      A glimpse into our most memorable moments
                    </p>
                  </BlurFade>
                </div>
              </div>
            </div>

            {/* Right Side - Column 7 & 8 */}
            <div className="flex gap-[30px]">
              {/* Column 7 - Medium images (h-146) */}
              <div className="flex flex-col items-center justify-start gap-[19px]">
                {[3, 4, 5].map((idx) => (
                  <div key={`col7-${idx}`} className="group relative h-[146px] w-[134px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <CrossfadeImage
                      src={mediumSlots[idx]}
                      alt={`Gallery ${idx + 1}`}
                      width={134}
                      height={146}
                      className="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                  </div>
                ))}
              </div>

              {/* Column 8 - Tall images (h-182) */}
              <div className="flex flex-col items-center justify-start gap-[30px] pt-[70px]">
                {[2, 3].map((idx) => (
                  <div key={`col8-${idx}`} className="group relative h-[182px] w-[134px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <CrossfadeImage
                      src={tallSlots[idx]}
                      alt={`Gallery ${idx + 1}`}
                      width={134}
                      height={182}
                      className="h-full w-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
