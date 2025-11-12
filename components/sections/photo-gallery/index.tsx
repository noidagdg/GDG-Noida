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
  // Column 1 (static)
  [
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300", alt: "Event 1" },
    { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400", alt: "Event 2" },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=350", alt: "Event 3" },
  ],
  // Column 2 (infinite scroll - left side)
  [
    { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300", alt: "Event 4" },
    { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=350", alt: "Event 5" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=400", alt: "Event 6" },
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=320", alt: "Event 7" },
    { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=380", alt: "Event 8" },
  ],
  // Column 3 (static)
  [
    { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=350", alt: "Event 7" },
    { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300", alt: "Event 8" },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=380", alt: "Event 9" },
  ],
  // Column 4 (static - left of center)
  [
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=320", alt: "Event 10" },
    { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400", alt: "Event 11" },
  ],
  // Column 5 (static - right of center)
  [
    { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400", alt: "Event 12" },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300", alt: "Event 13" },
  ],
  // Column 6 (static)
  [
    { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=350", alt: "Event 14" },
    { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=300", alt: "Event 15" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=380", alt: "Event 16" },
  ],
  // Column 7 (infinite scroll - right side)
  [
    { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=300", alt: "Event 17" },
    { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=350", alt: "Event 18" },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400", alt: "Event 19" },
    { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=330", alt: "Event 20" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=370", alt: "Event 21" },
  ],
  // Column 8 (static)
  [
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=350", alt: "Event 20" },
    { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300", alt: "Event 21" },
    { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=320", alt: "Event 22" },
  ],
];

export default function PhotoGallery({ className }: PhotoGalleryProps) {
  return (
    <section className={cn("relative w-full overflow-hidden bg-linear-to-b from-gray-50 to-white py-32", className)}>
      <div className="relative mx-auto max-w-[1920px]">
        {/* Image Columns Grid */}
        <div className="relative grid grid-cols-2 gap-4 px-4 sm:grid-cols-4 lg:grid-cols-8">
          {/* Column 1 - Static */}
          <div className="flex flex-col gap-4">
            {columnImages[0].map((img, idx) => (
              <BlurFade key={idx} delay={0.1 + idx * 0.05} inView>
                <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Column 2 - Infinite Scroll (Left) */}
          <div className="flex flex-col">
            <InfiniteScroll direction="down" speed={30} className="h-[800px]">
              <>
                {columnImages[1].map((img, idx) => (
                  <div key={`col2-${idx}`} className="group relative mb-4 overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={300}
                      className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
              </>
            </InfiniteScroll>
          </div>

          {/* Column 3 - Static */}
          <div className="flex flex-col gap-4">
            {columnImages[2].map((img, idx) => (
              <BlurFade key={idx} delay={0.2 + idx * 0.05} inView>
                <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Column 4 - Static */}
          <div className="flex flex-col gap-4">
            {columnImages[3].map((img, idx) => (
              <BlurFade key={idx} delay={0.3 + idx * 0.05} inView>
                <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Column 5 - Static */}
          <div className="flex flex-col gap-4">
            {columnImages[4].map((img, idx) => (
              <BlurFade key={idx} delay={0.3 + idx * 0.05} inView>
                <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Column 6 - Static */}
          <div className="flex flex-col gap-4">
            {columnImages[5].map((img, idx) => (
              <BlurFade key={idx} delay={0.4 + idx * 0.05} inView>
                <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Column 7 - Infinite Scroll (Right) */}
          <div className="flex flex-col">
            <InfiniteScroll direction="down" speed={25} className="h-[800px]">
              <>
                {columnImages[6].map((img, idx) => (
                  <div key={`col7-${idx}`} className="group relative mb-4 overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={300}
                      className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                ))}
              </>
            </InfiniteScroll>
          </div>

          {/* Column 8 - Static */}
          <div className="flex flex-col gap-4">
            {columnImages[7].map((img, idx) => (
              <BlurFade key={idx} delay={0.5 + idx * 0.05} inView>
                <div className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Central Text Overlay */}
          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative rounded-3xl bg-white/90 px-12 py-10 text-center shadow-2xl backdrop-blur-sm">
              <BlurFade delay={0.6} inView>
                <h2 className="text-5xl font-bold text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl">
                  Photo <span className="font-black">Gallery</span>
                </h2>
              </BlurFade>
              <BlurFade delay={0.7} inView>
                <p className="mt-4 text-lg text-zinc-600 sm:text-xl md:text-2xl">
                  A glimpse into our most memorable moments
                </p>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

