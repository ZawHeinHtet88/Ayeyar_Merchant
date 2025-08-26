export interface Product {
  name: string;
  body: string;
  description: string;
  discount: number;
  category: {
    _id: string;
    name: string;
    type: string;
    id: string;
  };
  type: {
    _id: string;
    name: string;
    image: string;
  };
  brand: string;
  tags: {
    _id: string;
    name: string;
  }[];
  optimize_images: string[];
  colors: [];
  sizes: [];
  images: string[];
  price: number;
  inventory: number;
  shipping: number;
  status: number;
  isFeatured: boolean;
  cashOnDelivery: boolean;
  merchant: Merchant;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Type {
  _id: string;
  name: string;
  image: string;
}

export interface Merchant {
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    full: string;
  };
  _id: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  businessName: string;
  logo: string;
  description: string;
  balance: number;
  rating: number;
  __v: 0;
  createdAt: number;
  updatedAt: number;
  id: number;
}

export interface SuggestProducts {
  name: string;
  description: string;
  body: string;
  price: number;
  tags: string[];
  category: string;
}
