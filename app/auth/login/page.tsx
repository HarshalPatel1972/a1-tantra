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

const reviews = [
  { name: "Priya S.", location: "Mumbai", text: "Something shifted — I sleep better, think clearer, and my anxiety reduced.", rating: 5 },
  { name: "Amit P.", location: "Ahmedabad", text: "Energy work on another level. Practical, grounded, no fluff.", rating: 5 },
  { name: "Rohan M.", location: "Delhi", text: "Chakra balancing was intense — I actually felt things move.", rating: 4 },
  { name: "Sanjana I.", location: "Chennai", text: "I felt a calm I hadn't experienced in years. Deeply grateful.", rating: 5 },
  { name: "Vikram S.", location: "Jaipur", text: "Complex concepts explained simply. Practical use for beginners.", rating: 4 },
  { name: "Meera N.", location: "Kochi", text: "Guided meditation was the most present I've felt in months.", rating: 5 },
];

const ReviewCard = ({ review }: { review: any }) => (
  <div className="bg-surface-card/60 backdrop-blur-md border border-deep-brown/10 dark:border-white/10 rounded-xl p-4 mb-3 shadow-lg transition-colors duration-400">
    <div className="flex gap-1 mb-2">
      {[...Array(review.rating)].map((_, i) => (
        <i key={i} className="ri-star-fill text-soft-gold text-[10px]"></i>
      ))}
    </div>
    <p className="text-deep-brown/80 dark:text-white/70 text-[13px] font-body italic mb-3 leading-snug">&quot;{review.text}&quot;</p>
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-soft-gold/20 flex items-center justify-center font-title text-[10px] text-soft-gold font-bold">{review.name.charAt(0)}</div>
      <div>
        <h4 className="text-deep-brown dark:text-white text-[10px] font-bold uppercase tracking-widest leading-none">{review.name}</h4>
      </div>
    </div>
  </div>
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
      if (success) router.push("/");
      else setError("Invalid email or password.");
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row overflow-hidden fixed inset-0 bg-cream transition-colors duration-400">
      {/* ── Left Side: Login Form (45% Space) ── */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-6 md:p-10 relative z-10 bg-cream border-r border-deep-brown/5 h-full overflow-hidden transition-colors duration-400">
        
        {/* Official Brand Logo Link */}
        <Link href="/" className="absolute top-8 left-8 flex items-center gap-3 group transition-transform duration-500 hover:scale-105 active:scale-95">
          <Image 
            src="/images/logo-main.png" 
            alt="A1 Tantra Logo" 
            width={40} 
            height={40} 
            className="w-8 h-8 md:w-10 md:h-10 object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
          />
          <span 
            className="text-brand-blue text-xl md:text-2xl font-bold tracking-tight select-none"
            style={{ fontFamily: '"Vegawanty", sans-serif', letterSpacing: "0.02em" }}
          >
            A1 TANTRA
          </span>
        </Link>

        <div className="w-full max-w-[360px] flex flex-col justify-center h-full">
          <div className="mb-8">
            <h1 className="serif-heading text-3xl font-bold text-deep-brown mb-2 leading-tight">Sign in</h1>
            <p className="text-deep-brown/40 text-[13px] font-medium tracking-wide">Enter details to access your account.</p>
          </div>

          <button onClick={() => alert("Google login coming soon!")} className="w-full h-[50px] flex items-center justify-center gap-3 px-6 rounded-xl border border-deep-brown/10 bg-surface-card/50 hover:bg-surface-card transition-all duration-300 text-deep-brown font-semibold text-xs mb-6 shadow-sm">
            <GoogleIcon /> Continue with Google
          </button>

          <div className="relative mb-6 text-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-deep-brown/10" />
            <span className="relative px-3 bg-cream text-[9px] uppercase font-black tracking-[0.3em] text-deep-brown/30 whitespace-nowrap transition-colors duration-400">or sign in with email</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-[9px] font-bold text-deep-brown/30 uppercase tracking-[0.2em] pl-1">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-surface-input/50 border border-deep-brown/10 rounded-xl px-4 py-3.5 text-deep-brown outline-none focus:border-soft-gold/30 focus:bg-surface-input transition-all text-sm shadow-inner" placeholder="you@email.com" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1">
                 <label className="text-[9px] font-bold text-deep-brown/30 uppercase tracking-[0.2em]">Password</label>
                 <button type="button" className="text-[9px] text-soft-gold hover:text-accent-red font-bold uppercase tracking-widest transition-colors">Forgot?</button>
              </div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-surface-input/50 border border-deep-brown/10 rounded-xl px-4 py-3.5 text-deep-brown outline-none focus:border-soft-gold/30 focus:bg-surface-input transition-all text-sm shadow-inner" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-deep-brown/20 hover:text-deep-brown transition-colors p-2 flex items-center justify-center">
                   <i className={showPassword ? "ri-eye-off-line text-base !text-deep-brown/40" : "ri-eye-line text-base !text-deep-brown/40"}></i>
                </button>
              </div>
            </div>

            {error && <div className="py-3 bg-accent-red/10 border border-accent-red/20 rounded-xl text-accent-red text-[11px] text-center font-bold tracking-wide">{error}</div>}

            <button type="submit" disabled={loading} className="w-full h-[54px] bg-deep-brown text-cream font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-accent-red transition-all duration-500 shadow-xl shadow-deep-brown/20 active:scale-[0.98] flex items-center justify-center text-[11px] mt-2">
              {loading ? <i className="ri-loader-4-line animate-spin text-lg !text-cream"></i> : "Sign in"}
            </button>
          </form>

          <p className="mt-8 text-center text-deep-brown/40 text-[11px] font-medium tracking-wide">
            Don&apos;t have an account? <Link href="/auth/signup" className="text-deep-brown hover:text-accent-red transition-colors font-bold underline underline-offset-4 decoration-deep-brown/20 ml-1 whitespace-nowrap">Create account</Link>
          </p>
        </div>
      </div>

      {/* ── Right Side: Vertical Review Carousel (55% Space) ── */}
      <div className="hidden lg:flex flex-[55] relative bg-deep-brown overflow-hidden h-full transition-colors duration-400">
        <Image src="/images/login-bg.png" alt="" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-deep-brown/80 to-deep-brown dark:via-[#1C1614]/80 dark:to-[#1C1614] transition-colors duration-400" />

        <div className="relative z-20 flex w-full h-full px-8 items-center justify-center overflow-hidden">
           <div className="w-full max-w-[340px] flex flex-col gap-4 animate-vertical-marquee py-8">
              {[...reviews, ...reviews].map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
           </div>
        </div>

        {/* Ambient Overlays for Carousel Fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-deep-brown dark:from-[#1C1614] to-transparent z-30 transition-colors duration-400" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-deep-brown dark:from-[#1C1614] to-transparent z-30 transition-colors duration-400" />
      </div>

    </div>
  );
}
