export interface Business {
  id: string;
  businessName: string;
  description: string;
  location: {
    address: string;
    city: string;
    state: string;
    postalCode: string;
    latitude: number;
    longitude: number;
  };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  ratings: number;
  reviews: [];
  highlights: string[];
  cta: { getDirections: string };
  gallery: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  services: [];
}
