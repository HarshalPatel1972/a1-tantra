"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WelcomeHome from "@/components/WelcomeHome";
import RealTalk from "@/components/RealTalk";
import TantraTypesSection from "@/components/TantraTypesSection";
import OurTantraServices from "@/components/OurTantraServices";
import UserReviews from "@/components/UserReviews";
import InstagramInvite from "@/components/InstagramInvite";
import Newsletter from "@/components/Newsletter";
import InstagramGrid from "@/components/InstagramGrid";
import ConsultationBanner from "@/components/ConsultationBanner";
import TrustBar from "@/components/TrustBar";
import GuideSection from "@/components/GuideSection";
import ChooseYourPath from "@/components/ChooseYourPath";
import HowItWorks from "@/components/HowItWorks";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <div>
      <ConsultationBanner />
      <Hero />
      <TrustBar />
      <ChooseYourPath />
      <UserReviews />
      <HowItWorks />
      <GuideSection />
      <WelcomeHome />
      <RealTalk />
      <TantraTypesSection />
      <OurTantraServices />
      <FAQSection />
      <InstagramInvite />
      <Newsletter />
      <InstagramGrid />
      <Footer />
    </div>
  );
}
