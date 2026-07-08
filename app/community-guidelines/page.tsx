import type { Metadata } from "next";
import GuidelinesContent from "./GuidelinesContent";

export const metadata: Metadata = {
  title: "Community Guidelines | GDG Noida",
  description:
    "Guidelines for participating in the GDG Noida community — respect, no spam, no unauthorized promotions, and how we keep our spaces welcoming for everyone.",
  openGraph: {
    title: "Community Guidelines | GDG Noida",
    description:
      "Guidelines for participating in the GDG Noida community — respect, no spam, no unauthorized promotions, and how we keep our spaces welcoming for everyone.",
    url: "https://gdgnoida.com/community-guidelines",
    siteName: "GDG Noida",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://iili.io/fdmbmil.png",
        width: 1200,
        height: 630,
        alt: "GDG Noida hero preview",
      },
    ],
  },
};

export default function CommunityGuidelinesPage() {
  return <GuidelinesContent />;
}
