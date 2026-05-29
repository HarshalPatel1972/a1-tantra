import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import FAQSection from "@/components/FAQSection";

export default function YogaTantraPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#020510" }}>
      {/* Hero — deep royal indigo/blue gradient */}
      <section
        className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #030818 0%, #060D22 30%, #0A1535 60%, #030818 100%)",
        }}
      >
        {/* Decorative glowing orbs */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(29,78,216,0.4) 0%, transparent 70%)",
            transform: "translate(-30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
            transform: "translate(30%, 30%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(99,160,255,0.08) 0%, transparent 65%)",
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
                  background: "rgba(29,78,216,0.2)",
                  borderColor: "rgba(99,160,255,0.4)",
                  color: "#80B8FF",
                }}
              >
                🕯️ In-Person Yoga Tantra Session
              </div>

              <h1
                className="font-title text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                style={{ color: "#F0F5FF" }}
              >
                In-Person{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(90deg, #80B8FF, #4D8EFF, #60A0FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Yoga Tantra
                </span>{" "}
                Therapy Across India
              </h1>

              <p className="font-body text-lg leading-relaxed max-w-xl" style={{ color: "rgba(220,235,255,0.8)" }}>
                Achieve deep inner union. Yoga Tantra (Union Tantra) shifts the focus from external actions to internal meditative transformation and intricate energy visualization practices.
              </p>

              {/* Details & Specs Card */}
              <div
                className="rounded-2xl p-5 max-w-lg space-y-3 font-body text-sm font-semibold border"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(99,160,255,0.2)",
                  color: "rgba(220,235,255,0.9)",
                }}
              >
                <div
                  className="flex justify-between pb-2"
                  style={{ borderBottom: "1px solid rgba(99,160,255,0.15)" }}
                >
                  <span style={{ opacity: 0.6 }}>Duration:</span>
                  <span>90 Minutes</span>
                </div>
                <div
                  className="flex justify-between pb-2"
                  style={{ borderBottom: "1px solid rgba(99,160,255,0.15)" }}
                >
                  <span style={{ opacity: 0.6 }}>Session Type:</span>
                  <span>1-on-1 In-Person Therapy</span>
                </div>
                <div
                  className="flex justify-between pb-2"
                  style={{ borderBottom: "1px solid rgba(99,160,255,0.15)" }}
                >
                  <span style={{ opacity: 0.6 }}>Price:</span>
                  <span className="flex items-center gap-2">
                    <span className="line-through text-xs font-bold" style={{ color: "rgba(220,235,255,0.35)" }}>₹60,000</span>
                    <span className="text-base font-black" style={{ color: "#80B8FF" }}>₹40,000</span>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded font-black border"
                      style={{
                        background: "rgba(29,78,216,0.25)",
                        borderColor: "rgba(99,160,255,0.4)",
                        color: "#80B8FF",
                      }}
                    >
                      33% OFF
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
                  "Accelerate internal meditative transformation",
                  "Master visualization of complex internal energy channels",
                  "Integrate breath, visualization, and mudra for alignment",
                  "Practitioner travels directly to your preferred local venue",
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-bold text-lg mt-0.5" style={{ color: "#80B8FF" }}>✔</span>
                    <span className="font-body text-base font-semibold" style={{ color: "rgba(220,235,255,0.85)" }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div
                className="pt-6 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest"
                style={{
                  borderTop: "1px solid rgba(99,160,255,0.2)",
                  color: "rgba(220,235,255,0.55)",
                }}
              >
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
      <section className="py-20" style={{ background: "#040A18", borderTop: "1px solid rgba(29,78,216,0.2)", borderBottom: "1px solid rgba(29,78,216,0.2)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-title text-3xl sm:text-4xl font-bold text-center mb-12" style={{ color: "#F0F5FF" }}>
            The In-Person Yoga Tantra Process
          </h2>

          <div className="space-y-6">
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
              <div
                key={idx}
                className="flex gap-6 items-start p-6 rounded-2xl border"
                style={{
                  background: "rgba(29,78,216,0.08)",
                  borderColor: "rgba(99,160,255,0.18)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-nav font-black text-lg shrink-0 text-white"
                  style={{ background: "linear-gradient(135deg, #1D4ED8, #1240B0)" }}
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="font-title text-xl font-bold mb-2" style={{ color: "#F0F5FF" }}>{s.t}</h3>
                  <p className="font-body text-sm sm:text-base leading-relaxed" style={{ color: "rgba(220,235,255,0.65)" }}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection dark accentColor="#80B8FF" />

      {/* Final CTA */}
      <section
        className="py-16 text-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1D4ED8 0%, #1540B0 50%, #0E2D80 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-title text-3xl sm:text-4xl font-bold mb-4 text-white">Deepen Your Inner Union</h2>
          <p className="font-body text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            Get in touch today to secure the special offer price of ₹40,000 (limited time offer) and coordinate in-person availability for Yoga Tantra.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#lead-form"
              className="px-8 py-4 font-nav text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer border-2 border-white text-white hover:bg-white hover:text-[#1D4ED8]"
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
