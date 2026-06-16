import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Orbitron } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "BotLeague - India's Ultimate Robotics Arena",
  description: "Build. Compete. Rank. The National Ecosystem for Robotics Arena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
