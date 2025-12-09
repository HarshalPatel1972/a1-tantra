"use client";

export default function AnimatedGradientBg() {
  return (
    <>
      {/* Animated Gradient Background - Brilliant Electric Mystique */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Primary base gradient: Deep purple to midnight blue with ethereal tones */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0f0a2e] via-[#1a1147] to-[#0d0621] animate-gradient-shift"></div>

        {/* Electric purple orb - top left corner, pulsing energy */}
        <div className="absolute -top-1/3 -left-1/4 w-96 h-96 bg-linear-to-r from-[#7c3aed]/40 via-[#9f7aea]/20 to-transparent rounded-full blur-3xl animate-blob"></div>

        {/* Cyan-teal flowing energy - top right, creating luminous glow */}
        <div className="absolute -top-1/4 right-0 w-[600px] h-[600px] bg-linear-to-l from-[#06b6d4]/35 via-[#0891b2]/15 to-transparent rounded-full blur-3xl animate-blob-slow"></div>

        {/* Deep magenta accent - bottom left, creating mystical depth */}
        <div className="absolute bottom-0 -left-1/3 w-[700px] h-[700px] bg-linear-to-tr from-[#d946ef]/30 via-[#ec4899]/10 to-transparent rounded-full blur-3xl animate-blob-reverse"></div>

        {/* Golden essence accent - middle right, adding warmth and balance */}
        <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-linear-to-l from-[#fbbf24]/20 via-[#f59e0b]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>

        {/* Ambient light leak effect - creates depth and mystique */}
        <div className="absolute inset-0 bg-radial-gradient opacity-40" style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)'
        }}></div>

        {/* Ambient light leak effect - right side */}
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 60%)'
        }}></div>
      </div>
    </>
  );
}
