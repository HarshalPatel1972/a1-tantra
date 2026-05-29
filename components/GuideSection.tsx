"use client";

import Image from "next/image";

export default function GuideSection() {
  const credentials = [
    "Traditionally Trained",
    "10+ Years Practice",
    "500+ Seekers Guided",
    "Lineage Initiated",
  ];

  return (
    <section id="guides" className="py-20 md:py-28 bg-[#3F2F27] text-[#F8F5F2] overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-auto md:h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-soft-gold/20 flex items-center justify-center p-8 bg-black/25">
            <Image
              src="/images/candle.png" // Using the candle placeholder as per standard setup
              alt="Acharya Devrat - Your Sacred Guide"
              width={600}
              height={800}
              className="object-cover object-center w-full h-full opacity-70 grayscale hover:grayscale-0 transition-all duration-700 scale-105"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3F2F27] via-transparent to-transparent"></div>
            
            {/* Guide Name Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#1C1614]/80 backdrop-blur-md border border-soft-gold/30 p-5 rounded-2xl">
              <p className="font-nav text-[10px] uppercase font-black tracking-widest text-[#D4AF37] mb-1">
                Founder & Lead Practitioner
              </p>
              <h3 className="font-title text-2xl font-bold text-cream">
                Acharya Devrat
              </h3>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="font-nav text-xs font-black text-soft-gold uppercase tracking-[0.4em] mb-2">
                Meet Your Guide
              </p>
              <h2 className="font-title text-4xl md:text-5xl font-black text-cream leading-tight">
                Authentic Guidance on the <span className="text-soft-gold italic underline decoration-1 underline-offset-8">Sacred Path</span>
              </h2>
            </div>
            
            <p className="font-body text-base md:text-lg text-cream/90 leading-relaxed font-medium">
              Acharya Devrat is an accomplished practitioner traditionally initiated into traditional Tantric lineages. Bringing over a decade of deep study and personal practice in India, Devrat guides seekers with absolute clarity, safety, and respect.
            </p>

            {/* Philosophy Box */}
            <div className="bg-[#1C1614]/40 border-l-4 border-[#E44426] p-5 rounded-r-2xl font-body italic text-[#F8F5F2]/80 text-sm md:text-base leading-relaxed">
              &quot;Spiritual transformation is not about escaping the world or chasing pop-culture trends. It is about integrating your breath, energy, and mind to experience your life fully, clearly, and authentically.&quot;
            </div>
            
            {/* Credentials Badges */}
            <div className="space-y-3">
              <h4 className="font-nav text-[10px] font-black uppercase tracking-widest text-soft-gold/70">
                Credentials & Experience
              </h4>
              <div className="flex flex-wrap gap-3">
                {credentials.map((cred, idx) => (
                  <div 
                    key={idx}
                    className="px-4 py-3 bg-[#1C1614]/60 border border-soft-gold/20 rounded-xl flex items-center justify-center text-center hover:bg-[#1C1614] hover:border-soft-gold/40 transition-colors cursor-default"
                  >
                    <span className="font-title text-xs font-bold text-cream tracking-wide">
                      ✔ {cred}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
