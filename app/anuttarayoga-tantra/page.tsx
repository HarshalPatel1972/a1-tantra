import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export default function AnuttarayogaTantraPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#060108" }}>
      {/* Hero — deep violet/purple gradient */}
      <section
        className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0110 0%, #120218 30%, #1A0425 60%, #0A0110 100%)",
        }}
      >
        {/* Decorative glowing orbs */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)",
            transform: "translate(-30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)",
            transform: "translate(30%, 30%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 65%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border"
                style={{
                  background: "rgba(124,58,237,0.2)",
                  borderColor: "rgba(192,132,252,0.4)",
                  color: "#C084FC",
                }}
              >
                💕 In-Person Anuttarayoga Tantra Session
              </div>

              <h1
                className="font-title text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                style={{ color: "#FAF0FF" }}
              >
                In-Person{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(90deg, #C084FC, #A855F7, #D090FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Anuttarayoga Tantra
                </span>{" "}
                Therapy Across India
              </h1>

              <p className="font-body text-lg leading-relaxed max-w-xl" style={{ color: "rgba(240,220,255,0.8)" }}>
                The highest path of spiritual awakening. Anuttarayoga Tantra (Highest Union Tantra) focuses on the profound non-dual union of wisdom and compassion, employing advanced energy methods and deep meditative integration.
              </p>

              {/* Details & Specs Card */}
              <div
                className="rounded-2xl p-5 max-w-lg space-y-3 font-body text-sm font-semibold border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(192,132,252,0.2)",
                  color: "rgba(240,220,255,0.9)",
                }}
              >
                <div
                  className="flex justify-between pb-2"
                  style={{ borderBottom: "1px solid rgba(192,132,252,0.15)" }}
                >
                  <span style={{ opacity: 0.6 }}>Duration:</span>
                  <span>120 Minutes</span>
                </div>
                <div
                  className="flex justify-between pb-2"
                  style={{ borderBottom: "1px solid rgba(192,132,252,0.15)" }}
                >
                  <span style={{ opacity: 0.6 }}>Session Type:</span>
                  <span>1-on-1 In-Person Therapy</span>
                </div>
                <div
                  className="flex justify-between pb-2"
                  style={{ borderBottom: "1px solid rgba(192,132,252,0.15)" }}
                >
                  <span style={{ opacity: 0.6 }}>Price:</span>
                  <span className="flex items-center gap-2">
                    <span className="line-through text-xs font-bold" style={{ color: "rgba(240,220,255,0.35)" }}>₹85,000</span>
                    <span className="text-base font-black" style={{ color: "#C084FC" }}>₹55,000</span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded font-black border"
                      style={{
                        background: "rgba(124,58,237,0.25)",
                        borderColor: "rgba(192,132,252,0.4)",
                        color: "#C084FC",
                      }}
                    >
                      35% OFF
                    </span>
                  </span>
                </div>
                <div className="flex justify-between">
                  <span style={{ opacity: 0.6 }}>Travel Policy:</span>
                  <span>Practitioner travels to your city across India</span>
                </div>
              </div>

              {/* Benefits Bullets */}
              <div className="space-y-3.5 pt-2">
                {[
                  "Accelerated spiritual awakening and consciousness expansion",
                  "Integrate non-dual wisdom and compassionate energies",
                  "Deep emotional release and profound somatic healing",
                  "Practitioner travels directly to your preferred local venue",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-bold text-lg mt-0.5" style={{ color: "#C084FC" }}>✔</span>
                    <span className="font-body text-base font-semibold" style={{ color: "rgba(240,220,255,0.85)" }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div
                className="pt-6 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest"
                style={{
                  borderTop: "1px solid rgba(192,132,252,0.2)",
                  color: "rgba(240,220,255,0.55)",
                }}
              >
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
      <section className="py-20" style={{ background: "#0C0215", borderTop: "1px solid rgba(124,58,237,0.2)", borderBottom: "1px solid rgba(124,58,237,0.2)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: "#FAF0FF" }}>
            The In-Person Anuttarayoga Process
          </h2>

          <div className="space-y-6">
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
              <div
                key={idx}
                className="flex gap-6 items-start p-6 rounded-2xl border"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  borderColor: "rgba(192,132,252,0.18)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-nav font-black text-lg shrink-0 text-white"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #5B21B6)" }}
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="font-title text-xl font-bold mb-2" style={{ color: "#FAF0FF" }}>{s.t}</h3>
                  <p className="font-body text-sm sm:text-base leading-relaxed" style={{ color: "rgba(240,220,255,0.65)" }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection dark accentColor="#C084FC" />

      {/* Final CTA */}
      <section
        className="py-16 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 50%, #3B0E80 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-title text-3xl sm:text-4xl font-bold mb-4 text-white">Awaken to Non-Dual Union</h2>
          <p className="font-body text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Get in touch today to secure the special offer price of ₹55,000 (limited time offer) and coordinate in-person availability for Anuttarayoga Tantra.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#lead-form"
              className="px-8 py-4 font-nav text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#7C3AED]"
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
