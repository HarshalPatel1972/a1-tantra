"use client";

export default function InstagramInvite() {
  return (
    <section className="py-2 md:py-3 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gentle Invite */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-deep-brown/80 leading-relaxed">
            Follow our teachings and reflections on Instagram
          </p>

          {/* Instagram Handle - Official Gradient */}
          <a
            href="https://instagram.com/a1ta.ntra"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background:
                "linear-gradient(45deg, #feda75 0%, #fa7e1e 25%, #d92e7f 50%, #9b36b7 75%, #515bd4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            className="inline-block text-3xl md:text-4xl font-bold hover:opacity-80 transition-opacity duration-300"
          >
            @a1ta.ntra
          </a>

          {/* Decorative elements - Removed circle, kept minimal divider */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="h-px w-12 bg-accent-red/30"></div>
            <div className="h-px w-12 bg-accent-red/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
