import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Placeholder Name',
    location: 'Vijayawada',
    text: 'This is a placeholder testimonial. Real customer testimonials will be added once verified.',
    rating: 5,
    date: '2026-01-01',
    isPlaceholder: true,
  },
];

export const hasRealTestimonials = (): boolean =>
  testimonials.some((t) => !t.isPlaceholder);

export const getRealTestimonials = (): Testimonial[] =>
  testimonials.filter((t) => !t.isPlaceholder);
