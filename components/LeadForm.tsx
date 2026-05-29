"use client";

import { useState } from "react";
import { sendLeadRequest } from "@/utils/emailjs";
import { trackDiscoveryCallSubmit } from "@/lib/gtag";

interface LeadFormProps {
  defaultGoal?: string;
  buttonText?: string;
}

export default function LeadForm({ 
  defaultGoal = "Unsure / General Guidance", 
  buttonText = "Book Free Discovery Call" 
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: defaultGoal,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goals = [
    "Chakra Balancing",
    "Spiritual Healing",
    "Tantra Guidance",
    "Meditation Coaching",
    "Relationship Healing",
    "Unsure / General Guidance",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Strip non-numbers
      let digitsOnly = value.replace(/\D/g, "");
      
      // If country code is pasted, strip +91 or 91 or 0
      if (digitsOnly.length > 10) {
        if (digitsOnly.startsWith("91")) {
          digitsOnly = digitsOnly.substring(2);
        } else if (digitsOnly.startsWith("0")) {
          digitsOnly = digitsOnly.substring(1);
        }
      }
      setFormData((prev) => ({ ...prev, phone: digitsOnly.slice(0, 10) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Name Validation
    const nameRegex = /^[a-zA-Z\s\-']{2,50}$/;
    if (!nameRegex.test(formData.name)) {
      setError("Please enter a valid human name.");
      return;
    }

    // Phone Validation (Indian Mobile Number format)
    if (formData.phone.length !== 10 || !/^[6-9]\d{9}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit Indian WhatsApp number.");
      return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const success = await sendLeadRequest(
        formData.name,
        formData.email,
        formData.phone,
        formData.goal
      );

      if (success) {
        trackDiscoveryCallSubmit();
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          goal: defaultGoal,
        });
        setTimeout(() => setSubmitted(false), 10000);
      } else {
        setError("Something went wrong. Please try again or message us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="lead-form" className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[#3F2F27]/10 pointer-events-none mix-blend-multiply"></div>
      
      <h3 className="font-title text-2xl font-bold text-white mb-6 drop-shadow-md text-center">
        Book Your Free Discovery Call
      </h3>

      {submitted && (
        <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-100 rounded-xl flex items-start gap-3 animate-fade-in relative z-10">
          <span className="text-2xl">🕉️</span>
          <div>
            <p className="font-bold text-sm">Call Request Received!</p>
            <p className="text-xs opacity-90 mt-0.5">We will reach out on WhatsApp within 2-4 hours to schedule your free 15-minute call.</p>
          </div>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-rose-500/20 border border-rose-500/40 text-rose-100 rounded-xl flex items-center gap-3 animate-fade-in relative z-10">
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-xs font-bold">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div>
          <label htmlFor="lead-name" className="block text-[10px] font-black uppercase tracking-widest text-white/70 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            id="lead-name"
            name="name"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 hover:bg-white/15 focus:bg-white border-2 border-white/20 focus:border-[#E44426] rounded-xl focus:outline-none font-body text-sm font-bold text-white focus:text-deep-brown placeholder:text-white/40 transition-all"
          />
        </div>

        <div>
          <label htmlFor="lead-email" className="block text-[10px] font-black uppercase tracking-widest text-white/70 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            id="lead-email"
            name="email"
            placeholder="e.g. rahul@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 hover:bg-white/15 focus:bg-white border-2 border-white/20 focus:border-[#E44426] rounded-xl focus:outline-none font-body text-sm font-bold text-white focus:text-deep-brown placeholder:text-white/40 transition-all"
          />
        </div>

        <div>
          <label htmlFor="lead-phone" className="block text-[10px] font-black uppercase tracking-widest text-white/70 mb-1.5">
            WhatsApp Number
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-white/50 focus-within:text-deep-brown/50 font-bold border-r border-white/20 pr-3 select-none pointer-events-none text-sm">
              +91
            </span>
            <input
              type="tel"
              id="lead-phone"
              name="phone"
              placeholder="98765 43210"
              maxLength={10}
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-16 pr-4 py-3 bg-white/10 hover:bg-white/15 focus:bg-white border-2 border-white/20 focus:border-[#E44426] rounded-xl focus:outline-none font-body text-sm font-bold text-white focus:text-deep-brown placeholder:text-white/40 transition-all"
            />
          </div>
        </div>

        <div>
          <label htmlFor="lead-goal" className="block text-[10px] font-black uppercase tracking-widest text-white/70 mb-1.5">
            Your Goal / Focus Area
          </label>
          <div className="relative">
            <select
              id="lead-goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full px-4 py-3 pr-10 bg-white/10 hover:bg-white/15 focus:bg-white border-2 border-white/20 focus:border-[#E44426] rounded-xl focus:outline-none font-body text-sm font-bold text-white focus:text-deep-brown appearance-none cursor-pointer transition-all"
            >
              {goals.map((g) => (
                <option key={g} value={g} className="text-deep-brown bg-cream font-bold">
                  {g}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/60 select-none">
              <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 py-4 bg-[#E44426] hover:bg-white text-white hover:text-[#E44426] font-black rounded-xl border-2 border-[#E44426] transition-all disabled:opacity-50 uppercase tracking-[0.15em] text-xs shadow-lg flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
        >
          {loading ? (
            "Processing..."
          ) : (
            <>
              {buttonText}
              <span className="group-hover:translate-x-1.5 transition-transform text-lg">→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
