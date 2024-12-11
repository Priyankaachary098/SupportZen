export interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
}

export interface Provider {
  id: string;
  name: string;
  services: string[];
  rating: number;
  reviews: number;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}