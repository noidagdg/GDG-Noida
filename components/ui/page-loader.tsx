"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const communityMessages = [
  "Building together",
  "Connecting developers",
  "Sharing knowledge",
  "Innovating together",
  "Growing the community",
  "Learning & building",
  "Creating impact",
  "Empowering developers",
  "Think. Build. Grow.",
  "Code. Connect. Create.",
];

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  // const [imagesLoaded, setImagesLoaded] = useState(0);
  // const [totalImages, setTotalImages] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  // Disable body scroll while loading (body starts with overflow-hidden class)
  useEffect(() => {
    if (!isLoading) {
      // Remove the overflow-hidden class when loading is done
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLoading]);

  // Rotate messages every 2 seconds
  useEffect(() => {
    if (!isLoading) return;

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % communityMessages.length);
    }, 2000);

    return () => clearInterval(messageInterval);
  }, [isLoading]);

  useEffect(() => {
    // Get all images on the page
    const images = document.querySelectorAll("img");
    const imageArray = Array.from(images);
    
    // Filter out images that are already loaded or have loading="lazy"
    const imagesToLoad = imageArray.filter((img) => {
      const src = img.getAttribute("src") || img.getAttribute("data-src");
      return src && !img.complete;
    });

    // setTotalImages(imagesToLoad.length);

    if (imagesToLoad.length === 0) {
      setIsLoading(false);
      return;
    }

    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      // setImagesLoaded(loadedCount);
      
      if (loadedCount >= imagesToLoad.length) {
        // Add a small delay for smooth transition
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    const handleImageError = () => {
      loadedCount++;
      // setImagesLoaded(loadedCount);
      
      if (loadedCount >= imagesToLoad.length) {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    };

    // Attach load listeners to all images
    imagesToLoad.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageError);
      }
    });

    // Fallback: hide loader after 5 seconds max
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      imagesToLoad.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageError);
      });
      clearTimeout(timeout);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* GDG Logo with Animation */}
        <div className="relative animate-pulse">
          <Image
            src="/assets/gdg_logo.svg"
            alt="GDG Noida"
            width={200}
            height={125}
            className="w-[150px] md:w-[200px] h-auto"
            priority
          />
        </div>
        
        {/* Loading Progress */}
        {/* {totalImages > 0 && (
          <div className="w-48 md:w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4285F4] transition-all duration-300 ease-out rounded-full"
              style={{
                width: `${Math.min((imagesLoaded / totalImages) * 100, 100)}%`,
              }}
            />
          </div>
        )} */}
        
        {/* Rotating Community Messages */}
        <div className="h-8 md:h-10 flex items-center justify-center">
          <p 
            key={currentMessage}
            className="text-sm md:text-base text-gray-700 font-medium animate-fade-in"
          >
            {communityMessages[currentMessage]}...
          </p>
        </div>
      </div>
    </div>
  );
}

