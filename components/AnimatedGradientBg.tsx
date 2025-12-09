"use client";

export default function AnimatedGradientBg() {
  return (
    <>
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base gradient that animates smoothly */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep-brown via-[#2a1f1a] to-[#1a0f0a] animate-gradient-shift"></div>

        {/* Flowing gradient orbs with animation */}
        <div className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-accent-red/30 via-transparent to-transparent rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/2 right-0 w-full h-full bg-gradient-to-l from-soft-gold/20 via-transparent to-transparent rounded-full blur-3xl animate-blob-slow"></div>
        <div className="absolute top-1/4 right-0 w-full h-full bg-gradient-to-l from-accent-red/20 via-transparent to-transparent rounded-full blur-3xl animate-blob-reverse"></div>

        {/* Subtle animated noise texture overlay */}
        <div className="absolute inset-0 opacity-5 animate-pulse" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" opacity="0.1"/%3E%3C/svg%3E")',
        }}></div>
      </div>
    </>
  );
}
