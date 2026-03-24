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
import UserReviews from "@/components/UserReviews";
import InstagramInvite from "@/components/InstagramInvite";
import Newsletter from "@/components/Newsletter";
import InstagramGrid from "@/components/InstagramGrid";
import ConsultationBanner from "@/components/ConsultationBanner";
import TrustBar from "@/components/TrustBar";
import GuideSection from "@/components/GuideSection";

export default function Home() {
  return (
    <div>
      <ConsultationBanner />
      <Hero />
      <TrustBar />
      <WelcomeHome />
      <RealTalk />
      <TantraTypesSection />
      {/* <SessionsGrid /> */}
      <OurTantraServices />
      <GuideSection />
      <UserReviews />
      <BuildJourneyCTA />
      {/* <OriginStory /> */}
      <InstagramInvite />
      <Newsletter />
      <InstagramGrid />
      <Footer />
    </div>
  );
}
