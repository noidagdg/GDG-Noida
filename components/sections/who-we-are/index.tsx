"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";

interface WhoWeAreProps {
  className?: string;
}

// Image paths - All 14 images in exact order
const imagePaths = {
  // 1. Community for all
  communityForAll: "/assets/who-we-are/community-for-all.png",
  // 2. Android image
  androidImage: "/assets/who-we-are/android-image.png",
  // 3. GDG Noida image
  gdgNoidaImage: "/assets/who-we-are/gdg-noida-logo.png",
  // 4. 3+ golden years
  goldenYears: "/assets/who-we-are/golden-years.png",
  // 5. 33K+ community members
  communityMembers: "/assets/who-we-are/community-members.png",
  // 6. 50+ successful events
  successfulEvents: "/assets/who-we-are/successful-events.png",
  // 7. We are diverse community
  techDiverse: "/assets/who-we-are/tech-diverse.png",
  // 8. Big image in middle of Noida
  noidaGraphic: "/assets/who-we-are/noida-graphic.png",
  // 9. Digital trendsetters
  digitalTrendsetters: "/assets/who-we-are/digital-trendsetters.png",
  // 10. Team image
  teamPhoto: "/assets/who-we-are/team-photo.png",
  // 11. Custom gif
  customGif: "/assets/who-we-are/custom-gif.gif",
  // 12. Industry leaders
  industryLeaders: "/assets/who-we-are/industry-leaders.png",
  // 13. GDG Noida logo image
  gdgNoidaLogo: "/assets/who-we-are/gdg-noida-logo.png",
  // 14. Behind the scenes
  behindScenes: "/assets/who-we-are/behind-scenes.png",
};

export default function WhoWeAre({ className }: WhoWeAreProps) {
  return (
    <section
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
              Who <span className="font-bold">We Are</span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-lg md:text-xl text-zinc-600">
              Where ideas take shape and stories spark inspiration
            </p>
          </BlurFade>
        </div>

        {/* Main Grid Container - 1400px max width */}
        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-8 md:pb-0">
          {/* Column 1 - Left */}
          <div className="flex flex-col gap-4 w-full">
            {/* Nested Grid for small cards: 1, 2 */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* 1. Community for ALL */}
              <BlurFade delay={0.2} inView>
                <div className="bg-[#FEF7E6] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform cursor-pointer aspect-square relative w-full">
                  <Image
                    src={imagePaths.communityForAll}
                    alt="Community for ALL"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </BlurFade>

              {/* 2. Android Image */}
              <BlurFade delay={0.25} inView>
                <div className="bg-[#E6F6EB] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform cursor-pointer aspect-square relative w-full">
                  <Image
                    src={imagePaths.androidImage}
                    alt="Android Mascot"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </BlurFade>
            </div>

            {/* 7. We are diverse community - 355px × 126px */}
            <BlurFade delay={0.3} inView>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform cursor-pointer relative w-full" style={{ aspectRatio: "355/126" }}>
                <Image
                  src={imagePaths.techDiverse}
                  alt="Tech Diverse Community"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </BlurFade>

            {/* 10. Team image - 355px × 157px */}
            <BlurFade delay={0.35} inView>
              <div className="bg-[#1F2937] rounded-3xl overflow-hidden relative group shadow-sm hover:scale-[1.02] transition-transform cursor-pointer w-full" style={{ aspectRatio: "355/157" }}>
                <Image
                  src={imagePaths.teamPhoto}
                  alt="GDG NOIDA Team"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent w-full rounded-b-3xl">
                  <p className="text-white text-sm font-medium tracking-wide">GDG NOIDA Team</p>
                </div>
              </div>
            </BlurFade>

            {/* 11. Custom gif - 357px × 175px */}
            <BlurFade delay={0.4} inView>
              <div className="bg-[#FADADD] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform cursor-pointer relative w-full" style={{ aspectRatio: "357/175" }}>
                <Image
                  src={imagePaths.customGif}
                  alt="Custom animation"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </BlurFade>
          </div>

          {/* Column 2 - Middle */}
          <div className="flex flex-col gap-4 w-full">
            {/* Nested Grid: 3, 4 */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* 3. GDG Noida image - 218.04px × 104.2px */}
              <BlurFade delay={0.45} inView>
                <div className="bg-black rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full" style={{ aspectRatio: "218.04/104.2" }}>
                  <Image
                    src={imagePaths.gdgNoidaImage}
                    alt="GDG NOIDA"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </BlurFade>

              {/* 4. 3+ Golden Years - 240.8px × 104.2px */}
              <BlurFade delay={0.5} inView>
                <div className="bg-[#E6F6EB] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full" style={{ aspectRatio: "240.8/104.2" }}>
                  <Image
                    src={imagePaths.goldenYears}
                    alt="3+ Golden Years"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </BlurFade>
            </div>

            {/* 8. Big image in middle of Noida - 468.48px × 436.95px */}
            <BlurFade delay={0.55} inView>
              <div className="bg-gradient-to-b from-blue-50 to-white rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full" style={{ aspectRatio: "468.48/436.95" }}>
                <Image
                  src={imagePaths.noidaGraphic}
                  alt="NOIDA City Graphic"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
            </BlurFade>

            {/* 12. Industry leaders - 468.48px × 100.7px */}
            <BlurFade delay={0.6} inView>
              <div className="bg-[#E6F6EB] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full" style={{ aspectRatio: "468.48/100.7" }}>
                <Image
                  src={imagePaths.industryLeaders}
                  alt="Industry Leaders"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </BlurFade>
          </div>

          {/* Column 3 - Right */}
          <div className="flex flex-col gap-4 w-full">
            {/* Stats Grid: 5, 6 */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* 5. 33K+ Community Members - 217.16px × 159.37px */}
              <BlurFade delay={0.65} inView>
                <div className="bg-[#EBEFFF] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full" style={{ aspectRatio: "217.16/159.37" }}>
                  <Image
                    src={imagePaths.communityMembers}
                    alt="33K+ Community Members"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </BlurFade>

              {/* 6. 50+ Successful Events - 208px × 159px */}
              <BlurFade delay={0.7} inView>
                <div className="bg-[#FEF7E6] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full" style={{ aspectRatio: "208/159" }}>
                  <Image
                    src={imagePaths.successfulEvents}
                    alt="50+ Successful Events"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </BlurFade>
            </div>

            {/* 9. Digital Trendsetters - 429px × 270px */}
            <BlurFade delay={0.75} inView>
              <div className="bg-[#E6F6EB] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative group w-full" style={{ aspectRatio: "429/270" }}>
                <Image
                  src={imagePaths.digitalTrendsetters}
                  alt="Digital Trendsetters"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
            </BlurFade>

            {/* Bottom Right Grid: 13, 14 */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {/* 13. GDG Noida logo image - 197px × 215px */}
              <BlurFade delay={0.8} inView>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm relative hover:scale-[1.02] transition-transform group w-full" style={{ aspectRatio: "197/215" }}>
                  <Image
                    src={imagePaths.gdgNoidaLogo}
                    alt="GDG NOIDA Logo"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-3xl"
                  />
                </div>
              </BlurFade>

              {/* 14. Behind the scenes - 219.79px × 214.54px */}
              <BlurFade delay={0.85} inView>
                <div className="bg-[#FEF7E6] rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full" style={{ aspectRatio: "219.79/214.54" }}>
                  <Image
                    src={imagePaths.behindScenes}
                    alt="Behind the Scenes"
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
