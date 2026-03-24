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
    <section className="py-2 md:py-3 bg-cream text-deep-brown">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-6">
            Feeling overwhelmed about Tantra?
          </h2>
          <p className="text-lg text-deep-brown/80 leading-relaxed">
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
          className="bg-deep-brown/5 border-2 border-deep-brown/20 rounded-lg p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-lg bg-white text-deep-brown placeholder-deep-brown/50 focus:outline-none focus:ring-2 focus:ring-accent-red transition font-medium border border-deep-brown/10"
                required
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="relative flex items-center justify-center gap-3 px-10 py-4 bg-deep-brown text-cream font-black rounded-xl border-2 border-soft-gold group overflow-hidden transition-all duration-300 disabled:opacity-50 shadow-xl"
            >
              <span className="absolute inset-0 bg-accent-red -translate-x-full group-hover:translate-x-0 transition-transform duration-500 pointer-events-none"></span>
              
              <div className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                <span className="font-bold tracking-widest text-sm">
                  {loading ? "SAVING..." : "SUBSCRIBE"}
                </span>
                {!loading && (
                   <span className="group-hover:translate-x-1 transition-transform">→</span>
                )}
              </div>
            </button>
          </div>
        </form>

        <p className="text-xs text-deep-brown/60 mt-6 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
