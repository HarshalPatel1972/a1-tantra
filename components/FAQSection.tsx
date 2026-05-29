"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is this online?",
      a: "Yes, all sessions and consultations are conducted fully online via secure, high-definition video calls (Google Meet or Zoom) across India. This allows you to explore authentic practices from the comfort and privacy of your own home.",
    },
    {
      q: "Is it confidential?",
      a: "Absolutely. Confidentiality and safety are our highest priorities. All details shared during registration, the discovery call, and your sessions are kept strictly private. We maintain a non-judgmental, sacred container for all seekers.",
    },
    {
      q: "What happens during a session?",
      a: "Every session is customized. Typically, a session consists of guided breathwork (pranayama), visualization, mudras, or meditation, tailored strictly to the authentic paths (Kriya, Carya, Yoga, or Anuttarayoga). There is no physical contact or performance required—only open, respectful participation.",
    },
    {
      q: "Do I need prior experience?",
      a: "No prior experience in Tantra, yoga, or meditation is needed. We guide beginners gently with clear, simple, step-by-step instructions. If you are an advanced practitioner, we tailor teachings to deepen your existing lineage connection.",
    },
    {
      q: "How long are sessions?",
      a: "Standard sessions are 60 to 75 minutes long. The initial Discovery Call is 15 minutes and is fully free to help align on goals and ensure we are a good fit for your spiritual journey.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      <div className="absolute top-10 left-10 w-48 h-48 bg-soft-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent-red font-nav text-xs font-black uppercase tracking-[0.3em] mb-3">
            Questions & Answers
          </p>
          <h2 className="font-title text-4xl md:text-5xl font-bold text-deep-brown mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-deep-brown/60 max-w-xl mx-auto text-base">
            Find answers to common questions about our sessions, confidentiality, and authentic Tantra.
          </p>
          <div className="w-20 h-1 bg-accent-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-deep-brown/5 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="font-title text-lg sm:text-xl font-bold text-deep-brown hover:text-accent-red transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-accent-red transition-transform duration-300 shrink-0 select-none">
                    <svg
                      className={`w-6 h-6 transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer panel with transition */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100 border-t border-deep-brown/5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-5 font-body text-sm sm:text-base text-deep-brown/75 leading-relaxed bg-cream/10">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
