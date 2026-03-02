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
  <svg className="w-4 h-4 text-deep-brown/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4 text-deep-brown/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-4 h-4 text-deep-brown/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
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
      <h4 className="text-deep-brown dark:text-white text-[10px] font-bold uppercase tracking-widest">{review.name}</h4>
    </div>
  </div>
);

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signup } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!agreeTerms) return setError("Please agree to terms.");
    if (formData.password !== formData.confirmPassword) return setError("Passwords do not match.");
    setLoading(true);
    try {
      const success = await signup(formData.name, formData.email, formData.password);
      if (success) router.push("/");
      else setError("Account already exists.");
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col lg:flex-row overflow-hidden fixed inset-0 bg-cream transition-colors duration-400">
      {/* ── Left Side: Signup Form (45% Space) ── */}
      <div className="w-full lg:w-[45%] flex items-center justify-center p-6 md:p-10 relative z-10 bg-cream border-r border-deep-brown/5 h-full overflow-hidden transition-colors duration-400">
        <div className="w-full max-w-[420px] flex flex-col justify-center h-full">
          <div className="mb-8">
            <h1 className="serif-heading text-3xl font-bold text-deep-brown mb-2 leading-tight">Create account</h1>
            <p className="text-deep-brown/40 text-[13px] font-medium tracking-wide">Begin your path to inner wisdom.</p>
          </div>

          <button onClick={() => alert("Google login coming soon!")} className="w-full h-[50px] flex items-center justify-center gap-3 px-6 rounded-xl border border-deep-brown/10 bg-surface-card/50 hover:bg-surface-card transition-all duration-300 text-deep-brown font-semibold text-xs mb-6 shadow-sm">
            <GoogleIcon /> Continue with Google
          </button>

          <div className="relative mb-6 text-center">
            <div className="absolute inset-x-0 top-1/2 h-px bg-deep-brown/10" />
            <span className="relative px-3 bg-cream text-[9px] uppercase font-black tracking-[0.3em] text-deep-brown/30 whitespace-nowrap transition-colors duration-400">or sign up with email</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[9px] font-bold text-deep-brown/30 uppercase tracking-[0.2em] pl-1 font-body">Full Name</label>
                <div className="relative group/field">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2"><UserIcon /></div>
                  <input name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full bg-surface-input/50 border border-deep-brown/10 rounded-xl pl-10 pr-4 py-3 text-deep-brown outline-none focus:border-soft-gold/30 focus:bg-surface-input transition-all text-xs shadow-inner" placeholder="Full name" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-[9px] font-bold text-deep-brown/30 uppercase tracking-[0.2em] pl-1 font-body">Email</label>
                <div className="relative group/field">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2"><MailIcon /></div>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full bg-surface-input/50 border border-deep-brown/10 rounded-xl pl-10 pr-4 py-3 text-deep-brown outline-none focus:border-soft-gold/30 focus:bg-surface-input transition-all text-xs shadow-inner" placeholder="you@email.com" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-1">
                <label className="block text-[9px] font-bold text-deep-brown/30 uppercase tracking-[0.2em] pl-1 font-body">Password</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2"><LockIcon /></div>
                  <input name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} required className="w-full bg-surface-input/50 border border-deep-brown/10 rounded-xl pl-10 pr-10 py-3 text-deep-brown outline-none focus:border-soft-gold/30 focus:bg-surface-input transition-all text-xs shadow-inner" placeholder="••••••••" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-deep-brown/20 hover:text-deep-brown transition-colors p-1">
                    <i className={showPassword ? "ri-eye-off-line text-sm !text-deep-brown/40" : "ri-eye-line text-sm !text-deep-brown/40"}></i>
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <label className="block text-[9px] font-bold text-deep-brown/30 uppercase tracking-[0.2em] pl-1 font-body">Confirm</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2"><LockIcon /></div>
                  <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required className="w-full bg-surface-input/50 border border-deep-brown/10 rounded-xl px-4 py-3 text-deep-brown outline-none focus:border-soft-gold/30 focus:bg-surface-input transition-all text-xs shadow-inner" placeholder="Re-enter" />
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 py-2 cursor-pointer group/terms" onClick={() => setAgreeTerms(!agreeTerms)}>
              <div className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-all ${agreeTerms ? "bg-soft-gold border-soft-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]" : "bg-white/5 border-white/10 group-hover/terms:border-white/30"}`}>
                {agreeTerms && <i className="ri-check-line text-[10px] text-black font-bold"></i>}
              </div>
              <p className="text-[10px] text-deep-brown/40 leading-relaxed font-medium transition-colors duration-400">I agree to the <Link href="/terms" className="text-deep-brown hover:text-accent-red underline decoration-deep-brown/20 transition-colors">Terms</Link> and <Link href="/privacy" className="text-deep-brown hover:text-accent-red underline decoration-deep-brown/20 transition-colors">Privacy</Link>.</p>
            </div>

            {error && <div className="py-3 bg-accent-red/10 border border-accent-red/20 rounded-xl text-accent-red text-[10px] text-center font-bold tracking-wide uppercase">{error}</div>}

            <button type="submit" disabled={loading || !agreeTerms} className="w-full h-[54px] bg-deep-brown text-cream font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-accent-red transition-all duration-500 active:scale-[0.98] shadow-2xl flex items-center justify-center text-[11px] mt-2">
              {loading ? <i className="ri-loader-4-line animate-spin text-lg !text-cream"></i> : "Create account"}
            </button>
          </form>

          <p className="mt-8 text-center text-deep-brown/40 text-[11px] font-medium tracking-wide transition-colors duration-400">
            Already have an account? <Link href="/auth/login" className="text-deep-brown hover:text-accent-red transition-colors font-bold underline underline-offset-4 decoration-deep-brown/20 ml-1 whitespace-nowrap">Sign in</Link>
          </p>
        </div>
      </div>

      {/* ── Right Side: Vertical Review Carousel (55% Space) ── */}
      <div className="hidden lg:flex flex-[55] relative bg-deep-brown overflow-hidden h-full transition-colors duration-400">
        <Image src="/images/login-bg.png" alt="" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-deep-brown/80 to-deep-brown dark:via-[#1C1614]/80 dark:to-[#1C1614] transition-colors duration-400" />
        <div className="relative z-20 flex w-full h-full p-8 md:p-12 items-center justify-center overflow-hidden">
           <div className="w-full max-w-[340px] flex flex-col gap-4 animate-vertical-marquee py-12">
              {[...reviews, ...reviews].map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
           </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-deep-brown dark:from-[#1C1614] to-transparent z-30 transition-colors duration-400" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-brown dark:from-[#1C1614] to-transparent z-30 transition-colors duration-400" />
      </div>

      <style jsx global>{`
        body { 
          overflow: hidden; 
          margin: 0;
          height: 100vh;
        }
        @keyframes vertical-marquee {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 45s linear infinite;
        }
        .animate-vertical-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
