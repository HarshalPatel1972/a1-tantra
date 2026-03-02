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

const EyeIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const EyeOffIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
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

  if (score <= 1) return { score: 1, label: "Weak Qi", color: "bg-red-400" };
  if (score <= 2) return { score: 2, label: "Awakening", color: "bg-orange-400" };
  if (score <= 3) return { score: 3, label: "Aligned", color: "bg-yellow-400" };
  if (score <= 4) return { score: 4, label: "Resonant", color: "bg-green-400" };
  return { score: 5, label: "Fully Transcendent", color: "bg-emerald-500" };
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
      setError("Please accept the terms of our sacred community.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Key phrases do not resonate with each other.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Your key phrase must be at least 6 tokens long.");
      return;
    }

    setLoading(true);

    try {
      const success = await signup(formData.name, formData.email, formData.password);
      if (success) {
        router.push("/");
      } else {
        setError("This identity already exists in our lineage.");
      }
    } catch (err) {
      setError("The connection to the sanctuary was interrupted.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignup = (provider: string) => {
    alert(`${provider} sign-up coming soon! For now, please use email & password.`);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden bg-[#0a0a0c]">
      {/* ── Background: Atmospheric Experience ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/login-bg.png"
          alt=""
          fill
          className="object-cover opacity-60 scale-110" // Slightly different scale for signup
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
      </div>

      {/* ── Initiation Container ── */}
      <div className="relative z-10 w-full max-w-[500px]">
        {/* Branding Sphere */}
        <div className="mx-auto w-16 h-16 mb-8 relative animate-bounce-slow">
          <div className="absolute inset-0 bg-soft-gold/30 rounded-full blur-2xl animate-pulse" />
          <Link href="/" className="relative flex items-center justify-center w-full h-full bg-white/5 backdrop-blur-md rounded-full border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl group overflow-hidden">
            <span className="text-cream font-title text-xl font-bold tracking-tighter group-hover:scale-110 transition-transform duration-500">A1</span>
          </Link>
        </div>

        {/* The Initiation Glass Card */}
        <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.5)] overflow-hidden group">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="serif-heading text-4xl font-bold text-cream mb-2 tracking-tight">
              Initiation
            </h1>
            <p className="text-cream/50 font-nav text-[10px] uppercase tracking-[0.4em] font-semibold">
              Begin your sacred transit
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-cream/40 uppercase tracking-widest pl-1">Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-cream placeholder:text-white/10 outline-none focus:bg-white/10 focus:border-soft-gold/30 transition-all text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-cream/40 uppercase tracking-widest pl-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-cream placeholder:text-white/10 outline-none focus:bg-white/10 focus:border-soft-gold/30 transition-all text-sm"
                  placeholder="you@sanctuary.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-cream/40 uppercase tracking-widest pl-1">Primary Key Phrase</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-cream placeholder:text-white/10 outline-none focus:bg-white/10 focus:border-soft-gold/30 transition-all text-sm"
                  placeholder="Create your key phrase"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-white">
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
              {passwordStrength && (
                <div className="px-1 pt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <div key={lvl} className={`h-0.5 flex-1 rounded-full ${lvl <= passwordStrength.score ? passwordStrength.color : "bg-white/5"}`} />
                    ))}
                  </div>
                  <p className="text-[10px] text-cream/30 font-bold uppercase tracking-tighter italic">{passwordStrength.label}</p>
                </div>
              )}
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-bold text-cream/40 uppercase tracking-widest pl-1">Confirm Key Phrase</label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-cream placeholder:text-white/10 outline-none focus:bg-white/10 focus:border-soft-gold/30 transition-all text-sm"
                  placeholder="Repeat your inner key"
                />
                <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white">
                  {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 py-2 cursor-pointer group/terms" onClick={() => setAgreeTerms(!agreeTerms)}>
              <div className={`w-5 h-5 rounded-lg border flex-shrink-0 flex items-center justify-center transition-all ${agreeTerms ? "bg-accent-red border-accent-red" : "bg-white/5 border-white/10 group-hover/terms:border-white/30"}`}>
                {agreeTerms && <i className="ri-check-line text-xs text-cream font-bold"></i>}
              </div>
              <p className="text-[10px] text-cream/40 leading-relaxed font-bold uppercase tracking-wider">
                I accept the <Link href="/terms" className="text-soft-gold underline decoration-soft-gold/30">sacred codes</Link> and <Link href="/privacy" className="text-soft-gold underline decoration-soft-gold/30">whispered privacy</Link> policies of this sanctuary.
              </p>
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-300 text-[10px] text-center uppercase font-bold tracking-widest animate-shake">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !agreeTerms}
              className="w-full py-4 bg-cream text-deep-brown font-nav font-bold uppercase tracking-[0.2em] rounded-2xl relative overflow-hidden group disabled:opacity-30 transition-all active:scale-[0.98] shadow-2xl"
            >
              <span className="absolute inset-0 bg-soft-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <span className="relative z-10 text-xs">
                {loading ? "Igniting Spirit..." : "Begin Initiation"}
              </span>
            </button>
          </form>

          {/* Social paths */}
          <div className="mt-8">
            <div className="relative mb-6 text-center">
              <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />
              <span className="relative px-4 bg-[#0a0a0c]/40 backdrop-blur-xl text-[9px] uppercase font-bold tracking-[0.4em] text-cream/20">Fast Transit</span>
            </div>
            <button
              onClick={() => handleSocialSignup("Google")}
              className="w-full flex items-center justify-center gap-3 px-4 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-cream font-bold text-[10px] uppercase tracking-widest"
            >
              <GoogleIcon /> Continue with Google
            </button>
          </div>
        </div>

        {/* Outer Links */}
        <div className="mt-8 text-center animate-fade-in-up">
          <p className="text-cream/30 font-nav text-[10px] uppercase font-bold tracking-[0.2em]">
            Already part of the lineage?{" "}
            <Link href="/auth/login" className="text-soft-gold hover:text-cream transition-colors duration-300 underline underline-offset-4 decoration-soft-gold/30">
              Return to Entrance
            </Link>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(0); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .bg-radial-gradient {
          background-image: radial-gradient(circle at center, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to));
        }
      `}</style>
    </div>
  );
}
