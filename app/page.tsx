import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WelcomeHome from "@/components/WelcomeHome";
import RealTalk from "@/components/RealTalk";
import TantraTypesSection from "@/components/TantraTypesSection";
import BuildJourneyCTA from "@/components/BuildJourneyCTA";
import OurTantraServices from "@/components/OurTantraServices";
import UserReviews from "@/components/UserReviews";
import InstagramInvite from "@/components/InstagramInvite";
import Newsletter from "@/components/Newsletter";
import InstagramGrid from "@/components/InstagramGrid";

export const metadata: Metadata = {
  title: "A1 Tantra | Sacred Tantric Healing & Ancient Wisdom",
  description:
    "Discover authentic Tantra paths (Kriya, Yoga, Anuttarayoga) for modern seekers. Book a sacred healing session in India today. Experience spiritual healing and ancient wisdom.",
  openGraph: {
    title: "A1 Tantra | Sacred Tantric Healing & Ancient Wisdom",
    description: "Discover authentic Tantra paths and sacred healing sessions.",
    images: ["/images/image.png"],
  },
};

import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "A1 Tantra",
          "description": "Authentic tantric healing and meditation sessions including Kriya, Yoga, and Anuttarayoga paths.",
          "image": "https://a1-tantra.vercel.app/images/logo-main.png",
          "telephone": "+91 92178 21866",
          "url": "https://a1-tantra.vercel.app",
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressRegion": "MH",
            "addressCountry": "IN"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "520"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tantra Sacred Healing Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tantra Meditation & Breathwork"
                }
              }
            ]
          }
        }}
      />
      <Hero />
      <WelcomeHome />
      <TantraTypesSection />
      <RealTalk />
      <OurTantraServices />
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
