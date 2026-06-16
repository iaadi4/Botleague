"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";
import { FaYoutube as Youtube, FaInstagram as Instagram, FaFacebookF as Facebook, FaTwitter as Twitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111] pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: QUICK LINKS */}
          <div>
            <h3 className="text-white font-[family-name:var(--font-barlow)] uppercase text-sm tracking-widest font-bold mb-4">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-2">
              <div className="flex flex-col gap-2">
                {FOOTER_LINKS.col1.map((link, i) => (
                  <Link
                    key={i}
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 font-[family-name:var(--font-inter)] text-sm hover:text-white transition-colors w-fit"
                  >
                    {link}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {FOOTER_LINKS.col2.map((link, i) => (
                  <Link
                    key={i}
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 font-[family-name:var(--font-inter)] text-sm hover:text-white transition-colors w-fit"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: SOCIAL MEDIA */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-white font-[family-name:var(--font-barlow)] uppercase text-sm tracking-widest font-bold mb-4 md:text-right">
              SOCIAL MEDIA
            </h3>
            <div className="flex gap-4 md:justify-end">
              <a
                href="#youtube"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[var(--accent-red)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[var(--accent-red)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[var(--accent-red)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[var(--accent-red)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
