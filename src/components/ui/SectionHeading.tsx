interface SectionHeadingProps {
  label?: string;
  title: string;
  titleAs?: 'h1' | 'h2' | 'h3';
  description?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  titleAs: Tag = 'h2',
  description,
  alignment = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClasses = alignment === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''} ${alignClasses} ${className}`}>
      {label && (
        <span className={`section-label block mb-4 ${light ? 'text-gold-400' : ''}`}>
          {label}
        </span>
      )}
      <Tag
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-neutral-900'
        } ${Tag === 'h1' ? 'editorial-heading' : ''}`}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed max-w-2xl ${
            alignment === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-neutral-300' : 'text-neutral-500'}`}
        >
          {description}
        </p>
      )}
      {label && (
        <div className={`mt-6 gold-accent ${alignment === 'center' ? 'mx-auto' : ''}`} />
      )}
    </div>
  );
}
