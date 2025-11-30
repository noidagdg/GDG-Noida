"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLogoClickTracker } from "@/lib/useLogoClickTracker";

interface NavbarProps {
  className?: string;
  onSecretUnlocked?: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Events", href: "#events" },
  { name: "Speakers", href: "#speakers" },
  { name: "About Us", href: "#about" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
] as const;

export default function Navbar({ className, onSecretUnlocked }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { trackClick } = useLogoClickTracker(onSecretUnlocked);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a full URL path (not a hash), let it navigate normally
    if (href.startsWith("/")) {
      return;
    }
    
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed top-4 md:top-10 inset-x-0 max-w-7xl mx-auto z-50 px-4 md:px-8 lg:px-20",
        className
      )}
    >
      <nav
        className={cn(
          "relative rounded-full border border-white/10 dark:border-white/10",
          "bg-white/5 dark:bg-black/40 backdrop-blur-xl",
          "shadow-lg flex items-center justify-between",
          "px-4 md:px-8 py-3 md:py-4 antialiased",
          "transition-all duration-300"
        )}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#4285F4]/20 to-transparent" />

        {/* Logo Button */}
        <motion.button
          onClick={trackClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={cn(
            "flex items-center space-x-3 z-50",
            "bg-transparent border-none cursor-pointer",
            "transition-opacity duration-300 hover:opacity-80"
          )}
          aria-label="GDG Noida Logo"
        >
          <Image
            src="/assets/noida_long_logo0.svg"
            alt="GDG Noida Logo"
            width={200}
            height={40}
            className="h-5 md:h-6 w-auto object-contain"
            priority
          />
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "px-4 py-2 text-black dark:text-white",
                "hover:bg-white/10 dark:hover:bg-white/10",
                "transition-all duration-300 font-medium text-sm",
                "cursor-pointer rounded-lg"
              )}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          className={cn(
            "lg:hidden z-50 p-2 rounded-lg",
            "hover:bg-white/10 dark:hover:bg-white/10",
            "transition-colors duration-300"
          )}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-black dark:text-white" />
            )}
          </motion.div>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={cn(
                "absolute top-full left-0 right-0 mt-4 mx-4 lg:hidden",
                "rounded-2xl shadow-xl border border-white/10",
                "bg-white/5 dark:bg-black/80 backdrop-blur-xl",
                "overflow-hidden"
              )}
            >
              <div className="flex flex-col p-2">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={cn(
                        "text-black dark:text-white",
                        "hover:bg-white/10 dark:hover:bg-white/10",
                        "px-4 py-3 rounded-lg transition-colors",
                        "font-medium block cursor-pointer"
                      )}
                    >
                      {link.name}
                    </Link>
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