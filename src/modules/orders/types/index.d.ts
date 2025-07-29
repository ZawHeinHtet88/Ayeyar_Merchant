import type { Product } from "@/modules/products/types";

export interface Order {
  _id:string;
  code: string;
  productId:Product ;
  userId: {
    _id: string;
    name: string;
    email: string;
    role: string;
    shippingAddresses: [];
    paymentMethods: [];
    createdAt: string;
    updatedAt:string;
    id: string;
  };
  payment: string;
  isPaid: boolean;
  status: string;
  quantity: number;
  merchant: string;
  isDelivered: boolean;
  inventoryReserved: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}
