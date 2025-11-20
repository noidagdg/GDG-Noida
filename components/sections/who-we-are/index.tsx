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
  // 15. Night GDG Noida image
  nightGdgNoida: "/assets/who-we-are/night-gdg.png",
};

export default function WhoWeAre({ className }: WhoWeAreProps) {
  return (
    <section
      id="about"
      className={cn(
        "relative w-full overflow-hidden py-16 md:py-20 bg-white",
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
        <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 pb-8 md:pb-0">
          {/* Column 1 - Left */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {/* Nested Grid for small cards: 1, 2 */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
              {/* 1. Community for ALL */}
              <BlurFade delay={0.2} inView>
                <div className="bg-[#FEF7E6] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform cursor-pointer relative w-full aspect-[1/1.1]">
                  <Image
                    src={imagePaths.communityForAll}
                    alt="Community for ALL"
                    fill
                    className="object-cover"
                  />
                </div>
              </BlurFade>

              {/* 2. Android Image */}
              <BlurFade delay={0.25} inView>
                <div className="bg-[#E6F6EB] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform cursor-pointer relative w-full aspect-[1/1.1]">
                  <Image
                    src={imagePaths.androidImage}
                    alt="Android Mascot"
                    fill
                    className="object-cover"
                  />
                </div>
              </BlurFade>
            </div>

            {/* 7. We are diverse community */}
            <BlurFade delay={0.3} inView>
              <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform cursor-pointer relative w-full aspect-[2.8/1.1]">
                <Image
                  src={imagePaths.techDiverse}
                  alt="Tech Diverse Community"
                  fill
                  className="object-cover"
                />
              </div>
            </BlurFade>

            {/* 10. Team image */}
            <BlurFade delay={0.35} inView>
              <div className="bg-[#1F2937] rounded-2xl md:rounded-3xl overflow-hidden relative group shadow-sm hover:scale-[1.02] transition-transform cursor-pointer w-full aspect-[2.3/1.14]">
                <Image
                  src={imagePaths.teamPhoto}
                  alt="GDG NOIDA Team"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                 <div className="absolute bottom-0 left-0 p-3 md:p-4 bg-linear-to-t from-black/90 via-black/50 to-transparent w-full">
                  <p className="text-white text-xs md:text-sm font-medium tracking-wide">GDG NOIDA Team</p>
                </div>
              </div>
            </BlurFade>

            {/* 11. Custom gif */}
            {/* <BlurFade delay={0.4} inView>
              <div className="bg-[#FADADD] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform cursor-pointer relative w-full aspect-[2.2/1]">
                <Image
                  src={imagePaths.customGif}
                  alt="Custom animation"
                  fill
                  className="object-cover"
                />
              </div>
            </BlurFade> */}
          </div>

          {/* Column 2 - Middle */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {/* Nested Grid: 3, 4 */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
               {/* 3. GDG Noida night image */}
               <BlurFade delay={0.45} inView>
                 <div className="bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full aspect-2/1">
                  <Image
                    src={imagePaths.nightGdgNoida}
                    alt="GDG NOIDA"
                    fill
                    className="object-cover"
                  />
                </div>
              </BlurFade>

               {/* 4. 3+ Golden Years */}
               <BlurFade delay={0.5} inView>
                 <div className="bg-[#E6F6EB] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full aspect-2/1">
                  <Image
                    src={imagePaths.goldenYears}
                    alt="3+ Golden Years"
                    fill
                    className="object-cover"
                  />
                </div>
              </BlurFade>
            </div>

             {/* 8. Big image in middle of Noida */}
             <BlurFade delay={0.55} inView>
               <div className="bg-linear-to-b from-blue-50 to-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full aspect-[1.05/1]">
                <Image
                  src={imagePaths.noidaGraphic}
                  alt="NOIDA City Graphic"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </BlurFade>

            {/* 12. Industry leaders */}
            <BlurFade delay={0.6} inView>
              <div className="bg-[#E6F6EB] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full aspect-[4.5/1]">
                <Image
                  src={imagePaths.industryLeaders}
                  alt="Industry Leaders"
                  fill
                  className="object-cover"
                />
              </div>
            </BlurFade>
          </div>

          {/* Column 3 - Right */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {/* Stats Grid: 5, 6 */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
              {/* 5. 33K+ Community Members */}
              <BlurFade delay={0.65} inView>
                <div className="bg-[#EBEFFF] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full aspect-[1.4/1]">
                  <Image
                    src={imagePaths.communityMembers}
                    alt="33K+ Community Members"
                    fill
                    className="object-cover"
                  />
                </div>
              </BlurFade>

              {/* 6. 50+ Successful Events */}
              <BlurFade delay={0.7} inView>
                <div className="bg-[#FEF7E6] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full aspect-[1.4/1]">
                  <Image
                    src={imagePaths.successfulEvents}
                    alt="50+ Successful Events"
                    fill
                    className="object-cover"
                  />
                </div>
              </BlurFade>
            </div>

            {/* 9. Digital Trendsetters */}
            <BlurFade delay={0.75} inView>
              <div className="bg-[#E6F6EB] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative group w-full aspect-[1.75/1]">
                <Image
                  src={imagePaths.digitalTrendsetters}
                  alt="Digital Trendsetters"
                  fill
                  className="object-cover"
                />
              </div>
            </BlurFade>

            {/* Bottom Right Grid: 13, 14 */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full">
              {/* 13. GDG Noida logo image */}
              <BlurFade delay={0.8} inView>
                <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm relative hover:scale-[1.02] transition-transform w-full aspect-[1/1.05]">
                  <Image
                    src={imagePaths.gdgNoidaLogo}
                    alt="GDG NOIDA Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </BlurFade>

              {/* 14. Behind the scenes */}
              <BlurFade delay={0.85} inView>
                <div className="bg-[#FEF7E6] rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:scale-[1.02] transition-transform relative w-full aspect-[1/1.05]">
                  <Image
                    src={imagePaths.behindScenes}
                    alt="Behind the Scenes"
                    fill
                    className="object-cover"
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
