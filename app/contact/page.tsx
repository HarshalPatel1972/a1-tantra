"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
              Have questions about A1 Tantra? We'd love to hear from you. Send
              us a message and we'll respond within 24 hours.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
