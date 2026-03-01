"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

import JsonLd from "@/components/JsonLd";

export default function SessionsPage() {
  const sessions = [
    {
      id: "meditation",
      title: "Tantra Meditation Session",
      image: "/images/Tantra-Meditation-Session.jpg",
      description: "Deep meditative practices rooted in tantra.",
      details:
        "Explore guided Tantric meditations that help you access deeper states of consciousness and inner peace. These sessions are tailored to your current energetic state and spiritual goals.",
      price: "₹25,000",
      icon: "🧘"
    },
    {
      id: "breathwork",
      title: "Tantric Breathwork Session",
      image: "/images/Tantric-Breathwork-Session.jpg",
      description: "Pranayama techniques for energy activation.",
      details:
        "Learn powerful pranayama and tantric breathwork techniques to awaken and circulate vital life force (prana) through your energetic body, clearing blockages and increasing vitality.",
      price: "₹30,000",
      icon: "💨"
    },
    {
      id: "chakra",
      title: "Chakra Balancing Session",
      image: "/images/Chakra-Balancing-Session.jpg",
      description: "Align and balance your energy centers.",
      details:
        "Work directly with the seven primary chakras to clear stagnant energy, harmonize your energetic system, and establish a profound sense of internal alignment and flow.",
      price: "₹40,000",
      icon: "🎡"
    },
    {
      id: "sound-healing",
      title: "Sound Healing + Tantra Flow",
      image: "/images/Sound-Tantra.jpg",
      description: "Sacred sounds for transformation.",
      details:
        "Experience the transformative power of sacred sounds, mantras, and vibrational healing combined with gentle tantric energy practices for deep cell-level restoration.",
      price: "₹55,000",
      icon: "🔔"
    },
  ];

  return (
    <div className="bg-cream">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "A1 Tantra | Meditation & Sessions",
          "description": "Sacred tantric sessions including meditation, breathwork, and chakra balancing for modern seekers.",
          "image": "https://a1-tantra.vercel.app/images/logo-main.png",
          "telephone": "+91 92178 21866",
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
            "name": "Tantra Session Types",
            "itemListElement": [
              {
                "@type": "Offer",
                "price": "25000",
                "priceCurrency": "INR",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tantra Meditation Session"
                }
              },
              {
                "@type": "Offer",
                "price": "30000",
                "priceCurrency": "INR",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Tantric Breathwork Session"
                }
              },
              {
                "@type": "Offer",
                "price": "40000",
                "priceCurrency": "INR",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Chakra Balancing Session"
                }
              },
              {
                "@type": "Offer",
                "price": "55000",
                "priceCurrency": "INR",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sound Healing + Tantra Flow"
                }
              }
            ]
          }
        }}
      />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <Link 
          href="/book-session"
          className="w-full flex items-center justify-center bg-accent-red text-cream py-4 rounded-xl font-nav font-bold tracking-[0.2em] shadow-2xl uppercase text-xs"
        >
          Book Your Session
        </Link>
      </div>

      <div className="pt-32 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Landing Page Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent-red" />
              <span className="text-[10px] font-bold text-accent-red uppercase tracking-[0.5em]">
                Authentic Practice
              </span>
              <div className="w-8 h-[1px] bg-accent-red" />
            </div>
            <h1 className="font-title text-5xl md:text-7xl font-bold text-deep-brown mb-8">
              Sacred Tantra Sessions
            </h1>
            <p className="text-xl text-deep-brown/60 max-w-2xl mx-auto font-body leading-relaxed">
              Step into a safe, guided space to explore the depth of your own energy through ancient wisdom tailored for the modern spirit.
            </p>
          </div>

          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-10 items-center mb-20 py-8 border-y border-deep-brown/10 bg-white/30 backdrop-blur-sm rounded-3xl">
            <div className="flex items-center gap-3">
              <i className="ri-star-fill text-[#FFD700] text-2xl"></i>
              <span className="font-nav font-bold text-sm tracking-widest text-deep-brown">4.9 AVERAGE RATING</span>
            </div>
            <div className="w-px h-6 bg-deep-brown/20 hidden md:block" />
            <div className="flex items-center gap-3">
              <i className="ri-user-heart-fill text-accent-red text-2xl"></i>
              <span className="font-nav font-bold text-sm tracking-widest text-deep-brown">500+ SEEKERS GUIDED</span>
            </div>
            <div className="w-px h-6 bg-deep-brown/20 hidden md:block" />
            <div className="flex items-center gap-3">
              <i className="ri-lock-2-fill text-deep-brown/40 text-2xl"></i>
              <span className="font-nav font-bold text-sm tracking-widest text-deep-brown">100% PRIVATE & SACRED</span>
            </div>
          </div>

          <div className="space-y-12">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-deep-brown/10 hover:shadow-2xl transition-all duration-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[400px] lg:h-auto overflow-hidden">
                    <Image
                      src={session.image}
                      alt={session.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      quality={95}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                    <div className="absolute bottom-6 left-8 text-white lg:hidden">
                      <span className="text-4xl">{session.icon}</span>
                    </div>
                  </div>

                  <div className="p-10 md:p-16 flex flex-col justify-center">
                    <div className="hidden lg:flex items-center gap-4 mb-6">
                      <span className="text-3xl">{session.icon}</span>
                      <div className="w-12 h-px bg-accent-red/30" />
                    </div>
                    <h2 className="font-title text-3xl md:text-5xl font-bold text-deep-brown mb-4 group-hover:text-accent-red transition-colors duration-500">
                      {session.title}
                    </h2>
                    <p className="text-xs font-nav font-bold text-accent-red uppercase tracking-[0.3em] mb-8">
                      {session.description}
                    </p>
                    <p className="text-deep-brown/70 leading-relaxed mb-10 text-lg font-body">
                      {session.details}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-8 py-8 border-t border-deep-brown/5 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-deep-brown/40 uppercase tracking-widest mb-1">Exchange</span>
                        <span className="text-3xl font-title font-bold text-deep-brown">{session.price}</span>
                      </div>
                      <Link
                        href={`/book-session?service=${session.id}`}
                        className="w-full sm:w-auto px-10 py-5 bg-accent-red text-cream font-nav font-bold uppercase tracking-[0.2em] rounded-xl shadow-xl hover:bg-deep-brown transition-all duration-500 text-center text-xs"
                      >
                        Reserve Spot <i className="ri-calendar-check-line ml-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h3 className="font-title text-3xl font-bold text-deep-brown mb-6">Unsure where to begin?</h3>
            <p className="text-deep-brown/60 mb-10 max-w-xl mx-auto">
              Our guides are available for a brief introductory call to help you select the path that resonates with your current soul intention.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-deep-brown text-deep-brown font-nav font-bold uppercase tracking-widest rounded-xl hover:bg-deep-brown hover:text-cream transition-all duration-300 text-xs"
            >
              Contact Practitioner <i className="ri-whatsapp-line"></i>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
