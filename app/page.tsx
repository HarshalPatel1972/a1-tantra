"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WelcomeHome from "@/components/WelcomeHome";
import RealTalk from "@/components/RealTalk";
import TantraTypesSection from "@/components/TantraTypesSection";
import SessionsGrid from "@/components/SessionsGrid";
import BuildJourneyCTA from "@/components/BuildJourneyCTA";
import OriginStory from "@/components/OriginStory";
import OurTantraServices from "@/components/OurTantraServices";
import InstagramInvite from "@/components/InstagramInvite";
import Newsletter from "@/components/Newsletter";
import InstagramGrid from "@/components/InstagramGrid";

export default function Home() {
  return (
    <div>
      <Hero />
      <WelcomeHome />
      <RealTalk />
      <TantraTypesSection />
      <SessionsGrid />
      <OurTantraServices />
      <BuildJourneyCTA />
      <OriginStory />
      <InstagramInvite />
      <Newsletter />
      <InstagramGrid />
      <Footer />
    </div>
  );
}
