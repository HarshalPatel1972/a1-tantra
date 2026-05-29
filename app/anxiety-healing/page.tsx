"use client";

import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import UserReviews from "@/components/UserReviews";
import FAQSection from "@/components/FAQSection";

export default function AnxietyHealingPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Landing Page Hero */}
      <section className="relative pt-12 pb-16 md:py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-xs font-bold text-brand-blue uppercase tracking-wider">
                🕯️ Nervous System Regulation
              </div>
              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black text-deep-brown leading-tight">
                Calm Your Mind with <span className="text-brand-blue italic">Meditation Coaching</span>
              </h1>
              <p className="font-body text-lg text-deep-brown/80 leading-relaxed max-w-xl">
                Is a racing mind, chronic stress, or anxiety keeping you from sleeping and living fully? Learn grounded, lineage-based meditation and somatic breathwork practices to soothe your nervous system and cultivate long-term inner stability.
              </p>
              
              {/* Benefits Bullets */}
              <div className="space-y-3.5 pt-4">
                {[
                  "De-escalate acute stress and panic responses in minutes",
                  "Regulate your nervous system with ancient somatic tools",
                  "No generic mindfulness apps—receive personalized 1-on-1 guidance",
                  "100% confidential virtual sessions from the comfort of home",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-brand-blue font-bold text-lg mt-0.5">✔</span>
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
              <LeadForm defaultGoal="Meditation Coaching" buttonText="Book My Free Stress-Relief Call" />
            </div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-20 bg-white border-y border-deep-brown/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-deep-brown text-center mb-12">
            Our Grounded Approach to Calm
          </h2>
          
          <div className="space-y-8">
            {[
              {
                t: "Somatic Breath Release",
                d: "We guide you in releasing physical patterns of stress from the muscles, diaphragm, and jaw using ancient pranic breathing.",
              },
              {
                t: "Concentration (Dharana) Training",
                d: "Learn simple, high-impact focus exercises to interrupt runaway thought loops and bring the mind to a single, quiet point.",
              },
              {
                t: "Integration & Habit Building",
                d: "Walk away with a 5-minute custom daily practice designed to fit your busy schedule and prevent stress accumulation.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-cream/35 border border-deep-brown/5 rounded-2xl">
                <h3 className="font-title text-xl font-bold text-deep-brown mb-2">{item.t}</h3>
                <p className="font-body text-sm sm:text-base text-deep-brown/70 leading-relaxed">{item.d}</p>
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
