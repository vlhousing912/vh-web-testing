import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    slug: 'srinidhi',
    name: 'SRINIDHI',
    tagline: 'Premium Residential Plotted Development',
    location: {
      address: 'Gandigunta Village, Vuyyuru Mandal, Krishna District, Andhra Pradesh',
      village: 'Gandigunta',
      mandal: 'Vuyyuru',
      district: 'Krishna District',
      state: 'Andhra Pradesh',
    },
    category: 'Premium Residential Plotted Development',
    status: 'Ongoing',
    description: 'SRINIDHI is a residential plotted development designed for customers seeking thoughtfully planned land ownership in a strategically selected location.',
    longDescription: 'SRINIDHI represents our commitment to creating well-planned residential plotted communities. Located in Gandigunta Village, Vuyyuru Mandal, Krishna District, this project offers thoughtfully designed plots in a location that balances accessibility with the promise of future growth. Each aspect of SRINIDHI has been planned with the customer\'s long-term interests in mind.',
    highlights: [
      'Residential Open Plots',
      'Planned Layout',
      'Strategic Location',
      'Road Connectivity',
      'Customer-focused buying process',
      'Documentation assistance',
    ],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
        alt: 'SRINIDHI project aerial view of the development',
        caption: 'SRINIDHI – Aerial View of Development',
        category: 'aerial',
      },
      {
        src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
        alt: 'SRINIDHI project site overview',
        caption: 'Project Site Overview',
        category: 'project',
      },
      {
        src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&q=80',
        alt: 'Road connectivity to SRINIDHI project',
        caption: 'Road Connectivity',
        category: 'infrastructure',
      },
      {
        src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&q=80',
        alt: 'SRINIDHI project layout plan',
        caption: 'Project Layout',
        category: 'layout',
      },
    ],
    amenities: [
      'Planned Road Network',
      'Boundary Wall',
      'Entrance Arch',
      'Landscaped Open Spaces',
      'Street Lighting',
      'Drainage System',
    ],
    locationAdvantages: [
      { name: 'Vuyyuru Town', type: 'Town', note: 'Distance details will be updated.' },
      { name: 'Vijayawada City', type: 'City', note: 'Distance details will be updated.' },
      { name: 'Educational Institutions', type: 'Education', note: 'Proximity details will be updated.' },
      { name: 'Hospitals & Healthcare', type: 'Healthcare', note: 'Proximity details will be updated.' },
      { name: 'Commercial Areas', type: 'Commercial', note: 'Proximity details will be updated.' },
      { name: 'Major Road Networks', type: 'Transport', note: 'Connectivity details will be updated.' },
    ],
    featured: true,
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getProjectsByStatus = (status: Project['status']): Project[] =>
  projects.filter((p) => p.status === status);
