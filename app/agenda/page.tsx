"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { MapPin, ExternalLink } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

interface Session {
  id: string;
  startTime: string;
  endTime: string;
  title: string;
  speakerName?: string;
  speakerRole?: string;
  hasQnA?: boolean;
}

interface Track {
  id: string;
  name: string;
  color: string;
  sessions: Session[];
}

const tracks: Track[] = [
  {
    id: "think",
    name: "THINK",
    color: "#4285F4",
    sessions: [
      { id: "t1", startTime: "09:00", endTime: "09:30", title: "Registrations", hasQnA: true },
      { id: "t2", startTime: "10:00", endTime: "10:30", title: "Opening Note", hasQnA: true },
      { id: "t3", startTime: "10:30", endTime: "11:00", title: "Introduction by Google", hasQnA: true },
      { id: "t4", startTime: "11:00", endTime: "11:20", title: "Journey of Enterprenerurship from Ideation to Funding", speakerName: "Mamta Kumari", speakerRole: "--", hasQnA: true },
      { id: "t5", startTime: "11:25", endTime: "11:50", title: "Co-Creation Era : How AI Joins the Design Team", speakerName: "Sujit Kumar Pradhan", speakerRole: "UX Designer", hasQnA: true },
      { id: "t6", startTime: "11:55", endTime: "12:15", title: "Replacing Human Departments with AI Swarm: Designing Systems beyond Human Accuracy", speakerName: "Aashish Pahwa", speakerRole: "Founder - koso.ai", hasQnA: true },
      { id: "t7", startTime: "12:20", endTime: "12:40", title: "Human Defaults And Desires : How Behavior Shapes Product Choice ?", speakerName: "Paromita Saha", speakerRole: "--", hasQnA: true },
      { id: "t8", startTime: "12:45", endTime: "13:05", title: "TBD", hasQnA: true },
      { id: "t9", startTime: "13:10", endTime: "13:40", title: "LUNCH", hasQnA: true },
      { id: "t10", startTime: "13:45", endTime: "14:00", title: "Fun Activity", hasQnA: true },
      { id: "t11", startTime: "14:20", endTime: "14:55", title: "The Invisible Patterns of Nature : Laws that Quietly Shape our World", speakerName: "Joy Banerjee", speakerRole: "--", hasQnA: true },
      { id: "t12", startTime: "15:00", endTime: "15:20", title: "AI and The Future for Product Managers", speakerName: "Nitya Sagar", speakerRole: "--", hasQnA: true },
      { id: "t13", startTime: "15:25", endTime: "16:00", title: "Group Discussion", hasQnA: true },
      { id: "t14", startTime: "16:00", endTime: "17:00", title: "Small Business Fair, Networking, Activities", hasQnA: true },
      { id: "t15", startTime: "17:00", endTime: "18:00", title: "Closing Keynote", hasQnA: true },
    ],
  },
  {
    id: "build",
    name: "BUILD",
    color: "#34A853",
    sessions: [
      { id: "b1", startTime: "09:00", endTime: "09:30", title: "Registrations", hasQnA: true },
      { id: "b2", startTime: "10:00", endTime: "10:30", title: "Opening Note", hasQnA: true },
      { id: "b3", startTime: "10:30", endTime: "11:00", title: "Introduction by Google", hasQnA: true },
      { id: "b4", startTime: "11:00", endTime: "11:30", title: "When Your GCP Application Needs to Understand Relationships", speakerName: "Manjunath Janardhan", speakerRole: "Principal AI Engineer", hasQnA: true },
      { id: "b5", startTime: "11:35", endTime: "11:55", title: "TBD", hasQnA: true },
      { id: "b6", startTime: "12:00", endTime: "12:25", title: "CLS, INP & LCP Walk Into a Bar... (And Google Takes Notes)", speakerName: "Aprajita Verma", speakerRole: "Frontend Architect", hasQnA: true },
      { id: "b7", startTime: "12:30", endTime: "12:50", title: "Time to commit and get Git Gud: GitHub Workflow upgrades you need to know about", speakerName: "Vipul Gupta", speakerRole: "Senior Software Engineer @ balena | GitHub Star | Google Cloud Architect | Mixster", hasQnA: true },
      { id: "b8", startTime: "12:55", endTime: "13:20", title: "LLM-Powered IoT: How Vertex Al & Gemini Understand Live Sensor Data", speakerName: "Avirup Basu", speakerRole: "Developer | Speaker | IoT", hasQnA: true },
      { id: "b9", startTime: "13:25", endTime: "14:10", title: "LUNCH", hasQnA: true },
      { id: "b10", startTime: "14:10", endTime: "14:25", title: "FUN ACTIVITY", hasQnA: true },
      { id: "b11", startTime: "14:30", endTime: "14:55", title: "Web Al - Built-in APls, Developer Supplied Models and a lot more", speakerName: "Saurabh Rajpal", speakerRole: "Staff Web Ecosystem Consultant, Google", hasQnA: true },
      { id: "b12", startTime: "15:00", endTime: "15:20", title: "The Product and Engineering Behind Climate Intelligence", speakerName: "Supriya Purohit", speakerRole: "--", hasQnA: true },
      { id: "b13", startTime: "15:25", endTime: "15:45", title: "TBD", hasQnA: true },
      { id: "b14", startTime: "15:50", endTime: "16:00", title: "TBD", hasQnA: true },
      { id: "b15", startTime: "16:00", endTime: "17:00", title: "Small Business Fair, Networking, Activities", hasQnA: true },
      { id: "b16", startTime: "17:00", endTime: "18:00", title: "Closing Keynote", hasQnA: true },
    ],
  },
  {
    id: "grow",
    name: "GROW",
    color: "#FBBC04",
    sessions: [
      { id: "g1", startTime: "00:20", endTime: "00:40", title: "Semantic Search: Add a Brain To Your Searh Bar", hasQnA: true },
      { id: "g2", startTime: "09:00", endTime: "09:30", title: "Registrations", hasQnA: true },
      { id: "g3", startTime: "10:00", endTime: "10:30", title: "Opening Note", hasQnA: true },
      { id: "g4", startTime: "10:30", endTime: "11:00", title: "Introduction by Google", hasQnA: true },
      { id: "g5", startTime: "11:00", endTime: "11:20", title: "Responsible AI - Ethics and Governance", speakerName: "Saakshar Duggal", speakerRole: "--", hasQnA: true },
      { id: "g6", startTime: "11:25", endTime: "11:50", title: "Don't Just Find, Solve: Building Agentic Search", speakerName: "Puranjay Rohan Gulati", speakerRole: "Lead AI Architect @ FutureSoft", hasQnA: true },
      { id: "g7", startTime: "11:55", endTime: "12:15", title: "Making AI Agents Go Brrrrr with Audio AI", speakerName: "Harsh", speakerRole: "Making ML Infra Systems fun and easy", hasQnA: true },
      { id: "g8", startTime: "12:20", endTime: "12:40", title: "Semantic Search: Add a Brain To Your Search Bar", speakerName: "Akshat Sharma", speakerRole: "ML/AI Innovator and Enthusiast", hasQnA: true },
      { id: "g9", startTime: "12:45", endTime: "13:05", title: "Don't Build a House Without a Lock: Security Steps for Developers", speakerName: "Nikita Purwar", speakerRole: "Lead Consultant at Thoughtworks", hasQnA: true },
      { id: "g10", startTime: "13:10", endTime: "13:40", title: "LUNCH", hasQnA: true },
      { id: "g11", startTime: "13:45", endTime: "14:00", title: "Fun activity", hasQnA: true },
      { id: "g12", startTime: "14:00", endTime: "14:15", title: "TBD", hasQnA: true },
      { id: "g13", startTime: "14:20", endTime: "14:40", title: "Designing a Future-Proof Finance Portfolio", speakerName: "Shivani Gera", speakerRole: "--", hasQnA: true },
      { id: "g14", startTime: "14:45", endTime: "15:05", title: "Quantum Computing: Decoding the Hype & Demystifying the Tech", speakerName: "Shubh Bansal", speakerRole: "SWE | Quantum Computing Enthusiast", hasQnA: true },
      { id: "g15", startTime: "15:10", endTime: "15:30", title: "Behind the Scenes of Safer AI: Red-Teaming, Moderation & Breaking Models Before They Break Us", speakerName: "Abhigya verma", speakerRole: "Developer, Building LLMs at ServiceNow", hasQnA: true },
      { id: "g16", startTime: "15:35", endTime: "16:00", title: "TBD", hasQnA: true },
      { id: "g17", startTime: "16:00", endTime: "17:00", title: "Small Business Fair, Networking, Activities", hasQnA: true },
      { id: "g18", startTime: "17:00", endTime: "18:00", title: "Closing Keynote", hasQnA: true },
    ],
  },
];

const venueAddress = "25-29, Knowledge Park II, Greater Noida, Noida, Uttar Pradesh 201310";
const mapLink = "https://maps.google.com/?q=25-29,+Knowledge+Park+II,+Greater+Noida,+Noida,+Uttar+Pradesh+201310";

export default function AgendaPage() {
  const [activeTrack, setActiveTrack] = useState<string>("think");

  const currentTrack = tracks.find((track) => track.id === activeTrack) || tracks[0];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-28 pb-12 px-4 md:px-8 lg:px-20 mt-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-3">
                Event <span className="text-[#4285F4]">Agenda</span>
              </h1>
              <p className="text-base md:text-lg text-zinc-600">
                Explore our comprehensive schedule across three exciting tracks
              </p>
            </div>
          </BlurFade>

          {/* Venue Information */}
          <BlurFade delay={0.2} inView>
            <div className="mb-8 p-4 md:p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#4285F4] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900 mb-0.5">Venue</h3>
                    <p className="text-sm text-zinc-700">{venueAddress}</p>
                  </div>
                </div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-[#4285F4] text-white rounded-lg hover:bg-[#3367D6] transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Link to Map
                </a>
              </div>
            </div>
          </BlurFade>

          {/* Track Tabs */}
          <BlurFade delay={0.3} inView>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-full font-semibold text-base transition-all duration-300",
                    activeTrack === track.id
                      ? "text-white shadow-md scale-105"
                      : "text-zinc-700 bg-zinc-100 hover:bg-zinc-200"
                  )}
                  style={
                    activeTrack === track.id
                      ? { backgroundColor: track.color }
                      : undefined
                  }
                >
                  {track.name}
                </button>
              ))}
            </div>
          </BlurFade>

          {/* Sessions Timeline */}
          <BlurFade delay={0.4} inView>
            <div className="relative">
              <Timeline
                color={currentTrack.color}
                data={currentTrack.sessions.map((session) => ({
                  title: `${session.startTime} - ${session.endTime}`,
                  content: (
                    <div className="bg-white rounded-lg border border-zinc-200 p-4 hover:shadow-md hover:border-zinc-300 transition-all w-full">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-base font-semibold text-zinc-900 leading-tight">
                          {session.title}
                        </h3>
                        {session.speakerName && (
                          <div className="flex flex-col gap-0.5">
                            <p className="text-sm font-medium text-zinc-800">
                              {session.speakerName}
                            </p>
                            {session.speakerRole && session.speakerRole !== "--" && (
                              <p className="text-xs text-zinc-500">
                                {session.speakerRole}
                              </p>
                            )}
                          </div>
                        )}
                        {/* {session.hasQnA && (
                          <button
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-50 hover:bg-zinc-100 text-zinc-700 font-medium transition-colors text-xs mt-1 w-fit"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            Ask Q&apos;s
                          </button>
                        )} */}
                      </div>
                    </div>
                  ),
                }))}
              />
            </div>
          </BlurFade>
        </div>
      </div>
      <Footer />
    </div>
  );
}

