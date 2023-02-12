export interface OrderItemType {
  imgLink: string;
  name: string;
  price: number;
  seller: string;
  desc: string;
  quantity: number;
}

export interface PaymentType {
  transactionId: string;
  subtotal: number;
  tax: number;
  shippingCost: number;
  total: number;
}

export interface ShippingDetails {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: number;
}

export interface OrderType {
  shippingDetails: ShippingDetails;
  orderItems: OrderItemType[];
  payment: PaymentType;
  _id: string;
  createdAt: string;
}

export interface OrderState {
  isLoading: boolean;
  orders: OrderType[];
  newOrderNotifications: number;
  error: string | null;
}
