"use client";

export default function ConsultationBanner() {
  return (
    <section className="bg-gradient-to-r from-soft-gold via-soft-gold/90 to-soft-gold text-deep-brown py-3 relative z-40 shadow-sm overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl -mr-16 -mt-16"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-nav font-bold text-sm md:text-base tracking-tight drop-shadow-sm">
          Not sure where to begin? We offer a <span className="underline decoration-2 underline-offset-4 font-black">FREE 15-minute discovery call</span> before booking.
        </p>
      </div>
    </section>
  );
}
