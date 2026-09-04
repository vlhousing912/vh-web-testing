import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center text-neutral-400 hover:text-navy-500 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
            {item.path ? (
              <Link
                to={item.path}
                className="text-neutral-400 hover:text-navy-500 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
