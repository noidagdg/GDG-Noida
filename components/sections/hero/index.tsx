'use client'

import React from 'react'
import Image from 'next/image'
import BlurFade from '@/components/magicui/blur-fade'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-4 py-8 md:py-16 bg-white overflow-hidden w-full items-center justify-center">
      {/* Background Cover SVG */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/cover-bg.svg" 
          alt="Background" 
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative Rectangle Elements - Bottom of Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-[1] overflow-hidden pointer-events-none flex items-end justify-center gap-4 md:gap-8 px-4">
      <Image 
          src="/assets/Rectangle 41272.svg" 
          alt="" 
          width={450}
          height={450}
          className=" object-contain w-auto "
        />
        
        <Image 
          src="/assets/Rectangle 41269.svg" 
          alt="" 
          width={400}
          height={400}
          className="  object-contain w-auto "
        />
        <Image 
          src="/assets/Rectangle 41270.svg" 
          alt="" 
          width={500}
          height={500}
          className="  object-contain w-auto "
        />
        <Image 
          src="/assets/Rectangle 41271.svg" 
          alt="" 
          width={600}
          height={600}
          className="  object-contain w-auto "
        />
         
      </div>

      {/* Background Ripple Effect - Responsive */}
      <div className="hidden md:block">
        <BackgroundRippleEffect 
          rows={16} 
          cols={38} 
          cellSize={56}
          colors={['#4285F4', '#F9AB00', '#34A853']}
        />
      </div>
      <div className="block md:hidden">
        <BackgroundRippleEffect 
          rows={12} 
          cols={12} 
          cellSize={40}
          colors={['#4285F4', '#F9AB00', '#34A853']}
        />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto text-center space-y-6 md:space-y-8  px-4 mb-[200px]">
        {/* Main Slogan */}
        <BlurFade delay={0.25} inView>
          <h1 className="font-bold flex flex-wrap items-baseline justify-center sm:gap-3 md:gap-4">
            <span className="text-[#4285F4] text-[48px] sm:text-[64px] md:text-[96px] lg:text-[140px] font-semibold leading-[1.1]">
              Think<span className="text-black">.</span>
            </span>
            <span className="text-[#F9AB00] text-[48px] sm:text-[64px] md:text-[96px] lg:text-[140px] font-semibold leading-[1.1]">
              Build<span className="text-black">.</span>
            </span>
            <span className="text-[#34A853] text-[48px] sm:text-[64px] md:text-[96px] lg:text-[140px] font-semibold leading-[1.1]">
              Grow<span className="text-black">.</span>
            </span>
          </h1>
        </BlurFade>

        {/* Description */}
        <BlurFade delay={0.5} inView>
          <p className="mx-auto text-center text-black font-urbanist text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium leading-relaxed max-w-3xl px-2">
            Dive deep into the latest trends and innovations through talks, workshops, &amp; more
          </p>
        </BlurFade>

        {/* Join Community Button */}
        <BlurFade delay={0.75} inView>
          <button
            className="flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer mx-auto rounded-full shadow-lg w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 md:py-4 min-w-[200px] sm:min-w-[275px]"
          >
            <Image 
              src="/assets/commudle.svg" 
              alt="Join Community" 
              width={34} 
              height={21}
              className="w-6 h-4 sm:w-8 sm:h-5 md:w-[34px] md:h-[21px]"
            />
            <span className="text-base sm:text-lg md:text-xl font-semibold">Join Community</span>
          </button>
        </BlurFade>
      </div>
      
    </section>
  )
}

export default Hero

