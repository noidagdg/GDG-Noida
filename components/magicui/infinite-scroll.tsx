"use client";

import { cn } from "@/lib/utils";
import { Children, useEffect, useRef } from "react";

interface InfiniteScrollProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down";
  speed?: number;
  pauseOnHover?: boolean;
}

export default function InfiniteScroll({
  children,
  className,
  direction = "down",
  speed = 20,
  pauseOnHover = false,
}: InfiniteScrollProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;

    const scrollerContent = scrollerRef.current;
    
    // Wait for images to load and render
    const timer = setTimeout(() => {
      if (!scrollerContent) return;
      
      // Get all children and divide by 2 (since we duplicate)
      const allChildren = Array.from(scrollerContent.children);
      const halfLength = Math.floor(allChildren.length / 2);
      
      // Get only the first half (original content)
      const originalChildren = allChildren.slice(0, halfLength);

      // Calculate total height including margins
      let totalHeight = 0;
      originalChildren.forEach((child) => {
        const htmlChild = child as HTMLElement;
        const styles = window.getComputedStyle(htmlChild);
        const marginBottom = parseFloat(styles.marginBottom);
        totalHeight += htmlChild.offsetHeight + marginBottom;
      });

      // Set the CSS variable with the exact height
      scrollerContent.style.setProperty(
        "--scroll-height",
        `${totalHeight}px`
      );
    }, 100); // Small delay to ensure images are loaded

    return () => clearTimeout(timer);
  }, [children]);

  // Convert children to array for duplication
  const childrenArray = Children.toArray(children);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-full flex-col",
          direction === "down" && "[animation-name:scroll-vertical-down]",
          direction === "up" && "[animation-name:scroll-vertical-up]",
          "[animation-timing-function:linear]",
          "[animation-iteration-count:infinite]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {/* Original content */}
        {children}
        
        {/* Duplicate content for seamless loop with data attribute on each element */}
        {Children.map(children, (child) => {
          if (!child || typeof child !== 'object') return null;
          return (child as React.ReactElement);
        })}
      </div>
    </div>
  );
}

