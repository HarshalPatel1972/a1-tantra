"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/contexts/AuthContext";

/* ── SVG Icon Components ── */
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AppleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5 text-deep-brown/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 text-deep-brown/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5 text-deep-brown/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

/* ── Password Strength Indicator ── */
function getPasswordStrength(password: string): { score: number; label: string; color: string } {
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { score: 1, label: "Weak", color: "bg-red-400" };
  if (score <= 2) return { score: 2, label: "Fair", color: "bg-orange-400" };
  if (score <= 3) return { score: 3, label: "Good", color: "bg-yellow-400" };
  if (score <= 4) return { score: 4, label: "Strong", color: "bg-green-400" };
  return { score: 5, label: "Excellent", color: "bg-emerald-500" };
}

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signup } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const passwordStrength = formData.password ? getPasswordStrength(formData.password) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!agreeTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const success = await signup(formData.name, formData.email, formData.password);
      if (success) {
        router.push("/");
      } else {
        setError("An account with this email already exists.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    alert(`${provider} sign-up coming soon! For now, please use email & password.`);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-cream flex">
      {/* ── Left Panel: Branding (Desktop only) ── */}
      <div className="hidden lg:flex lg:w-[45%] xl:w-[40%] relative overflow-hidden bg-deep-brown items-center justify-center">
        {/* Background Image */}
        <Image
          src="/images/two-people-meditate.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-brown/90 via-deep-brown/70 to-soft-gold/20" />

        {/* Content */}
        <div className="relative z-10 px-12 xl:px-16 max-w-lg">
          <div className="mb-10">
            <div className="w-14 h-14 rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 flex items-center justify-center mb-6">
              <span className="text-cream font-title text-xl font-bold">A1</span>
            </div>
            <h1 className="font-title text-4xl xl:text-5xl font-bold text-cream leading-tight mb-4">
              Begin your path to inner wisdom.
            </h1>
            <p className="text-cream/60 text-lg font-body leading-relaxed">
              Join thousands who have discovered authentic tantric practices for healing, growth, and transformation.
            </p>
          </div>

          {/* Benefits list */}
          <div className="mt-12 space-y-4">
            {[
              { icon: "ri-shield-check-line", text: "Private & secure sessions" },
              { icon: "ri-group-line", text: "Expert-guided spiritual practices" },
              { icon: "ri-heart-pulse-line", text: "Personalized healing journeys" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cream/10 backdrop-blur-sm flex items-center justify-center">
                  <i className={`${item.icon} text-soft-gold text-lg`}></i>
                </div>
                <p className="text-cream/70 font-body text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right Panel: Signup Form ── */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-8 py-8 lg:py-0">
        <div className="w-full max-w-[420px]">

          {/* Mobile header */}
          <div className="lg:hidden text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-deep-brown/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-deep-brown font-title text-lg font-bold">A1</span>
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h2 className="font-title text-3xl font-bold text-deep-brown mb-2">
              Create account
            </h2>
            <p className="text-deep-brown/60 font-body">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-accent-red hover:text-accent-red/80 font-semibold transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          {/* Social Signup Buttons */}
          <div className="space-y-3 mb-5">
            <button
              onClick={() => handleSocialSignup("Google")}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-deep-brown/15 bg-white hover:bg-deep-brown/5 transition-all duration-200 text-deep-brown font-medium text-sm"
            >
              <GoogleIcon />
              <span>Continue with Google</span>
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSocialSignup("Apple")}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-deep-brown/15 bg-white hover:bg-deep-brown/5 transition-all duration-200 text-deep-brown font-medium text-sm"
              >
                <AppleIcon />
                <span>Apple</span>
              </button>
              <button
                onClick={() => handleSocialSignup("Facebook")}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-deep-brown/15 bg-white hover:bg-deep-brown/5 transition-all duration-200 text-deep-brown font-medium text-sm"
              >
                <FacebookIcon />
                <span>Facebook</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-deep-brown/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-cream text-deep-brown/40 text-xs uppercase tracking-widest font-semibold">
                or sign up with email
              </span>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 flex items-center gap-3 p-4 bg-accent-red/10 border border-accent-red/20 rounded-xl text-accent-red text-sm">
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-deep-brown mb-1.5">
                Full name
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <UserIcon />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-deep-brown/15 bg-white focus:outline-none focus:ring-2 focus:ring-accent-red/30 focus:border-accent-red/50 text-deep-brown placeholder:text-deep-brown/30 transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-deep-brown mb-1.5">
                Email
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <MailIcon />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-deep-brown/15 bg-white focus:outline-none focus:ring-2 focus:ring-accent-red/30 focus:border-accent-red/50 text-deep-brown placeholder:text-deep-brown/30 transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-deep-brown mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <LockIcon />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  className="w-full pl-11 pr-12 py-3 rounded-xl border border-deep-brown/15 bg-white focus:outline-none focus:ring-2 focus:ring-accent-red/30 focus:border-accent-red/50 text-deep-brown placeholder:text-deep-brown/30 transition-all duration-200"
                  placeholder="Min. 6 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-deep-brown/40 hover:text-deep-brown/70 transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {/* Password strength meter */}
              {passwordStrength && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          level <= passwordStrength.score ? passwordStrength.color : "bg-deep-brown/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-deep-brown/50 mt-1">{passwordStrength.label}</p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-deep-brown mb-1.5">
                Confirm password
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <LockIcon />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  autoComplete="new-password"
                  className={`w-full pl-11 pr-12 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-accent-red/30 focus:border-accent-red/50 text-deep-brown placeholder:text-deep-brown/30 transition-all duration-200 ${
                    formData.confirmPassword && formData.password !== formData.confirmPassword
                      ? "border-red-400"
                      : formData.confirmPassword && formData.password === formData.confirmPassword
                      ? "border-green-400"
                      : "border-deep-brown/15"
                  }`}
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-deep-brown/40 hover:text-deep-brown/70 transition-colors"
                  tabIndex={-1}
                >
                  {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-xs text-red-500 mt-1">Passwords don&apos;t match</p>
              )}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <button
                type="button"
                role="checkbox"
                aria-checked={agreeTerms}
                onClick={() => setAgreeTerms(!agreeTerms)}
                className={`w-[18px] h-[18px] min-w-[18px] min-h-[18px] mt-0.5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                  agreeTerms
                    ? "bg-accent-red border-accent-red"
                    : "border-deep-brown/25 hover:border-deep-brown/40"
                }`}
              >
                {agreeTerms && (
                  <svg className="w-3 h-3 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
              <span className="text-sm text-deep-brown/60 leading-snug select-none cursor-pointer" onClick={() => setAgreeTerms(!agreeTerms)}>
                I agree to the{" "}
                <Link href="/terms" className="text-accent-red hover:text-accent-red/80 font-medium">
                  Terms of Service
                </Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-accent-red hover:text-accent-red/80 font-medium">
                  Privacy Policy
                </Link>
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !agreeTerms}
              className="w-full py-3.5 bg-accent-red text-cream font-semibold rounded-xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:shadow-accent-red/20 active:scale-[0.98] mt-1"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-red to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Creating account...
                  </>
                ) : (
                  "Create account"
                )}
              </span>
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-deep-brown/40 leading-relaxed">
            We&apos;ll never share your data. Read our{" "}
            <Link href="/privacy" className="text-deep-brown/60 hover:text-accent-red underline decoration-deep-brown/20 hover:decoration-accent-red transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
