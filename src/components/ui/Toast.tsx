import { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export default function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-elevated animate-fade-up ${
        type === 'success'
          ? 'bg-white border border-emerald-200'
          : 'bg-white border border-red-200'
      }`}
      role="alert"
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
      ) : (
        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
      )}
      <p className="text-sm text-neutral-800 font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 p-1 rounded text-neutral-400 hover:text-neutral-600 transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
