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
              us a message or reach out directly at{" "}
              <a href="mailto:hp842484n@gmail.com" className="text-accent-red font-bold hover:underline">
                hp842484n@gmail.com
              </a>
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/919217821866" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 bg-green-500/10 text-green-600 rounded-full font-bold text-sm border border-green-500/20 hover:bg-green-500 hover:text-white transition-all"
              >
                <i className="ri-whatsapp-line text-xl"></i> WhatsApp Us
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
