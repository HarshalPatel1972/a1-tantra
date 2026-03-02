import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WelcomeHome from "@/components/WelcomeHome";
import RealTalk from "@/components/RealTalk";
import TantraTypesSection from "@/components/TantraTypesSection";
import BuildJourneyCTA from "@/components/BuildJourneyCTA";
import OurTantraServices from "@/components/OurTantraServices";
import UserReviews from "@/components/UserReviews";
import Newsletter from "@/components/Newsletter";
import InstagramGrid from "@/components/InstagramGrid";
import OriginStory from "@/components/OriginStory";

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
            "streetAddress": "Linking Road, Bandra West",
            "addressLocality": "Mumbai",
            "addressRegion": "MH",
            "postalCode": "400050",
            "addressCountry": "IN"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "520"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tantra Path Sessions",
            "itemListElement": [
              {
                "@type": "Offer",
                "price": "25000",
                "priceCurrency": "INR",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Kriya Tantra (Action Tantra)",
                  "description": "Foundational ritual and action-based tantric practice."
                }
              },
              {
                "@type": "Offer",
                "price": "30000",
                "priceCurrency": "INR",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Carya Tantra (Method Tantra)",
                  "description": "Integration of outer ritual and inner meditative stability."
                }
              },
              {
                "@type": "Offer",
                "price": "40000",
                "priceCurrency": "INR",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Yoga Tantra (Union Tantra)",
                  "description": "Advanced internal practice focusing on subtle energy and visualization."
                }
              },
              {
                "@type": "Offer",
                "price": "55000",
                "priceCurrency": "INR",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Anuttarayoga Tantra (Highest Union)",
                  "description": "The pinnacle of tantric practice for rapid transformation."
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
      <OriginStory />
      <Newsletter />
      <InstagramGrid />
      <Footer />
    </div>
  );
}
