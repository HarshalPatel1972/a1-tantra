export interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: "Page" | "Service" | "Tantra Path" | "Resource";
}

export const searchIndex: SearchResult[] = [
  // Core Pages
  {
    title: "Home",
    description: "Welcome to A1 Tantra - Sacred Tantra for the Modern Seeker.",
    url: "/",
    category: "Page",
  },
  {
    title: "About Us",
    description:
      "Learn about the mission, vision, and the team behind A1 Tantra.",
    url: "/about",
    category: "Page",
  },
  {
    title: "Tantra Paths",
    description:
      "Explore authentic tantric traditions: Kriya, Carya, Yoga, and Anuttarayoga.",
    url: "/#tantra-paths",
    category: "Page",
  },
  {
    title: "All Sessions",
    description:
      "View all our tantric sessions including meditation, breathwork, and chakra balancing.",
    url: "/sessions",
    category: "Page",
  },
  {
    title: "Therapies",
    description:
      "Online spiritual healing and tantra therapy sessions for holistic growth.",
    url: "/therapies",
    category: "Page",
  },
  {
    title: "Contact",
    description:
      "Get in touch with us for guidance, collaborations, or inquiries.",
    url: "/contact",
    category: "Page",
  },
  {
    title: "Resources",
    description:
      "Articles, guides, and educational materials on tantric practices.",
    url: "/resources",
    category: "Page",
  },
  {
    title: "Start Journey",
    description:
      "Begin your personalized tantric journey with our guided paths.",
    url: "/start-journey",
    category: "Page",
  },
  {
    title: "Book a Demo",
    description:
      "Ready to transform? Explore our tantra paths and start your journey.",
    url: "/#tantra-paths",
    category: "Page",
  },

  // Services
  {
    title: "Tantra Sessions in India",
    description:
      "Comprehensive online tantra sessions: meditation, breathwork, chakra balancing.",
    url: "/sessions",
    category: "Service",
  },
  {
    title: "Online Spiritual Healing",
    description: "Transformative energy work and energy-based tantra therapy.",
    url: "/therapies",
    category: "Service",
  },
  {
    title: "Relationship Tantra Consultation",
    description:
      "Expert guidance for couples to deepen intimacy and sacred partnership.",
    url: "/advisory",
    category: "Service",
  },

  // Tantra Paths (from TantraTypesSection)
  {
    title: "Kriya Tantra (Action Tantra)",
    description:
      "Foundational path emphasizing ritual action, physical purity, and structured ceremonial conduct.",
    url: "/#tantra-paths",
    category: "Tantra Path",
  },
  {
    title: "Carya Tantra (Method Tantra)",
    description:
      "Balances outer ritual with inner meditative stability and devotional visualization.",
    url: "/#tantra-paths",
    category: "Tantra Path",
  },
  {
    title: "Yoga Tantra (Union Tantra)",
    description:
      "Centers on internal practice, visualization of deities, and subtle-energy awareness.",
    url: "/#tantra-paths",
    category: "Tantra Path",
  },
  {
    title: "Anuttarayoga Tantra (Highest Union)",
    description:
      "The peak of tantric practice, integrating non-dual awareness and the most profound transformations.",
    url: "/#tantra-paths",
    category: "Tantra Path",
  },
];
