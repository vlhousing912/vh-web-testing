import { LOGO_URL, COMPANY_NAME, TAGLINE } from '@/lib/utils';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="text-center">
        <img
          src={LOGO_URL}
          alt="Varalakshmi Housing Infra LLP"
          className="h-24 mx-auto mb-6 animate-fade-in"
        />
        <h1 className="text-lg font-bold text-navy-500 tracking-wide mb-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {COMPANY_NAME}
        </h1>
        <p className="text-sm text-neutral-400 italic mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {TAGLINE}
        </p>
        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-neutral-100 rounded-full mx-auto overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="h-full bg-gradient-to-r from-navy-500 to-gold-500 rounded-full animate-[loadingBar_1.2s_ease-in-out_forwards]" />
        </div>
      </div>
    </div>
  );
}
