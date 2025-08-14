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
  rating: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  NRCNumber?:string;
  NRCFront?: string;
  NRCBack?: string;  
  optimize_logo ?: string
}
