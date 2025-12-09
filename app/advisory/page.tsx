"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdvisoryPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-8">
            Advisory Panel
          </h1>
          <p className="text-lg text-deep-brown/70 mb-12">
            Meet the accomplished practitioners and scholars who ensure the
            authenticity of A1 Tantra teachings.
          </p>

          <div className="space-y-8">
            <div className="p-8 bg-white border-l-4 border-accent-red rounded">
              <h3 className="serif-heading text-2xl font-bold text-deep-brown mb-2">
                Advisory Panel Members
              </h3>
              <p className="text-deep-brown/70">
                Our advisory panel consists of accomplished Tantra
                practitioners, scholars, and lineage holders from various
                traditions. Each member brings unique expertise and ensures that
                all A1 Tantra content maintains the highest standards of
                authenticity and clarity.
              </p>
            </div>

            <div className="p-8 bg-accent-red/10 border border-accent-red/20 rounded">
              <h3 className="serif-heading text-2xl font-bold text-deep-brown mb-2">
                Coming Soon
              </h3>
              <p className="text-deep-brown/70">
                Detailed profiles of our advisory panel members are being
                prepared. We'll share their backgrounds, expertise, and lineage
                connections soon.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
