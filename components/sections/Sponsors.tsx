"use client";

import React from "react";
import { motion } from "framer-motion";
import { SPONSORS_DATA } from "@/lib/constants";

export default function Sponsors() {
  return (
    <section className="bg-[#111] pt-16 lg:pt-24 pb-8 border-t border-[#222]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-[family-name:var(--font-barlow)] uppercase text-white text-2xl font-bold mb-8"
        >
          SPONSORS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {SPONSORS_DATA.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-[#222] flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer border border-[#333] overflow-hidden">
                <img src={sponsor.logo} alt={sponsor.name} className="w-10 h-10 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <span className="text-white font-[family-name:var(--font-inter)] uppercase font-semibold text-sm">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
