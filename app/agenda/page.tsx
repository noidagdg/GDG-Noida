"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { MapPin, ExternalLink } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import FallingStars from "@/components/magicui/falling-stars";

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
      { id: "t2", startTime: "10:00", endTime: "10:30", title: "Opening Keynote", hasQnA: true },
      { id: "t3", startTime: "10:30", endTime: "11:00", title: "Introduction by Google", hasQnA: true },
      { id: "t4", startTime: "11:00", endTime: "11:20", title: "Journey of Enterprenerurship from Ideation to Funding", speakerName: "Mamta Kumari", speakerRole: "--", hasQnA: true },
      { id: "t5", startTime: "11:25", endTime: "11:45", title: "Design for Social Impact", speakerName: "Akshata Malhotra", speakerRole: "VP Design @ Samagra", hasQnA: true },
      { id: "t6", startTime: "11:55", endTime: "12:15", title: "Replacing Human Departments with AI Swarm: Designing Systems beyond Human Accuracy", speakerName: "Aashish Pahwa", speakerRole: "Founder - koso.ai", hasQnA: true },
      { id: "t7", startTime: "12:20", endTime: "12:40", title: "Human Defaults And Desires : How Behavior Shapes Product Choice ?", speakerName: "Paromita Saha", speakerRole: "--", hasQnA: true },
      { id: "t8", startTime: "12:45", endTime: "13:05", title: "Co-Creation Era : How AI Joins the Design Team", speakerName: "Sujit Kumar Pradhan", speakerRole: "--", hasQnA: true },
      { id: "t9", startTime: "13:10", endTime: "13:55", title: "LUNCH", hasQnA: true },
      { id: "t10", startTime: "14:00", endTime: "14:30", title: "Fun Activity", hasQnA: true },
      { id: "t11", startTime: "14:35", endTime: "14:55", title: "The Invisible Patterns of Nature : Laws that Quietly Shape our World", speakerName: "Joy Banerjee", speakerRole: "--", hasQnA: true },
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
      { id: "b2", startTime: "10:00", endTime: "10:30", title: "Opening Keynote", hasQnA: true },
      { id: "b3", startTime: "10:30", endTime: "11:00", title: "Introduction by Google", hasQnA: true },
      { id: "b4", startTime: "11:00", endTime: "11:30", title: "Building Hybrid AI mobile apps using Gemini and LiteRT", speakerName: "Shivay Lamba", speakerRole: "", hasQnA: true },
      { id: "b5", startTime: "11:35", endTime: "12:00", title: "The Product and Engineering Behind Climate Intelligence", speakerName: "Supriya Purohit", speakerRole: "--", hasQnA: true },
      { id: "b6", startTime: "12:00", endTime: "12:25", title: "CLS, INP & LCP Walk Into a Bar... (And Google Takes Notes)", speakerName: "Aprajita Verma", speakerRole: "Frontend Architect", hasQnA: true },
      { id: "b7", startTime: "12:30", endTime: "12:50", title: "Time to commit and get Git Gud: GitHub Workflow upgrades you need to know about", speakerName: "Vipul Gupta", speakerRole: "Senior Software Engineer @ balena | GitHub Star | Google Cloud Architect | Mixster", hasQnA: true },
      { id: "b8", startTime: "12:55", endTime: "13:20", title: "LLM-Powered IoT: How Vertex Al & Gemini Understand Live Sensor Data", speakerName: "Avirup Basu", speakerRole: "Developer | Speaker | IoT", hasQnA: true },
      { id: "b9", startTime: "13:25", endTime: "14:10", title: "LUNCH", hasQnA: true },
      { id: "b10", startTime: "14:10", endTime: "14:25", title: "FUN ACTIVITY", hasQnA: true },
      { id: "b11", startTime: "14:30", endTime: "14:55", title: "Designing future proof Finance Portfolio", speakerName: "Saurabh Rajpal", speakerRole: "Staff Web Ecosystem Consultant, Google", hasQnA: true },
      { id: "b12", startTime: "15:00", endTime: "15:20", title: "How open source made me a generalist & Why that's a good thing", speakerName: "Utkarsh Gupta", speakerRole: "", hasQnA: true },
      { id: "b13", startTime: "15:25", endTime: "15:45", title: "Behind The Scenes of Safer AI...", speakerName: "Anupam Singh", speakerRole: "--", hasQnA: true },
      { id: "b14", startTime: "16:10", endTime: "17:00", title: "Small Business Fair, Networking, Activities", hasQnA: true },
      { id: "b15", startTime: "17:00", endTime: "18:00", title: "Closing Keynote", hasQnA: true },
    ],
  },
  {
    id: "grow",
    name: "GROW",
    color: "#F9A825",
    sessions: [
      { id: "g1", startTime: "09:00", endTime: "09:30", title: "Registrations", hasQnA: true },
      { id: "g2", startTime: "10:00", endTime: "10:30", title: "Opening Keynote", hasQnA: true },
      { id: "g3", startTime: "10:30", endTime: "11:00", title: "Introduction by Google", hasQnA: true },
      { id: "g4", startTime: "11:00", endTime: "11:20", title: "Responsible AI - Ethics and Governance", speakerName: "Saakshar Duggal", speakerRole: "--", hasQnA: true },
      { id: "g5", startTime: "11:25", endTime: "11:50", title: "Don't Just Find, Solve: Building Agentic Search", speakerName: "Puranjay Rohan Gulati", speakerRole: "Lead AI Architect @ FutureSoft", hasQnA: true },
      { id: "g6", startTime: "11:55", endTime: "12:15", title: "Making AI Agents Go Brrrrr with Audio AI", speakerName: "Harsh", speakerRole: "Making ML Infra Systems fun and easy", hasQnA: true },
      { id: "g7", startTime: "12:20", endTime: "12:40", title: "Semantic Search: Add a Brain To Your Search Bar", speakerName: "Akshat Sharma", speakerRole: "ML/AI Innovator and Enthusiast", hasQnA: true },
      { id: "g8", startTime: "12:45", endTime: "13:05", title: "Don't Build a House Without a Lock: Security Steps for Developers", speakerName: "Nikita Purwar", speakerRole: "Lead Consultant at Thoughtworks", hasQnA: true },
      { id: "g9", startTime: "13:10", endTime: "13:40", title: "LUNCH", hasQnA: true },
      { id: "g10", startTime: "13:45", endTime: "14:15", title: "Fun activity", hasQnA: true },
      { id: "g11", startTime: "14:20", endTime: "14:20", title: "Designing a Future-Proof Finance Portfolio", speakerName: "Shivani Gera", speakerRole: "--", hasQnA: true },
      { id: "g12", startTime: "14:45", endTime: "15:05", title: "Hidden cost of AI: Sustainability and Cognition", speakerName: "Shubhangi Gupta", speakerRole: "--", hasQnA: true },
      { id: "g13", startTime: "15:10", endTime: "15:30", title: "Behind the Scenes of Safer AI: Red-Teaming, Moderation & Breaking Models Before They Break Us", speakerName: "Abhigya verma", speakerRole: "Developer, Building LLMs at ServiceNow", hasQnA: true },
      { id: "g14", startTime: "15:35", endTime: "16:00", title: "Gemini and Synthetics : AI for Next-Gen Monitoring" , speakerName: "Siddhi Khaire", speakerRole: "", hasQnA: true },
      { id: "g15", startTime: "16:00", endTime: "17:00", title: "Small Business Fair, Networking, Activities", hasQnA: true },
      { id: "g16", startTime: "17:00", endTime: "18:00", title: "Closing Keynote", hasQnA: true },
    ],
  },
  {
    id: "workshop",
    name: "WORKSHOP",
    color: "#E91E63",
    sessions: [
      { id: "w1", startTime: "09:00", endTime: "09:30", title: "Registrations", hasQnA: true },
      { id: "w2", startTime: "10:00", endTime: "10:30", title: "Opening Keynote", hasQnA: true },
      { id: "w3", startTime: "10:30", endTime: "11:00", title: "Introduction by Google", hasQnA: true },
      { id: "w4", startTime: "11:00", endTime: "11:50", title: "Code the cognitive Web : Google AI's Toolkit", speakerName: "Ashish Kumar", speakerRole: "--", hasQnA: true },
      { id: "w5", startTime: "11:55", endTime: "12:40", title: "Open Source for Everyone : A practical hands on contribution workshop", speakerName: "Pushplata Ranjan", speakerRole: "", hasQnA: true },
      { id: "w6", startTime: "12:45", endTime: "13:40", title: "LUNCH", hasQnA: true },
      { id: "w7", startTime: "13:45", endTime: "14:00", title: "Fun activity", hasQnA: true },
      { id: "w8", startTime: "14:00", endTime: "14:50", title: "Vibe Coding 101 for Beginners", speakerName: "Aditya Mishra", speakerRole: "--", hasQnA: true },
      { id: "w9", startTime: "14:55", endTime: "15:40", title: "Build your own Pair Programmer in Antigravity", speakerName: "Shekhar Patel", speakerRole: "--", hasQnA: true },
      { id: "w10", startTime: "16:00", endTime: "17:00", title: "Small Business Fair, Networking, Activities", hasQnA: true },
      { id: "w11", startTime: "17:00", endTime: "18:00", title: "Closing Keynote", hasQnA: true },
    ],
  },
];

const venueAddress = "25-29, Knowledge Park II, Greater Noida, Noida, Uttar Pradesh 201310";
const mapLink = "https://maps.google.com/?q=25-29,+Knowledge+Park+II,+Greater+Noida,+Noida,+Uttar+Pradesh+201310";

export default function AgendaPage() {
  const [activeTrack, setActiveTrack] = useState<string>("think");

  const currentTrack = tracks.find((track) => track.id === activeTrack) || tracks[0];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      <FallingStars color={currentTrack.color} count={35} />
      <Navbar />
      <div className="pt-28 pb-12 px-4 md:px-8 lg:px-20 mt-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4">
                Event <span className="bg-linear-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent">Agenda</span>
              </h1>
              <p className="text-base md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                Explore our comprehensive schedule across four exciting tracks
              </p>
            </div>
          </BlurFade>

          {/* Venue Information */}
          <BlurFade delay={0.2} inView>
            <div className="mb-10 p-5 md:p-6 rounded-2xl bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-100 shadow-md">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4285F4] flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 mb-1 uppercase tracking-wide">Event Venue</h3>
                    <p className="text-base text-zinc-700 font-medium">{venueAddress}</p>
                  </div>
                </div>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#4285F4] text-white rounded-xl hover:bg-[#3367D6] hover:scale-105 transition-all text-sm font-bold shadow-lg hover:shadow-xl"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on Map
                </a>
              </div>
            </div>
          </BlurFade>

          {/* Track Tabs */}
          <BlurFade delay={0.3} inView>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {tracks.map((track) => (
                <button
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={cn(
                    "px-6 py-3 rounded-full font-bold text-base transition-all duration-300 relative overflow-hidden",
                    activeTrack === track.id
                      ? "text-white shadow-lg scale-105 ring-2 ring-offset-2 ring-opacity-40"
                      : "text-zinc-700 bg-zinc-100 hover:bg-zinc-200 hover:scale-102"
                  )}
                  style={
                    activeTrack === track.id
                      ? { backgroundColor: track.color, "--tw-ring-color": `${track.color}40` } as React.CSSProperties
                      : undefined
                  }
                >
                  {activeTrack === track.id && (
                    <span className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                  )}
                  <span className="relative z-10">{track.name}</span>
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
                    <div 
                      className="bg-white/70 backdrop-blur-md rounded-xl border-2 p-5 hover:shadow-lg hover:scale-[1.02] transition-all w-full relative overflow-hidden group"
                      style={{ borderColor: `${currentTrack.color}40` }}
                    >
                      {/* Accent bar on left */}
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                        style={{ backgroundColor: currentTrack.color }}
                      />
                      
                      {/* Duration badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white shadow-sm"
                        style={{ backgroundColor: currentTrack.color }}
                      >
                        {(() => {
                          const [startHour, startMin] = session.startTime.split(':').map(Number);
                          const [endHour, endMin] = session.endTime.split(':').map(Number);
                          const duration = (endHour * 60 + endMin) - (startHour * 60 + startMin);
                          return `${duration} min`;
                        })()}
                      </div>

                      <div className="flex flex-col gap-3 pl-3">
                        <h3 className="text-lg font-bold text-zinc-900 leading-snug pr-20">
                          {session.title}
                        </h3>
                        {session.speakerName && (
                          <div className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-lg px-3 py-3 border border-white/40 min-h-[64px]">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                              style={{ backgroundColor: currentTrack.color }}
                            >
                              {session.speakerName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </div>
                            <div className="flex flex-col min-w-0 justify-center flex-1">
                              <p className="text-sm font-semibold text-zinc-900 leading-tight">
                                {session.speakerName}
                              </p>
                              {session.speakerRole && session.speakerRole !== "--" ? (
                                <p className="text-xs text-zinc-600 leading-relaxed mt-1">
                                  {session.speakerRole}
                                </p>
                              ) : (
                                <p className="text-xs text-zinc-500 leading-relaxed mt-1 italic">
                                  Speaker
                                </p>
                              )}
                            </div>
                          </div>
                        )}
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

