"use client";

import Link from "next/link";
import { tantraPaths, tantricTools } from "@/data/content";

export default function TantraPathsGuides() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="serif-heading text-4xl font-bold text-deep-brown mb-16">
          What you really need
          <br className="hidden md:block" />
          <span className="text-accent-red">
            (because we've studied every Tantra path).
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Tantra Paths List - takes 2 columns on desktop */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {tantraPaths.map((path) => (
                <Link
                  key={path.id}
                  href={`/paths/${path.id}`}
                  className="group block p-6 border-l-4 border-accent-red hover:border-soft-gold bg-white/40 hover:bg-white/60 transition rounded"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{path.icon}</span>
                    <div className="flex-1">
                      <h3 className="serif-heading text-2xl font-bold text-deep-brown mb-2 group-hover:text-accent-red transition">
                        {path.name}
                      </h3>
                      <p className="text-deep-brown/70 leading-relaxed">
                        {path.description}
                      </p>
                    </div>
                    <span className="text-2xl text-accent-red opacity-0 group-hover:opacity-100 transition">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Tools Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="serif-heading text-2xl font-bold text-deep-brown mb-6">
                Tools we love
              </h3>
              <div className="space-y-4">
                {tantricTools.map((tool) => (
                  <div
                    key={tool.id}
                    className="p-4 bg-white/50 border border-deep-brown/20 rounded-sm hover:border-accent-red hover:bg-white/70 transition"
                  >
                    <div className="text-2xl mb-2">{tool.icon}</div>
                    <h4 className="serif-heading text-lg font-bold text-deep-brown mb-1">
                      {tool.name}
                    </h4>
                    <p className="text-sm text-deep-brown/60 mb-2">
                      {tool.description}
                    </p>
                    <p className="text-accent-red font-semibold">
                      {tool.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
