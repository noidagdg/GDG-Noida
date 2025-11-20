'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { BlurFade } from '@/components/magicui'

interface Sponsor {
  id: number
  name: string
  logo: string
  bgColor: string
  testimonial: {
    text: string
    author: string
    position: string
    rating: number
    photo: string
  }
}

const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Neo4j",
      logo: "/assets/sponsors/neo4j.svg",
      bgColor: "bg-blue-50",
      testimonial: {
        text: "I am thrilled to share my experience of collaborating with GDG Noida on behalf of Neo4j. Sponsoring DevFest Noida last year, I was impressed by the professionalism and dedication of the GDG team. The event was a resounding success, with an engaged audience that aligned perfectly with our goals. Based on this successful partnership, I have hosted multiple meetups with GDG Noida, and each event has been exceptional. The team consistently delivers high-quality tech events with seamless coordination and attention to detail, ensuring smooth execution and effective audience engagement. The visibility and reach we gained through our partnership with GDG Noida have been invaluable. I am very happy with the collaboration and look forward to continuing our long-term partnership",
        author: "Siddhant Agarwal",
        position: "DevRel, Neo4j",
        rating: 5,
        photo: "/assets/sponsors/sid-neo4j.svg"
      }
    },
    {
      id: 2,
      name: "GitHub",
      logo: "/assets/sponsors/github.svg",
      bgColor: "bg-yellow-50",
      testimonial: {
        text: "I'm incredibly grateful to GDG Noida for providing an exceptional platform to showcase Copilot and engage with a passionate community of developers. The enthusiasm and competitive spirit displayed by participants in the contests were truly inspiring. I'm eager to contribute again at the next DevFest!",
        author: "Shubhangi Gupta",
        position: "Github Camous Expert",
        rating: 5,
        photo: "/assets/sponsors/shubhangi-GH.svg"
      }
    },
    {
      id: 3,
      name: "Brevo",
      logo: "/assets/sponsors/brrr.svg",
      bgColor: "bg-green-50",
      testimonial: {
        text: "Our partnership with GDG Noida has been a highlight of the past year for Brevo. Sponsoring DevFest Noida 2024 gave us a firsthand look at the team’s remarkable ability to connect with developers. Their dedication to fostering a vibrant and engaged tech community is truly inspiring, and it’s a mission we're proud to support. The high-quality events and seamless execution have not only enhanced our visibility but have also created meaningful connections. We are grateful for this reliable and committed partnership and look forward to continuing to build on this success in the future.",
        author: "Harshit Punwar",
        position: "Developer Ecosystem Manager",
        rating: 5,
        photo: "/assets/sponsors/harshit-brevo.svg"
      }
    },
    {
      id: 4,
      name: "Capx",
      logo: "/assets/sponsors/capx.svg",
      bgColor: "bg-pink-50",
      testimonial: {
        text: "The overall feedback from the event has been outstanding! It was an amazing experience. We connected with numerous developers who were genuinely interested and enthusiastic about building innovative projects.",
        author: "Vaibhav Tyagi",
        position: "Founder, Capx",
        rating: 5,
        photo: "/assets/sponsors/vaibhav.svg"
      }
    }
  ]

function Sponsors() {
  const [activeSponsor, setActiveSponsor] = useState<Sponsor>(sponsors[0])
  const sponsorRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleSponsorClick = (sponsor: Sponsor) => {
    setActiveSponsor(sponsor)
  }

  // Scroll active sponsor to center within container with top offset
  useEffect(() => {
    const activeElement = sponsorRefs.current[activeSponsor.id]
    const container = containerRef.current
    
    if (activeElement && container) {
      // Add offset for spacing at the top (80px for desktop, 20px for mobile horizontal scroll)
      const topOffset = window.innerWidth >= 1024 ? 80 : 0
      const leftOffset = window.innerWidth < 1024 ? 20 : 0
      
      // Calculate scroll positions to center the element within the container with offset
      const scrollLeft = activeElement.offsetLeft - (container.offsetWidth / 2) + (activeElement.offsetWidth / 2) - leftOffset
      const scrollTop = activeElement.offsetTop - (container.offsetHeight / 2) + (activeElement.offsetHeight / 2) - topOffset
      
      container.scrollTo({
        left: scrollLeft,
        top: scrollTop,
        behavior: 'smooth'
      })
    }
  }, [activeSponsor])

  // Auto-rotate sponsors every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSponsor((currentSponsor) => {
        const currentIndex = sponsors.findIndex(s => s.id === currentSponsor.id)
        const nextIndex = (currentIndex + 1) % sponsors.length
        return sponsors[nextIndex]
      })
    }, 6000) // 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="sponsors" className={`relative pt-8 pb-12 px-4 md:pt-[32px] md:pb-[50px] md:px-[64px] ${activeSponsor.bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
        <BlurFade delay={0.1} inView>
          <h2 className="text-3xl text-zinc-900 md:text-4xl lg:text-5xl xl:text-6xl">
              Star <span className="font-bold">Sponsors</span>
          </h2>
        </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="mt-3 text-sm text-zinc-600 md:mt-4 md:text-base lg:text-lg">
              Empowering our vision with their support
            </p>
          </BlurFade>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 items-start">
          {/* Left side - Sponsor Logos (Horizontal scroll on mobile, vertical scroll on desktop) */}
          <div 
            ref={containerRef}
            className="w-full bg-white p-3 md:p-4 rounded-[20px]
                       flex gap-4 overflow-x-auto no-scrollbar
                       lg:flex-col lg:gap-6 lg:max-h-[563px] lg:overflow-y-scroll lg:overflow-x-hidden lg:scrollbar-hide"
          >
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                ref={(el) => {
                  sponsorRefs.current[sponsor.id] = el
                }}
                onClick={() => handleSponsorClick(sponsor)}
                className={`rounded-[18px] p-3 md:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer relative overflow-hidden shrink-0
                  ${activeSponsor.id === sponsor.id
                    ? `${sponsor.bgColor} lg:min-h-[280px]`
                    : 'lg:h-[114px]'
                  }
                  w-[100px] h-[80px] md:w-[120px] md:h-[100px] lg:w-auto lg:h-auto`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: sponsor.id * 0.1 }}
              >
                {activeSponsor.id === sponsor.id && (
                  <motion.div
                    className={`absolute inset-0 rounded-[18px] opacity-10`}
                    layoutId="activeSponsor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={180}
                    height={80}
                    className={`object-contain transition-all duration-500 w-full h-auto max-w-[60px] md:max-w-[100px] lg:max-w-[180px] ${
                      activeSponsor.id === sponsor.id
                        ? 'grayscale-0 opacity-100'
                        : 'grayscale opacity-60 hover:opacity-80'
                    }`}
                    style={{
                      filter: activeSponsor.id === sponsor.id 
                        ? 'grayscale(0%)' 
                        : 'grayscale(100%)',
                      transition: 'filter 0.5s ease-in-out, opacity 0.3s ease-in-out'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Testimonial Card with Animation */}
          <div className="w-full lg:col-span-2 mt-4 lg:mt-0"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSponsor.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-[20px] p-6 md:p-8 lg:p-10 shadow-2xl w-full h-[500px] md:h-[550px] lg:w-[809.983px] lg:h-[563px] flex flex-col"
              >
                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed grow"
                >
                  {activeSponsor.testimonial.text}
                </motion.p>

                {/* Author Info - Fixed at bottom */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="border-t border-gray-200 pt-4 md:pt-6 mt-auto"
                >
                  {/* Photo and Author Info */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <Image 
                      src={activeSponsor.testimonial.photo} 
                      alt={activeSponsor.testimonial.author} 
                      width={92} 
                      height={92} 
                      className="rounded-full object-cover w-16 h-16 md:w-20 md:h-20 lg:w-[92px] lg:h-[92px]"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-1">
                        {activeSponsor.testimonial.author}
                      </h3>
                      <p className="text-gray-500 text-sm md:text-base lg:text-lg">
                        {activeSponsor.testimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Dotted line and Star Rating at bottom */}
                  <div className="flex items-center justify-end gap-3 md:gap-4 w-full mt-4 md:mt-6">
                    {/* Dotted separator line */}
                    <div className="flex-1 border-t-2 border-dotted border-gray-300" />
                    
                    {/* Star Rating */}
                    <div className="flex gap-0.5 md:gap-1 shrink-0">
                      {[...Array(activeSponsor.testimonial.rating)].map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.05, duration: 0.2 }}
                        >
                          <Star className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors

