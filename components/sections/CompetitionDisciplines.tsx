"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DISCIPLINES } from "@/lib/constants";

export default function CompetitionDisciplines() {
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const imageAnimation = {
    initial: { opacity: 0, scale: 1.05 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div {...fadeUp} className="mb-10">
          <p className="text-[var(--accent-red)] uppercase text-xs tracking-[0.3em] font-bold mb-2">
            SPORTS
          </p>
          <h2 className="font-[family-name:var(--font-barlow)] text-4xl lg:text-5xl uppercase text-white font-black">
            COMPETITION DISCIPLINES
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Row 1 */}
          {DISCIPLINES.slice(0, 4).map((discipline, i) => (
            <motion.div
              key={i}
              {...imageAnimation}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-[4/3] group"
            >
              <div className="absolute inset-0 bg-[#222]">
                <Image
                  src={discipline.image}
                  alt={discipline.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 z-10">
                <h3 className="text-white font-[family-name:var(--font-inter)] font-semibold text-sm">
                  {discipline.title}
                </h3>
              </div>
            </motion.div>
          ))}

          {/* Row 2 */}
          {DISCIPLINES.slice(4, 6).map((discipline, i) => (
            <motion.div
              key={i + 4}
              {...imageAnimation}
              transition={{ duration: 0.8, delay: (i + 4) * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-[4/3] group"
            >
              <div className="absolute inset-0 bg-[#222]">
                <Image
                  src={discipline.image}
                  alt={discipline.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 z-10">
                <h3 className="text-white font-[family-name:var(--font-inter)] font-semibold text-sm">
                  {discipline.title}
                </h3>
              </div>
            </motion.div>
          ))}

          {/* Decorative Block */}
          <motion.div
            {...imageAnimation}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative rounded-xl overflow-hidden lg:col-span-2 aspect-[8/3] bg-[#0a0a0a] border border-[#222] flex items-center justify-center"
          >
            {/* Abstract Circuit Pattern SVG */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30 stroke-[var(--accent-red)] fill-none"
              strokeWidth="2"
            >
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="3" fill="var(--accent-red)" />
                <path d="M 10 10 L 30 30 L 60 30" />
                <circle cx="30" cy="50" r="2" fill="var(--accent-red)" />
                <path d="M 30 50 L 30 30" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
