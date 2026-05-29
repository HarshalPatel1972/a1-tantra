"use client";

import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import UserReviews from "@/components/UserReviews";
import FAQSection from "@/components/FAQSection";

export default function ChakraHealingPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Landing Page Hero */}
      <section className="relative pt-12 pb-16 md:py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-red/10 border border-accent-red/20 rounded-full text-xs font-bold text-accent-red uppercase tracking-wider">
                🕉️ Energy Restoration
              </div>
              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black text-deep-brown leading-tight">
                Clear Blocks & Restore Flow with <span className="text-accent-red italic">Chakra Balancing</span>
              </h1>
              <p className="font-body text-lg text-deep-brown/80 leading-relaxed max-w-xl">
                Feeling chronically drained, emotionally stuck, or mentally scattered? Our personalized online Chakra Healing sessions use authentic Kriya and Yoga Tantra principles to realign your vital energy centers (pranic system).
              </p>
              
              {/* Benefits Bullets */}
              <div className="space-y-3.5 pt-4">
                {[
                  "Clear chronic fatigue, anxiety, and energetic blockages",
                  "Align the 7 core energy centers using authentic tantric techniques",
                  "Grounded, practical instruction with no pop-culture fluff",
                  "Fully private, 1-on-1 virtual sessions from your home",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent-red font-bold text-lg mt-0.5">✔</span>
                    <span className="font-body text-base font-semibold text-deep-brown/85">{b}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-deep-brown/10 flex flex-wrap gap-6 text-xs font-bold text-deep-brown/65 uppercase tracking-widest">
                <span>🔒 100% Confidential</span>
                <span>💻 Online Across India</span>
                <span>⭐ 4.9/5 Rating</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 relative z-25">
              <LeadForm defaultGoal="Chakra Balancing" buttonText="Book My Free Chakra Consultation" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Details Section */}
      <section className="py-20 bg-white border-y border-deep-brown/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-deep-brown text-center mb-12">
            What Happens During a Chakra Balancing Session?
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                t: "Energy Assessment",
                d: "We begin by assessing where energy is stagnant, overactive, or blocked in your physical and emotional body.",
              },
              {
                step: "2",
                t: "Guided Pranic Breathwork",
                d: "Using ancient Kriya and pranayama, we clear stagnant energy and activate dormant flows along the central channel.",
              },
              {
                step: "3",
                t: "Sound & Visualization Rituals",
                d: "Utilizing sacred seed syllables (bija mantras) and precise visualization of energy centers to seal and protect your alignment.",
              },
            ].map((s, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 bg-cream/30 border border-deep-brown/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-accent-red text-white flex items-center justify-center font-nav font-black text-lg shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-title text-xl font-bold text-deep-brown mb-2">{s.t}</h3>
                  <p className="font-body text-sm sm:text-base text-deep-brown/70 leading-relaxed">{s.d}</p>
                </div>
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
