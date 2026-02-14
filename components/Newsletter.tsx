"use client";

import { useState } from "react";
import { sendNewsletterSignup } from "@/utils/emailjs";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const success = await sendNewsletterSignup(email);
      if (success) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => setSubmitted(false), 5000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-2 md:py-3 bg-deep-brown text-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-6">
            Feeling overwhelmed about Tantra?
          </h2>
          <p className="text-lg text-cream/80 leading-relaxed">
            We can help. Subscribe to our newsletter for weekly insights,
            guidance, and sacred practices.
          </p>
        </div>

        {submitted && (
          <div className="mb-8 p-4 bg-soft-gold/20 border border-soft-gold rounded-lg text-soft-gold text-center">
            Thank you! Check your email to confirm your subscription.
          </div>
        )}

        {/* Newsletter Form - Styled Box */}
        <form
          onSubmit={handleSubmit}
          className="bg-cream/10 border-2 border-cream/30 rounded-lg p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-lg bg-cream text-deep-brown placeholder-deep-brown/50 focus:outline-none focus:ring-2 focus:ring-accent-red focus:ring-offset-2 focus:ring-offset-deep-brown transition font-medium"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-deep-brown text-cream font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap relative overflow-hidden group border border-cream/20"
            >
              <span className="absolute inset-0 bg-[#4A3B33] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-cream transition-colors duration-500">
                {loading ? "Subscribing..." : "SUBSCRIBE"}
                {!loading && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </form>

        <p className="text-xs text-cream/60 mt-6 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
