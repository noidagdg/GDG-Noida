"use client";

import Loader from "@/components/Loader";
import { useState } from "react";
import { devfestData } from "@/lib/data/devfest-data";

const EventsPage = () => {
    const years = Object.keys(devfestData).map(Number) as Array<
        keyof typeof devfestData
    >;
    const [selectedYear, setSelectedYear] = useState<keyof typeof devfestData>(
        years[0]
    );

    const event = devfestData[selectedYear];

    return (
        <div className="min-h-screen bg-white pt-24 sm:pt-28 md:pt-32">

            {/* Title */}
            <div className="px-4 sm:px-6 lg:ml-16 lg:px-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-black text-center lg:text-left" style={{ fontFamily: "'Product Sans', sans-serif", fontWeight: 500 }}>
                    {event.title}
                </h1>
            </div>

            {/* Hero image */}
            <div className="w-full mt-4 sm:mt-6 md:mt-8">
                <img
                    src={event?.hero.coverImage}
                    alt={"Cover Image"}
                    className="w-full h-[180px] sm:h-[300px] md:h-[420px] lg:h-[580px] object-cover block"
                />
            </div>

            {/* Year selector buttons */}
            <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-4 sm:pt-6 pb-8">
                <div className="flex flex-nowrap justify-center gap-2 sm:gap-3 md:gap-4">
                    {years.map((year) => {
                        const isActive = year === selectedYear;
                        return (
                                <button
                                    key={year}
                                    type="button"
                                    onClick={() => setSelectedYear(year)}
                                    aria-pressed={isActive}
                                    className={[
                                        "px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-xl transition-colors",
                                        isActive
                                            ? "bg-[#3B82F6] text-white"
                                            : "bg-[#F0F0F1] text-[#4B5563] hover:bg-[#E5E5E6]",
                                    ].join(" ")}
                                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
                                >
                                {year}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;