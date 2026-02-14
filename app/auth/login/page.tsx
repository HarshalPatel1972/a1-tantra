"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Form Card */}
        <div className="bg-white rounded-sm border border-deep-brown/20 shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="serif-heading text-4xl font-bold text-deep-brown mb-2">
              Welcome Back
            </h1>
            <p className="text-deep-brown/70">
              Sign in to your A1 Tantra account
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
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-deep-brown/30 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent-red bg-white text-deep-brown"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-deep-brown transition disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
            >
              {loading ? "Signing in..." : "Sign In"}
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

          {/* Signup Link */}
          <div className="text-center mb-6">
            <p className="text-deep-brown/70 text-sm">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-accent-red hover:text-deep-brown font-semibold transition"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
