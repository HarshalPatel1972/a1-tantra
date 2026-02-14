"use client";

export default function InstagramGrid() {
  // const posts = [
  //   { id: 1, emoji: "", alt: "Sacred Om symbol" },
  //   { id: 2, emoji: "", alt: "Meditation candles" },
  //   { id: 3, emoji: "", alt: "Mala beads" },
  //   { id: 4, emoji: "", alt: "Spiritual energy" },
  //   { id: 5, emoji: "", alt: "Lotus flower" },
  //   { id: 6, emoji: "", alt: "Meditation pose" },
  //   { id: 7, emoji: "", alt: "Heart energy" },
  //   { id: 8, emoji: "", alt: "Moon energy" },
  // ];

  return (
    <section className="py-8 md:py-12 bg-cream border-t border-deep-brown/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Instagram Section Commented Out */}
        {/* <div className="text-center mb-16">
          <a
            href="https://instagram.com/a1tantraofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <h2 className="serif-heading text-3xl font-bold text-deep-brown hover:text-accent-red transition">
              @A1TantraOfficial
            </h2>
          </a>
          <p className="text-deep-brown/70 mt-2">
            Follow for daily wisdom & sacred practices
          </p>
        </div> */}

        {/* Instagram Grid - Commented Out */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/a1tantraofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square bg-gradient-to-br from-accent-red/20 to-soft-gold/20 rounded-lg flex items-center justify-center text-5xl hover:scale-105 transition duration-300 group"
            >
              <span className="group-hover:text-6xl transition duration-300">
                {post.emoji}
              </span>
            </a>
          ))}
        </div> */}

        {/* CTA - Commented Out */}
        {/* <div className="text-center mt-12">
          <a
            href="https://instagram.com/a1tantraofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-accent-red text-cream font-semibold rounded-sm hover:bg-deep-brown transition"
          >
            FOLLOW ON INSTAGRAM
          </a>
        </div> */}
      </div>
    </section>
  );
}
