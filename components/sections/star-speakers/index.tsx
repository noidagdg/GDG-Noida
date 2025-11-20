"use client";

import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";

interface StarSpeakersProps {
  className?: string;
}

const speakers = [
  {
    id: 1,
    name: "Sahil Kalyani",
    position: "Frontend Engineer, Amazon",
    image: "/assets/speakers/speaker1.webp",
    backgroundColor: "#D2E3FC",
  },
  {
    id: 2,
    name: "Siddhika Aggarwal",
    position: "Co-Founder, Mahila Money",
    image: "/assets/speakers/speaker2.webp",
    backgroundColor: "#CEEAD6",
  },
  {
    id: 3,
    name: "Rohit Mishra",
    position: "Co-Founder, Mastry",
    image: "/assets/speakers/speaker3.webp",
    backgroundColor: "#FAD2CF",
  },
  {
    id: 4,
    name: "Arpan Garg",
    position: "Founder, Commudle",
    image: "/assets/speakers/speaker4.webp",
    backgroundColor: "#FEEFC3",
  },
];

export default function StarSpeakers({ className }: StarSpeakersProps) {
  return (
    <section id="speakers" className={cn("relative w-full overflow-hidden py-16 md:py-24", className)}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl text-zinc-900 md:text-5xl lg:text-6xl">
              Our Star <span className="font-bold">Speakers</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="mt-4 text-base text-zinc-600 md:text-lg">
              leaders sharing ideas that shape the future
            </p>
          </BlurFade>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid lg:grid-cols-4 lg:gap-8 lg:justify-center">
          {speakers.map((speaker, idx) => (
            <BlurFade key={speaker.id} delay={0.3 + idx * 0.1} inView>
              <div
                className="group relative h-[230px] sm:h-[314px] w-full lg:w-[260px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: speaker.backgroundColor }}
              >
                {/* Speaker Image - Centered */}
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    width={260}
                    height={314}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Gradient Overlay (white to transparent, from bottom to 150px) */}
                <div 
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: '150px',
                    background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
                  }}
                />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-center">
                  <h3 className="text-md md:text-xl lg:text-2xl font-bold text-black">
                    {speaker.name}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm lg:text-base text-black">
                    {speaker.position}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

