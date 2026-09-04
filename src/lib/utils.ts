export const COMPANY_NAME = 'VARALAKSHMI HOUSING INFRA LLP';
export const COMPANY_SHORT_NAME = 'Varalakshmi Housing';

export const TAGLINE = 'Building Trust. Creating Value. Shaping Tomorrow.';
export const ALT_TAGLINE = 'Trusted Land. Thoughtful Development. Lasting Value.';

export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '';
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
export const API_URL = import.meta.env.VITE_API_URL || '';

export const OFFICE_ADDRESS = `DR.NO. 56-67/1, Plot.No.103,
2nd Floor,
Opp. Priya Children Hospital,
Pantakaluva Road,
Vijayawada,
NTR District – 520010,
Andhra Pradesh, India`;

export const CONTACT_PLACEHOLDER = {
  phone: '+91-XXXXXXXXXX',
  email: 'info@varalakshmihousing.com',
};

export const SOCIAL_LINKS = {
  facebook: '#',
  instagram: '#',
  youtube: '#',
  linkedin: '#',
};

export const LOGO_URL = 'https://i.ibb.co/7thDQpft/VARALAKSHMI-NEW-LOGO.jpg';

export const getWhatsAppUrl = (message?: string): string => {
  if (!WHATSAPP_NUMBER) return '#';
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent('Hello, I would like to know more about your projects.');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

export const getPhoneUrl = (number?: string): string => {
  return `tel:${number || CONTACT_PLACEHOLDER.phone}`;
};

export const getDirectionsUrl = (address: string): string => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
};

export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const formatStatusColor = (status: string): string => {
  switch (status) {
    case 'Ongoing':
      return 'bg-emerald-500 text-white';
    case 'Upcoming':
      return 'bg-amber-500 text-white';
    case 'Completed':
      return 'bg-navy-500 text-white';
    default:
      return 'bg-neutral-400 text-white';
  }
};
