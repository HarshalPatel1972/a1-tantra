"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WelcomeHome from "@/components/WelcomeHome";
import RealTalk from "@/components/RealTalk";
import TantraPathsGuides from "@/components/TantraPathsGuides";
import TantraTypesSection from "@/components/TantraTypesSection";
import SessionsGrid from "@/components/SessionsGrid";
import BuildJourneyCTA from "@/components/BuildJourneyCTA";
import OriginStory from "@/components/OriginStory";
import Newsletter from "@/components/Newsletter";
import InstagramGrid from "@/components/InstagramGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <WelcomeHome />
      <RealTalk />
      <TantraPathsGuides />
      <TantraTypesSection />
      <SessionsGrid />
      <BuildJourneyCTA />
      <OriginStory />
      <Newsletter />
      <InstagramGrid />
      <Footer />
    </div>
  );
}

