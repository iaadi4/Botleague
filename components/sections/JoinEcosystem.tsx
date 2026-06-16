"use client";

import React from "react";
import { motion } from "framer-motion";
import { JOIN_FORMS } from "@/lib/constants";

export default function JoinEcosystem() {
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
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          {...fadeUp}
          className="font-[family-name:var(--font-barlow)] text-4xl lg:text-5xl uppercase text-white font-black mb-12"
        >
          JOIN THE ECOSYSTEM
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {JOIN_FORMS.map((form, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-[#111] rounded-2xl border border-[#222] p-6"
            >
              <h3 className="text-white font-[family-name:var(--font-barlow)] uppercase text-lg tracking-widest font-bold mb-6">
                {form.title}
              </h3>
              
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-400 text-sm w-full focus:outline-none focus:border-[var(--accent-red)] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-400 text-sm w-full focus:outline-none focus:border-[var(--accent-red)] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Enroll"
                  className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-gray-400 text-sm w-full focus:outline-none focus:border-[var(--accent-red)] transition-colors"
                />
                
                <button
                  type="button"
                  className="w-full bg-[var(--accent-red)] hover:bg-[var(--accent-red-dark)] text-white uppercase font-bold tracking-widest py-3 rounded-lg mt-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-red)] focus:ring-offset-2 focus:ring-offset-black"
                >
                  SIGN UP
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
