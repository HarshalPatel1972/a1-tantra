"use client";

export default function WhyClientsChooseUs() {
  const pillars = [
    {
      title: "Private Sessions",
      description: "Conducted in absolute isolation, ensuring complete safety, confidentiality, and respect for your personal boundaries.",
      icon: "🔒",
    },
    {
      title: "Flexible Locations",
      description: "We coordinate with you to arrange comfortable, premium, and quiet session locations in your city.",
      icon: "📍",
    },
    {
      title: "Personalized Guidance",
      description: "No templated advice. Sessions are mapped entirely to your unique emotional, physical, and chakra systems.",
      icon: "🧘",
    },
    {
      title: "Free Consultations",
      description: "Speak directly with us on a free 15-minute discovery call to align goals before any financial commitment.",
      icon: "📞",
    },
    {
      title: "Across India Availability",
      description: "Our practitioner travels to major tier-1 and tier-2 cities across India to conduct sessions physically.",
      icon: "🇮🇳",
    },
  ];

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent-red font-nav text-xs font-black uppercase tracking-[0.3em] mb-3">
            Why Choose Us
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-4 leading-tight">
            Our Commitment to Seekers
          </h2>
          <p className="font-body text-deep-brown/60 max-w-xl mx-auto text-base">
            Providing high-end, authentic, and completely professional in-person tantric healing across India.
          </p>
          <div className="w-20 h-1 bg-accent-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {pillars.map((p, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-deep-brown/5 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center text-2xl mb-4 shadow-inner">
                {p.icon}
              </div>
              <h3 className="font-title text-lg font-bold text-deep-brown mb-2">
                {p.title}
              </h3>
              <p className="font-body text-xs text-deep-brown/70 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
