"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { sendEmail } from "@/utils/emailjs";

export default function StartJourneyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "beginner",
    goals: [] as string[],
    resonance: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const goals = [
    "Inner Peace & Meditation",
    "Energy Activation & Kundalini",
    "Emotional Healing",
    "Spiritual Transformation",
    "Sacred Sexuality & Intimacy",
    "Self-Discovery",
  ];

  const paths = [
    { id: "shakta", name: "Shakta Tantra (Divine Feminine)", icon: "" },
    {
      id: "kundalini",
      name: "Kundalini Tantra (Energy Awakening)",
      icon: "",
    },
    { id: "kaula", name: "Kaula Tantra (Life Integration)", icon: "" },
    { id: "tibetan", name: "Tibetan Tantra (Buddhist Path)", icon: "" },
  ];

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const success = await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        subject: "Start Your Tantra Journey",
        message: `
Experience Level: ${formData.experience}
Goals: ${formData.goals.join(", ")}
Tantra Path Resonance: ${formData.resonance}

Please send me personalized guidance to begin my Tantra journey.
        `,
      });

      if (success) {
        setSubmitted(true);
        setTimeout(() => {
          setStep(1);
          setFormData({
            name: "",
            email: "",
            experience: "beginner",
            goals: [],
            resonance: "",
          });
          setSubmitted(false);
        }, 5000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                    s <= step
                      ? "bg-accent-red text-cream"
                      : "bg-mystique-taupe/10 text-mystique-taupe"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="h-2 bg-mystique-taupe/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent-red transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {submitted && (
            <div className="mb-8 p-4 bg-soft-gold/20 border border-soft-gold text-mystique-taupe rounded-lg text-center">
              Thank you! We'll send you personalized guidance to your email
              shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="serif-heading text-3xl font-bold text-mystique-taupe">
                  Let's begin your journey.
                </h2>
                <div>
                  <label className="block text-sm font-semibold text-mystique-taupe mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-mystique-taupe mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 border border-mystique-taupe/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Experience Level */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="serif-heading text-3xl font-bold text-mystique-taupe">
                  Your experience with Tantra?
                </h2>
                <div className="space-y-3">
                  {["beginner", "intermediate", "advanced"].map((level) => (
                    <label
                      key={level}
                      className="flex items-center gap-3 cursor-pointer p-4 border border-mystique-taupe/20 rounded hover:bg-mystique-taupe/5 transition"
                    >
                      <input
                        type="radio"
                        name="experience"
                        value={level}
                        checked={formData.experience === level}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: e.target.value,
                          })
                        }
                        className="w-4 h-4"
                      />
                      <span className="font-semibold text-mystique-taupe capitalize">
                        {level === "beginner"
                          ? "I'm new to Tantra"
                          : level === "intermediate"
                          ? "I have some experience"
                          : "I've studied extensively"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Goals */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="serif-heading text-3xl font-bold text-mystique-taupe">
                  What are your goals?
                </h2>
                <p className="text-mystique-taupe/70">
                  Select all that resonate with you.
                </p>
                <div className="space-y-3">
                  {goals.map((goal) => (
                    <label
                      key={goal}
                      className="flex items-center gap-3 cursor-pointer p-4 border border-mystique-taupe/20 rounded hover:bg-mystique-taupe/5 transition"
                    >
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={() => handleGoalToggle(goal)}
                        className="w-4 h-4"
                      />
                      <span className="font-semibold text-mystique-taupe">
                        {goal}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Path Resonance */}
            {step === 4 && (
              <div className="space-y-6">
                <h2 className="serif-heading text-3xl font-bold text-mystique-taupe">
                  Which path resonates with you?
                </h2>
                <div className="space-y-3">
                  {paths.map((path) => (
                    <label
                      key={path.id}
                      className="flex items-start gap-4 cursor-pointer p-4 border border-mystique-taupe/20 rounded hover:bg-mystique-taupe/5 transition"
                    >
                      <input
                        type="radio"
                        name="resonance"
                        value={path.id}
                        checked={formData.resonance === path.id}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            resonance: e.target.value,
                          })
                        }
                        className="w-4 h-4 mt-1"
                      />
                      <div>
                        <span className="text-2xl">{path.icon}</span>
                        <span className="font-semibold text-mystique-taupe block">
                          {path.name}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-between pt-8">
              <button
                type="button"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="px-6 py-3 border-2 border-mystique-taupe text-mystique-taupe font-semibold rounded-sm hover:bg-mystique-taupe hover:text-cream transition disabled:opacity-50"
              >
                BACK
              </button>
              {step < 4 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-mystique-taupe transition"
                >
                  CONTINUE
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={
                    loading ||
                    !formData.name ||
                    !formData.email ||
                    formData.goals.length === 0 ||
                    !formData.resonance
                  }
                  className="px-6 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-mystique-taupe transition disabled:opacity-50"
                >
                  {loading ? "SUBMITTING..." : "BEGIN MY JOURNEY"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

