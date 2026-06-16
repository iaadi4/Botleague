"use client";

import React from "react";
import { motion } from "framer-motion";
import { WHAT_IS_BOTLEAGUE_FEATURES } from "@/lib/constants";

export default function WhatIsBotLeague() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#0d0d0d] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          {...fadeUp}
          className="font-[family-name:var(--font-barlow)] text-4xl lg:text-5xl uppercase text-white font-black mb-6"
        >
          WHAT IS BOTLEAGUE?
        </motion.h2>

        <motion.div {...fadeUp} className="prose dark:prose-invert max-w-4xl text-[var(--text-secondary)] font-[family-name:var(--font-inter)] mb-12">
          <p className="text-lg leading-relaxed mb-4">
            BotLeague is the premier platform designed to elevate India's robotics ecosystem. 
            Whether you are a student, hobbyist, or professional engineer, our arena provides 
            the ultimate testing ground. By participating in our national tournaments, teams 
            can build robust mechanical systems, program autonomous routines, and compete in 
            high-stakes physical matches that push the boundaries of modern engineering.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Our mission is to bridge the gap between academic theory and practical application. 
            Through hands-on experience in the BotLeague arena, participants gain invaluable skills 
            in rapid prototyping, system integration, teamwork, and strategic problem-solving. 
            We provide a standardized framework for competitions that ensures fairness while 
            encouraging radical innovation in robot design.
          </p>
          <p className="text-lg leading-relaxed">
            From the initial spark of an idea to the final buzzer of a championship match, 
            BotLeague supports you at every step. Join thousands of makers across the country 
            in a vibrant community where knowledge is shared, rivalries are forged, and the 
            future of automation is built today. Ready your motors, charge your batteries, 
            and step into the ultimate robotics arena.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10"
          >
            {WHAT_IS_BOTLEAGUE_FEATURES.map((feature, i) => (
              <motion.div key={i} variants={item}>
                <h3 className="text-[var(--accent-red)] font-[family-name:var(--font-barlow)] text-2xl font-black">
                  {i + 1}.
                </h3>
                <h4 className="text-white uppercase font-[family-name:var(--font-barlow)] text-xl font-bold mt-1">
                  {feature.title}
                </h4>
                <p className="text-[var(--text-secondary)] font-[family-name:var(--font-inter)] text-sm mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end w-full lg:w-auto"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Mock SVG for Circuit/Robot Diagram since asset not provided */}
              <svg viewBox="0 0 200 200" className="w-full h-full stroke-white/40 fill-none" strokeWidth="1">
                <circle cx="100" cy="100" r="40" className="stroke-white/60" />
                <path d="M 100 60 L 100 20" />
                <path d="M 100 140 L 100 180" />
                <path d="M 60 100 L 20 100" />
                <path d="M 140 100 L 180 100" />
                <rect x="15" y="85" width="30" height="30" rx="4" />
                <rect x="155" y="85" width="30" height="30" rx="4" />
                <circle cx="100" cy="20" r="15" />
                <rect x="85" y="165" width="30" height="30" rx="4" />
                
                {/* Center "Robot" symbol */}
                <path d="M 90 95 L 110 95 L 105 110 L 95 110 Z" className="stroke-[var(--accent-red)]" strokeWidth="2" />
                <circle cx="95" cy="90" r="2" fill="var(--accent-red)" />
                <circle cx="105" cy="90" r="2" fill="var(--accent-red)" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
