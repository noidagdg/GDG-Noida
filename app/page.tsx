'use client';

import { useState } from 'react';
import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import FlagshipEvents from "@/components/sections/flagship-events";
import UpcomingEvents from "@/components/sections/upcoming-events";
import StarSpeakers from "@/components/sections/star-speakers";
import PhotoGallery from "@/components/sections/photo-gallery";
import Sponsors from "@/components/sections/sponsors";
import Footer from "@/components/sections/footer";
import Testimonials from "@/components/sections/Testimonials";
import Marquee from "@/components/sections/marquee";
import WhoWeAre from "@/components/sections/who-we-are";
import { SecretDialog } from "@/components/ui/secret-dialog";

export default function Home() {
  const [isSecretDialogOpen, setIsSecretDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onSecretUnlocked={() => setIsSecretDialogOpen(true)} />
      <Hero />
      <Marquee />
      <UpcomingEvents />
      <StarSpeakers />
      <WhoWeAre />
      <FlagshipEvents />
      <Sponsors />
      <Testimonials />
      <PhotoGallery />
      <Footer />
      
      {/* Secret Dialog */}
      <SecretDialog isOpen={isSecretDialogOpen} onClose={() => setIsSecretDialogOpen(false)} />
    </div>
  );
}
