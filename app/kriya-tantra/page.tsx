import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export default function KriyaTantraPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0504" }}>
      {/* Hero — deep crimson dark gradient */}
      <section
        className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a0602 0%, #2d0a05 30%, #3d1008 60%, #1a0602 100%)",
        }}
      >
        {/* Decorative glowing orbs */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(228,68,38,0.35) 0%, transparent 70%)",
            transform: "translate(-30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(228,68,38,0.2) 0%, transparent 70%)",
            transform: "translate(30%, 30%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,100,60,0.08) 0%, transparent 65%)",
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
                  background: "rgba(228,68,38,0.18)",
                  borderColor: "rgba(228,68,38,0.4)",
                  color: "#FF7A5A",
                }}
              >
                🕉️ In-Person Kriya Tantra Session
              </div>

              <h1
                className="font-title text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                style={{ color: "#FFF5F0" }}
              >
                In-Person{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(90deg, #FF7A5A, #E44426, #FF4500)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Kriya Tantra
                </span>{" "}
                Therapy Across India
              </h1>

              <p className="font-body text-lg leading-relaxed max-w-xl" style={{ color: "rgba(255,235,225,0.8)" }}>
                Experience the foundational path of traditional Tantra. Kriya Tantra (Action Tantra) focuses on external ritual actions, mantra practice, and purification disciplines to align the physical and energetic body.
              </p>

              {/* Details & Specs Card */}
              <div
                className="rounded-2xl p-5 max-w-lg space-y-3 font-body text-sm font-semibold border"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(228,68,38,0.2)",
                  color: "rgba(255,235,225,0.9)",
                }}
              >
                <div
                  className="flex justify-between pb-2"
                  style={{ borderBottom: "1px solid rgba(228,68,38,0.15)" }}
                >
                  <span style={{ opacity: 0.6 }}>Duration:</span>
                  <span>75 Minutes</span>
                </div>
                <div
                  className="flex justify-between pb-2"
                  style={{ borderBottom: "1px solid rgba(228,68,38,0.15)" }}
                >
                  <span style={{ opacity: 0.6 }}>Session Type:</span>
                  <span>1-on-1 In-Person Therapy</span>
                </div>
                <div
                  className="flex justify-between pb-2"
                  style={{ borderBottom: "1px solid rgba(228,68,38,0.15)" }}
                >
                  <span style={{ opacity: 0.6 }}>Price:</span>
                  <span className="flex items-center gap-2">
                    <span className="line-through text-xs font-bold" style={{ color: "rgba(255,235,225,0.35)" }}>₹35,000</span>
                    <span className="text-base font-black" style={{ color: "#FF7A5A" }}>₹25,000</span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded font-black border"
                      style={{
                        background: "rgba(228,68,38,0.2)",
                        borderColor: "rgba(228,68,38,0.4)",
                        color: "#FF8060",
                      }}
                    >
                      30% OFF
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
                  "Clear deep physical and energetic blockages using sacred rituals",
                  "Align energy flows through structured mantra chanting and mudras",
                  "Grounded, professional, and completely confidential environment",
                  "Practitioner coordinates travel to your preferred local venue",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-bold text-lg mt-0.5" style={{ color: "#FF7A5A" }}>✔</span>
                    <span className="font-body text-base font-semibold" style={{ color: "rgba(255,235,225,0.85)" }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div
                className="pt-6 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest"
                style={{
                  borderTop: "1px solid rgba(228,68,38,0.2)",
                  color: "rgba(255,235,225,0.55)",
                }}
              >
                <span>🔒 Private & Confidential</span>
                <span>🇮🇳 Travel across India</span>
                <span>⭐ 4.9/5 satisfaction</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 relative z-25">
              <LeadForm defaultGoal="Kriya Tantra" buttonText="Book Free Discovery Call" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ background: "#120804", borderTop: "1px solid rgba(228,68,38,0.15)", borderBottom: "1px solid rgba(228,68,38,0.15)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: "#FFF5F0" }}>
            The In-Person Kriya Tantra Process
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                t: "Request a Discovery Call",
                d: "Fill out our brief form above. We will contact you on WhatsApp to discuss your spiritual goals and preferred city location.",
              },
              {
                step: "2",
                t: "Confirm Travel & Location",
                d: "We coordinate scheduling, travel logistics, and fees. The practitioner travels to your city and details are fully finalized.",
              },
              {
                step: "3",
                t: "Participate in In-Person Therapy",
                d: "The session is held physically in a private, quiet space. It combines physical purification disciplines, mudras, and meditative rituals.",
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="flex gap-6 items-start p-6 rounded-2xl border"
                style={{
                  background: "rgba(228,68,38,0.07)",
                  borderColor: "rgba(228,68,38,0.18)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-nav font-black text-lg shrink-0 text-white"
                  style={{ background: "linear-gradient(135deg, #E44426, #C0321A)" }}
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="font-title text-xl font-bold mb-2" style={{ color: "#FFF5F0" }}>{s.t}</h3>
                  <p className="font-body text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,235,225,0.65)" }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection dark accentColor="#FF7A5A" />

      {/* Final CTA */}
      <section
        className="py-16 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #E44426 0%, #C0321A 50%, #9A1F0F 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-title text-3xl sm:text-4xl font-bold mb-4 text-white">Begin Your Traditional Tantra Journey</h2>
          <p className="font-body text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Get in touch today to secure the special offer price of ₹25,000 (limited time offer) and coordinate in-person availability for Kriya Tantra.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#lead-form"
              className="px-8 py-4 font-nav text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#E44426]"
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
