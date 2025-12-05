"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ 
  data, 
  color = "#4285F4",
  showHeader = false
}: { 
  data: TimelineEntry[]; 
  color?: string;
  showHeader?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans"
      ref={containerRef}
    >
      {showHeader && (
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
            Changelog from my journey
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
            I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
            a timeline of my journey.
          </p>
        </div>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-10 md:gap-8"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-24 self-start max-w-[140px] md:max-w-[180px] md:w-[180px] shrink-0">
              <div className="h-10 absolute left-3 md:left-5 w-10 rounded-full bg-white/80 backdrop-blur-sm dark:bg-black/80 flex items-center justify-center shadow-sm">
                <div 
                  className="h-4 w-4 rounded-full border-2 border-white/90 dark:border-black/90 shadow-md"
                  style={{ backgroundColor: color }}
                />
              </div>
              <h3 className="hidden md:block text-base md:pl-16 md:text-lg font-bold text-zinc-800 dark:text-neutral-300 tracking-tight whitespace-nowrap">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 pr-4 md:pl-0 w-full">
              <h3 className="md:hidden block text-sm mb-2 text-left font-bold text-zinc-800 dark:text-neutral-300 tracking-tight">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-9 left-7 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: `linear-gradient(to top, ${color}, ${color}80, transparent)`,
            }}
            className="absolute inset-x-0 top-0 w-[3px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
