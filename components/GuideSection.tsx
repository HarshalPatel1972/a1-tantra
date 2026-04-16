"use client";

import Image from "next/image";

export default function GuideSection() {
  const credentials = [
    "Traditionally Trained",
    "10+ Years Practice",
    "500+ Seekers Guided",
  ];

  return (
    <section id="guides" className="py-24 md:py-32 bg-deep-brown text-cream overflow-hidden relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-soft-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-soft-gold/20 flex items-center justify-center p-8 bg-black/20">
            <Image
              src="/images/candle.webp" // Silhouette placeholder using candle as per instructions
              alt="Your Sacred Guide"
              width={600}
              height={800}
              className="object-cover object-center w-full h-full opacity-60 grayscale scale-110"
              priority
              loading="eager"
            />
            {/* Silhouette-style overlay for mystery & focus */}
            <div className="absolute inset-0 bg-linear-to-t from-deep-brown via-transparent to-transparent"></div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="font-nav text-xs font-black text-soft-gold uppercase tracking-[0.4em] mb-4">
                The Founder
              </p>
              <h2 className="font-title text-4xl md:text-5xl lg:text-6xl font-black text-cream leading-tight">
                Your Guide on the <span className="text-soft-gold italic underline decoration-1 underline-offset-8">Sacred Path</span>
              </h2>
            </div>
            
            <p className="font-body text-lg md:text-xl text-cream/80 leading-relaxed max-w-xl font-medium">
              With deep roots in traditional Tantric lineages, our practitioners bring years of study and personal practice to every session. Each guide is trained in authentic Kriya, Carya, Yoga, and Anuttarayoga Tantra traditions.
            </p>
            
            {/* Credentials Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {credentials.map((cred, idx) => (
                <div 
                  key={idx}
                  className="px-6 py-4 bg-white/5 border border-soft-gold/30 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center text-center w-[calc(50%-8px)] sm:w-auto hover:bg-white/10 transition-colors cursor-default"
                >
                  <span className="font-nav text-[10px] uppercase font-black tracking-widest text-soft-gold mb-1">Badge</span>
                  <span className="font-title text-sm font-bold text-cream tracking-wide">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
