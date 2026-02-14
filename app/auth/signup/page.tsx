"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signup } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const success = await signup(formData.name, formData.email, formData.password);
      if (success) {
        router.push("/");
      } else {
        setError("Email already exists or signup failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-start justify-center px-4 pt-8 md:pt-12 pb-20">
      <div className="w-full max-w-md">
        {/* Form Card */}
        <div className="bg-white rounded-sm border border-deep-brown/20 shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="serif-heading text-4xl font-bold text-deep-brown mb-2">
              Join A1 Tantra
            </h1>
            <p className="text-deep-brown/70">
              Create your spiritual journey account
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-accent-red/10 border border-accent-red text-accent-red rounded-sm text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-deep-brown mb-2"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white text-deep-brown"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-deep-brown mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white text-deep-brown"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-deep-brown mb-2"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white text-deep-brown"
                placeholder="••••••••"
              />
              <p className="text-xs text-deep-brown/60 mt-1">At least 6 characters</p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-deep-brown mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white text-deep-brown"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
            >
              <span className="absolute inset-0 bg-deep-brown -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
              <span className="relative z-10">
                {loading ? "Creating account..." : "Create Account"}
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-deep-brown/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-deep-brown/50">Or</span>
            </div>
          </div>

          {/* Login Link */}
          <div className="text-center mb-6">
            <p className="text-deep-brown/70 text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-accent-red hover:text-deep-brown font-semibold transition"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Terms */}
          <div className="pt-6 border-t border-deep-brown/20">
            <p className="text-xs text-deep-brown/60 text-center">
              By signing up, you agree to our{" "}
              <Link href="/terms" className="text-accent-red hover:text-deep-brown">
                Terms of Service
              </Link>
              {" "}and{" "}
              <Link href="/privacy" className="text-accent-red hover:text-deep-brown">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
