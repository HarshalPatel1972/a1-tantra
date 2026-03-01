"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function TherapiesPage() {
  const therapies = [
    {
      title: "Kriya Tantra",
      subtitle: "Action",
      description: "Foundational ritual and action-based tantric practice. Purify your physical environment and early energetic layers.",
      image: "/images/Kriya-Tantra.jpg",
      price: "₹25,000",
      slug: "kriya-tantra",
      duration: "90 min"
    },
    {
      title: "Carya Tantra",
      subtitle: "Method",
      description: "Integration of outer ritual and inner meditative stability. Begin the journey inward while maintaining pure external conduct.",
      image: "/images/Carya-Tantra.jpg",
      price: "₹30,000",
      slug: "carya-tantra",
      duration: "120 min"
    },
    {
      title: "Yoga Tantra",
      subtitle: "Union",
      description: "Advanced internal practice focusing on subtle energy, visualization, and harmonizing the internal wind (Prana) and central channel.",
      image: "/images/Yoga-Tantra.jpg",
      price: "₹40,000",
      slug: "yoga-tantra",
      duration: "150 min"
    },
    {
      title: "Anuttarayoga",
      subtitle: "Highest",
      description: "The pinnacle of tantric practice for rapid transformation, focusing on the union of bliss and emptiness for profound soul evolution.",
      image: "/images/Anuttarayoga-Tantra.jpg",
      price: "₹55,000",
      slug: "anuttarayoga-tantra",
      duration: "180 min"
    },
  ];

  return (
    <div className="bg-cream">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "A1 Tantra | Spiritual Healing",
          "description": "Transformative energy work, tantric massage therapy, and couples workshops for holistic growth.",
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
            "name": "Healing & Therapy Services",
            "itemListElement": therapies.map((t) => ({
              "@type": "Offer",
              "price": t.price.replace(/[^0-9]/g, ''),
              "priceCurrency": "INR",
              "itemOffered": {
                "@type": "Service",
                "name": t.title
              }
            }))
          }
        }}
      />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden">
        <Link 
          href="/book-session"
          className="w-full flex items-center justify-center bg-accent-red text-cream py-4 rounded-xl font-nav font-bold tracking-[0.2em] shadow-2xl uppercase text-xs"
        >
          Book Your Session Now
        </Link>
      </div>

      <div className="pt-4 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Landing Page Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[1px] bg-accent-red" />
              <span className="text-[10px] font-bold text-accent-red uppercase tracking-[0.5em]">
                SACRED HEALING IN INDIA
              </span>
            </div>
            <h1 className="font-title text-5xl md:text-7xl font-bold text-deep-brown mb-8 leading-tight">
              Transformative Spiritual <br />
              Healing & Tantra Therapy
            </h1>
            
            {/* Trust Markers */}
            <div className="flex flex-wrap gap-8 items-center text-deep-brown/60 py-6 border-y border-deep-brown/10">
              <div className="flex items-center gap-2">
                <span className="text-soft-gold text-2xl font-bold">4.9/5</span>
                <div className="flex text-[#FFD700]">{"★★★★★"}</div>
                <span className="text-xs font-nav font-bold uppercase tracking-wider ml-1">520+ Reviews</span>
              </div>
              <div className="w-px h-6 bg-deep-brown/10 hidden md:block" />
              <div className="flex items-center gap-2">
                <i className="ri-verified-badge-fill text-accent-red text-xl"></i>
                <span className="text-xs font-nav font-bold uppercase tracking-wider">Certified Practitioners</span>
              </div>
              <div className="w-px h-6 bg-deep-brown/10 hidden md:block" />
              <div className="flex items-center gap-2">
                <i className="ri-shield-check-fill text-accent-red text-xl"></i>
                <span className="text-xs font-nav font-bold uppercase tracking-wider">Safe & Confidential</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {therapies.map((therapy, idx) => (
              <div
                key={idx}
                className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-end"
              >
                {/* Background Image */}
                <Image
                  src={therapy.image}
                  alt={therapy.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  quality={90}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/70 to-black/30"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/40"></div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div>
                    <h3
                      style={{ mixBlendMode: "lighten" }}
                      className="font-title text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg"
                    >
                      {therapy.title}
                    </h3>
                    <p
                      style={{ mixBlendMode: "lighten" }}
                      className="font-nav text-xs font-bold uppercase tracking-widest text-yellow-100 drop-shadow-lg"
                    >
                      {therapy.subtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p
                      style={{ mixBlendMode: "lighten" }}
                      className="font-body text-sm md:text-base text-yellow-200 leading-relaxed drop-shadow-md"
                    >
                      {therapy.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/30">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-wider text-white/80 font-semibold drop-shadow-md">
                          Duration
                        </span>
                        <span className="font-nav text-base font-bold text-white drop-shadow-lg">
                          {therapy.duration}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 items-end">
                        <span className="text-xs uppercase tracking-wider text-white/80 font-semibold drop-shadow-md">
                          From
                        </span>
                        <span
                          style={{ mixBlendMode: "screen" }}
                          className="font-title text-2xl md:text-3xl font-bold text-yellow-100 drop-shadow-lg"
                        >
                          {therapy.price}
                        </span>
                      </div>
                    </div>

                    <Link 
                      href={`/book-session?service=${therapy.slug}`}
                      className="block text-center mt-4 w-full py-4 bg-accent-red text-white font-nav font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:text-accent-red transition-all duration-300"
                    >
                      Select Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* New Section: Why Spiritual Healing */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-8">
                  Why Ancient Tantra <br />
                  for Modern Healing?
                </h2>
                <div className="space-y-6 text-lg text-deep-brown/70 font-body leading-relaxed">
                  <p>
                    Most modern therapies focus solely on the mind. At A1 Tantra, we believe true transformation requires the integration of the mind, body, and spirit.
                  </p>
                  <p>
                    Our therapy modalities are built upon the <strong>Trika philosophy</strong>, utilizing energy (Prana) and consciousness (Shiva) to clear the blockages that keep you stuck in old patterns of being.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-accent-red mt-1"></i>
                      <span><strong>Release Trauma:</strong> Clear somatic imprints stored in the nervous system.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-accent-red mt-1"></i>
                      <span><strong>Awaken Vitality:</strong> Reconnect with your dormant life-force energy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <i className="ri-checkbox-circle-fill text-accent-red mt-1"></i>
                      <span><strong>Deepen Intimacy:</strong> Experience a new level of connection with yourself and others.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-deep-brown p-12 rounded-[4rem] text-cream">
                <h3 className="font-title text-3xl font-bold mb-6">The Three Pillars</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-accent-red font-bold uppercase tracking-widest text-xs mb-2">Kriya Tantra</h4>
                    <p className="text-cream/60 text-sm">Action-based rituals that purify the physical environment and early energetic layers.</p>
                  </div>
                  <div>
                    <h4 className="text-accent-red font-bold uppercase tracking-widest text-xs mb-2">Yoga Tantra</h4>
                    <p className="text-cream/60 text-sm">Internal meditative stability used to harmonize the internal wind (Prana) and the central channel.</p>
                  </div>
                  <div>
                    <h4 className="text-accent-red font-bold uppercase tracking-widest text-xs mb-2">Anuttarayoga</h4>
                    <p className="text-cream/60 text-sm">The highest level of practice focusing on the union of bliss and emptiness for rapid soul evolution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Section: The Sacred Journey (Vertical Timeline) */}
          <div className="mb-32">
            <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-20 text-center">
              Your Sacred Journey
            </h2>
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Guide Line */}
              <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-[2px] bg-accent-red/20 -translate-x-1/2" />
              
              {[
                { step: "01", title: "Consultation", desc: "A 20-minute call to align our energy and set your healing intention." },
                { step: "02", title: "Preparation", desc: "Guided practices sent to you to prepare your body for the sacred flow." },
                { step: "03", title: "The Session", desc: "A 90-minute immersive therapy session focused on your specific blockages." },
                { step: "04", title: "Integration", desc: "Aftercare guidance to help you ground the transformation into daily life." }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center justify-between md:justify-normal w-full mb-12 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Connector Node */}
                  <div className="absolute left-[28px] md:left-1/2 w-14 h-14 rounded-full bg-cream border-[4px] border-accent-red flex items-center justify-center text-accent-red font-black text-lg -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(228,68,38,0.3)] shadow-accent-red/20 font-nav">
                    {item.step}
                  </div>

                  {/* Content Container */}
                  <div className={`w-full ml-20 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="p-8 bg-white border border-deep-brown/10 hover:border-accent-red rounded-[2rem] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                      <h4 className="font-title text-2xl font-bold text-deep-brown mb-3">{item.title}</h4>
                      <p className="text-base text-deep-brown/70 leading-relaxed font-body">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-16 bg-deep-brown text-cream rounded-[3rem] relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="font-title text-3xl md:text-4xl font-bold mb-6">Need a custom approach to your healing journey?</h2>
                <p className="text-cream/70 text-lg leading-relaxed mb-8">
                  Our practitioners can blend multiple modalities to meet your specific energetic needs. Contact us for a personalized consultation.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-accent-red text-cream font-nav font-bold uppercase tracking-[0.2em] rounded-xl hover:shadow-2xl transition-all hover:scale-105 text-xs"
                >
                  Request Consultation <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
              <div className="hidden lg:flex w-72 h-72 rounded-full border-[6px] border-cream shadow-2xl bg-accent-red items-center justify-center overflow-hidden relative z-20 hover:scale-105 transition-transform duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://api.dicebear.com/7.x/lorelei/svg?seed=Sophia&backgroundColor=ac3b3b&happy=true" 
                  alt="Happy Female Guide Character" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-accent-red/10 rounded-full blur-[100px] -ml-48 -mt-48 pointer-events-none" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
