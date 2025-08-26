export interface Withdrawal {
  _id: string;
  amount: number;
  currency: string;
  merchant: {
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
    phone: "(376) 545-8081 x059";
    businessName: string;
  };
  status: string;
  paymentCategory: {
    _id: string;
    merchant: string;
    pyMethod: string;
    accNumber: string;
    accName: string;
    QR: string;
    active: boolean;
  };
  createdAt: string;
  updatedAt: string;
  id: string;
}
