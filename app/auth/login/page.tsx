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

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#0a0a0c] selection:bg-soft-gold/30">
      {/* ── High-End Background ── */}
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

      {/* ── Login Container ── */}
      <div className="relative z-10 w-full max-w-[480px] perspective-1000">
        <div className="bg-white/5 backdrop-blur-[40px] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group">
          
          {/* Subtle Ambient Light Edge */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Header */}
          <div className="text-center mb-10">
            <Link href="/" className="inline-block mb-8">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl hover:border-soft-gold/30 transition-all duration-500 group/logo">
                <span className="text-white font-title text-2xl font-bold tracking-tight">A1</span>
              </div>
            </Link>
            <h1 className="serif-heading text-4xl font-bold text-white mb-3">Sign in</h1>
            <p className="text-white/40 text-sm font-medium tracking-wide">
              Welcome back to your sacred space.
            </p>
          </div>

          {/* Social Sign In */}
          <button
            onClick={() => alert("Google login coming soon!")}
            className="w-full h-[56px] flex items-center justify-center gap-3 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white font-semibold text-sm mb-8"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />
            <span className="relative px-4 bg-transparent text-[10px] uppercase font-black tracking-[0.3em] text-white/20">or sign in with email</span>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-300 text-xs text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-bold text-white/30 uppercase tracking-widest pl-1">Email address</label>
              <div className="relative group/field">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                   <MailIcon />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white outline-none focus:border-soft-gold/30 focus:bg-white/10 transition-all duration-300 text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1">
                <label htmlFor="password" className="text-xs font-bold text-white/30 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[10px] text-soft-gold hover:text-white font-bold uppercase tracking-wider transition-colors">Forgot?</button>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                   <LockIcon />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-12 py-4 text-white outline-none focus:border-soft-gold/30 focus:bg-white/10 transition-all duration-300 text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors p-1"
                >
                  <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line text-lg"}></i>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-1">
               <button
                type="button"
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-300 ${rememberMe ? "bg-soft-gold border-soft-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]" : "bg-white/5 border-white/10"}`}
              >
                {rememberMe && <i className="ri-check-line text-xs text-black font-bold"></i>}
              </button>
              <span className="text-xs text-white/40 font-medium select-none cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>Remember me</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-[60px] bg-white text-black font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-soft-gold transition-all duration-500 shadow-xl shadow-black/20 active:scale-[0.98] focus:ring-2 focus:ring-soft-gold/50 flex items-center justify-center"
            >
              {loading ? <i className="ri-loader-4-line animate-spin text-xl"></i> : "Sign in"}
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-10 text-center">
            <p className="text-white/40 text-xs font-medium tracking-wide">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-white hover:text-soft-gold transition-colors font-bold underline underline-offset-4 decoration-white/20">
                Create one free
              </Link>
            </p>
          </div>
        </div>
        
        {/* Secondary Links */}
        <div className="mt-8 flex justify-center gap-8 px-4 opacity-40 hover:opacity-100 transition-opacity">
          <Link href="/privacy" className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Privacy</Link>
          <Link href="/terms" className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Terms</Link>
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
