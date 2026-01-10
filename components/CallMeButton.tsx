"use client";

export default function CallMeButton() {
  const phoneNumber = "919217821866";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20A1%20Tantra`;

  return (
    <>
      {/* Fixed WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* WhatsApp Icon - Large and interactive */}
        <button
          onClick={() => window.open(whatsappUrl)}
          className="flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
          title="Chat with us on WhatsApp"
          aria-label="Open WhatsApp chat"
        >
          {/* Official WhatsApp Logo - Phone handset in speech bubble */}
          <svg
            className="w-16 h-16 md:w-24 md:h-24 text-[#25D366] transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            {/* Circle background */}
            <circle cx="12" cy="12" r="12" />
            {/* Speech bubble outline */}
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3 .97 4.29L2 22l6.18-.99C9.71 21.75 10.8 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.07 0-2.09-.25-3.01-.7l-.22-.12-2.27.37.38-2.21-.14-.23C3.75 14.92 3 13.59 3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9z"
              fill="white"
            />
            {/* Phone handset */}
            <path
              d="M14.88 11.53c-.38-.42-1.03-.48-1.53-.15-.97.66-1.97.98-2.88.98-1.85 0-3.55-1.03-4.43-2.68-.23-.42-.8-.6-1.28-.4-.48.2-.7.73-.5 1.2.45.74.71 1.6.71 2.51 0 1.5-.54 2.93-1.56 4.05l-1.56-.26c-.42.63-1.19.99-2 .99-.67 0-1.32-.23-1.83-.64-.52-.41-.82-1.04-.82-1.71 0-.67.3-1.3.82-1.71.51-.41 1.16-.64 1.83-.64.81 0 1.58.36 2 .99l1.56-.26c1.02 1.12 2.45 1.66 3.95 1.66.91 0 1.91-.32 2.88-.98.5-.33 1.15-.27 1.53.15.38.42.32 1.09-.15 1.46-.98.71-2.16 1.11-3.37 1.11-2.04 0-3.96-.9-5.24-2.46l-1.99.33c-.31.66-.98 1.09-1.72 1.09-1.1 0-2-1.01-2-2.25 0-1.24.9-2.25 2-2.25.74 0 1.41.43 1.72 1.09l1.99.33c1.28-1.56 3.2-2.46 5.24-2.46 1.21 0 2.39.4 3.37 1.11.47.37.53 1.04.15 1.46z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
