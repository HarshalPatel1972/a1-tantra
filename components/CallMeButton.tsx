"use client";

export default function CallMeButton() {
  const phoneNumber = "919217821866";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20A1%20Tantra`;

  return (
    <>
      {/* Fixed WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95"
          title="Chat with us on WhatsApp"
          aria-label="Open WhatsApp chat"
        >
          <i
            className="ri-whatsapp-fill"
            style={{
              fontSize: "64px",
              color: "#25D366",
            }}
          ></i>
        </a>
      </div>

      {/* Link to Remix Icon CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
    </>
  );
}
