'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

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
  }
}

function Sponsors() {
  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Neo4j",
      logo: "/assets/sponsors/neo4j.svg",
      bgColor: "bg-white",
      testimonial: {
        text: "I am thrilled to share my experience of collaborating with GDG Noida on behalf of Neo4j. Sponsoring DevFest Noida last year, I was impressed by the professionalism and dedication of the GDG team. The event was a resounding success, with an engaged audience that aligned perfectly with our goals. Based on this successful partnership, I have hosted multiple meetups with GDG Noida, and each event has been exceptional. The team consistently delivers high-quality tech events with seamless coordination and attention to detail, ensuring smooth execution and effective audience engagement. The visibility and reach we gained through our partnership with GDG Noida have been invaluable. I am very happy with the collaboration and look forward to continuing our long-term partnership",
        author: "Siddhant Agarwal",
        position: "DevRel, Neo4j",
        rating: 5
      }
    },
    {
      id: 2,
      name: "GitHub",
      logo: "/assets/sponsors/github.svg",
      bgColor: "bg-white",
      testimonial: {
        text: "I'm incredibly grateful to GDG Noida for providing an exceptional platform to showcase Copilot and engage with a passionate community of developers. The enthusiasm and collaborative spirit displayed by participants in the contests were truly inspiring. I'm eager to contribute towards the next DevFest!",
        author: "Shubhangi Gupta",
        position: "Student Expert, GitHub",
        rating: 5
      }
    },
    {
      id: 3,
      name: "Brevo",
      logo: "/assets/sponsors/brevo.svg",
      bgColor: "bg-white",
      testimonial: {
        text: "Our partnership with GDG Noida has been a highlight of the past year for Brevo. Sponsoring DevFest Noida 2024 gave us a remarkable opportunity to connect with Noida's innovative tech community. The event was exceptionally organized, and the tech community is truly inspiring, and it's a mission we're proud to support. The high-quality events and seamless execution organized by the GDG Noida team consistently impress us with their unwavering commitment. We are grateful for this reliable and meaningful partnership, and look forward to continuing to build on this success in the years to come.",
        author: "Harshit Punwar",
        position: "Developer Ecosystem Manager",
        rating: 5
      }
    },
    {
      id: 4,
      name: "Partner 1",
      logo: "/assets/sponsors/capx.svg",
      bgColor: "bg-white",
      testimonial: {
        text: "Working with GDG Noida has been an exceptional experience. Their dedication to fostering a vibrant tech community and delivering high-quality events is truly commendable. We look forward to many more successful collaborations.",
        author: "Tech Partner",
        position: "Community Manager",
        rating: 5
      }
    }
  ]

  const [activeSponsor, setActiveSponsor] = useState<Sponsor>(sponsors[0])

  const handleSponsorClick = (sponsor: Sponsor) => {
    setActiveSponsor(sponsor)
  }

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">
            Star Sponsers
          </h2>
          <p className="text-xl text-gray-600">
            Empowering our vision with their support
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left side - Sponsor Logos (Scrollable) */}
          <div className="flex flex-col gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {sponsors.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                onClick={() => handleSponsorClick(sponsor)}
                className={`${sponsor.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[150px] cursor-pointer relative overflow-hidden ${
                  activeSponsor.id === sponsor.id
                    ? ' scale-105'
                    : 'hover:scale-102'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: sponsor.id * 0.1 }}
              >
                {activeSponsor.id === sponsor.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-blue-500 opacity-10"
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
          <div className="lg:col-span-2 "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSponsor.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-3xl p-10 shadow-2xl w-[809.983px] h-[562.892px] "
              >
                {/* Testimonial Text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-gray-800 text-lg leading-relaxed mb-8"
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
                  <h3 className="text-2xl font-bold text-black mb-1">
                    {activeSponsor.testimonial.author}
                  </h3>
                  <p className="text-gray-500 text-lg mb-4">
                    {activeSponsor.testimonial.position}
                  </p>

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

