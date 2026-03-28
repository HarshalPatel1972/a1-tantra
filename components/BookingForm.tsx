"use client";

import { useState } from "react";
import { sendBookingRequest } from "@/utils/emailjs";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    sessionType: "Kriya Tantra Session",
    preferredTime: "Afternoon (1 PM - 5 PM)",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sessionTypes = [
    "Kriya Tantra Session",
    "Carya Tantra Session",
    "Yoga Tantra Session",
    "Anuttarayoga Tantra Session",
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
    
    if (name === "phone") {
      // Strip everything except numbers
      let digitsOnly = value.replace(/\D/g, "");
      
      // If user pasted a number with country code, auto-fix it for them
      if (digitsOnly.length > 10) {
        if (digitsOnly.startsWith("91")) {
          digitsOnly = digitsOnly.substring(2);
        } else if (digitsOnly.startsWith("0")) {
          digitsOnly = digitsOnly.substring(1);
        }
      }
      
      // Stop them from physically typing more than 10 digits
      setFormData((prev) => ({ ...prev, phone: digitsOnly.slice(0, 10) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (error) setError(null); // Clear error on typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // --- SPAM PROTECTION / STRICT VALIDATION ---
    const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
    if (!nameRegex.test(formData.name)) {
      setError("Please enter a valid human name (letters only).");
      return;
    }

    // Since `handleChange` already guarantees `formData.phone` is max 10 digits
    // of pure numbers, we just need to verify the length and starting digit.
    if (formData.phone.length !== 10 || !/^[6-9]\d{9}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    // -------------------------------------------

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
          sessionType: "Kriya Tantra Session",
          preferredTime: "Afternoon (1 PM - 5 PM)",
        });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
         setError("Something went wrong. Please try again.");
      }
    } catch {
       setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      {submitted && (
        <div className="mb-8 p-6 bg-soft-gold/10 border border-soft-gold/30 text-deep-brown rounded-2xl flex items-center gap-4 animate-fade-in shadow-inner">
           <span className="text-3xl">🕉️</span>
           <div>
             <p className="font-title text-lg font-bold">Booking Request Sent!</p>
             <p className="text-sm opacity-80 font-medium">We usually reply within 2-4 hours on WhatsApp.</p>
           </div>
        </div>
      )}

      {error && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 animate-fade-in">
           <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
           </svg>
           <p className="text-sm font-bold">{error}</p>
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
            <div className="relative flex items-center">
              <span className="absolute left-5 text-deep-brown/50 font-bold border-r-2 border-deep-brown/10 pr-3 select-none pointer-events-none">
                +91
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="98765 43210"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-[4.5rem] pr-5 py-4 border-2 border-deep-brown/10 rounded-xl focus:outline-none focus:border-accent-red bg-white font-body font-bold text-deep-brown placeholder:text-deep-brown/30"
              />
            </div>
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
          className="w-full py-6 bg-[#E44426] text-white font-black rounded-xl hover:bg-white hover:text-[#E44426] border-4 border-[#E44426] transition-all disabled:opacity-50 uppercase tracking-[0.2em] text-sm shadow-[0_20px_40px_-10px_rgba(228,68,38,0.4)] flex items-center justify-center gap-3 group active:scale-95"
        >
          {loading ? (
            "PROCESSING..."
          ) : (
            <>
              Request My Session 
              <span className="group-hover:translate-x-2 transition-transform text-xl">→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
