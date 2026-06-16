"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wrench, MapPin, Award, Users } from "lucide-react";
import { USER_JOURNEY_STEPS } from "@/lib/constants";

export default function UserJourney() {
  const icons = [Wrench, MapPin, Award, Users];

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
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-black py-16 lg:py-24" id="programs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.div {...fadeUp}>
          <p className="text-[var(--accent-red)] uppercase text-sm tracking-[0.3em] font-bold mb-2">
            USER JOURNEY
          </p>
          <h2 className="font-[family-name:var(--font-barlow)] text-4xl lg:text-5xl uppercase text-white font-black">
            YOUR PATH TO THE LEAGUE
          </h2>
          <p className="text-[var(--text-secondary)] text-base mt-2">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
        </motion.div>

        <div className="relative mt-24 max-w-5xl mx-auto">
          {/* Connecting Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-[#333] origin-left z-0 hidden md:block"
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4 relative z-10"
          >
            {USER_JOURNEY_STEPS.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={step.step}
                  variants={item}
                  className="flex flex-col items-center w-full md:w-1/4"
                >
                  <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border-2 border-[var(--accent-blue)] flex items-center justify-center relative mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Vertical connector line (for visual accuracy) */}
                  <div className="w-[1px] h-6 bg-white/20 mb-4 hidden md:block -mt-6"></div>

                  <p className="text-[var(--accent-red)] uppercase text-xs tracking-widest font-bold mb-2">
                    STEP {step.step}
                  </p>
                  <h3 className="font-[family-name:var(--font-barlow)] uppercase text-sm font-bold text-white max-w-[150px]">
                    {step.title}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
