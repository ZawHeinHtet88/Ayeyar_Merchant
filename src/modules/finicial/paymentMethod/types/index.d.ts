export interface Payment {
  _id: string;
  merchant: string;
  pyMethod: string;
  accName: string;
  accNumber : string;
  QR: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}
