"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Gavel, Briefcase, Zap } from "lucide-react";
import { LEAGUE_ADVANTAGE_FEATURES, LEADERBOARD_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function LeagueAdvantage() {
  const icons = [Award, Gavel, Briefcase, Zap];

  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const slideFromRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section className="bg-black py-16 lg:py-24" id="ranks">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Text Features */}
          <div>
            <motion.div {...fadeUp} className="mb-10">
              <p className="text-[var(--accent-red)] uppercase text-xs tracking-[0.3em] font-bold mb-2">
                WHY REGISTER ?
              </p>
              <h2 className="font-[family-name:var(--font-barlow)] text-4xl lg:text-5xl uppercase text-white font-black">
                THE LEAGUE ADVANTAGE
              </h2>
            </motion.div>

            <div className="flex flex-col gap-8">
              {LEAGUE_ADVANTAGE_FEATURES.map((feature, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-5"
                  >
                    <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-[#1a1a1a] rounded-lg">
                      <Icon className="w-6 h-6 text-[var(--accent-red)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-barlow)] uppercase text-lg text-white font-bold">
                        {feature.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] font-[family-name:var(--font-inter)] text-sm mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right - Leaderboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111] rounded-2xl border border-[#222] p-6 shadow-[0_0_40px_rgba(37,99,235,0.15)] relative"
          >
            <h3 className="text-white uppercase text-center tracking-widest font-bold mb-6 text-sm">
              LEADERBOARD
            </h3>

            <div className="flex flex-col gap-0">
              {LEADERBOARD_DATA.map((row, i) => {
                const isTop = i === 0;
                return (
                  <motion.div
                    key={i}
                    variants={slideFromRight}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={cn(
                      "flex items-center gap-3 py-3",
                      !isTop && "border-b border-[#1a1a1a]"
                    )}
                  >
                    {isTop ? (
                      <div className="w-full flex items-center gap-4 py-2 border-b border-[#222] mb-2">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-[#222] border-2 border-[var(--accent-yellow)] overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}&backgroundColor=b6e3f4`} alt={row.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-tr from-[var(--accent-yellow)] to-[var(--accent-red)] flex items-center justify-center text-black font-black text-[10px]">
                            #{row.rank}
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-[var(--accent-yellow)] font-bold text-lg">
                            {row.name}
                          </p>
                        </div>
                        <p className="text-[var(--accent-yellow)] font-black text-xl">
                          {row.score}
                        </p>
                      </div>
                    ) : (
                      <>
                        <span className="text-[var(--text-secondary)] text-sm font-medium w-6">
                          {row.rank}
                        </span>
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 overflow-hidden",
                          i === 4 || i === 5 ? "bg-pink-600/20 text-pink-500 border border-pink-500/50" : "bg-[#222] text-gray-400 border border-white/10"
                        )}>
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name + i}&backgroundColor=transparent`} alt={row.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-white text-sm font-medium flex-1">
                          {row.name}
                        </p>
                        <p className="text-white font-bold text-sm">
                          {row.score}
                        </p>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
