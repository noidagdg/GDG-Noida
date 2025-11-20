"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface EventStat {
  value: string;
  label: string;
}

interface EventCard {
  year: string;
  location: string;
  image: string;
  logo: string;
  stats: EventStat[];
  venue: string;
  backgroundColor: string;
}

const eventSets: EventCard[][] = [
  // Set 1: DevFest 2022, 2023, 2024
  [
    {
      year: "2022",
      location: "Noida",
      image: "/assets/events/devfest22bg.png",
      logo: "/assets/events/devfest22logo.png",
      stats: [
        { value: "3,820+", label: "Registrations" },
        { value: "350+", label: "Attendees" },
        { value: "30+", label: "Speakers" },
      ],
      venue: "Radisson Blu, Sector 18, Noida",
      backgroundColor: "bg-[#E8F5E9]",
    },
    {
      year: "2023",
      location: "Noida",
      image: "/assets/events/devfest23bg.png",
      logo: "/assets/events/devfest23logo.png",
      stats: [
        { value: "3,820+", label: "Registrations" },
        { value: "350+", label: "Attendees" },
        { value: "30+", label: "Speakers" },
      ],
      venue: "Holiday Inn, Mayur Vihar",
      backgroundColor: "bg-[#FCE4EC]",
    },
    {
      year: "2024",
      location: "Noida",
      image: "/assets/events/devfest24bg.png",
      logo: "/assets/events/devfest24logo.png",
      stats: [
        { value: "3,820+", label: "Registrations" },
        { value: "350+", label: "Attendees" },
        { value: "30+", label: "Speakers" },
      ],
      venue: "Expo Inn, Greater Noida",
      backgroundColor: "bg-[#ECEFF1]",
    },
  ],
  // Set 2: Community Events
  [
    {
      year: "2023",
      location: "Noida",
      image: "/assets/events/designSamvadbg23.png",
      logo: "/assets/events/designSamvadlogo23.png",
      stats: [
        // { value: "2,500+", label: "Registrations" },
        { value: "50+", label: "Attendees" },
        { value: "7+", label: "Speakers" },
      ],
      venue: "TATA 1MG Office, Noida",
      backgroundColor: "bg-[#E8F5E9]",
    },
    {
      year: "2024",
      location: "Delhi",
      image: "/assets/events/designSamvad24bg.png",
      logo: "/assets/events/designSamvad24logo.png",
      stats: [
        // { value: "+", label: "Registrations" },
        { value: "150+", label: "Attendees" },
        { value: "8+", label: "Speakers" },
      ],
      venue: "IIIT Delhi Campus, Delhi",
      backgroundColor: "bg-[#FCE4EC]",
    },
    {
      year: "2025",
      location: "Gurugram",
      image: "/assets/events/designSamvad25bg.png",
      logo: "/assets/events/designSamvad25logo.png",
      stats: [
        // { value: "4,100+", label: "Registrations" },
        { value: "170+", label: "Attendees" },
        { value: "6+", label: "Speakers" },
      ],
      venue: "Google Office, Gurugram",
      backgroundColor: "bg-[#ECEFF1]",
    },
  ],
  // Set 3: Tech Talks & Workshops
  [
    {
      year: "2022",
      location: "Noida",
      image: "/assets/events/dgbg4.svg",
      logo: "/assets/events/dglogo4.svg",
      stats: [
        // { value: "1,800+", label: "Registrations" },
        { value: "291+", label: "Attendees" },
        { value: "5+", label: "Speakers" },
      ],
      venue: "Akasa CoWorking, Noida",
      backgroundColor: "bg-[#E8F5E9]",
    },
    {
      year: "2023",
      location: "Delhi",
      image: "/assets/events/dgbg5.svg",
      logo: "/assets/events/dglogo5.svg",
      stats: [
        // { value: "2,200+", label: "Registrations" },
        { value: "200+", label: "Attendees" },
        { value: "5+", label: "Speakers" },
      ],
      venue: "EcoSphere, Noida",
      backgroundColor: "bg-[#FCE4EC]",
    },
    {
      year: "2024",
      location: "Greater Noida",
      image: "/assets/events/dgbg6.svg",
      logo: "/assets/events/dglogo6.svg",
      stats: [
        // { value: "2,800+", label: "Registrations" },
        { value: "170+", label: "Attendees" },
        { value: "5+", label: "Speakers" },
      ],
      venue: "Masters Union, Gurgaon",
      backgroundColor: "bg-[#ECEFF1]",
    },
  ],
];

function CounterNumber ({ value, eventKey }: { readonly value: string; readonly eventKey: string }) {
  const [count, setCount] = useState(0);
  const [showPlus, setShowPlus] = useState(false);
  
  // Extract number and check for plus sign
  const numericValue = Number.parseInt(value.replaceAll(",", "").replaceAll("+", ""));
  const hasPlus = value.includes("+");
  
  useEffect(() => {
    setCount(0);
    setShowPlus(false);
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(numericValue);
        clearInterval(timer);
        if (hasPlus) {
          setTimeout(() => setShowPlus(true), 100);
        }
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [numericValue, hasPlus, eventKey]);
  
  // Format number with commas
  const formattedCount = count.toLocaleString();
  
  return (
    <span className="text-[33px] font-normal text-[#34A853]">
      {formattedCount}
      {hasPlus && (
        <span
          className={cn(
            "transition-opacity duration-500",
            showPlus ? "opacity-100" : "opacity-0"
          )}
        >
          +
        </span>
      )}
    </span>
  );
}

export default function FlagshipEvents () {
  const [currentSet, setCurrentSet] = useState(0);
  const [direction, setDirection] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSet((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = eventSets.length - 1;
      if (next >= eventSets.length) next = 0;
      return next;
    });
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSet((prev) => {
        let next = prev + 1;
        if (next >= eventSets.length) next = 0;
        return next;
      });
      setResetKey((prev) => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentSet]);

  return (
    <section 
      id="events"
      className="py-20 px-4 md:px-8 lg:px-16 transition-all duration-700"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Title Section - Static */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-black">
            Our <span className="font-bold">Flagship Events</span>
          </h2>
          <p className="text-base md:text-2xl text-gray-600 mt-3">
            Our signature experiences that define excellence
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative lg:overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSet}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: [0.32, 0.72, 0, 1],
              }}
              drag={isMobile ? false : "x"}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                if (isMobile) return; // Disable drag on mobile
                
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                  setResetKey((prev) => prev + 1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                  setResetKey((prev) => prev + 1);
                }
              }}
              className="lg:cursor-grab lg:active:cursor-grabbing"
            >
              {/* Event Cards Grid */}
              <div className="block lg:flex lg:flex-row lg:items-start lg:justify-center lg:gap-[120px]">
                {eventSets[currentSet].map((event, index) => {
            // Calculate gap from title section based on design specs
            const marginTopClass = index === 1 ? "lg:mt-[90px]" : "lg:mt-[39px]";
            
            // Assign z-index based on position for stacking effect (higher index = higher z-index)
            let zIndexClass = "z-10";
            if (index === 1) {
              zIndexClass = "z-20";
            } else if (index === 2) {
              zIndexClass = "z-30";
            }
            
            return (
              <div
                key={event.year}
                className={cn(
                  "rounded-[20px] shadow-xl relative flex flex-col items-center",
                  "w-full max-w-[372px] h-[493px] mx-auto lg:mx-0",
                  event.backgroundColor,
                  // Mobile: spacing for stacking effect, Desktop: design specs
                  index === 0 ? "mt-0" : "mt-[25vh] lg:mt-0",
                  marginTopClass,
                  // Z-index only on mobile for stacking
                  `lg:z-auto ${zIndexClass}`,
                  "sticky top-[20vh] lg:static" // Sticky in middle of screen on mobile, static on desktop
                )}
              >
                {/* Event Logo */}
                <div className="mt-6 mb-4 flex items-center justify-center w-full px-6">
                  <div className="relative w-full h-[60px]">
                    <Image
                      src={event.logo}
                      alt={`DevFest ${event.year} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Event Image */}
                <div className="relative w-[334px] h-[347px] shrink-0">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={event.image}
                      alt={`DevFest ${event.year}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-3 left-[35%] space-y-2.5">
                    {event.stats.map((stat) => (
                      <div
                        key={`${event.year}-${stat.label}`}
                        className="bg-white rounded-[17px] px-2.5 py-2 flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-fit"
                      >
                        <CounterNumber value={stat.value} eventKey={`${currentSet}-${event.year}-${stat.label}`} />
                        <span className="text-[22px] font-normal text-black">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-center justify-center gap-2 text-black mt-auto pt-2 pb-6">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="text-[20px] font-semibold">{event.venue}</span>
                </div>
              </div>
            );
          })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots with Progress Loader */}
          <div className="flex justify-center gap-3 mt-6 lg:mt-16">
            {eventSets.map((set, index) => (
              <button
                key={`nav-${set[0].venue}-${set[0].year}`}
                onClick={() => {
                  setDirection(index > currentSet ? 1 : -1);
                  setCurrentSet(index);
                  setResetKey((prev) => prev + 1);
                }}
                className={cn(
                  "relative rounded-full overflow-hidden transition-all duration-300",
                  currentSet === index ? "w-12 h-3" : "w-3 h-3"
                )}
                aria-label={`Go to event set ${index + 1}`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gray-300" />
                
                {/* Progress Bar (only for active) */}
                {currentSet === index && (
                  <motion.div
                    key={`progress-${currentSet}-${resetKey}`}
                    className="absolute inset-0 bg-linear-to-r from-[#4285F4] to-[#34A853] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 10,
                      ease: "linear",
                    }}
                    style={{ willChange: "transform" }}
                  />
                )}
                
                {/* Static fill for inactive dots */}
                {currentSet !== index && (
                  <div className="absolute inset-0 bg-gray-300 hover:bg-gray-400 transition-colors" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

