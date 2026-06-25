export interface Artist {
  id: string;
  name: string;
  specialty: string;
  image: string;
  instagram: string;
}

export interface PortfolioItem {
  id: string;
  url: string;
  category: 'Black & Grey' | 'Traditional' | 'Fine Line' | 'Color';
}

export interface BarberService {
  name: string;
  price: string;
  description?: string;
}

export interface Barber {
  id: string;
  name: string;
  specialty: string;
  image: string;
  instagram: string;
}

export interface CutItem {
  id: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
