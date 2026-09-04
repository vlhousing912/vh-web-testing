import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_NAME, CONTACT_PLACEHOLDER, getPhoneUrl } from '@/lib/utils';

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-navy-950 text-white/70 text-xs border-b border-white/5">
      <div className="section-max section-padding">
        <div className="flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-white/90 tracking-wide text-[11px]">{COMPANY_NAME}</span>
            <span className="w-px h-3 bg-white/10" />
            <a href={getPhoneUrl()} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone className="w-3 h-3" />
              {CONTACT_PLACEHOLDER.phone}
            </a>
            <span className="w-px h-3 bg-white/10" />
            <a href={`mailto:${CONTACT_PLACEHOLDER.email}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Mail className="w-3 h-3" />
              {CONTACT_PLACEHOLDER.email}
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-white/50">
            <MapPin className="w-3 h-3" />
            Vijayawada, Andhra Pradesh
          </div>
        </div>
      </div>
    </div>
  );
}

