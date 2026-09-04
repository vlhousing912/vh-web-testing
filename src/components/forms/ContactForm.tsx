import { Send } from 'lucide-react';
import { ContactFormData } from '@/types';
import { projects } from '@/data/projects';
import { useFormValidation, validators } from '@/hooks/useFormValidation';

const enquiryTypes = [
  'General Enquiry',
  'Project Enquiry',
  'Plot Availability',
  'Site Visit',
  'Pricing',
  'Documentation',
  'Registration',
  'Other',
];

const initialFormData: ContactFormData = {
  fullName: '',
  mobile: '',
  email: '',
  project: '',
  enquiryType: '',
  message: '',
};

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (message: string) => void;
}

export default function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const { formData, errors, isSubmitting, isSubmitted, handleChange, handleSubmit, reset } = useFormValidation<ContactFormData>({
    initialValues: initialFormData,
    validate: (v) => {
      const e: Partial<Record<keyof ContactFormData, string>> = {};
      const nameErr = validators.required(v.fullName, 'Full name');
      if (nameErr) e.fullName = nameErr;
      const mobileErr = validators.indianMobile(v.mobile);
      if (mobileErr) e.mobile = mobileErr;
      const emailErr = validators.email(v.email);
      if (emailErr) e.email = emailErr;
      if (!v.enquiryType) e.enquiryType = 'Please select an enquiry type';
      return e;
    },
    onSubmit: async (v) => {
      await new Promise((r) => setTimeout(r, 1500));
      console.log('Form submitted:', v);
      onSuccess?.();
    },
  });

  if (isSubmitted) {
    return (
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
          <Send className="w-7 h-7 text-emerald-500" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900">Thank You!</h3>
        <p className="mt-3 text-neutral-500 leading-relaxed max-w-sm mx-auto">
          Your enquiry has been received. Our team will contact you shortly.
        </p>
        <button
          onClick={reset}
          className="mt-6 text-sm font-semibold text-navy-500 hover:text-navy-700 transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Full Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.fullName}            onChange={(e) => handleChange('fullName', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 ${
            errors.fullName ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-white'
          }`}
          placeholder="Enter your full name"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
      </div>

      {/* Mobile */}
      <div>
        <label htmlFor="contact-mobile" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-mobile"
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
        <label htmlFor="contact-email" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
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
        <label htmlFor="contact-project" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Interested Project
        </label>
        <select
          id="contact-project"
          value={formData.project}
          onChange={(e) => handleChange('project', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500"
        >
          <option value="">Select a project</option>
          {projects.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>
      </div>

      {/* Enquiry Type */}
      <div>
        <label htmlFor="contact-enquiry" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Enquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          id="contact-enquiry"
          value={formData.enquiryType}
          onChange={(e) => handleChange('enquiryType', e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 ${
            errors.enquiryType ? 'border-red-300 bg-red-50' : 'border-neutral-200 bg-white'
          }`}
        >
          <option value="">Select enquiry type</option>
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.enquiryType && <p className="mt-1 text-xs text-red-500">{errors.enquiryType}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-neutral-700 mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 bg-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-500 resize-none"
          placeholder="Tell us how we can help..."
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
            SUBMIT ENQUIRY
            <Send className="w-4 h-4" />
          </span>
        )}
      </button>
    </form>
  );
}
