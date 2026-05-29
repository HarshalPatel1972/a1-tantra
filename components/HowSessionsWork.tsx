"use client";

export default function HowSessionsWork() {
  const steps = [
    {
      num: "01",
      title: "Book Call or Request",
      description: "Submit our simple request form. We will contact you on WhatsApp within 2-4 hours.",
      icon: "📅",
    },
    {
      num: "02",
      title: "Discuss Goals & Location",
      description: "We align on your specific therapy goals, preferred city, and comfortable location arrangements.",
      icon: "💬",
    },
    {
      num: "03",
      title: "Confirm Details",
      description: "All scheduling, fees, and location details are finalized and confirmed securely.",
      icon: "🔒",
    },
    {
      num: "04",
      title: "Practitioner Travels",
      description: "Our certified practitioner travels to the agreed city/location in India on the scheduled dates.",
      icon: "✈️",
    },
    {
      num: "05",
      title: "In-Person Session",
      description: "The therapy session is conducted in person, in a safe, quiet, and completely confidential environment.",
      icon: "🧘",
    },
  ];

  return (
    <section className="py-20 bg-[#1c1614] text-[#F8F5F2] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-soft-gold/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-soft-gold font-nav text-xs font-black uppercase tracking-[0.3em] mb-3">
            In-Person Process
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-cream mb-4 leading-tight">
            How Sessions Work
          </h2>
          <p className="font-body text-cream/60 max-w-xl mx-auto text-base">
            Grounded, professional, and reliable. We coordinate everything directly with you for a seamless in-person experience.
          </p>
          <div className="w-20 h-1 bg-soft-gold mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 5 steps layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-soft-gold/5 via-soft-gold/25 to-soft-gold/5 -z-10" />

          {steps.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-2 group">
              {/* Icon / Number badge */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-soft-gold/30 flex items-center justify-center text-2xl mb-6 relative group-hover:scale-105 group-hover:border-soft-gold transition-all duration-300 shadow-xl">
                <span>{s.icon}</span>
                <span className="absolute -top-2.5 -right-2.5 bg-[#E44426] text-white text-[9px] font-black w-6 h-6 rounded-full flex items-center justify-center font-nav shadow-md">
                  {s.num}
                </span>
              </div>

              <h3 className="font-title text-lg font-bold text-cream mb-2 group-hover:text-soft-gold transition-colors duration-300">
                {s.title}
              </h3>
              
              <p className="font-body text-xs sm:text-sm text-cream/70 leading-relaxed max-w-[200px] mx-auto">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
