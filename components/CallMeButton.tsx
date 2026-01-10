"use client";

export default function CallMeButton() {
  const phoneNumber = "919217821866";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20A1%20Tantra`;

  return (
    <>
      {/* Fixed WhatsApp Button - Modern flat-plus UI */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Main Button - Perfect circle with vibrant WhatsApp green */}
        <button
          onClick={() => window.open(whatsappUrl)}
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #20BA58 100%)",
            boxShadow: "0 8px 24px rgba(37, 211, 102, 0.3)",
          }}
          className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl active:scale-95"
        >
          {/* WhatsApp Icon - White for maximum contrast */}
          <svg
            className="w-7 h-7 md:w-9 md:h-9 text-white transition-transform duration-300 hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48C19.29 2.25 17.64 1.5 15.85 1.5 9.27 1.5 4 6.77 4 13.35c0 2.04.53 4.04 1.54 5.8L4.63 22.5l6.15-1.61c1.7.93 3.61 1.42 5.57 1.42 6.58 0 11.85-5.27 11.85-11.85 0-3.16-1.24-6.12-3.48-8.34zm-4.67 18.27c-1.73 0-3.43-.46-4.92-1.34l-.35-.21-3.64.95.97-3.54-.23-.36c-1.02-1.62-1.56-3.5-1.56-5.42 0-5.48 4.46-9.94 9.94-9.94 2.65 0 5.15 1.03 7.03 2.91 1.88 1.88 2.91 4.38 2.91 7.03 0 5.48-4.46 9.94-9.94 9.94zm5.42-7.47c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.89-.79-1.5-1.77-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.18-.01-.38-.01-.58-.01-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.51 0 1.48 1.09 2.91 1.24 3.11.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.71.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.71.25-1.31.18-1.43-.08-.12-.28-.2-.58-.35z" />
          </svg>
        </button>
      </div>
    </>
  );
}
