export const GOOGLE_TAG_ID = 'AW-17953286510';

export const CONVERSION_LABELS = {
  booking: 'dgu2CMHby4kcEO7S5fBC',
  whatsapp: 'ekaDCMTby4kcEO7S5fBC',
  contact: '037WCMfby4kcEO7S5fBC',
  journey: 'puoICMrby4kcEO7S5fBC',
  newsletter: 'lN1mCM3by4kcEO7S5fBC',
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

export const trackBooking = (transactionId?: string) => {
  const id = transactionId || `book_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  trackConversion('booking', { value: 500, transaction_id: id });
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
