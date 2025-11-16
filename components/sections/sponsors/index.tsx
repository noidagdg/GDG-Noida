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
      logo: "/assets/sponsors/brevo.svg",
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
        position: "Community Manager, Capx",
        rating: 5,
        photo: "/assets/sponsors/vaibhav.svg"
      }
    }
  ]

function Sponsors() {
  const [activeSponsor, setActiveSponsor] = useState<Sponsor>(sponsors[0])
  const sponsorRefs = useRef<{ [key: number]: HTMLDivElement | null }>({})

  const handleSponsorClick = (sponsor: Sponsor) => {
    setActiveSponsor(sponsor)
  }

  // Scroll active sponsor to center
  useEffect(() => {
    const activeElement = sponsorRefs.current[activeSponsor.id]
    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
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
    }, 50000) // 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={`relative pt-[32px] pb-[50px] px-[64px] ${activeSponsor.bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
        <BlurFade delay={0.1} inView>
          <h2 className="text-4xl text-zinc-900 md:text-5xl lg:text-6xl">
              Star <span className="font-bold">Sponsors</span>
          </h2>
        </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="mt-4 text-base text-zinc-600 md:text-lg">
              Empowering our vision with their support
            </p>
          </BlurFade>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          {/* Left side - Sponsor Logos (Scrollable) */}
          <div className="flex flex-col gap-6 max-h-[563px] overflow-y-scroll no-scrollbar bg-white p-4 rounded-[20px] scrollbar-hide"
          ref={(el) => {
            sponsorRefs.current[activeSponsor.id] = el
          }}
          >
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                onClick={() => handleSponsorClick(sponsor)}
                className={`rounded-[18px] p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[150px] cursor-pointer relative overflow-hidden ${
                  activeSponsor.id === sponsor.id
                    ? `min-h-[280px] ${sponsor.bgColor}`
                    : ' h-[114px]'
                }`}
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
                    className={`object-contain transition-all duration-500 ${
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
          <div className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSponsor.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-[20px] p-10 shadow-2xl w-[809.983px] h-[563px] "
              >
                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-gray-800 text-lg leading-relaxed mb-8"
                  style={{
                    display: 'flex',
                    width: '692px',
                    height: '323px',
                    // flexDirection: 'column',
                    // justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {activeSponsor.testimonial.text}
                </motion.p>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="border-t border-gray-200 pt-6"
                >
                  {/* Photo and Author Info */}
                  <div className="flex items-center gap-4">
                    <Image 
                      src={activeSponsor.testimonial.photo} 
                      alt={activeSponsor.testimonial.author} 
                      width={92} 
                      height={92} 
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold text-black mb-1">
                        {activeSponsor.testimonial.author}
                      </h3>
                      <p className="text-gray-500 text-lg">
                        {activeSponsor.testimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Dotted line and Star Rating at bottom */}
                  <div className="flex items-center justify-center gap-4 min-w-full mt-1">
                    {/* Dotted separator line */}
                    <Image src="/dots.svg" alt="dots" width={271} height={2} className="w-full" />
                    
                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[...Array(activeSponsor.testimonial.rating)].map((_, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.05, duration: 0.2 }}
                        >
                          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
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

