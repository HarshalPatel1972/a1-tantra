"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

// Note: Metadata cannot be in a "use client" file. 
// I will move it to a separate layout or use a separate server component if needed, 
// but for simplicity, I'll keep the logic here and remove the export of metadata.
// To fix SEO, I'll recommend the user to move metadata to a parent layout or a wrapper.

const AboutSection = ({ 
  children, 
  image, 
  reverse = false, 
  title, 
  subtitle 
}: { 
  children: React.ReactNode; 
  image: string; 
  reverse?: boolean; 
  title: string; 
  subtitle?: string 
}) => (
  <section className={`py-20 md:py-32 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 max-w-7xl mx-auto px-6`}>
    {/* Content Side */}
    <div className="flex-1 space-y-8">
      <div className="space-y-4">
        {subtitle && (
          <span className="text-accent-red font-nav font-bold uppercase tracking-[0.3em] text-xs">
            {subtitle}
          </span>
        )}
        <h2 className="serif-heading text-4xl md:text-6xl font-bold text-deep-brown leading-tight">
          {title}
        </h2>
      </div>
      <div className="prose prose-lg text-deep-brown/70 font-body leading-relaxed max-w-none">
        {children}
      </div>
    </div>

    {/* Image Side */}
    <div className="flex-1 relative group">
      <div className="absolute -inset-4 bg-soft-gold/5 rounded-2xl blur-2xl group-hover:bg-soft-gold/10 transition-all duration-700"></div>
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-deep-brown/5">
        <Image 
          src={image} 
          alt={title} 
          width={800} 
          height={600} 
          className="object-cover object-center w-full h-[400px] md:h-[500px] transform group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
      </div>
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <div className="bg-cream transition-colors duration-400">
      {/* ── Section 1: Hero - The Vision ── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/about/hero.png" 
          alt="A1 Tantra Sanctuary" 
          fill 
          className="object-cover object-center opacity-90 brightness-75 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-brown/60 via-transparent to-cream z-10 transition-colors duration-400" />
        
        <div className="relative z-20 text-center space-y-6 max-w-4xl px-6">
          <h1 
            className="text-cream text-5xl md:text-8xl font-bold tracking-tight animate-fade-in"
            style={{ fontFamily: '"Vegawanty", sans-serif' }}
          >
            A1 TANTRA
          </h1>
          <div className="w-24 h-px bg-soft-gold mx-auto opacity-60"></div>
          <p className="text-cream/90 text-lg md:text-2xl font-light italic serif-heading tracking-wide max-w-2xl mx-auto">
            "Illuminating the path to ancient wisdom with clarity and respect."
          </p>
        </div>
      </section>

      {/* ── Section 2: Mission & Origin ── */}
      <AboutSection 
        title="Our Story" 
        subtitle="Born from truth"
        image="/images/about/mission.png"
      >
        <p>
          Born from a search for truth, we created A1 Tantra to illuminate ancient Tantra with clarity and respect. In a world of confusion and appropriation, we believed there needed to be a space where Tantric wisdom could be taught authentically, thoughtfully, and accessibly.
        </p>
        <p>
          Every teaching here has been reviewed by practitioners and scholars of various Tantra lineages. Our mission is to make the sacred path accessible without diluting its depth.
        </p>
      </AboutSection>

      {/* ── Section 3: The Advisory Panel ── */}
      <AboutSection 
        title="The Advisory Panel" 
        subtitle="The Oracle Council"
        image="/images/about/advisory.png"
        reverse
      >
        <p>
          At the heart of our authenticity is our Advisory Panel—a council of accomplished Tantra practitioners, scholars, and lineage holders who review all teachings on A1 Tantra.
        </p>
        <p>
          This diverse group ensures that our content honors traditional knowledge while remaining accessible to modern seekers. Each member brings their own expertise from Shakta Tantra to Tibetan Buddhism.
        </p>
        <Link 
          href="/advisory" 
          className="inline-flex items-center gap-2 mt-4 px-8 py-3 bg-deep-brown text-cream font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-accent-red transition-all duration-500 shadow-xl"
        >
          Meet the Panel <i className="ri-arrow-right-line"></i>
        </Link>
      </AboutSection>

      {/* ── Section 4: Our Values ── */}
      <section className="py-24 bg-deep-brown text-cream relative overflow-hidden transition-colors duration-400">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-soft-gold/20 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="serif-heading text-4xl md:text-5xl font-bold mb-4">Core Principles</h2>
            <p className="text-cream/40 uppercase tracking-[0.4em] text-[10px] font-bold">The Pillars of A1 Tantra</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Authenticity", desc: "Honoring ancient lineages without dilution." },
              { title: "Clarity", desc: "Complex science explained with modern rigor." },
              { title: "Compassion", desc: "Meeting seekers wherever they happen to be." },
              { title: "Safety", desc: "A guarded, sacred space for transformation." }
            ].map((value, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-soft-gold/30 transition-all duration-700">
                <span className="text-soft-gold text-2xl font-bold opacity-30 group-hover:opacity-100 transition-opacity duration-700">0{i+1}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{value.title}</h3>
                <p className="text-cream/50 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: The Call ── */}
      <section className="py-32 text-center bg-cream transition-colors duration-400">
        <div className="max-w-2xl mx-auto px-6 space-y-10 scale-100 md:scale-110">
          <h2 className="serif-heading text-4xl md:text-6xl font-bold text-deep-brown leading-tight">
            Begin the pathway to <span className="text-accent-red italic">illumination</span>.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              href="/start-journey" 
              className="w-full md:w-auto px-10 py-4 bg-accent-red text-cream font-bold uppercase tracking-widest text-xs hover:bg-deep-brown transition-all duration-500 shadow-[0_10px_40px_rgba(226,61,40,0.2)]"
            >
              Start the Journey
            </Link>
            <Link 
              href="/contact" 
              className="w-full md:w-auto px-10 py-4 border border-deep-brown text-deep-brown font-bold uppercase tracking-widest text-xs hover:bg-deep-brown hover:text-cream transition-all duration-500"
            >
              Contact Sanctuary
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
