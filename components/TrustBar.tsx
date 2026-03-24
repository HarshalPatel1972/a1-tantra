"use client";

const trustItems = [
  { icon: "🔒", text: "Private & Confidential Sessions" },
  { icon: "🕉️", text: "Authentically Trained Practitioners" },
  { icon: "⭐", text: "4.9 Rating · 500+ Seekers" },
  { icon: "💬", text: "WhatsApp Support Available" },
  { icon: "🔄", text: "Satisfaction Guaranteed" },
];

export default function TrustBar() {
  return (
    <section className="bg-cream border-b border-deep-brown/10 py-6 md:py-8 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-around gap-6 md:gap-8 opacity-70 hover:opacity-100 transition-opacity">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0 group">
              <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span className="font-nav text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-deep-brown drop-shadow-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
