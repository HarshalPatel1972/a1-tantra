"use client";

import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import ConsultationBanner from "@/components/ConsultationBanner";

export default function BookingPage() {
  const faqs = [
    {
      q: "Is this confidential?",
      a: "Completely. All sessions are private and we never share your information. We maintain a sacred, safe space for all seekers."
    },
    {
      q: "What if I've never tried Tantra before?",
      a: "Perfect. Most of our seekers are beginners. Your guide will start from the very basics and adapt to your comfort level."
    },
    {
      q: "How does an online session work?",
      a: "Sessions happen via secure video call. You'll receive a private link and preparation instructions after your booking is confirmed."
    }
  ];

  return (
    <div>
      <ConsultationBanner />
      <div className="pt-24 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 relative">
            {/* Social Proof / Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFF0DF]/90 backdrop-blur-md border-2 border-[#D4AF37]/40 rounded-full mb-8 shadow-md scale-90 md:scale-100">
               <span className="flex h-2.5 w-2.5 relative">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
               </span>
               <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-[#3F2F27]">
                 3 seekers booked this week · Next available: This week
               </span>
            </div>

            <h1 className="font-title text-5xl md:text-7xl lg:text-8xl font-black text-deep-brown mb-6 leading-none">
              Begin Your{" "}
              <span className="text-accent-red italic underline decoration-1 underline-offset-8">
                Journey
              </span>
            </h1>
            <p className="text-base md:text-lg text-deep-brown/70 max-w-xl mx-auto font-body font-medium leading-relaxed">
              Sessions fill up fast. Secure your spot today and start your transformation with an authentic guide.
            </p>
          </div>

          <div className="bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-deep-brown/5 shadow-2xl shadow-deep-brown/5 mb-16">
            <BookingForm />
          </div>

          {/* FAQ Section */}
          <div className="max-w-xl mx-auto space-y-12">
            <h2 className="font-title text-3xl md:text-4xl font-bold text-deep-brown text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-title text-xl font-bold text-deep-brown flex items-start gap-3">
                    <span className="text-accent-red">Q:</span>
                    {faq.q}
                  </h3>
                  <p className="font-body text-deep-brown/70 leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
