import { useState, FormEvent } from 'react';

interface UseFormValidationOptions<T> {
  initialValues: T;
  validate: (values: T) => Partial<Record<keyof T, string>>;
  onSubmit: (values: T) => Promise<void>;
}

export function useFormValidation<T extends object>({
  initialValues,
  validate,
  onSubmit,
}: UseFormValidationOptions<T>) {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof T, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setIsSubmitted(true);
      setFormData(initialValues);
    } catch {
      setErrors({} as Partial<Record<keyof T, string>>);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitted(false);
    setFormData(initialValues);
    setErrors({});
  };

  return { formData, errors, isSubmitting, isSubmitted, handleChange, handleSubmit, reset };
}

// Shared field validators
export const validators = {
  required: (value: string, label: string) =>
    !value.trim() ? `${label} is required` : undefined,

  indianMobile: (value: string) => {
    if (!value.trim()) return 'Mobile number is required';
    if (!/^[6-9]\d{9}$/.test(value.replace(/\s/g, '')))
      return 'Please enter a valid 10-digit Indian mobile number';
    return undefined;
  },

  email: (value: string) => {
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return 'Please enter a valid email address';
    return undefined;
  },
};
