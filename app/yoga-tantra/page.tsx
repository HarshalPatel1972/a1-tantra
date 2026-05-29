"use client";

import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export default function YogaTantraPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Landing Page Hero */}
      <section className="relative pt-12 pb-16 md:py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1D4ED8]/10 border border-[#1D4ED8]/20 rounded-full text-xs font-bold text-[#1D4ED8] uppercase tracking-wider">
                🕯️ In-Person Yoga Tantra Session
              </div>
              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black text-deep-brown leading-tight">
                In-Person <span className="text-[#1D4ED8] italic">Yoga Tantra</span> Therapy Across India
              </h1>
              <p className="font-body text-lg text-deep-brown/80 leading-relaxed max-w-xl">
                Achieve deep inner union. Yoga Tantra (Union Tantra) shifts the focus from external actions to internal meditative transformation and intricate energy visualization practices.
              </p>
              
              {/* Details & Specs Card */}
              <div className="bg-white/40 border border-deep-brown/5 rounded-2xl p-5 max-w-lg space-y-3 font-body text-sm font-semibold text-deep-brown/85">
                <div className="flex justify-between border-b border-deep-brown/5 pb-2">
                  <span className="opacity-60">Duration:</span>
                  <span>90 Minutes</span>
                </div>
                <div className="flex justify-between border-b border-deep-brown/5 pb-2">
                  <span className="opacity-60">Session Type:</span>
                  <span>1-on-1 In-Person Therapy</span>
                </div>
                <div className="flex justify-between border-b border-deep-brown/5 pb-2">
                  <span className="opacity-60">Price:</span>
                  <span className="flex items-center gap-2">
                    <span className="line-through text-deep-brown/40 text-xs font-bold">₹60,000</span>
                    <span className="text-[#1D4ED8] text-base font-black">₹40,000</span>
                    <span className="text-[10px] bg-[#1D4ED8]/10 border border-[#1D4ED8]/20 px-1.5 py-0.5 rounded text-[#1D4ED8] font-black">33% OFF</span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Travel Policy:</span>
                  <span>Practitioner travels to your city across India</span>
                </div>
              </div>

              {/* Benefits Bullets */}
              <div className="space-y-3.5 pt-4">
                {[
                  "Accelerate internal meditative transformation",
                  "Master visualization of complex internal energy channels",
                  "Integrate breath, visualization, and mudra for alignment",
                  "Practitioner travels directly to your preferred local venue",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-accent-red font-bold text-lg mt-0.5">✔</span>
                    <span className="font-body text-base font-semibold text-deep-brown/85">{b}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-deep-brown/10 flex flex-wrap gap-6 text-xs font-bold text-deep-brown/65 uppercase tracking-widest">
                <span>🔒 Private & Confidential</span>
                <span>🇮🇳 Travel across India</span>
                <span>⭐ 4.9/5 satisfaction</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 relative z-25">
              <LeadForm defaultGoal="Yoga Tantra" buttonText="Book Free Discovery Call" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-y border-deep-brown/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-deep-brown text-center mb-12">
            The In-Person Yoga Tantra Process
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                t: "Request a Discovery Call",
                d: "Submit your request. We will contact you on WhatsApp to discuss your energy alignment goals and preferred city location.",
              },
              {
                step: "2",
                t: "Confirm Travel Details",
                d: "We discuss scheduling, travel arrangements, and fees. The practitioner travels to your city to finalize logistics.",
              },
              {
                step: "3",
                t: "Conduct In-Person Therapy",
                d: "Held physically in a completely private and secure setting. The session guides you through internal meditations, visualization, and breathwork.",
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

      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA */}
      <section className="py-16 bg-brand-blue text-cream text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-title text-3xl sm:text-4xl font-bold mb-4">Deepen Your Inner Union</h2>
          <p className="font-body text-base text-cream/85 mb-8 max-w-xl mx-auto">Get in touch today to secure the special offer price of ₹40,000 (limited time offer) and coordinate in-person availability for Yoga Tantra.</p>
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
