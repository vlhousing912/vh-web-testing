export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  location: {
    address: string;
    village?: string;
    mandal?: string;
    district: string;
    state: string;
    pincode?: string;
    mapCoordinates?: { lat: number; lng: number };
  };
  category: string;
  status: 'Ongoing' | 'Upcoming' | 'Completed';
  description: string;
  longDescription?: string;
  highlights: string[];
  images: ProjectImage[];
  amenities?: string[];
  plotSizes?: PlotSize[];
  pricing?: PricingInfo;
  paymentPlan?: string;
  approvals?: ApprovalInfo;
  locationAdvantages?: LocationAdvantage[];
  documents?: ProjectDocument[];
  featured: boolean;
  heroImage: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  category: 'project' | 'aerial' | 'layout' | 'infrastructure' | 'site-visit' | 'event' | 'progress';
}

export interface PlotSize {
  size: string;
  dimensions?: string;
  facing?: string;
}

export interface PricingInfo {
  available: boolean;
  startingPrice?: string;
  pricePerSqYard?: string;
  currency: string;
  note?: string;
}

export interface ApprovalInfo {
  rera?: string;
  dtcp?: string;
  crda?: string;
  layoutApproval?: string;
  note: string;
}

export interface LocationAdvantage {
  name: string;
  type: string;
  distance?: string;
  note?: string;
}

export interface ProjectDocument {
  name: string;
  type: string;
  url: string;
  size?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
  isPlaceholder: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface ContactFormData {
  fullName: string;
  mobile: string;
  email: string;
  project: string;
  enquiryType: string;
  message: string;
}

export interface SiteVisitFormData {
  fullName: string;
  mobile: string;
  email: string;
  project: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
