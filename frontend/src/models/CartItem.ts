// Save cart object as value to product keys
export interface CartItem {
  amount: number;
  isWishlisted: boolean;
}

// Cart storage type
export type CartStorageObjectType = { [id: string]: CartItem };
