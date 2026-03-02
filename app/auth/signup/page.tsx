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

const UserIcon = () => (
  <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#0a0a0c] selection:bg-soft-gold/30">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/login-bg.png"
          alt=""
          fill
          className="object-cover opacity-60 transition-transform duration-[10s] animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-black/80" />
      </div>

      {/* ── Signup Container ── */}
      <div className="relative z-10 w-full max-w-[540px]">
        <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group">
          
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl hover:border-soft-gold/30 transition-all duration-500">
                <span className="text-white font-title text-xl font-bold tracking-tight">A1</span>
              </div>
            </Link>
            <h1 className="serif-heading text-4xl font-bold text-white mb-2 tracking-tight">Create account</h1>
            <p className="text-white/40 text-sm font-medium tracking-wide">
              Begin your path to inner wisdom.
            </p>
          </div>

          {/* Social paths */}
          <button
            onClick={() => handleSocialSignup("Google")}
            className="w-full h-[54px] flex items-center justify-center gap-3 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white font-semibold text-sm mb-8"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />
            <span className="relative px-4 bg-transparent text-[10px] uppercase font-black tracking-[0.3em] text-white/20">or sign up with email</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-white/30 uppercase tracking-widest pl-1">Full Name</label>
                <div className="relative group/field">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2"><UserIcon /></div>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white outline-none focus:border-soft-gold/30 focus:bg-white/10 transition-all duration-300 text-sm shadow-inner"
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-white/30 uppercase tracking-widest pl-1">Email address</label>
                <div className="relative group/field">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2"><MailIcon /></div>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 text-white outline-none focus:border-soft-gold/30 focus:bg-white/10 transition-all duration-300 text-sm shadow-inner"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-white/30 uppercase tracking-widest pl-1">Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2"><LockIcon /></div>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-12 py-3.5 text-white outline-none focus:border-soft-gold/30 focus:bg-white/10 transition-all duration-300 text-sm shadow-inner"
                  placeholder="Min. 6 characters"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white p-1">
                  <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line text-lg"}></i>
                </button>
              </div>
              {passwordStrength && (
                <div className="px-1 pt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <div key={lvl} className={`h-1 flex-1 rounded-full ${lvl <= passwordStrength.score ? passwordStrength.color : "bg-white/5"}`} />
                    ))}
                  </div>
                  <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest leading-none">{passwordStrength.label} Strength</p>
                </div>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-white/30 uppercase tracking-widest pl-1">Confirm Password</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2"><LockIcon /></div>
                <input
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-12 py-3.5 text-white outline-none focus:border-soft-gold/30 focus:bg-white/10 transition-all duration-300 text-sm shadow-inner"
                  placeholder="Re-enter password"
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white p-1">
                   <i className={showConfirm ? "ri-eye-off-line" : "ri-eye-line text-lg"}></i>
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 py-2 cursor-pointer group/terms" onClick={() => setAgreeTerms(!agreeTerms)}>
              <div className={`w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-all ${agreeTerms ? "bg-soft-gold border-soft-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]" : "bg-white/5 border-white/10 group-hover/terms:border-white/30"}`}>
                {agreeTerms && <i className="ri-check-line text-xs text-black font-bold"></i>}
              </div>
              <p className="text-xs text-white/40 leading-relaxed font-medium">
                I agree to the <Link href="/terms" className="text-white hover:text-soft-gold underline decoration-white/20">Terms of Service</Link> and <Link href="/privacy" className="text-white hover:text-soft-gold underline decoration-white/20">Privacy Policy</Link>.
              </p>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-300 text-xs text-center font-bold tracking-wide">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !agreeTerms}
              className="w-full h-[60px] bg-white text-black font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-soft-gold transition-all duration-500 active:scale-[0.98] shadow-2xl flex items-center justify-center"
            >
              {loading ? <i className="ri-loader-4-line animate-spin text-xl"></i> : "Create account"}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-xs font-medium tracking-wide">
              Already part of the lineage?{" "}
              <Link href="/auth/login" className="text-white hover:text-soft-gold transition-colors font-bold underline underline-offset-4 decoration-white/20">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-out infinite alternate;
        }
      `}</style>
    </div>
  );
}
