"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About Us", href: "/about" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Blogs", href: "/blogs" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-8xl mx-auto z-50 px-20", className)}
    >
      <nav className="relative rounded-full border border-opacity-50 border: 0.5px solid #000; backdrop-blur-sm dark:bg-black dark:border-white/20 bg-transparent  shadow-input flex items-center justify-between px-8 py-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/assets/noida_long_logo.svg" 
            alt="GDG Noida Logo" 
            width={200} 
            height={40} 
            className="h-6 w-auto object-contain" 
          />
        </Link>
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black dark:text-white hover:opacity-80 transition-opacity font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}