export type CartType = { [id: string]: number };
export type CartItemPayload = { id: string; amount: number };

export interface CartState {
  items: CartType;
  amount: number;
  isLoading: boolean;
  error: Error | null;
}
