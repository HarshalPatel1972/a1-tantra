"use client";

export default function CallMeButton() {
  const phoneNumber = "+919217821866";

  return (
    <>
      {/* Fixed Call Button - Modern flat-plus UI */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Main Button - Perfect circle with vibrant coral gradient */}
        <button
          onClick={() => window.open(`tel:${phoneNumber}`)}
          style={{
            background: "linear-gradient(135deg, #E6462E 0%, #FF6A4D 100%)",
            boxShadow: "0 8px 24px rgba(230, 70, 46, 0.3)",
          }}
          className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl active:scale-95"
        >
          {/* Phone Icon - White for maximum contrast */}
          <svg
            className="w-7 h-7 md:w-9 md:h-9 text-white transition-transform duration-300 hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </button>
      </div>
    </>
  );
}
