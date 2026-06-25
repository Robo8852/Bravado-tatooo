import { Artist, Barber, BarberService, CutItem, FAQItem, PortfolioItem } from './types';

export const SITE_DATA = {
  name: "Bravado",
  tagline: "One Shop, Two Crafts",
  tattooName: "Bravado Tattoos",
  barberName: "Bravado Barbershop",
  location: "123 Ink & Fade Ave, Los Angeles, CA 90014",
  phone: "(555) 987-6543",
  email: "booking@bravadostudio.com",
  hours: {
    tattoo: "Tue-Sat: 12pm - 8pm",
    barber: "Mon-Sat: 9am - 7pm",
  },
  socials: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  }
};

export const ARTISTS: Artist[] = [
  {
    id: "a1",
    name: "Jaxson 'Needle' Cole",
    specialty: "Black & Grey / Realism",
    image: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=600&h=800",
    instagram: "@jaxson_ink"
  },
  {
    id: "a2",
    name: "Elena Rostova",
    specialty: "Fine Line / Micro Realism",
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=600&h=800",
    instagram: "@elena.tattoos"
  },
  {
    id: "a3",
    name: "Marcus Thorne",
    specialty: "Traditional / Neo-Trad",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800",
    instagram: "@thorne_trad"
  }
];

export const TATTOO_PORTFOLIO: PortfolioItem[] = [
  { id: "p1", url: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=600&h=600", category: "Fine Line" },
  { id: "p2", url: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?auto=format&fit=crop&q=80&w=600&h=600", category: "Black & Grey" },
  { id: "p3", url: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&q=80&w=600&h=600", category: "Traditional" },
  { id: "p4", url: "https://images.unsplash.com/photo-1588636737525-46ee38d7211e?auto=format&fit=crop&q=80&w=600&h=600", category: "Color" },
  { id: "p5", url: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&q=80&w=600&h=600", category: "Black & Grey" },
  { id: "p6", url: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=600&h=600", category: "Fine Line" },
];

export const TATTOO_FAQS: FAQItem[] = [
  { question: "How do I book a consultation?", answer: "Fill out the booking request form below with details about your idea, preferred style, and placement. We'll get back to you within 48 hours to schedule a consultation." },
  { question: "What is your deposit policy?", answer: "A non-refundable deposit is required to secure your appointment and drawing time. The deposit amount goes towards the final cost of your tattoo." },
  { question: "How old do I need to be?", answer: "You must be 18 years or older with a valid, government-issued photo ID. No exceptions." },
  { question: "What should I do before my appointment?", answer: "Get a good night's sleep, eat a solid meal within 2 hours of your appointment, and stay hydrated. Do not consume alcohol or blood-thinning medications for 24 hours prior." }
];

export const BARBERS: Barber[] = [
  {
    id: "b1",
    name: "Leo 'Razor' Diaz",
    specialty: "Skin Fades & Lineups",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600&h=800",
    instagram: "@leofades"
  },
  {
    id: "b2",
    name: "Sammy Banks",
    specialty: "Classic Cuts & Beard Sculpting",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=600&h=800",
    instagram: "@sammythebarber"
  }
];

export const BARBER_SERVICES: BarberService[] = [
  { name: "The Classic Cut", price: "$40", description: "Standard haircut with clippers and shears, finished with a hot towel." },
  { name: "Skin Fade", price: "$45", description: "Precision bald fade, blended flawlessly." },
  { name: "Cut & Beard Combo", price: "$65", description: "Any haircut paired with a detailed beard trim and lineup." },
  { name: "Beard Trim & Shape", price: "$25", description: "Sculpting and shaping with straight razor lineup." },
  { name: "Shape Up / Line Up", price: "$20", description: "Crisp edge up around the hairline and neck." },
];

export const CUTS_PORTFOLIO: CutItem[] = [
  { id: "c1", url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: "c2", url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: "c3", url: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=600&h=600" },
  { id: "c4", url: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=600&h=600" },
];
