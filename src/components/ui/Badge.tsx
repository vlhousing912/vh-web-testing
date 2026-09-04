interface BadgeProps {
  label: string;
  variant?: 'status' | 'category' | 'default';
  status?: 'Ongoing' | 'Upcoming' | 'Completed';
  className?: string;
}

const statusStyles = {
  Ongoing: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Upcoming: 'bg-amber-50 text-amber-700 border-amber-200',
  Completed: 'bg-navy-50 text-navy-600 border-navy-200',
};

export default function Badge({ label, variant = 'default', status, className = '' }: BadgeProps) {
  const baseClasses = 'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full tracking-wide';

  const variantClasses =
    variant === 'status' && status
      ? statusStyles[status]
      : variant === 'category'
      ? 'bg-gold-50 text-gold-600 border border-gold-200'
      : 'bg-neutral-100 text-neutral-600 border border-neutral-200';

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`} role="status">
      {variant === 'status' && status && (
        <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
          status === 'Ongoing' ? 'bg-emerald-500' :
          status === 'Upcoming' ? 'bg-amber-500' :
          'bg-navy-500'
        }`} />
      )}
      {label}
    </span>
  );
}
