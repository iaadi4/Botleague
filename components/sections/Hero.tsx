"use client";

import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/lib/constants";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Hero() {
  const words1 = HERO_CONTENT.title1.split(" ");
  const words2 = HERO_CONTENT.title2.split(" ");

  const wordAnimation = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#050505]">
        <Image 
          src="/images/hero-bg-v3.png" 
          alt="BotLeague Arena" 
          fill 
          priority
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/80 to-transparent z-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--accent-red)]/10 rounded-full blur-[120px] mix-blend-screen z-0 pointer-events-none" />
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-20 right-6 z-20 hidden md:flex items-center gap-3 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
      >
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-2.5 h-2.5 rounded-full bg-[var(--live-red)] shadow-[0_0_8px_var(--live-red)]"
        />
        <span className="text-white text-sm font-medium tracking-wide">
          {HERO_CONTENT.liveEpisode}
        </span>
        <a href="#live" className="text-[var(--accent-red)] text-sm font-bold ml-2 hover:underline">
          WATCH LIVE
        </a>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          <motion.h1
            variants={stagger}
            initial="initial"
            animate="animate"
            className="font-[family-name:var(--font-barlow)] font-black text-6xl lg:text-8xl uppercase text-white leading-none tracking-wide"
          >
            <div className="flex flex-wrap gap-x-4">
              {words1.map((word, i) => (
                <motion.span key={i} variants={wordAnimation} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-4 mt-2">
              {words2.map((word, i) => (
                <motion.span key={i} variants={wordAnimation} className="inline-block">
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 border border-dashed border-[var(--accent-red)]/50 p-4 inline-block bg-black/20 backdrop-blur-sm"
          >
            <p className="font-[family-name:var(--font-inter)] text-base text-white">
              {HERO_CONTENT.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Button size="lg" className="uppercase tracking-widest font-bold">
              CREATE ACCOUNT
            </Button>
            <Button size="lg" variant="outline" className="uppercase tracking-widest font-bold">
              EXPLORE EVENTS
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
