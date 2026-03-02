"use client";

export default function InstagramGrid() {
  const posts = [
    { id: 1, image: "/images/instagram/post1.png", alt: "Sacred Tantric Altar" },
    { id: 2, image: "/images/instagram/post2.png", alt: "Meditation in Temple" },
    { id: 3, image: "/images/instagram/post3.png", alt: "Sri Yantra Geometry" },
    { id: 4, image: "/images/instagram/post4.png", alt: "Sacred Mudra Gesture" },
  ];

  return (
    <section className="py-16 bg-cream border-t border-deep-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <a
            href="https://instagram.com/a1ta.ntra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <h2 className="serif-heading text-4xl font-bold bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-105">
              @a1ta.ntra
            </h2>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#f09433] to-[#bc1888] transition-all duration-300 mx-auto mt-1" />
          </a>
          <p className="text-deep-brown/60 mt-4 font-body text-lg italic">
            Reflections and teachings on the sacred path
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/a1ta.ntra"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <i className="ri-instagram-line text-cream text-4xl transform scale-50 group-hover:scale-100 transition-transform duration-300"></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
