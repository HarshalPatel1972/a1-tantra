export const GOOGLE_TAG_ID = 'AW-17953286510';

export const CONVERSION_LABELS = {
  booking: 'LABEL_BOOKING',
  whatsapp: 'LABEL_WHATSAPP',
  contact: 'LABEL_CONTACT',
  journey: 'LABEL_JOURNEY',
  newsletter: 'LABEL_NEWSLETTER',
};

type ConversionType = keyof typeof CONVERSION_LABELS;

interface TrackingParams {
  value?: number;
  currency?: string;
  transaction_id?: string;
}

const trackConversion = (type: ConversionType, params: TrackingParams = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', 'conversion', {
        send_to: `${GOOGLE_TAG_ID}/${CONVERSION_LABELS[type]}`,
        value: params.value,
        currency: params.currency || 'INR',
        transaction_id: params.transaction_id,
      });
    } catch (error) {
      console.error(`Google Ads tracking error for ${type}:`, error);
    }
  }
};

export const trackBooking = () => {
  const transactionId = `book_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  trackConversion('booking', { value: 500, transaction_id: transactionId });
};

export const trackWhatsApp = () => {
  trackConversion('whatsapp', { value: 300 });
};

export const trackContactForm = () => {
  trackConversion('contact', { value: 200 });
};

export const trackJourney = () => {
  trackConversion('journey', { value: 150 });
};

export const trackNewsletter = () => {
  trackConversion('newsletter', { value: 50 });
};
