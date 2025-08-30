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
    address: {
      street: "yone pote";
      city: "hmawbi";
      state: "yangon";
      country: "myanmar";
    };
  };
  isPaid: boolean;
  payment: string;
  isDelivered: boolean;
  totalProducts: number;
  products: OrderProduct[];
  totalAmount: number;
  code: string;
}

export interface soldProduct {
  id: string;
  name: string;
  price: number;
  quantitySold: number;
  totalRevenue: number;
  orderCount: number;
  codSales: number;
  stripeSales: number;
  codRevenue: number;
  stripeRevenue: number;
}

export interface SaleHistory {
  overview: {
    totalProducts: number;
    soldProducts: number;
    totalQuantitySold: number;
    totalAmount: number;
    totalCodAmount: number;
    totalStripeAmount: number;
    totalOrders: number;
  };
  soldProducts: soldProduct[];
  paymentBreakdown: {
    cod: {
      amount: number;
      percentage: string;
      orders: number;
    };
    stripe: {
      amount: number;
      percentage: string;
      orders: number;
    };
  };
}
