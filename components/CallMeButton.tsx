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
        >
          {/* WhatsApp Icon - Green with large size */}
          <svg
            className="w-16 h-16 md:w-24 md:h-24 text-[#25D366] transition-transform duration-300 hover:scale-110"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm0 29.33c-7.32 0-13.33-6.01-13.33-13.33S8.68 2.67 16 2.67s13.33 6.01 13.33 13.33S23.32 29.33 16 29.33zm7.06-10.07c-.33-.16-1.97-.96-2.28-1.07-.31-.11-.54-.17-.76.17-.22.34-.85 1.08-1.04 1.3-.19.22-.38.25-.71.08-.33-.17-1.41-.51-2.68-1.64-.99-.88-1.66-1.96-1.85-2.3-.19-.34-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.09-.17-.76-1.8-1.03-2.46-.27-.65-.54-.56-.76-.57-.2-.01-.43-.01-.65-.01-.22 0-.59.09-.9.43-.31.34-1.18 1.14-1.18 2.78 0 1.64 1.21 3.23 1.37 3.45.16.22 2.36 3.63 5.76 5.08.8.35 1.42.55 1.9.71.8.26 1.53.22 2.1.13.64-.09 1.98-.81 2.26-1.59.28-.78.28-1.45.2-1.59-.09-.14-.31-.22-.64-.38z" />
          </svg>
        </button>
      </div>
    </>
  );
}
