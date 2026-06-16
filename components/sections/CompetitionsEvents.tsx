"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMPETITIONS_DATA } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CompetitionsEvents() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <section className="bg-[#050505] py-16 lg:py-24" id="events">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          {...fadeUp}
          className="font-[family-name:var(--font-barlow)] text-4xl lg:text-5xl uppercase text-white font-black mb-12"
        >
          COMPETITIONS & EVENTS
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: LIVE NOW */}
          <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
            <h3 className="text-[var(--accent-red)] uppercase text-sm tracking-widest font-bold mb-4">
              LIVE NOW
            </h3>
            <Card className="bg-[#111] border-[#2a2a2a] relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {COMPETITIONS_DATA.liveNow.title}
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm">
                      {COMPETITIONS_DATA.liveNow.subtitle}
                    </p>
                  </div>
                  <span className="bg-[var(--accent-red)] text-white text-xs px-2 py-1 rounded-full uppercase tracking-wider font-semibold">
                    Ongoing
                  </span>
                </div>
                <div className="h-px bg-[#2a2a2a] w-full my-6" />

                {/* Tournament Bracket Visualization */}
                <div className="relative h-48 w-full flex items-center">
                  <div className="w-full flex justify-between items-center">
                    {/* Left Teams (4 slots) */}
                    <div className="flex flex-col gap-2 z-10">
                      {[1, 2, 3, 4].map((slot) => (
                        <div
                          key={slot}
                          className="bg-[#2a2a2a] rounded w-24 h-8"
                        />
                      ))}
                    </div>

                    {/* Semifinals (2 slots) */}
                    <div className="flex flex-col gap-10 z-10 absolute left-1/3">
                      {[1, 2].map((slot) => (
                        <div
                          key={slot}
                          className="bg-[#2a2a2a] rounded w-24 h-8"
                        />
                      ))}
                    </div>

                    {/* Final Winner (1 slot) */}
                    <div className="z-10 absolute right-4">
                      <div className="bg-[#2a2a2a] rounded w-24 h-8" />
                    </div>

                    {/* Connecting SVG Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                      {/* Top pair to Semifinal 1 */}
                      <path d="M 96 28 L 110 28 L 110 54 L 128 54" fill="none" stroke="var(--accent-red)" strokeWidth="2" />
                      <path d="M 96 68 L 110 68 L 110 54 L 128 54" fill="none" stroke="var(--accent-red)" strokeWidth="2" />
                      
                      {/* Bottom pair to Semifinal 2 */}
                      <path d="M 96 116 L 110 116 L 110 142 L 128 142" fill="none" stroke="var(--accent-red)" strokeWidth="2" />
                      <path d="M 96 156 L 110 156 L 110 142 L 128 142" fill="none" stroke="var(--accent-red)" strokeWidth="2" />

                      {/* Semifinals to Final */}
                      <path d="M 224 54 L 240 54 L 240 96 L 270 96" fill="none" stroke="var(--accent-red)" strokeWidth="2" />
                      <path d="M 224 142 L 240 142 L 240 96 L 270 96" fill="none" stroke="var(--accent-red)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Column 2: UPCOMING */}
          <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
            <h3 className="text-white uppercase text-sm tracking-widest font-bold mb-4">
              UPCOMING
            </h3>
            <div className="flex flex-col gap-4">
              {COMPETITIONS_DATA.upcoming.map((event, i) => (
                <Card key={i} className="bg-[#1a1a1a] border-[#2a2a2a]">
                  <CardContent className="p-5">
                    <h4 className="text-white font-bold text-lg mb-4">
                      {event.title}
                    </h4>
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      <div>
                        <p className="text-[var(--text-secondary)] text-xs uppercase mb-1">Date</p>
                        <p className="text-white text-sm font-medium">{event.date}</p>
                      </div>
                      <div>
                        <p className="text-[var(--text-secondary)] text-xs uppercase mb-1">Location</p>
                        <p className="text-white text-sm font-medium">{event.location}</p>
                      </div>
                      <div>
                        <p className="text-[var(--text-secondary)] text-xs uppercase mb-1">Category</p>
                        <p className="text-white text-sm font-medium">{event.category}</p>
                      </div>
                    </div>
                    <Button className="w-full uppercase font-bold tracking-widest">
                      REGISTER
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Column 3: PAST RESULTS */}
          <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
            <h3 className="text-white uppercase text-sm tracking-widest font-bold mb-4">
              PAST RESULTS
            </h3>
            <Card className="bg-transparent border-[#2a2a2a]">
              <CardContent className="p-6">
                {COMPETITIONS_DATA.pastResults.map((result, i) => (
                  <div
                    key={i}
                    className={`py-4 ${
                      i !== COMPETITIONS_DATA.pastResults.length - 1
                        ? "border-b border-[#2a2a2a]"
                        : ""
                    }`}
                  >
                    <h4 className="text-white font-bold">{result.title}</h4>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">
                      {result.subtitle}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
