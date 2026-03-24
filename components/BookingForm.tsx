"use client";

import { useState } from "react";
import { sendBookingRequest } from "@/utils/emailjs";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    sessionType: "Tantric Breathwork Session",
    preferredTime: "Afternoon (1 PM - 5 PM)",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sessionTypes = [
    "Tantra Meditation Session",
    "Tantric Breathwork Session",
    "Chakra Balancing Session",
    "Sound Healing + Tantra Flow",
    "Unsure (Free consultation first)",
  ];

  const timeSlots = [
    "Morning (8 AM - 12 PM)",
    "Afternoon (1 PM - 5 PM)",
    "Evening (6 PM - 10 PM)",
    "Flexible / Weekends",
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
        formData.phone,
        formData.sessionType,
        formData.preferredTime
      );

      if (success) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          sessionType: "Tantric Breathwork Session",
          preferredTime: "Afternoon (1 PM - 5 PM)",
        });
        setTimeout(() => setSubmitted(false), 8000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      {submitted && (
        <div className="mb-8 p-6 bg-soft-gold/10 border border-soft-gold/30 text-deep-brown rounded-2xl flex items-center gap-4 animate-fade-in">
           <span className="text-3xl">🕉️</span>
           <div>
             <p className="font-title text-lg font-bold">Booking Request Sent!</p>
             <p className="text-sm opacity-80 font-medium">We usually reply within 2-4 hours on WhatsApp.</p>
           </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-black uppercase tracking-widest text-deep-brown/60 mb-2"
            >
              Your Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border-2 border-deep-brown/10 rounded-xl focus:outline-none focus:border-accent-red bg-white font-body font-bold text-deep-brown"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-black uppercase tracking-widest text-deep-brown/60 mb-2"
            >
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border-2 border-deep-brown/10 rounded-xl focus:outline-none focus:border-accent-red bg-white font-body font-bold text-deep-brown"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="sessionType"
                className="block text-xs font-black uppercase tracking-widest text-deep-brown/60 mb-2"
              >
                Interest
              </label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-deep-brown/10 rounded-xl focus:outline-none focus:border-accent-red bg-white font-body font-bold text-deep-brown"
              >
                {sessionTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="preferredTime"
                className="block text-xs font-black uppercase tracking-widest text-deep-brown/60 mb-2"
              >
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-deep-brown/10 rounded-xl focus:outline-none focus:border-accent-red bg-white font-body font-bold text-deep-brown"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-5 bg-accent-red text-white font-black rounded-xl hover:bg-deep-brown transition-all disabled:opacity-50 uppercase tracking-[0.2em] text-sm shadow-xl shadow-accent-red/20 flex items-center justify-center gap-3 group"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              Request My Session 
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
  );
}
