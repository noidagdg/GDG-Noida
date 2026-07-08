"use client";

import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import BlurFade from "@/components/magicui/blur-fade";
import {
  Heart,
  Ban,
  Megaphone,
  MessageSquare,
  CalendarCheck,
  ShieldAlert,
  Scale,
  ShieldOff,
  UserX,
  Lock,
  HandHeart,
  type LucideIcon,
} from "lucide-react";

interface GuidelineSection {
  number: number;
  emoji: string;
  title: string;
  icon: LucideIcon;
  points: string[];
  note?: string;
}

const GOOGLE_COLORS = ["#4285F4", "#34A853", "#FBBC05", "#EA4335"];

const sections: GuidelineSection[] = [
  {
    number: 1,
    emoji: "1️⃣",
    title: "Be Respectful and Inclusive",
    icon: Heart,
    points: [
      "No hate speech, discrimination, or offensive language.",
      "No personal attacks, insults, or toxic behavior.",
      "Respect different backgrounds, skill levels, and viewpoints.",
    ],
    note: "Treat all community members with respect and professionalism.",
  },
  {
    number: 2,
    emoji: "2️⃣",
    title: "No Spam",
    icon: Ban,
    points: [
      "Do not send repeated messages.",
      "Avoid excessive use of emojis, GIFs, images, or other media.",
      "Keep conversations meaningful and relevant.",
    ],
    note: "Please avoid spamming or flooding channels.",
  },
  {
    number: 3,
    emoji: "3️⃣",
    title: "No Unauthorized Promotions",
    icon: Megaphone,
    points: [
      "Reach out to a GDG Noida organizer, admin, or team member first.",
      "Provide details about the event or initiative.",
      "Wait for approval before posting.",
    ],
    note: "Direct promotion of external groups, communities, events, products, services, courses, newsletters, or social media channels is not allowed without prior approval. Approved community-relevant opportunities may be shared in designated channels only.",
  },
  {
    number: 4,
    emoji: "4️⃣",
    title: "Stay On Topic",
    icon: MessageSquare,
    points: [
      "Read channel descriptions before posting.",
      "Keep discussions relevant to the channel topic.",
      "Use appropriate threads when available.",
    ],
    note: "Please use channels for their intended purpose.",
  },
  {
    number: 5,
    emoji: "5️⃣",
    title: "Follow Event & Program Guidelines",
    icon: CalendarCheck,
    points: [
      "Follow the specific guidelines shared by organizers.",
      "Respect deadlines, participation requirements, and codes of conduct for individual events.",
    ],
    note: "Certain programs, hackathons, study jams, workshops, and initiatives may have additional rules.",
  },
  {
    number: 6,
    emoji: "6️⃣",
    title: "No Inappropriate or Illegal Content",
    icon: ShieldAlert,
    points: [
      "Explicit or pornographic content",
      "Graphic violence or disturbing material",
      "Pirated content",
      "Illegal activities or harmful content",
    ],
    note: "Do not post, share, or promote:",
  },
  {
    number: 7,
    emoji: "7️⃣",
    title: "Be Respectful During Sensitive Discussions",
    icon: Scale,
    points: [
      "No inflammatory or divisive behavior.",
      "Healthy discussions are welcome where appropriate.",
      "Respect differing opinions and experiences.",
    ],
    note: "Topics such as politics, religion, and other sensitive subjects should be approached respectfully.",
  },
  {
    number: 8,
    emoji: "8️⃣",
    title: "No Harassment or Bullying",
    icon: ShieldOff,
    points: [
      "Any form of harassment, bullying, intimidation, trolling, or targeted attacks is strictly prohibited.",
      "If you experience or witness inappropriate behavior, please contact a moderator or organizer.",
    ],
  },
  {
    number: 9,
    emoji: "9️⃣",
    title: "No Impersonation",
    icon: UserX,
    points: [
      "Community members",
      "GDG organizers",
      "Speakers, mentors, sponsors, or partners",
    ],
    note: "Do not impersonate: Use your genuine identity and represent yourself honestly.",
  },
  {
    number: 10,
    emoji: "🔟",
    title: "Protect Privacy and Security",
    icon: Lock,
    points: [
      "Personal information of yourself or others",
      "Private conversations without consent",
      "Passwords, API keys, private keys, or confidential information",
    ],
    note: "Never share the following. Always prioritize online safety.",
  },
  {
    number: 11,
    emoji: "1️⃣1️⃣",
    title: "Remember: We're a Volunteer Community",
    icon: HandHeart,
    points: [
      "Be patient and considerate.",
      "Support fellow members whenever possible.",
      "Help maintain a positive and welcoming environment for everyone.",
    ],
    note: "GDG Noida is powered by volunteers who contribute their time and effort to help the community grow.",
  },
];

export default function GuidelinesContent() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      <Navbar />
      <div className="pt-28 pb-12 px-4 md:px-8 lg:px-20 mt-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4">
                Community{" "}
                <span className="bg-linear-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent">
                  Guidelines
                </span>
              </h1>
              <p className="text-base md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                Welcome to the GDG Noida Community! 💙 Our goal is to create a
                welcoming, inclusive, and collaborative environment for
                developers, designers, students, professionals, and
                technology enthusiasts.
              </p>
            </div>
          </BlurFade>

          {/* Intro note */}
          <BlurFade delay={0.15} inView>
            <div className="mb-10 p-5 md:p-6 rounded-2xl bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-100 shadow-md">
              <p className="text-base text-zinc-700 font-medium leading-relaxed">
                By participating in this community, you agree to follow these
                guidelines. Failure to do so may result in warnings, removal
                of content, or removal from the community at the discretion
                of the moderation team.
              </p>
            </div>
          </BlurFade>

          {/* Sections */}
          <div className="flex flex-col gap-5">
            {sections.map((section, index) => {
              const color = GOOGLE_COLORS[index % GOOGLE_COLORS.length];
              const Icon = section.icon;
              return (
                <BlurFade key={section.number} delay={0.2 + index * 0.05} inView>
                  <div
                    className="relative overflow-hidden rounded-2xl border-2 bg-white/70 backdrop-blur-md p-5 md:p-6 shadow-md hover:shadow-lg transition-all"
                    style={{ borderColor: `${color}40` }}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1.5"
                      style={{ backgroundColor: color }}
                    />
                    <div className="flex flex-col gap-4 pl-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md"
                          style={{ backgroundColor: color }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-lg md:text-xl font-bold text-zinc-900">
                          {section.emoji} {section.title}
                        </h2>
                      </div>

                      {section.note && (
                        <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                          {section.note}
                        </p>
                      )}

                      <ul className="flex flex-col gap-2">
                        {section.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm md:text-base text-zinc-700"
                          >
                            <span
                              className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: color }}
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>

          {/* Closing note */}
          <BlurFade delay={0.2 + sections.length * 0.05} inView>
            <div className="mt-10 text-center p-6 md:p-8 rounded-2xl bg-[#202124] text-white">
              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3">
                These guidelines are not exhaustive and may be updated from
                time to time. The moderation team reserves the right to take
                action on behavior that negatively impacts the community,
                even if it is not explicitly listed above.
              </p>
              <p className="text-lg md:text-xl font-bold">
                💙 Let&apos;s build, learn, and grow together as a community.
                Welcome to GDG Noida! 🚀
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
      <Footer />
    </div>
  );
}
