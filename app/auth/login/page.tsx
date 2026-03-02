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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    alert(`${provider} login coming soon! For now, please use email & password.`);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden bg-[#0a0a0c]">
      {/* ── Background: Atmospheric Experience ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/images/login-bg.png"
          alt=""
          fill
          className="object-cover opacity-60 scale-105"
          priority
        />
        {/* Subtle glowing ambient layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
        
        {/* Floating dust/particle effect via CSS */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] pointer-events-none" />
      </div>

      {/* ── Main Entrance Container ── */}
      <div className="relative z-10 w-full max-w-[460px]">
        {/* Floating Branding Sphere */}
        <div className="mx-auto w-20 h-20 mb-8 relative translate-y-[-10px] animate-bounce-slow">
          <div className="absolute inset-0 bg-soft-gold/30 rounded-full blur-2xl animate-pulse" />
          <Link href="/" className="relative flex items-center justify-center w-full h-full bg-white/5 backdrop-blur-md rounded-full border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl group overflow-hidden">
            <span className="text-cream font-title text-2xl font-bold tracking-tighter group-hover:scale-110 transition-transform duration-500">A1</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>

        {/* The Sacred Glass Card */}
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-12 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.5)] overflow-hidden group">
          {/* Edge reflection animation */}
          <div className="absolute -top-[500px] -left-[100px] w-40 h-[1000px] bg-white/5 rotate-45 pointer-events-none translate-x-[-100%] group-hover:translate-x-[600px] transition-transform duration-[2000ms] ease-in-out" />

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="serif-heading text-4xl md:text-5xl font-bold text-cream mb-3 tracking-tight">
              Entrance
            </h1>
            <p className="text-cream/50 font-nav text-xs uppercase tracking-[0.3em] font-semibold">
              To Your Sacred Sanctuary
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-bold text-cream/40 uppercase tracking-widest pl-1">
                Email Identity
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-cream placeholder:text-white/20 placeholder:font-light outline-none focus:bg-white/10 focus:border-soft-gold/30 transition-all duration-300 font-body text-sm shadow-inner"
                placeholder="you@sanctuary.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between pl-1">
                <label htmlFor="password" className="text-xs font-bold text-cream/40 uppercase tracking-widest">
                  Key Phrase
                </label>
                <button
                  type="button"
                  className="text-[10px] text-soft-gold/60 hover:text-soft-gold font-bold uppercase tracking-wider transition-colors"
                  onClick={() => alert("Spirit recovery requested...")}
                >
                  Forgot Key?
                </button>
              </div>
              <div className="relative group/pass">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-cream placeholder:text-white/20 placeholder:font-light outline-none focus:bg-white/10 focus:border-soft-gold/30 transition-all duration-300 font-body text-sm shadow-inner"
                  placeholder="Your sacred key..."
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-cream transition-colors p-2"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 py-1">
              <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all duration-500 ${
                  rememberMe ? "bg-accent-red border-accent-red shadow-[0_0_15px_rgba(231,76,60,0.4)]" : "bg-white/5 border-white/10"
                }`}
              >
                {rememberMe && <i className="ri-check-line text-cream font-bold"></i>}
              </button>
              <span className="text-xs text-cream/40 font-medium select-none cursor-pointer hover:text-cream/60 transition-colors" onClick={() => setRememberMe(!rememberMe)}>
                Remain present for 30 cycles
              </span>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-300 text-xs text-center animate-shake leading-relaxed">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-cream text-deep-brown font-nav font-bold uppercase tracking-[0.2em] rounded-2xl relative overflow-hidden group disabled:opacity-50 transition-all duration-500 active:scale-95 shadow-[0_15px_30px_-5px_rgba(255,255,255,0.1)] mt-4"
            >
              <span className="absolute inset-0 bg-soft-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" />
              <span className="relative z-10 text-xs md:text-sm">
                {loading ? "Aligning Energy..." : "Enter Sanctuary"}
              </span>
            </button>
          </form>

          {/* Quick Connect / Social */}
          <div className="mt-10">
            <div className="relative mb-8 text-center">
              <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />
              <span className="relative px-4 bg-[#0a0a0c]/40 backdrop-blur-xl text-[10px] uppercase font-bold tracking-[0.3em] text-cream/30">
                Connection Paths
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleSocialLogin("Google")}
                className="flex items-center justify-center gap-3 px-4 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-cream font-bold text-[10px] uppercase tracking-widest"
              >
                <div className="w-5 h-5 flex items-center justify-center"><GoogleIcon /></div>
                Google
              </button>
              <button
                onClick={() => handleSocialLogin("Mirror")}
                className="flex items-center justify-center gap-3 px-4 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-cream font-bold text-[10px] uppercase tracking-widest"
              >
                <i className="ri-shield-user-line text-lg text-cream/50"></i>
                Guest
              </button>
            </div>
          </div>
        </div>

        {/* Outer Links */}
        <div className="mt-8 text-center space-y-4 animate-fade-in-up">
          <p className="text-cream/30 font-nav text-xs uppercase font-bold tracking-[0.15em]">
            New Seeker?{" "}
            <Link href="/auth/signup" className="text-soft-gold hover:text-cream transition-colors duration-300 underline underline-offset-4 decoration-soft-gold/30">
              Join the Lineage
            </Link>
          </p>
          <div className="pt-4 flex items-center justify-center gap-6">
            <Link href="/privacy" className="text-[10px] font-bold text-cream/20 uppercase tracking-[0.2em] hover:text-cream transition-colors">Privacy</Link>
            <div className="w-1 h-1 rounded-full bg-cream/10" />
            <Link href="/terms" className="text-[10px] font-bold text-cream/20 uppercase tracking-[0.2em] hover:text-cream transition-colors">Truths</Link>
          </div>
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
