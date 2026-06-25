import { FAQItem, PortfolioItem } from './types';

export const SITE_DATA = {
  name: "Bravado",
  tagline: "Custom Tattoos · Palmetto, FL",
  tattooName: "Bravado Tattoos",
  location: "702 12th St Dr W, Palmetto, FL 34221",
  phone: "941-271-1301",
  email: "booking@bravadostudio.com",
  hours: {
    tattoo: "Tue-Sat: 12pm - 8pm",
  },
  socials: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  }
};

export const TATTOO_PORTFOLIO: PortfolioItem[] = [
  { id: "p1", url: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&q=80&w=600&h=600", category: "Black & Grey" },
  { id: "p2", url: "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?auto=format&fit=crop&q=80&w=600&h=600", category: "Traditional" },
  { id: "p3", url: "https://images.unsplash.com/photo-1564426622559-5af68da63b96?auto=format&fit=crop&q=80&w=600&h=600", category: "Fine Line" },
  { id: "p4", url: "https://images.unsplash.com/photo-1482329033286-79a3d24413b4?auto=format&fit=crop&q=80&w=600&h=600", category: "Color" },
  { id: "p5", url: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&q=80&w=600&h=600", category: "Black & Grey" },
  { id: "p6", url: "https://images.unsplash.com/photo-1513078094721-e7b6e0394a6a?auto=format&fit=crop&q=80&w=600&h=600", category: "Fine Line" },
];

export const TATTOO_FAQS: FAQItem[] = [
  { question: "How do I book a consultation?", answer: "Fill out the booking request form below with details about your idea, preferred style, and placement. We'll get back to you within 48 hours to schedule a consultation." },
  { question: "What is your deposit policy?", answer: "A non-refundable deposit is required to secure your appointment and drawing time. The deposit amount goes towards the final cost of your tattoo." },
  { question: "How old do I need to be?", answer: "You must be 18 years or older with a valid, government-issued photo ID. No exceptions." },
  { question: "What should I do before my appointment?", answer: "Get a good night's sleep, eat a solid meal within 2 hours of your appointment, and stay hydrated. Do not consume alcohol or blood-thinning medications for 24 hours prior." }
];
