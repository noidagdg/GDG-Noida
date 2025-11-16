import React from 'react'
import Image from 'next/image'
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-[#202124] text-white min-h-[542px]">
      <div className="mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {/* Main Content Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-32 min-h-[240px] md:min-h-[240px] lg:h-60">
            {/* Logo Section */}
            <div className="w-full md:w-64 h-40 flex items-start justify-center md:justify-start">
              <Image
                src="/assets/gdg_logo.svg"
                alt="GDG Noida Logo"
                width={256}
                height={160}
                className="object-contain"
              />
            </div>

            {/* About Section */}
            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-start text-white text-base font-semibold leading-6">
                About
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <a
                    href="#"
                    className="flex-1 justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    About Us
                  </a>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <a
                    href="#"
                    className="flex-1 justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <a
                    href="#"
                    className="flex-1 justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    Brochure
                  </a>
                </div>
              </div>
            </div>

            {/* Resources Section */}
            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-start text-white text-base font-semibold leading-6">
                Resources
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <a
                    href="#"
                    className="flex-1 justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    Articles
                  </a>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <a
                    href="#"
                    className="flex-1 justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    Blogs
                  </a>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <a
                    href="#"
                    className="flex-1 justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    Gallery
                  </a>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-start">
                  <a
                    href="#"
                    className="flex-1 justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    FAQs
                  </a>
                </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch justify-start text-white text-base font-semibold leading-6">
                Follow Us
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-2 inline-flex justify-start items-center gap-3">
                  <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
                    <Instagram size={16} className="text-white" />
                  </div>
                  <a
                    href="https://instagram.com/gdg-noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    gdg-noida
                  </a>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-center gap-3">
                  <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
                    <Twitter size={16} className="text-white" />
                  </div>
                  <a
                    href="https://twitter.com/gdgnoida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    gdgnoida
                  </a>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-center gap-3">
                  <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
                    <Linkedin size={16} className="text-white" />
                  </div>
                  <a
                    href="https://linkedin.com/company/gdgnoida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    gdgnoida
                  </a>
                </div>
                <div className="self-stretch py-2 inline-flex justify-start items-center gap-3">
                  <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
                    <Youtube size={16} className="text-white" />
                  </div>
                  <a
                    href="https://youtube.com/@gdgnoida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="justify-start text-white text-sm font-normal leading-5 hover:underline"
                  >
                    gdgnoida
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="self-stretch flex flex-col justify-start items-start gap-6 md:gap-8">
            {/* Separator Line */}
            <div className="self-stretch h-px bg-white border border-white" />

            {/* Copyright and Legal Links */}
            <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="justify-start text-white text-sm font-normal leading-5 text-center sm:text-left">
                © gdgnoida.com All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start items-start gap-4 sm:gap-6">
                <a
                  href="#"
                  className="justify-start text-white text-sm font-normal underline leading-5 hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="justify-start text-white text-sm font-normal underline leading-5 hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="justify-start text-white text-sm font-normal underline leading-5 hover:underline"
                >
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer