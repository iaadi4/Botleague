import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { Zap, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/80 border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Settings className="w-8 h-8 text-[var(--accent-red)]" />
          <Link href="/" className="flex items-center gap-1">
            <span className="font-[family-name:var(--font-orbitron)] font-bold text-2xl tracking-wider text-white">
              B<span className="text-[var(--accent-red)]">🤖</span>TLEAGUE
            </span>
            <Zap className="w-5 h-5 text-[var(--accent-yellow)] fill-[var(--accent-yellow)]" />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-[family-name:var(--font-inter)] uppercase text-sm tracking-widest font-medium text-white transition-colors hover:text-[var(--text-secondary)]",
                link.name === "Events" && "border-b-2 border-[var(--accent-red)] pb-1"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex uppercase tracking-widest font-bold">
            LOGIN
          </Button>
          <Button variant="default" className="uppercase tracking-widest font-bold">
            REGISTER NOW
          </Button>
        </div>
      </div>
    </nav>
  );
}
