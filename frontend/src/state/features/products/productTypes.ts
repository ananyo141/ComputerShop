import { Product } from "../../../models/Product";

export type ProductItemType = { [id: string]: Product };

export interface ProductState {
  items: ProductItemType;
  isLoading: boolean;
  error: Error | null;
}
