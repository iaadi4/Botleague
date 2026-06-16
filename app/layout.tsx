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
  description: "Join BotLeague, India's Ultimate Robotics Arena. Build custom robots, compete in national tournaments, rank up in the ecosystem, and connect with top engineers.",
  alternates: {
    canonical: 'https://botleague.vercel.app/',
  },
  openGraph: {
    title: "BotLeague - India's Ultimate Robotics Arena",
    description: "Build. Compete. Rank. The National Ecosystem for Robotics.",
    url: 'https://botleague.vercel.app/',
    siteName: 'BotLeague',
    images: [
      {
        url: 'https://botleague.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BotLeague Robotics Arena Preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "BotLeague - India's Ultimate Robotics Arena",
    description: "Build. Compete. Rank. The National Ecosystem for Robotics.",
    creator: '@BotLeague',
    images: ['https://botleague.vercel.app/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BotLeague",
    "url": "https://botleague.vercel.app/",
    "logo": "https://botleague.vercel.app/logo.png",
    "description": "India's Ultimate Robotics Arena"
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} ${orbitron.variable} antialiased`}
      >
        <a 
          href="#main-content" 
          className="absolute -top-[100px] left-0 bg-[var(--accent-primary)] text-white px-4 py-2 z-50 focus:top-0 transition-all"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
