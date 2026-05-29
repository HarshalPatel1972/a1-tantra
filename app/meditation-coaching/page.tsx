"use client";

import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export default function MeditationCoachingPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Landing Page Hero */}
      <section className="relative pt-12 pb-16 md:py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-xs font-bold text-brand-blue uppercase tracking-wider">
                🕯️ Nervous System Calm
              </div>
              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black text-deep-brown leading-tight">
                In-Person <span className="text-brand-blue italic">Meditation Coaching</span> Across India
              </h1>
              <p className="font-body text-lg text-deep-brown/80 leading-relaxed max-w-xl">
                Release stress, calm a racing mind, and regulate your nervous system. Get personalized physical guidance in breathwork and concentration techniques with direct travel coordinated to your city.
              </p>
              
              {/* Benefits Bullets */}
              <div className="space-y-3.5 pt-4">
                {[
                  "De-escalate stress and racing thoughts physically",
                  "Learn custom breathwork and concentration tools",
                  "Receive tailored 1-on-1 support for anxiety relief",
                  "Physical travel-to-city arrangements coordinated directly",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-brand-blue font-bold text-lg mt-0.5">✔</span>
                    <span className="font-body text-base font-semibold text-deep-brown/85">{b}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-deep-brown/10 flex flex-wrap gap-6 text-xs font-bold text-deep-brown/65 uppercase tracking-widest">
                <span>🔒 Strict Confidentiality</span>
                <span>🇮🇳 Travel across India</span>
                <span>⭐ 4.9/5 satisfaction</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 relative z-25">
              <LeadForm defaultGoal="Meditation Coaching" buttonText="Book Free Discovery Call" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-y border-deep-brown/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-deep-brown text-center mb-12">
            The In-Person Meditation Coaching Process
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                t: "Submit Your Request",
                d: "Tell us about your mental fatigue or stress levels. We discuss your city and preferred call details.",
              },
              {
                step: "2",
                t: "Confirm Travel & Location",
                d: "We finalize scheduling, travel logistics, and location details. The practitioner travels to your city.",
              },
              {
                step: "3",
                t: "In-Person Somatic Release",
                d: "We physically teach you breath techniques, focus structures, and release models in a safe space.",
              },
            ].map((s, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 bg-cream/30 border border-deep-brown/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-nav font-black text-lg shrink-0">
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

      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA */}
      <section className="py-16 bg-brand-blue text-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-title text-3xl sm:text-4xl font-bold mb-4">Ready to Calm Your Racing Mind?</h2>
          <p className="font-body text-base text-cream/85 mb-8 max-w-xl mx-auto">Schedule your consultation now to align on travel dates and in-person slots.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#lead-form"
              className="px-8 py-4 bg-[#E44426] hover:bg-white text-white hover:text-[#E44426] font-nav text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer"
            >
              Book Free Discovery Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
