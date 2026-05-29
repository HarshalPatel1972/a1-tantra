"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ConsultationBanner from "@/components/ConsultationBanner";
import TrustBar from "@/components/TrustBar";
import ChooseYourPath from "@/components/ChooseYourPath";
import HowSessionsWork from "@/components/HowSessionsWork";
import SessionDelivery from "@/components/SessionDelivery";
import WhyClientsChooseUs from "@/components/WhyClientsChooseUs";
import UserReviews from "@/components/UserReviews";
import FAQSection from "@/components/FAQSection";
import BuildJourneyCTA from "@/components/BuildJourneyCTA";

export default function Home() {
  return (
    <div>
      <ConsultationBanner />
      <Hero />
      <TrustBar />
      <ChooseYourPath />
      <HowSessionsWork />
      <SessionDelivery />
      <WhyClientsChooseUs />
      <UserReviews />
      <FAQSection />
      <BuildJourneyCTA />
      <Footer />
    </div>
  );
}
