"use client";

import Image from "next/image";

export default function CallMeButton() {
  const phoneNumber = "919217821866";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      {/* Fixed WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
          title="Message us on WhatsApp"
          aria-label="Open WhatsApp chat"
        >
          {/* Using Next.js Image with the string path now that the file is tracked */}
          <Image
            src="/images/whatsapp.png"
            alt="WhatsApp"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
            priority
            unoptimized
          />
        </a>
      </div>
    </>
  );
}
