"use client";

import { useState } from "react";
import { sendEmail } from "@/utils/emailjs";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // --- SPAM PROTECTION ---
    const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
    if (!nameRegex.test(formData.name)) {
      setError("Please enter a valid human name (letters only).");
      return;
    }

    setLoading(true);

    try {
      const success = await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
         setError("Failed to send message. Please try again later.");
      }
    } catch {
        setError("Network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {submitted && (
        <div className="p-4 bg-soft-gold/20 border border-soft-gold text-deep-brown rounded-lg flex items-center gap-3">
          <span className="text-xl">✨</span>
          Thank you for reaching out. We&apos;ll be in touch soon.
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-3">
           <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
           </svg>
           <p className="text-sm font-bold">{error}</p>
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
