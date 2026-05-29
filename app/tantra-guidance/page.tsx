"use client";

import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import UserReviews from "@/components/UserReviews";
import FAQSection from "@/components/FAQSection";

export default function TantraGuidancePage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Landing Page Hero */}
      <section className="relative pt-12 pb-16 md:py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-red/10 border border-accent-red/20 rounded-full text-xs font-bold text-accent-red uppercase tracking-wider">
                🧘 Lineage-Based Study
              </div>
              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black text-deep-brown leading-tight">
                Authentic Lineage-Based <span className="text-accent-red italic">Tantra Guidance</span>
              </h1>
              <p className="font-body text-lg text-deep-brown/80 leading-relaxed max-w-xl">
                Ready to study Tantra as it was traditionally taught? Explore personal instruction and practices rooted strictly in Kriya, Carya, Yoga, and Anuttarayoga Tantra. No gimmicks, no trends—just pure, transformational science.
              </p>
              
              {/* Benefits Bullets */}
              <div className="space-y-3.5 pt-4">
                {[
                  "Instruction aligned with historical text and authentic lineages",
                  "Understand Kriya, Carya, Yoga, and Anuttarayoga Tantra frameworks",
                  "Receive customized meditations, mudras, and breathing sequences",
                  "100% confidential, respectful, and safe virtual space",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent-red font-bold text-lg mt-0.5">✔</span>
                    <span className="font-body text-base font-semibold text-deep-brown/85">{b}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-deep-brown/10 flex flex-wrap gap-6 text-xs font-bold text-deep-brown/65 uppercase tracking-widest">
                <span>🔒 Confidential Sessions</span>
                <span>💻 Online India-Wide</span>
                <span>⭐ 4.9/5 satisfaction</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 relative z-25">
              <LeadForm defaultGoal="Tantra Guidance" buttonText="Book My Free Discovery Call" />
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-20 bg-white border-y border-deep-brown/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-deep-brown text-center mb-12">
            The Four Authentic Paths We Guide
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: "Kriya Tantra (Action)",
                d: "Focuses on outer actions: purifications, ceremonial setups, and external recitations to ground the mind.",
              },
              {
                t: "Carya Tantra (Method)",
                d: "Combines ritual conduct with internal meditative stability, emphasizing devotion and deity visualization.",
              },
              {
                t: "Yoga Tantra (Union)",
                d: "Prioritizes internal transformation and precise visualization of energy structures in the energy body.",
              },
              {
                t: "Anuttarayoga Tantra (Highest Union)",
                d: "Advanced integration of wisdom and compassion, focusing on non-dual realization and rapid awakening.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-cream/20 border border-deep-brown/5 rounded-2xl">
                <h3 className="font-title text-xl font-bold text-accent-red mb-2">{item.t}</h3>
                <p className="font-body text-sm text-deep-brown/70 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Reviews */}
      <UserReviews />
      <FAQSection />
      
      <Footer />
    </div>
  );
}
