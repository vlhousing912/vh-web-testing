import { FAQ } from '@/types';

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What type of properties does Varalakshmi Housing develop?',
    answer: 'Varalakshmi Housing Infra LLP focuses on residential plotted developments and thoughtfully planned land projects in Andhra Pradesh. Our developments are designed to offer well-planned residential plots in strategically selected locations.',
    category: 'General',
  },
  {
    id: '2',
    question: 'Where are your projects located?',
    answer: 'Our projects are located in the Andhra Pradesh region, with developments in areas across Vijayawada and surrounding districts. Please visit our Projects page for specific location details of each development.',
    category: 'Projects',
  },
  {
    id: '3',
    question: 'How can I schedule a site visit?',
    answer: 'You can schedule a site visit by filling out the Site Visit form on our website, calling our office, or reaching out via WhatsApp. Our team will coordinate a convenient time for you to visit and experience the project location firsthand.',
    category: 'Site Visit',
  },
  {
    id: '4',
    question: 'Can I check plot availability?',
    answer: 'Yes, you can enquire about plot availability by contacting our team through the website, phone, or WhatsApp. For the most current availability information, we recommend speaking directly with our sales team.',
    category: 'Plots',
  },
  {
    id: '5',
    question: 'Do you provide documentation assistance?',
    answer: 'Yes, we provide documentation assistance throughout the property buying process. Our team guides customers through the required documentation, helping ensure a transparent and smooth transaction.',
    category: 'Documentation',
  },
  {
    id: '6',
    question: 'How can I enquire about a project?',
    answer: 'You can enquire about any of our projects through multiple channels: the Contact form on our website, direct phone call, WhatsApp message, or by visiting our office. We aim to respond to all enquiries promptly.',
    category: 'General',
  },
  {
    id: '7',
    question: 'What information should I verify before purchasing a plot?',
    answer: 'Before purchasing any plot, we recommend independently verifying: project approvals and regulatory compliance, documentation and title clarity, actual plot dimensions and boundaries, location and connectivity details, and pricing and payment terms. We encourage transparency and are happy to provide all available information to support your decision-making.',
    category: 'Buying Guide',
  },
  {
    id: '8',
    question: 'What is the typical buying process for a residential plot?',
    answer: 'The typical process involves: exploring our projects, scheduling a site visit to experience the location, selecting a plot that meets your requirements, completing the booking process, finishing the applicable documentation, and proceeding with registration assistance. Our team supports you at every stage.',
    category: 'Buying Guide',
  },
  {
    id: '9',
    question: 'Do you offer EMI or payment plan options?',
    answer: 'Payment plan details vary by project. Please contact our sales team for the most current information on available payment options for specific projects.',
    category: 'Pricing',
  },
  {
    id: '10',
    question: 'Are your projects RERA registered?',
    answer: 'Regulatory compliance information for each project will be updated as details become available. We encourage customers to verify all regulatory information independently and we are committed to providing transparent compliance details.',
    category: 'Compliance',
  },
];

export const faqCategories = [...new Set(faqs.map((f) => f.category))];

export const getFaqsByCategory = (category: string): FAQ[] =>
  category === 'All'
    ? faqs
    : faqs.filter((f) => f.category === category);

export const searchFaqs = (query: string): FAQ[] => {
  const lower = query.toLowerCase();
  return faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(lower) ||
      f.answer.toLowerCase().includes(lower)
  );
};
