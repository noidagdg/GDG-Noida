"use client";

import React from "react";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/content";

interface TestimonialsProps {
  className?: string;
}

export default function Testimonials({ className }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className={cn(
        "relative w-full overflow-hidden py-16 md:py-24 bg-white",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <BlurFade delay={0.1} inView>
            <h2 className="text-4xl text-zinc-900 md:text-5xl lg:text-6xl mb-4">
              <span className="font-bold">Success Stories</span> that Define Our Community
            </h2>
          </BlurFade>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-[1400px] mx-auto">
          <div
            className="
              hide-scrollbar
              flex flex-nowrap items-stretch overflow-x-auto space-x-6 md:space-x-8 pb-4 
              lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-x-visible lg:space-x-0 lg:items-stretch"
          >
            {/* Column 1 */}
            <div className="flex-none w-80 sm:w-96 flex flex-col gap-6 md:gap-5 lg:w-auto h-full">
              <BlurFade delay={0.05} inView>
                <TestimonialCard
                  bgColor={testimonials.card1.bgColor}
                  content={testimonials.card1.content}
                  author={testimonials.card1.author}
                />
              </BlurFade>
              <BlurFade delay={0.08} inView>
                <TestimonialCard
                  bgColor={testimonials.card3.bgColor}
                  content={testimonials.card3.content}
                  author={testimonials.card3.author}
                />
              </BlurFade>
            </div>

            {/* Column 2 */}
            <div className="flex-none w-80 sm:w-96 flex flex-col gap-6 md:gap-5 lg:w-auto h-full">
              <BlurFade delay={0.05} inView>
                <TestimonialCard
                  bgColor={testimonials.card2.bgColor}
                  content={testimonials.card2.content}
                  author={testimonials.card2.author}
                />
              </BlurFade>
              <BlurFade delay={0.08} inView>
                <TestimonialCard
                  bgColor={testimonials.card4.bgColor}
                  content={testimonials.card4.content}
                  author={testimonials.card4.author}
                />
              </BlurFade>
            </div>

            {/* Column 3 */}
            <div className="flex-none w-80 sm:w-96 flex flex-col gap-6 md:gap-5 lg:w-auto h-full">
              <BlurFade delay={0.05} inView>
                <TestimonialCard
                  bgColor={testimonials.card5.bgColor}
                  content={testimonials.card5.content}
                  author={testimonials.card5.author}
                />
              </BlurFade>
              <BlurFade delay={0.08} inView>
                <TestimonialCard
                  bgColor={testimonials.card6.bgColor}
                  content={testimonials.card6.content}
                  author={testimonials.card6.author}
                />
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

