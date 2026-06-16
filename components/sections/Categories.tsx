"use client";

import React from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/constants";
import { Lightbulb, Settings, Cpu, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Categories() {
  const icons = [Settings, Lightbulb, Cpu, Brain];

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
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2
          {...fadeUp}
          className="font-[family-name:var(--font-barlow)] text-4xl lg:text-5xl uppercase text-white font-black mb-10"
        >
          CATEGORIES
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {CATEGORIES.map((category, i) => {
            const Icon = icons[i];
            const isActive = i === 0;

            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ scale: 1.03, borderColor: '#f4a500' }}
                className={cn(
                  "bg-[#1c1c1c] rounded-2xl border p-6 flex flex-col gap-4 transition-colors duration-300",
                  isActive ? "border-[var(--accent-yellow)] bg-[#222]" : "border-[#2a2a2a]"
                )}
              >
                <div className="text-[var(--accent-yellow)]">
                  {i === 0 ? (
                    // Custom "M" Logo for Mini Makers
                    <div className="w-12 h-12 rounded-full border-4 border-[var(--accent-yellow)] flex items-center justify-center">
                      <span className="font-bold text-xl">M</span>
                    </div>
                  ) : (
                    <Icon className="w-12 h-12" />
                  )}
                </div>
                
                <h3 className="font-[family-name:var(--font-barlow)] uppercase text-xl text-white font-black mt-4">
                  {category.title}
                </h3>
                <p className="text-[var(--text-secondary)] font-[family-name:var(--font-inter)] text-sm mb-6">
                  {category.description}
                </p>
                
                <a
                  href="#learn-more"
                  className="text-[var(--accent-red)] uppercase text-xs tracking-widest mt-auto font-bold flex items-center gap-1 hover:underline"
                >
                  LEARN MORE <span className="text-lg leading-none">→</span>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
