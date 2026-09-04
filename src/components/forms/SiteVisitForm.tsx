import { CalendarCheck } from 'lucide-react';
import { SiteVisitFormData } from '@/types';
import { projects } from '@/data/projects';
import { useFormValidation, validators } from '@/hooks/useFormValidation';

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
];

const initialFormData: SiteVisitFormData = {
  fullName: '',
  mobile: '',
  email: '',
  project: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

interface SiteVisitFormProps {
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

export default function SiteVisitForm({ onSuccess, onError }: SiteVisitFormProps) {
  const { formData, errors, isSubmitting, isSubmitted, handleChange, handleSubmit, reset } = useFormValidation<SiteVisitFormData>({
    initialValues: initialFormData,
    validate: (v) => {
      const e: Partial<Record<keyof SiteVisitFormData, string>> = {};
      const nameErr = validators.required(v.fullName, 'Full name');
      if (nameErr) e.fullName = nameErr;
      const mobileErr = validators.indianMobile(v.mobile);
      if (mobileErr) e.mobile = mobileErr;
      const emailErr = validators.email(v.email);
      if (emailErr) e.email = emailErr;
      if (!v.project) e.project = 'Please select a project';
      if (!v.preferredDate) e.preferredDate = 'Please select a preferred date';
      if (!v.preferredTime) e.preferredTime = 'Please select a preferred time';
      return e;
    },
    onSubmit: async (v) => {
      await new Promise((r) => setTimeout(r, 1500));
      console.log('Site visit request:', v);
      onSuccess?.();
    },
  });

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
          <CalendarCheck className="w-7 h-7 text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900">Request Received!</h3>
        <p className="mt-3 text-neutral-500 leading-relaxed max-w-sm mx-auto">
          Thank you. Your site visit request has been received. Our team will contact you shortly to confirm the details.
        </p>
        <button
          onClick={reset}
          className="mt-6 text-sm font-semibold text-navy-500 hover:text-navy-700 transition-colors"
        >
          Schedule Another Visit
        </button>
      </div>
    );
  }

  // Get tomorrow's date as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="sv-name" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="sv-name"
          type="text"
          value={formData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 ${
            errors.fullName ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-white'
          }`}
          placeholder="Enter your full name"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
      </div>

      {/* Mobile */}
      <div>
        <label htmlFor="sv-mobile" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <input
          id="sv-mobile"
          type="tel"
          value={formData.mobile}
          onChange={(e) => handleChange('mobile', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 ${
            errors.mobile ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-white'
          }`}
          placeholder="9876543210"
          maxLength={10}
        />
        {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="sv-email" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Email
        </label>
        <input
          id="sv-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 ${
            errors.email ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-white'
          }`}
          placeholder="your@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Project */}
      <div>
        <label htmlFor="sv-project" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Select Project <span className="text-red-500">*</span>
        </label>
        <select
          id="sv-project"
          value={formData.project}
          onChange={(e) => handleChange('project', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 ${
            errors.project ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-white'
          }`}
        >
          <option value="">Select a project</option>
          {projects.map((p) => (
            <option key={p.id} value={p.name}>{p.name} – {p.location.village || p.location.district}</option>
          ))}
        </select>
        {errors.project && <p className="mt-1 text-xs text-red-500">{errors.project}</p>}
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sv-date" className="block text-sm font-semibold text-neutral-700 mb-1.5">
            Preferred Date <span className="text-red-500">*</span>
          </label>
          <input
            id="sv-date"
            type="date"
            value={formData.preferredDate}
            min={minDate}
            onChange={(e) => handleChange('preferredDate', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 ${
              errors.preferredDate ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-white'
            }`}
          />
          {errors.preferredDate && <p className="mt-1 text-xs text-red-500">{errors.preferredDate}</p>}
        </div>
        <div>
          <label htmlFor="sv-time" className="block text-sm font-semibold text-neutral-700 mb-1.5">
            Preferred Time <span className="text-red-500">*</span>
          </label>
          <select
            id="sv-time"
            value={formData.preferredTime}
            onChange={(e) => handleChange('preferredTime', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 ${
              errors.preferredTime ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-white'
            }`}
          >
            <option value="">Select time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.preferredTime && <p className="mt-1 text-xs text-red-500">{errors.preferredTime}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="sv-message" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Message
        </label>
        <textarea
          id="sv-message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 resize-none"
          placeholder="Any special requirements..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            REQUEST SITE VISIT
            <CalendarCheck className="w-4 h-4" />
          </span>
        )}
      </button>
    </form>
  );
}
