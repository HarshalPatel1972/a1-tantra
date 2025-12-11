"use client";

export default function CallMeButton() {
  const phoneNumber = "+919217821866";

  return (
    <>
      {/* Fixed Call Button - Visible on all devices */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Main Button - Circular with professional gradient */}
        <button
          onClick={() => window.open(`tel:${phoneNumber}`)}
          style={{
            background: "linear-gradient(135deg, #E44426 0%, #D63318 100%)",
          }}
          className="relative group flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        >
          {/* Phone Icon - Professional cream color */}
          <svg
            className="w-7 h-7 md:w-9 md:h-9 text-cream transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>

          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-cream opacity-0 group-hover:animate-ping"></span>
        </button>
      </div>
    </>
  );
}
