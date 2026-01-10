"use client";

export default function CallMeButton() {
  const phoneNumber = "919217821866";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20A1%20Tantra`;

  return (
    <>
      {/* Fixed WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95"
          title="Chat with us on WhatsApp"
          aria-label="Open WhatsApp chat"
        >
          <i
            className="ri-whatsapp-fill"
            style={{
              fontSize: "56px",
              color: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></i>
        </a>
      </div>
    </>
  );
}
