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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
    </div>
  );
}
