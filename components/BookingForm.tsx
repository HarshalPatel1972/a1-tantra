"use client";

import { useState } from "react";
import { sendBookingRequest } from "@/utils/emailjs";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    sessionType: "meditation",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sessionTypes = [
    "Tantra Meditation Session",
    "Tantric Breathwork Session",
    "Chakra Balancing Session",
    "Sound Healing + Tantra Flow",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const success = await sendBookingRequest(
        formData.name,
        formData.email,
        formData.date,
        formData.sessionType,
        formData.notes
      );

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
        setFormData({
          name: "",
          email: "",
          date: "",
          sessionType: "meditation",
          notes: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to submit request. Please check your internet or configuration.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 bg-soft-gold/20 border border-soft-gold text-deep-brown rounded-lg">
          Booking request submitted! We&apos;ll confirm your session soon.
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-deep-brown mb-2"
            >
              Full Name
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
              Email Address
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-deep-brown mb-2"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="sessionType"
              className="block text-sm font-semibold text-deep-brown mb-2"
            >
              Session Type
            </label>
            <select
              id="sessionType"
              name="sessionType"
              value={formData.sessionType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
            >
              {sessionTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-semibold text-deep-brown mb-2"
          >
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your experience level, intentions, or any questions..."
            className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-deep-brown transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "REQUEST BOOKING"}
          </button>
          <a
            href={`https://calendar.google.com/calendar/u/0/r`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-8 py-3 border-2 border-accent-red text-accent-red font-semibold rounded-sm hover:bg-accent-red hover:text-cream transition text-center"
          >
            VIEW CALENDAR
          </a>
        </div>
      </form>
    </div>
  );
}
