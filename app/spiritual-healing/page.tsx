"use client";

import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import UserReviews from "@/components/UserReviews";
import FAQSection from "@/components/FAQSection";

export default function SpiritualHealingPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Landing Page Hero */}
      <section className="relative pt-12 pb-16 md:py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                ✨ Spiritual Transformation
              </div>
              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black text-deep-brown leading-tight">
                Deep Energy Work & <span className="text-[#D4AF37] italic">Spiritual Healing</span>
              </h1>
              <p className="font-body text-lg text-deep-brown/80 leading-relaxed max-w-xl">
                Are you feeling disconnected from your life path, spiritually stagnant, or carrying emotional weight? Experience restorative, authentic energy transformation rooted in ancient lineages, adapted for the modern seeker.
              </p>
              
              {/* Benefits Bullets */}
              <div className="space-y-3.5 pt-4">
                {[
                  "Release deep emotional blockages and internal friction",
                  "Align your somatic system with your spiritual consciousness",
                  "Grounded, authentic lineage practices (Kriya, Yoga, Carya)",
                  "Safe, supportive, and 100% confidential 1-on-1 virtual sessions",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold text-lg mt-0.5">✔</span>
                    <span className="font-body text-base font-semibold text-deep-brown/85">{b}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-deep-brown/10 flex flex-wrap gap-6 text-xs font-bold text-deep-brown/65 uppercase tracking-widest">
                <span>🔒 Confidential Container</span>
                <span>💻 Virtual Consultations India</span>
                <span>⭐ 4.9/5 satisfaction</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 relative z-25">
              <LeadForm defaultGoal="Spiritual Healing" buttonText="Book My Free Healing Consultation" />
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-20 bg-white border-y border-deep-brown/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-deep-brown text-center mb-12">
            The Spiritual Healing Path
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                t: "Somatic Breathwork",
                d: "Release tension and stress stored directly in the physical body. Learn to observe sensations with absolute presence.",
              },
              {
                t: "Prana Harmonization",
                d: "Cultivate and redirect your vital life force to soothe the nervous system and increase clarity.",
              },
              {
                t: "Lineage Wisdom",
                d: "Access ancient rituals, mantras, and meditation structures that have stabilized minds for centuries.",
              },
              {
                t: "Integration Coaching",
                d: "Gain practical tools to ground your spiritual realizations and live with everyday clarity.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-cream/20 border border-deep-brown/5 rounded-2xl">
                <h3 className="font-title text-xl font-bold text-deep-brown mb-2">{item.t}</h3>
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
