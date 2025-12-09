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
    setLoading(true);

    try {
      const success = await sendBookingRequest(
        formData.name,
        formData.email,
        formData.date,
        formData.sessionType,
        formData.notes
      );

      if (success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          date: "",
          sessionType: "meditation",
          notes: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 bg-soft-gold/20 border border-soft-gold text-mystique-taupe rounded-lg">
          Booking request submitted! We&apos;ll confirm your session soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-mystique-taupe mb-2"
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
              className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-mystique-taupe mb-2"
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
              className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-mystique-taupe mb-2"
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
              className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="sessionType"
              className="block text-sm font-semibold text-mystique-taupe mb-2"
            >
              Session Type
            </label>
            <select
              id="sessionType"
              name="sessionType"
              value={formData.sessionType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white"
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
            className="block text-sm font-semibold text-mystique-taupe mb-2"
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
            className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white resize-none"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-mystique-taupe transition disabled:opacity-50"
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

