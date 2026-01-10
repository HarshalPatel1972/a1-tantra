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
          {/* Official WhatsApp Logo */}
          <svg
            className="w-16 h-16 md:w-24 md:h-24 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="#25D366"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04.917-1.04 2.23 0 1.313.953 2.605 1.085 2.804.132.198 1.219 1.866 2.954 2.617.412.175.732.277 982.365 1.39.8.256 1.531.217 2.1.131.64-.089 1.985-.811 2.263-1.626.276-.817.276-1.414.194-1.55-.082-.135-.307-.223-.643-.372z"/>
            <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 21.956c-5.49 0-9.956-4.467-9.956-9.956S6.51 2.044 12 2.044 21.956 6.51 21.956 12 17.49 21.956 12 21.956z"/>
          </svg>
        </button>
      </div>
    </>
  );
}
