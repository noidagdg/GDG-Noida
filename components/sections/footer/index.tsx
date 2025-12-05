"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Extract the hash from href (e.g., "/#about" -> "#about")
    const hash = href.split('#')[1];
    
    // If we're on the home page, just scroll
    if (pathname === '/') {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    
    // Not on home page, navigate home first
    router.push('/');
    // Wait for navigation and page load, then scroll
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 1500); // Wait for home page animations to show
  };
  return (
    <footer className="bg-[#202124] text-white relative rounded-t-[40px] md:rounded-t-[60px] mt-8 md:mt-12">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-16 md:pt-20 lg:pt-24 pb-6 md:pb-8">
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Main Content Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-20">
            {/* Logo Section */}
            <div className="flex flex-col gap-4">
              <Image
                src="/assets/gdg_logo.svg"
                alt="GDG Noida Logo"
                width={180}
                height={112}
                className="object-contain w-[180px] h-auto"
              />
              <p className="text-gray-300 text-base leading-relaxed max-w-[250px]">
                Empowering developers to build, learn, and grow together in the Noida community.
              </p>
            </div>

            {/* About Section */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white text-base font-semibold">
                About
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/#about"
                  onClick={(e) => handleNavClick(e, "/#about")}
                  className="text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Contact Us
                </Link>
                <Link
                  href="/#brochure"
                  onClick={(e) => handleNavClick(e, "/#brochure")}
                  className="text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Brochure
                </Link>
              </div>
            </div>

            {/* Resources Section */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white text-base font-semibold">
                Resources
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/#articles"
                  onClick={(e) => handleNavClick(e, "/#articles")}
                  className="text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Articles
                </Link>
                <Link
                  href="/#blogs"
                  onClick={(e) => handleNavClick(e, "/#blogs")}
                  className="text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Blogs
                </Link>
                <Link
                  href="/#gallery"
                  onClick={(e) => handleNavClick(e, "/#gallery")}
                  className="text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  Gallery
                </Link>
                <Link
                  href="/#faqs"
                  onClick={(e) => handleNavClick(e, "/#faqs")}
                  className="text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  FAQs
                </Link>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="flex flex-col gap-5">
              <h3 className="text-white text-base font-semibold">
                Follow Us
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/gdg-noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200 group"
                >
                  <Instagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                  <span>gdg-noida</span>
                </a>
                <a
                  href="https://twitter.com/gdgnoida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200 group"
                >
                  <Twitter size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                  <span>gdgnoida</span>
                </a>
                <a
                  href="https://linkedin.com/company/gdgnoida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200 group"
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                  <span>gdgnoida</span>
                </a>
                <a
                  href="https://youtube.com/@gdgnoida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 text-base hover:text-white hover:translate-x-1 transition-all duration-200 group"
                >
                  <Youtube size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                  <span>gdgnoida</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col gap-6 pt-4">
            {/* Separator Line */}
            <div className="h-px bg-linear-to-r from-transparent via-gray-600 to-transparent" />

            {/* Copyright and Legal Links */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="text-gray-400 text-base font-medium">
                © *GDG Noida. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                <Link
                  href="/#privacy"
                  onClick={(e) => handleNavClick(e, "/#privacy")}
                  className="text-gray-400 text-base hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/#terms"
                  onClick={(e) => handleNavClick(e, "/#terms")}
                  className="text-gray-400 text-base hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <span className="text-gray-600">•</span>
                <Link
                  href="/#cookies"
                  onClick={(e) => handleNavClick(e, "/#cookies")}
                  className="text-gray-400 text-base hover:text-white transition-colors duration-200"
                >
                  Cookies Settings
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer