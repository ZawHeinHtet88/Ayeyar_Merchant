
export interface PaymentHistory {
  _id: string;
  customer: string;
  merchant: string;
  paymentMethod: string;
  amount: number;
  orderCode: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}
