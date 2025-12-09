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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {submitted && (
        <div className="p-4 bg-soft-gold/20 border border-soft-gold text-mystique-taupe rounded-lg">
          Thank you for reaching out. We&apos;ll be in touch soon.
        </div>
      )}

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-mystique-taupe mb-2"
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
          className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-mystique-taupe mb-2"
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
          className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-mystique-taupe mb-2"
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
          className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-mystique-taupe mb-2"
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
          className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-mystique-taupe transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "SEND MESSAGE"}
      </button>
    </form>
  );
}

