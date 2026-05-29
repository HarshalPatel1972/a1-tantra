import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export default function AnuttarayogaTantraPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Landing Page Hero */}
      <section className="relative pt-12 pb-16 md:py-24 overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E44426]/10 border border-[#E44426]/20 rounded-full text-xs font-bold text-[#E44426] uppercase tracking-wider">
                💕 In-Person Anuttarayoga Tantra Session
              </div>
              <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-black text-deep-brown leading-tight">
                In-Person <span className="text-[#E44426] italic">Anuttarayoga Tantra</span> Therapy Across India
              </h1>
              <p className="font-body text-lg text-deep-brown/80 leading-relaxed max-w-xl">
                The highest path of spiritual awakening. Anuttarayoga Tantra (Highest Union Tantra) focuses on the profound non-dual union of wisdom and compassion, employing advanced energy methods and deep meditative integration.
              </p>
              
              {/* Details & Specs Card */}
              <div className="bg-white/40 border border-deep-brown/5 rounded-2xl p-5 max-w-lg space-y-3 font-body text-sm font-semibold text-deep-brown/85">
                <div className="flex justify-between border-b border-deep-brown/5 pb-2">
                  <span className="opacity-60">Duration:</span>
                  <span>120 Minutes</span>
                </div>
                <div className="flex justify-between border-b border-deep-brown/5 pb-2">
                  <span className="opacity-60">Session Type:</span>
                  <span>1-on-1 In-Person Therapy</span>
                </div>
                <div className="flex justify-between border-b border-deep-brown/5 pb-2">
                  <span className="opacity-60">Price:</span>
                  <span className="flex items-center gap-2">
                    <span className="line-through text-deep-brown/40 text-xs font-bold">₹85,000</span>
                    <span className="text-[#E44426] text-base font-black">₹55,000</span>
                    <span className="text-[10px] bg-[#E44426]/10 border border-[#E44426]/20 px-1.5 py-0.5 rounded text-[#E44426] font-black">35% OFF</span>
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
                  "Accelerated spiritual awakening and consciousness expansion",
                  "Integrate non-dual wisdom and compassionate energies",
                  "Deep emotional release and profound somatic healing",
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
              <LeadForm defaultGoal="Anuttarayoga Tantra" buttonText="Book Free Discovery Call" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-y border-deep-brown/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-deep-brown text-center mb-12">
            The In-Person Anuttarayoga Process
          </h2>
          
          <div className="space-y-8">
            {[
              {
                step: "1",
                t: "Request a Discovery Call",
                d: "Submit your request. We will contact you on WhatsApp to discuss your spiritual evolution, readiness, and preferred city location.",
              },
              {
                step: "2",
                t: "Confirm Travel & Settings",
                d: "We finalize scheduling, travel details, and fees. The practitioner travels directly to your location in India.",
              },
              {
                step: "3",
                t: "Conduct In-Person Therapy",
                d: "Held physically in a completely private, safe space. The session guides you through advanced non-dual integration, breath cycles, and kundalini activation.",
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
          <h2 className="font-title text-3xl sm:text-4xl font-bold mb-4">Awaken to Non-Dual Union</h2>
          <p className="font-body text-base text-cream/85 mb-8 max-w-xl mx-auto">Get in touch today to secure the special offer price of ₹55,000 (limited time offer) and coordinate in-person availability for Anuttarayoga Tantra.</p>
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
