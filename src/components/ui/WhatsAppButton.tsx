import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_NUMBER } from '@/lib/utils';

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: 'floating' | 'inline';
  className?: string;
}

export default function WhatsAppButton({
  message,
  label = 'Enquire on WhatsApp',
  variant = 'inline',
  className = '',
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(message);

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 text-white rounded-full shadow-elevated hover:bg-green-600 hover:shadow-xl hover:scale-110 transition-all duration-300 ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold text-sm rounded-lg hover:bg-green-600 transition-all duration-300 ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </a>
  );
}
