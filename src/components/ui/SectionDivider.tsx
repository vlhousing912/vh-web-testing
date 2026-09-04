interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'slant' | 'triangle';
  from?: string;
  to?: string;
  flip?: boolean;
}

const variants = {
  wave: (
    <path d="M0,64 C320,120 480,0 720,64 C960,128 1120,16 1440,64 L1440,120 L0,120 Z" />
  ),
  curve: (
    <path d="M0,120 C360,0 1080,0 1440,120 L1440,120 L0,120 Z" />
  ),
  slant: (
    <path d="M0,0 L1440,120 L1440,120 L0,120 Z" />
  ),
  triangle: (
    <path d="M0,0 L720,100 L1440,0 L1440,120 L0,120 Z" />
  ),
};

const colorMap: Record<string, string> = {
  white: '#FFFFFF',
  offwhite: '#F7F8FA',
  navy: '#0B1F5E',
  navyDark: '#060E2E',
  'neutral-150': '#F1F2F6',
};

export default function SectionDivider({ variant = 'wave', from = 'white', to = 'offwhite', flip = false }: SectionDividerProps) {
  const fillColor = colorMap[to] || colorMap.white;

  return (
    <div
      className={`relative w-full h-16 sm:h-20 lg:h-24 -my-px ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
      style={{ background: colorMap[from] || colorMap.white }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        fill={fillColor}
      >
        {variants[variant]}
      </svg>
    </div>
  );
}
