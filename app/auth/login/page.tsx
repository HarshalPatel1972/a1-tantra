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
  { name: "Priya S.", location: "Mumbai", text: "After three sessions, something shifted — I sleep better, think clearer, and my anxiety reduced.", rating: 5 },
  { name: "Amit P.", location: "Ahmedabad", text: "The energy work here was on another level. Practical, grounded, no fluff. Highly recommended.", rating: 5 },
  { name: "Rohan M.", location: "Delhi", text: "The chakra balancing was intense — I actually felt things move. Still processing it weeks later.", rating: 4 },
  { name: "Sanjana I.", location: "Chennai", text: "I felt a calm I hadn't experienced in years. My husband noticed the difference before I did.", rating: 5 },
  { name: "Vikram S.", location: "Jaipur", text: "Complex concepts explained simply. Practical and immediate use for beginners.", rating: 4 },
  { name: "Meera N.", location: "Kochi", text: "The guided meditation was the most present I've felt in months. Signed up for the full journey.", rating: 5 },
];

const ReviewCard = ({ review }: { review: any }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-4 shadow-xl">
    <div className="flex gap-1 mb-3">
      {[...Array(review.rating)].map((_, i) => (
        <i key={i} className="ri-star-fill text-soft-gold text-xs"></i>
      ))}
    </div>
    <p className="text-white/70 text-sm font-body italic mb-4 leading-relaxed">&quot;{review.text}&quot;</p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-soft-gold/20 flex items-center justify-center font-title text-xs text-soft-gold font-bold">{review.name.charAt(0)}</div>
      <div>
        <h4 className="text-white text-xs font-bold uppercase tracking-widest">{review.name}</h4>
        <p className="text-white/30 text-[9px] uppercase tracking-widest leading-none mt-1">{review.location}</p>
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
    <div className="min-h-screen bg-[#070708] flex flex-col lg:flex-row overflow-hidden">
      {/* ── Left Side: Login Form (Static & Performant) ── */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex items-center justify-center p-8 md:p-12 relative z-10 bg-[#070708] border-r border-white/5">
        <div className="w-full max-w-[400px]">
          <div className="mb-12">
            <Link href="/" className="inline-block mb-8 group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-soft-gold/40 transition-colors duration-500">
                <span className="text-white font-title text-xl font-bold">A1</span>
              </div>
            </Link>
            <h1 className="serif-heading text-4xl font-bold text-white mb-3">Sign in</h1>
            <p className="text-white/40 text-sm font-medium tracking-wide">Enter your details to access your account.</p>
          </div>

          <button onClick={() => alert("Google login coming soon!")} className="w-full h-[56px] flex items-center justify-center gap-3 px-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white font-semibold text-sm mb-8">
            <GoogleIcon /> Continue with Google
          </button>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
            <span className="relative px-4 bg-[#070708] text-[10px] uppercase font-black tracking-[0.3em] text-white/20 whitespace-nowrap">or sign in with email</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] pl-1">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-soft-gold/30 focus:bg-white/5 transition-all text-sm" placeholder="you@email.com" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                 <label className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Password</label>
                 <button type="button" className="text-[10px] text-soft-gold hover:text-white font-bold uppercase tracking-widest transition-colors">Forgot?</button>
              </div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-soft-gold/30 focus:bg-white/5 transition-all text-sm" placeholder="••••••••" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors p-2">
                   <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line text-lg"}></i>
                </button>
              </div>
            </div>

            {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-xs text-center font-bold tracking-wide">{error}</div>}

            <button type="submit" disabled={loading} className="w-full h-[60px] bg-white text-black font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-soft-gold transition-all duration-500 shadow-xl shadow-black/20 active:scale-[0.98] flex items-center justify-center text-xs">
              {loading ? <i className="ri-loader-4-line animate-spin text-xl"></i> : "Sign in"}
            </button>
          </form>

          <p className="mt-10 text-center text-white/40 text-[11px] font-medium tracking-wide">
            Don&apos;t have an account? <Link href="/auth/signup" className="text-white hover:text-soft-gold transition-colors font-bold underline underline-offset-4 decoration-white/20 ml-1">Create free account</Link>
          </p>
        </div>
      </div>

      {/* ── Right Side: Vertical Review Carousel (Dynamic) ── */}
      <div className="hidden lg:flex flex-1 relative bg-deep-brown overflow-hidden">
        {/* Background Image Overlay */}
        <Image src="/images/login-bg.png" alt="" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-deep-brown/80 to-deep-brown" />

        <div className="relative z-20 flex w-full h-full p-12 items-center justify-center overflow-hidden">
           <div className="w-full max-w-[440px] flex flex-col gap-6 animate-vertical-marquee py-12">
              {[...reviews, ...reviews, ...reviews].map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
           </div>
        </div>

        {/* Ambient Overlays for Carousel Fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep-brown to-transparent z-30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-brown to-transparent z-30" />
      </div>

      <style jsx global>{`
        @keyframes vertical-marquee {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 40s linear infinite;
        }
        .animate-vertical-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
