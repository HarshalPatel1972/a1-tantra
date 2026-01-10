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
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a3.426 3.426 0 00-3.426 3.426c0 .9.25 1.775.724 2.52l-3.073 3.073c-.57-1.488-.896-3.088-.896-4.593 0-5.328 4.336-9.663 9.663-9.663 2.577 0 4.995 1.016 6.794 2.814.236.236.46.483.671.74H12.051z" />
          </svg>
        </button>
      </div>
    </>
  );
}
