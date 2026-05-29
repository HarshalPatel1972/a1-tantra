"use client";

export default function SessionDelivery() {
  return (
    <section className="py-16 bg-deep-brown text-cream relative overflow-hidden border-t border-b border-soft-gold/20">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-soft-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="bg-black/20 backdrop-blur-md border border-soft-gold/30 p-8 sm:p-12 rounded-3xl shadow-2xl relative">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left side: Icon */}
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-soft-gold/30 flex items-center justify-center text-3xl shrink-0 mx-auto md:mx-0 select-none">
              🇮🇳
            </div>
            
            {/* Right side: Information Content */}
            <div className="space-y-6 text-center md:text-left flex-grow">
              <div>
                <p className="font-nav text-[10px] uppercase font-black tracking-widest text-soft-gold mb-1">
                  Important Information
                </p>
                <h3 className="font-title text-2xl sm:text-3xl font-bold text-cream">
                  Session Delivery Details
                </h3>
              </div>
              
              <div className="w-16 h-0.5 bg-accent-red mx-auto md:mx-0 rounded-full"></div>
              
              <p className="font-body text-base sm:text-lg text-cream font-black leading-relaxed">
                📢 All therapy sessions are conducted strictly in person. Sessions are not conducted online.
              </p>
              
              <p className="font-body text-sm sm:text-base text-cream/75 leading-relaxed">
                After a booking request is submitted, we will contact you directly on WhatsApp/Phone to coordinate:
              </p>
              
              {/* Bullet points */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left font-body text-sm font-semibold max-w-lg mx-auto md:mx-0 text-cream/90">
                <li className="flex items-center gap-2">
                  <span className="text-soft-gold">✔</span> Date & Availability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-soft-gold">✔</span> Preferred Location/City
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-soft-gold">✔</span> Travel Arrangements
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-soft-gold">✔</span> Session Scheduling
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
