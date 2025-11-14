'use client'

import React from 'react'
import Image from 'next/image'
import { Code2, Zap, Rocket } from 'lucide-react'
import BlurFade from '@/components/magicui/blur-fade'

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col px-4 py-16 bg-white overflow-hidden w-full items-center justify-center">
      {/* Background Cover SVG */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/assets/Cover.svg" 
          alt="Background" 
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tech Icons */}
        <BlurFade delay={0.1} inView>
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="p-3 bg-blue-50 rounded-lg">
              <Code2 className="w-8 h-8 text-blue-600" />
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Rocket className="w-8 h-8 text-green-600" />
            </div>
          </div>
        </BlurFade>

        {/* Main Slogan */}
        <BlurFade delay={0.25} inView>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-blue-600">Think.</span>{' '}
            <span className="text-orange-500">Build.</span>{' '}
            <span className="text-green-600">Grow.</span>
          </h1>
        </BlurFade>

        {/* Description */}
        <BlurFade delay={0.5} inView>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Dive deep into the latest trends and innovations through talks, workshops, & more
          </p>
        </BlurFade>

        {/* Join Community Button */}
        {/* <BlurFade delay={0.75} inView> */}
            <button
            className="flex items-center rounded-full justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer mx-auto"
            style={{
                padding: '8.973px 15.72px 9.366px 15.72px',
                width: '275.769px',
                height: '66.294px',
            }}
            >
            {/* <Users size={20} /> */}
            <Image src="/assets/commudle.svg" alt="Join Community" width={34} height={21} />
            <span style={{
                color: '#FFF',
                fontSize: '26px',
                fontWeight: '600',
                lineHeight: '12.838px',
            }}>Join Community</span>
          </button>
          {/* </ShimmerButton> */}
        {/* </BlurFade> */}
      </div>
    </section>
  )
}

export default Hero

