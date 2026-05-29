"use client";

import { useState } from "react";

interface FAQSectionProps {
  dark?: boolean;
  accentColor?: string;
}

export default function FAQSection({ dark = false, accentColor = "#E44426" }: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is this online?",
      a: "No. All therapy sessions are conducted in person. After booking, session location and scheduling are discussed directly.",
    },
    {
      q: "Do you travel to my city?",
      a: "Yes. Location availability and travel arrangements to your city in India are discussed directly during the consultation.",
    },
    {
      q: "How do bookings work?",
      a: "Submit your request through our form and we will contact you on WhatsApp to confirm availability, city, and session details.",
    },
    {
      q: "Can I speak before booking?",
      a: "Yes. A free 15-minute discovery call is available. Just select 'Unsure / General Guidance' in the form to request a call.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (dark) {
    return (
      <section className="py-20 relative overflow-hidden" style={{ background: "transparent" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="font-nav text-xs font-black uppercase tracking-[0.3em] mb-3" style={{ color: accentColor }}>
              Questions & Answers
            </p>
            <h2 className="font-title text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "rgba(255,255,255,0.95)" }}>
              Frequently Asked Questions
            </h2>
            <p className="font-body max-w-xl mx-auto text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              Find answers to common questions about in-person sessions, locations, and booking procedures.
            </p>
            <div className="w-20 h-1 mx-auto mt-6 rounded-full" style={{ background: accentColor }} />
          </div>

          {/* Accordion List */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: `1px solid ${isOpen ? accentColor + "40" : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="font-title text-lg sm:text-xl font-bold transition-colors" style={{ color: "rgba(255,255,255,0.9)" }}>
                      {faq.q}
                    </span>
                    <span className="transition-transform duration-300 shrink-0 select-none" style={{ color: accentColor }}>
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
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                    style={{ borderTop: isOpen ? "1px solid rgba(255,255,255,0.08)" : "none" }}
                  >
                    <p className="px-6 py-5 font-body text-sm sm:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
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
            Find answers to common questions about in-person sessions, locations, and booking procedures.
          </p>
          <div className="w-20 h-1 bg-accent-red mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
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
