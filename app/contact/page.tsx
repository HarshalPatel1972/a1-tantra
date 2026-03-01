import type { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact A1 Tantra | Guidance & Inquiries",
  description: "Get in touch for tantric guidance, session inquiries, or collaborations. We resonate with your journey and are here to help.",
};

export default function ContactPage() {
  return (
    <div>
      <div className="pt-4 pb-24 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
              Have questions about A1 Tantra? We&apos;d love to hear from you. Send
              us a message and we&apos;ll respond within 24 hours.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
