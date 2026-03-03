"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { sendEmail } from "@/utils/emailjs";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const service = searchParams.get("service");
    if (service) {
      setFormData((prev) => ({ 
        ...prev, 
        subject: `Inquiry: ${service.charAt(0).toUpperCase() + service.slice(1).replace(/-/g, ' ')}`
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const success = await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (success) {
        // Google Ads Conversion tracking
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17953286510/_1xTCKWZ-oAcEO7S5fBC',
            'value': 1.0,
            'currency': 'INR'
          });
        }
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Something went wrong. Please check your internet connection or email configuration.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {submitted && (
        <div className="p-4 bg-soft-gold/20 border border-soft-gold text-deep-brown rounded-lg">
          Thank you for reaching out. We&apos;ll be in touch soon.
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-deep-brown mb-2"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-deep-brown mb-2"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-deep-brown mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-deep-brown mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-deep-brown transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
