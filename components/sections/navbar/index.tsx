"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLogoClickTracker } from "@/lib/useLogoClickTracker";

export default function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const { trackClick } = useLogoClickTracker();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "#events" },
    { name: "Speakers", href: "#speakers" },
    { name: "About Us", href: "#about" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Gallery", href: "#gallery" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 100; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <div
      className={cn("fixed top-4 md:top-10 inset-x-0 max-w-7xl mx-auto z-50 px-4 md:px-8 lg:px-20", className)}
    >
      <nav className="relative rounded-full border border-white/70  dark:bg-black dark:border-white/20 bg-transparent backdrop-blur-xs shadow-lg flex items-center justify-between px-4 md:px-8 py-2 md:py-6 antialiased">
        {/* Logo */}
        <button
          onClick={trackClick}
          className="flex items-center space-x-3 z-50 bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Image 
            src="/assets/noida_long_logo0.svg" 
            alt="GDG Noida Logo" 
            width={200} 
            height={40} 
            className="h-5 md:h-6 w-auto object-contain" 
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-black dark:text-white hover:opacity-80 transition-opacity font-medium text-sm cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-black dark:text-white" />
          ) : (
            <Menu className="w-6 h-6 text-black dark:text-white" />
          )}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 mx-4 dark:bg-black rounded-2xl shadow-xl border border-black/10 dark:border-white/20 overflow-hidden lg:hidden"
            >
              <div className="flex flex-col p-4 bg-white/90 dark:bg-black/80 backdrop-blur-3xl">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors font-medium block cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}