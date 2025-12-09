"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="serif-heading text-4xl font-bold text-deep-brown mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-deep-brown/80 space-y-6">
            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                1. Introduction
              </h2>
              <p>
                A1 Tantra is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                2. Information We Collect
              </h2>
              <p>
                We may collect information about you in a variety of ways. The
                information we may collect on the Site includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Personal Data: Name, email address, phone number</li>
                <li>
                  Form Submissions: Information provided through contact forms
                  and booking requests
                </li>
                <li>
                  Usage Data: Information about how you interact with the
                  website
                </li>
                <li>Device Data: Information about your device and browser</li>
              </ul>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                3. Use of Your Information
              </h2>
              <p>
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you via the
                Site to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Respond to your inquiries and send you requested information
                </li>
                <li>Process your bookings and send confirmations</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Generate analytics and improve our website</li>
                <li>Prevent fraudulent transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                4. Disclosure of Your Information
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. We may disclose your information in limited
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  To service providers who assist us in operating our website
                </li>
                <li>When required by law or to protect our legal rights</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                5. Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures
                to protect your personal information. However, perfect security
                cannot be guaranteed.
              </p>
            </section>

            <section>
              <h2 className="serif-heading text-2xl font-bold text-deep-brown mb-3">
                6. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us through our contact page.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
