"use client";

export default function InstagramInvite() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gentle Invite */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-deep-brown/80 leading-relaxed">
            Follow our teachings and reflections on Instagram
          </p>

          {/* Instagram Handle - Highlighted */}
          <a
            href="https://instagram.com/a1ta.ntra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-3xl md:text-4xl font-bold text-accent-red hover:text-soft-gold transition-colors duration-300"
          >
            @a1ta.ntra
          </a>

          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="h-px w-12 bg-accent-red/30"></div>
            <svg
              className="w-6 h-6 text-accent-red/40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            </svg>
            <div className="h-px w-12 bg-accent-red/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
