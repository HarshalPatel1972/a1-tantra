"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export default function BookingPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="serif-heading text-5xl font-bold text-deep-brown mb-4">
              Book a Session
            </h1>
            <p className="text-lg text-deep-brown/70 max-w-2xl mx-auto">
              Choose a session type that resonates with your journey and submit
              your booking request.
            </p>
          </div>

          <BookingForm />

          <div className="mt-12 p-8 bg-accent-red/10 border border-accent-red/20 rounded-lg max-w-2xl mx-auto">
            <h3 className="serif-heading text-2xl font-bold text-deep-brown mb-2">
              Need a different time?
            </h3>
            <p className="text-deep-brown/70 mb-4">
              You can also view our availability directly on Google Calendar or
              send us an email for custom session times.
            </p>
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-accent-red text-cream font-semibold rounded-sm hover:bg-deep-brown transition"
            >
              VIEW GOOGLE CALENDAR
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
