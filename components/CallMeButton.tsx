"use client";

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
          {/* Using WhatsApp PNG from public/images */}
          <img 
            src="/images/whatsapp.png" 
            alt="WhatsApp" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </a>
      </div>
    </>
  );
}
