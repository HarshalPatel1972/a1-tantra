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
    <section className="py-12 md:py-16 bg-mystique-taupe text-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="serif-heading text-4xl font-bold mb-4">
          Feeling overwhelmed about Tantra?
        </h2>
        <p className="text-lg text-cream/80 mb-12">
          We can help. Subscribe to our newsletter for weekly insights,
          guidance, and sacred practices.
        </p>

        {submitted && (
          <div className="mb-8 p-4 bg-soft-gold/20 border border-soft-gold rounded-lg text-soft-gold">
            Thank you! Check your email to confirm your subscription.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-sm bg-cream text-mystique-taupe placeholder-mystique-taupe/50 focus:outline-none focus:ring-2 focus:ring-accent-red"
            required
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-soft-gold hover:text-mystique-taupe transition disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "SUBSCRIBE"}
          </button>
        </form>

        <p className="text-xs text-cream/60 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

