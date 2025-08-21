export interface WithDraw {
  _id: string;
  amount: number;
  currency: string;
  status: string;
  paymentCategory: {
    _id: string;
    merchant: string;
    pyMethod: string;
    accNumber: string;
    accName: string;
    QR: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    __v: 0;
    id: string;
  };
  createdAt: string;
  updatedAt: string;
  id: string;
}
