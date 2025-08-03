export interface OrderProduct {
  productId: string;
  quantity: number;
  name: string;
  price: number;
  totalPrice: number;
}

export interface Order {
  status: string;
  createdAt: string;
  user: {
    name: string;
    email: string;
    shippingAddresses: string[];
  };
  isPaid: boolean;
  payment: string;
  isDelivered: boolean;
  totalProducts: number;
  products: OrderProduct[];
  totalAmount: number;
  code: string;
}
