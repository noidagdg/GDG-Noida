"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialAuthor {
  name: string;
  title: string;
  imgSrc: string;
}

interface TestimonialCardProps {
  bgColor: string;
  content: React.ReactNode;
  author: TestimonialAuthor;
  className?: string;
}

export default function TestimonialCard({ bgColor, content, author, className }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        bgColor,
        "p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-sm w-full flex flex-col justify-between flex-grow transition-transform hover:scale-[1.02] duration-300",
        className
      )}
    >
      <div className="text-[14px] sm:text-[12px] md:text-base lg:text-base leading-relaxed text-zinc-600">{content}</div>
      <div className="flex items-center mt-6">
        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-3">
          <Image
            src={author.imgSrc}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm md:text-base font-semibold text-zinc-900">{author.name}</p>
          <p className="text-xs md:text-sm text-zinc-600">{author.title}</p>
        </div>
      </div>
    </div>
  );
}

