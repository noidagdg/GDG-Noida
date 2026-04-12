"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface PhotoGalleryProps {
  readonly className?: string;
}

// ─── Shared animation variant ──────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97, filter: "blur(8px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: delay / 1000,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const textChild: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

// ─── Photo card — absolutely positioned inside the ratio container ─────────
/**
 * `style` carries the absolute percentage-based position + size.
 * Next.js `fill` works because the motion.div is `position: absolute`
 * (which is a "positioned" element), giving the fill image its dimensions.
 */
function PhotoCard({
  src,
  alt,
  delay = 0,
  sizes,
  style,
  className,
}: {
  src: string;
  alt: string;
  delay?: number;
  sizes: string;
  style: React.CSSProperties;
  className?: string;
}) {
  return (
    <motion.div
      custom={delay}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-6%" }}
      whileHover={{ scale: 1.025, zIndex: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={cn(
        "absolute overflow-hidden rounded-2xl",
        "shadow-[0_2px_16px_rgba(0,0,0,0.09)]",
        "hover:shadow-[0_8px_40px_rgba(0,0,0,0.18)]",
        "transition-shadow duration-400",
        className
      )}
      style={style}
    >
      {/* Image zoom on hover */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </motion.div>
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent z-10"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function PhotoGallery({ className }: PhotoGalleryProps) {
  /**
   * DESKTOP LAYOUT — Figma-faithful absolute percentage positioning
   * ────────────────────────────────────────────────────────────────
   * Reference frame: 1315 × 967.73 px
   *
   * Gap derivations (no hardcoded px — derived from Figma proportions):
   *   H-gap = (1315 − (376+240+241+375)) / 3 = 83/3 = 27.67 px → 2.10% of W
   *   V-gap = (967.73 − (302+304+304)) / 2 = 57.73/2 = 28.87 px → 2.98% of H
   *
   * Column x-starts (% of frame width 1315):
   *   C1:  0 / 1315                           = 0.00%
   *   C2: (376 + 27.67) / 1315                = 30.70%
   *   C3: (376 + 27.67 + 240 + 27.67) / 1315 = 51.05%
   *   C4: (376 + 27.67 + 240 + 27.67
   *         + 241 + 27.67) / 1315             = 71.48%
   *
   * Row y-starts (% of frame height 967.73):
   *   R1: 0 / 967.73                          = 0.00%
   *   R2: (302 + 28.87) / 967.73              = 34.19%
   *   R3: (302 + 28.87 + 304 + 28.87) / 967.73 = 68.59%
   *
   * Each image's width%  = image_px_width  / 1315
   * Each image's height% = image_px_height / 967.73
   *
   * NOTE: bottomleft (551px) starts at C1 (0%) and has width 41.90%.
   *       This does NOT align to C2 (44.00% is where bottommiddle starts).
   *       Only an absolute-position approach handles this; a fixed CSS grid cannot.
   */

  return (
    <section
      id="gallery"
      className={cn(
        "relative w-full overflow-hidden bg-white py-16 lg:py-20",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">

        {/* ── MOBILE — 2-col masonry, aspect-ratio per image ──────────── */}
        <div className="lg:hidden">
          <motion.div
            className="text-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.h2 variants={textChild} className="text-4xl font-semibold text-zinc-900 tracking-tight">
              Photo Gallery
            </motion.h2>
            <motion.p variants={textChild} className="mt-3 text-base text-zinc-500">
              A glimpse into our most memorable moments
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {/* Left column */}
            <div className="flex flex-col gap-3">
              {[
                { src: "/photogallery/topleft376x302.png",    alt: "Community gathering",  ar: "376/302", d: 0   },
                { src: "/photogallery/leftmiddle376x304.png", alt: "Group photo at event",  ar: "376/304", d: 80  },
                { src: "/photogallery/bottomleft551x304.png", alt: "Team at workshop",      ar: "551/304", d: 160 },
              ].map(({ src, alt, ar, d }) => (
                <motion.div
                  key={src}
                  custom={d}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative w-full overflow-hidden rounded-2xl shadow-md"
                  style={{ aspectRatio: ar }}
                >
                  <Image src={src} alt={alt} fill sizes="45vw" className="object-cover" />
                </motion.div>
              ))}
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-3">
              {[
                { src: "/photogallery/topright375x444.png",     alt: "GDG Noida cake",       ar: "375/444", d: 40  },
                { src: "/photogallery/bottommiddle333x304.png", alt: "Audience at talk",      ar: "333/304", d: 120 },
                { src: "/photogallery/bottomright375x495.png",  alt: "Crowd with raised hands", ar: "375/495", d: 200 },
              ].map(({ src, alt, ar, d }) => (
                <motion.div
                  key={src}
                  custom={d}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative w-full overflow-hidden rounded-2xl shadow-md"
                  style={{ aspectRatio: ar }}
                >
                  <Image src={src} alt={alt} fill sizes="45vw" className="object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESKTOP — Figma absolute % positions inside ratio container ── */}
        {/*
         *  The container's height = its width × (967.73 / 1315) via aspect-ratio.
         *  Every child is position:absolute with left/top/width/height as
         *  derived percentages — zero hardcoded px values.
         */}
        <div
          className="hidden lg:block relative w-full"
          style={{ aspectRatio: "1315 / 967.73" }}
        >

          {/* topleft  376×302  → left=0%  top=0%  w=28.60%  h=31.21% */}
          <PhotoCard
            src="/photogallery/topleft376x302.png"
            alt="Community raising hands at event"
            delay={60}
            sizes="28vw"
            style={{ left: "0%", top: "0%", width: "28.60%", height: "31.21%" }}
          />

          {/* topmiddle240  240×303  → left=30.70%  top=0%  w=18.25%  h=31.31% */}
          <PhotoCard
            src="/photogallery/topmiddle240x303.png"
            alt="DevFest speaker on stage"
            delay={40}
            sizes="18vw"
            style={{ left: "30.70%", top: "0%", width: "18.25%", height: "31.31%" }}
          />

          {/* topmiddle241  241×303  → left=51.05%  top=0%  w=18.33%  h=31.31% */}
          <PhotoCard
            src="/photogallery/topmiddle241x303.png"
            alt="Two developers working at laptop"
            delay={40}
            sizes="18vw"
            style={{ left: "51.05%", top: "0%", width: "18.33%", height: "31.31%" }}
          />

          {/* topright  375×444  → left=71.48%  top=0%  w=28.52%  h=45.88% */}
          <PhotoCard
            src="/photogallery/topright375x444.png"
            alt="GDG Noida anniversary cake with cupcakes"
            delay={80}
            sizes="28vw"
            style={{ left: "71.48%", top: "0%", width: "28.52%", height: "45.88%" }}
          />

          {/* leftmiddle  376×304  → left=0%  top=34.19%  w=28.60%  h=31.41% */}
          <PhotoCard
            src="/photogallery/leftmiddle376x304.png"
            alt="Large group photo at GDG event"
            delay={80}
            sizes="28vw"
            style={{ left: "0%", top: "34.19%", width: "28.60%", height: "31.41%" }}
          />

          {/* Center text block — col2+col3 area, row2
           *  left=30.70%  top=34.19%  width=(71.48−30.70)%=40.78%  height=31.41% */}
          <motion.div
            className="absolute flex items-center justify-center"
            style={{
              left: "30.70%",
              top: "34.19%",
              width: "40.78%",
              height: "31.41%",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-5%" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          >
            <div className="text-center select-none px-2">
              <motion.h2
                variants={textChild}
                className="font-semibold text-zinc-900 tracking-tight leading-none whitespace-nowrap"
                style={{ fontSize: "clamp(2rem, 4.5vw, 4.5rem)" }}
              >
                Photo Gallery
              </motion.h2>
              <motion.p
                variants={textChild}
                className="mt-[0.6em] text-zinc-500 leading-relaxed"
                style={{ fontSize: "clamp(0.75rem, 1.2vw, 1.2rem)" }}
              >
                A glimpse into our most memorable moments
              </motion.p>
            </div>
          </motion.div>

          {/* bottomright  375×495
           *  Anchored to bottom of frame.
           *  top = 1 − (495/967.73) = 1 − 0.5115 = 48.85%
           *  left=71.48%  w=28.52%  h=51.15% */}
          <PhotoCard
            src="/photogallery/bottomright375x495.png"
            alt="Huge crowd with raised hands"
            delay={120}
            sizes="28vw"
            style={{ left: "71.48%", top: "48.85%", width: "28.52%", height: "51.15%" }}
          />

          {/* bottomleft  551×304
           *  Width: 551/1315 = 41.90%  (intentionally wider than col1+half-col2)
           *  left=0%  top=68.59%  w=41.90%  h=31.41% */}
          <PhotoCard
            src="/photogallery/bottomleft551x304.png"
            alt="Team smiling at workshop desk"
            delay={100}
            sizes="42vw"
            style={{ left: "0%", top: "68.59%", width: "41.90%", height: "31.41%" }}
          />

          {/* bottommiddle  333×304
           *  left = (551+27.67)/1315 = 578.67/1315 = 44.00%
           *  top=68.59%  w=333/1315=25.32%  h=31.41% */}
          <PhotoCard
            src="/photogallery/bottommiddle333x304.png"
            alt="Audience listening at a talk"
            delay={140}
            sizes="25vw"
            style={{ left: "44.00%", top: "68.59%", width: "25.32%", height: "31.41%" }}
          />

        </div>
        {/* ── END DESKTOP ── */}

      </div>
    </section>
  );
}
