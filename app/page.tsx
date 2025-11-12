import BlurFade from "@/components/magicui/blur-fade";
import BlurIn from "@/components/magicui/blur-in";
import WordFadeIn from "@/components/magicui/word-fade-in";
import ShimmerButton from "@/components/magicui/shimmer-button";
import PhotoGallery from "@/components/sections/photo-gallery/photo-gallery";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-linear-to-b from-zinc-950 to-zinc-900 px-4 py-16">
        <BlurFade delay={0.25} inView>
          <h1 className="text-5xl font-bold text-white md:text-7xl">
            GDG Noida
          </h1>
        </BlurFade>

        <BlurIn
          word="Welcome to Magic UI"
          className="text-4xl font-bold text-white md:text-6xl"
        />

        <WordFadeIn
          words="Beautiful animations for your Next.js projects"
          className="text-xl font-normal text-zinc-400 md:text-2xl"
        />

        <BlurFade delay={0.5} inView>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ShimmerButton
              className="text-base font-medium"
              background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              shimmerColor="#ffffff"
            >
              Get Started
            </ShimmerButton>
            
            <ShimmerButton
              className="text-base font-medium"
              background="rgba(255, 255, 255, 0.1)"
              shimmerColor="#667eea"
            >
              Learn More
            </ShimmerButton>
          </div>
        </BlurFade>

        <BlurFade delay={0.75} inView>
          <div className="max-w-2xl text-center">
            <p className="text-zinc-400">
              This is a demo page showcasing Magic UI components with Next.js. 
              The components include smooth animations, blur effects, and beautiful transitions.
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Photo Gallery Section */}
      <PhotoGallery />
    </div>
  );
}
