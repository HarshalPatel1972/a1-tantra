"use client";

export default function CallMeButton() {
  const phoneNumber = "919217821866";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <style>{`
        .whatsapp-button i {
          font-size: 56px !important;
          color: #25D366 !important;
          opacity: 1 !important;
          visibility: visible !important;
          display: inline-block !important;
          line-height: 1 !important;
        }
      `}</style>

      {/* Fixed WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 bg-[#25D366]"
          title="Message us on WhatsApp"
          aria-label="Open WhatsApp chat"
        >
          {/* Official WhatsApp Logo (White Bubble with handset cutout) */}
          <svg
            className="w-12 h-12 md:w-16 md:h-16"
            viewBox="0 0 448 512"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.5 2.5-2.6 5.5-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.9 4.4 26.5 3.8 36.6 2.3 11.2-1.7 34.6-14.1 39.5-27.8 4.8-13.6 4.8-25.4 3.3-27.8-1.5-2.4-5.5-3.8-11-6.6z" />
          </svg>
        </a>
      </div>
    </>
  );
}
