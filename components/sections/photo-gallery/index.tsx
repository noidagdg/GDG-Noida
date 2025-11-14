"use client";

import { cn } from "@/lib/utils";
import InfiniteScroll from "@/components/magicui/infinite-scroll";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

interface PhotoGalleryProps {
  className?: string;
}

// Sample image data - replace with actual images
const columnImages = [
  // Column 1 (static) - w-134 h-182
  [
    { src: "/assets/photo-gallery/column1.webp", alt: "Event 1" },
    { src: "/assets/photo-gallery/column1-2.webp", alt: "Event 2" },
  ],
  // Column 2 (infinite scroll - left side) - w-134 h-146
  [
    { src: "/assets/photo-gallery/column2-1.webp", alt: "Event 4" },
    { src: "/assets/photo-gallery/column2-2.webp", alt: "Event 5" },
    { src: "/assets/photo-gallery/column2-3.webp", alt: "Event 6" },
    { src: "/assets/photo-gallery/column2-1.webp", alt: "Event 7" },
    { src: "/assets/photo-gallery/column2-2.webp", alt: "Event 8" },
  ],
  // Column 7 (infinite scroll - right side) - w-134 h-146
  [
    { src: "/assets/photo-gallery/column7-1.webp", alt: "Event 17" },
    { src: "/assets/photo-gallery/column7-2.webp", alt: "Event 18" },
    { src: "/assets/photo-gallery/column7-3.webp", alt: "Event 19" },
    { src: "/assets/photo-gallery/column7-1.webp", alt: "Event 20" },
    { src: "/assets/photo-gallery/column7-2.webp", alt: "Event 21" },
  ],
  // Column 8 (static) - w-134 h-182
  [
    { src: "/assets/photo-gallery/column8-1.webp", alt: "Event 20" },
    { src: "/assets/photo-gallery/column8-2.webp", alt: "Event 21" },
  ],
];
const centerCards = [
  { src: "/assets/photo-gallery/column3.webp", alt: "Center Card 1", offset: 50 }, // 50px above text
  { src: "/assets/photo-gallery/column4.webp", alt: "Center Card 2", offset: 86 }, // 86px above text
  { src: "/assets/photo-gallery/column5.webp", alt: "Center Card 3", offset: 113 }, // 113px above text (TOP)
  { src: "/assets/photo-gallery/column6.webp", alt: "Center Card 4", offset: 50 }, // 50px above text
];

// Find max offset to calculate relative positions
const maxOffset = Math.max(...centerCards.map(card => card.offset)); // 113px

export default function PhotoGallery({ className }: PhotoGalleryProps) {
  return (
    <section className={cn("relative w-full overflow-hidden bg-linear-to-b from-gray-50 to-white", className)}>
      <div className="relative mx-auto max-w-[1920px]">
        {/* Image Columns Grid */}
        <div className="relative flex items-start justify-center gap-[10px]">
          {/* Left Side - Column 1 & 2 */}
          <div className="flex gap-[19px]">
            {/* Column 1 - Static (w-134 h-182) */}
            <div className="flex flex-col items-center justify-start gap-[19px] pt-[70px]">
            {columnImages[0].map((img, idx) => (
              <BlurFade key={idx} delay={0.1 + idx * 0.05} inView>
                <div className="group relative h-[182px] w-[134px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={134}
                    height={182}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Column 2 - Infinite Scroll (Left) (w-134 h-146) */}
          <div className="flex flex-col items-center justify-center">
            <InfiniteScroll direction="down" speed={30} className="h-[610px]">
              <>
                {columnImages[1].map((img, idx) => (
                  <div key={`col2-${idx}`} className="group relative mb-[19px] h-[146px] w-[134px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={134}
                      height={146}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
              </>
            </InfiniteScroll>
          </div>
          </div>

          {/* Middle Section - Center cards and text */}
          <div className="relative flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center justify-center">
            {/* 4 Cards Above Text (w-135 h-250) */}
            <div className="relative flex items-start justify-center gap-[19px] mt-2" style={{ marginBottom: `${maxOffset}px` }}>
              {centerCards.map((card, idx) => (
                <BlurFade key={idx} delay={0.5 + idx * 0.1} inView>
                  <div 
                    className="group relative h-[250px] w-[135px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ 
                      marginTop: `${maxOffset - card.offset}px`
                    }}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      width={135}
                      height={250}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </BlurFade>
              ))}
            </div>

            {/* Text Overlay */}
            <div className="relative text-center">
              <BlurFade delay={0.9} inView>
                <h2 className="whitespace-nowrap text-5xl text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl">
                  Photo <span className="font-black">Gallery</span>
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
          <div className="flex gap-[19px]">
          {/* Column 7 - Infinite Scroll (Right) (w-134 h-146) */}
          <div className="flex flex-col items-center justify-center">
            <InfiniteScroll direction="down" speed={25} className="h-[610px]">
              <>
                {columnImages[2].map((img, idx) => (
                  <div key={`col7-${idx}`} className="group relative mb-[19px] h-[146px] w-[134px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={134}
                      height={146}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
              </>
            </InfiniteScroll>
          </div>

          {/* Column 8 - Static (w-134 h-182) */}
          <div className="flex flex-col items-center justify-start gap-[19px] pt-[70px]">
            {columnImages[3].map((img, idx) => (
              <BlurFade key={idx} delay={0.5 + idx * 0.05} inView>
                <div className="group relative h-[182px] w-[134px] overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={134}
                    height={182}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </BlurFade>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

