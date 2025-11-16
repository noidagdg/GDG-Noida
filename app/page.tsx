import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import StarSpeakers from "@/components/sections/star-speakers";
import PhotoGallery from "@/components/sections/photo-gallery";
import Sponsors from "@/components/sections/sponsors";
import Footer from "@/components/sections/footer";
// import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Marquee/> */}
      <StarSpeakers />
      <PhotoGallery />
      <Sponsors />
      <Footer />
    </div>
  );
}
