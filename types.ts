
export interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Facility {
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  image: string;
  rating: number;
}
