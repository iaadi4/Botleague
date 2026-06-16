import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CompetitionsEvents from "@/components/sections/CompetitionsEvents";
import UserJourney from "@/components/sections/UserJourney";
import WhatIsBotLeague from "@/components/sections/WhatIsBotLeague";
import Categories from "@/components/sections/Categories";
import CompetitionDisciplines from "@/components/sections/CompetitionDisciplines";
import LeagueAdvantage from "@/components/sections/LeagueAdvantage";
import JoinEcosystem from "@/components/sections/JoinEcosystem";
import Sponsors from "@/components/sections/Sponsors";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[var(--bg-primary)] flex flex-col">
      <Navbar />
      <Hero />
      <CompetitionsEvents />
      <UserJourney />
      <WhatIsBotLeague />
      <Categories />
      <CompetitionDisciplines />
      <LeagueAdvantage />
      <JoinEcosystem />
      <Sponsors />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is BotLeague?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "BotLeague is India's Ultimate Robotics Arena where you can build, compete, and rank in national robotics tournaments."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
