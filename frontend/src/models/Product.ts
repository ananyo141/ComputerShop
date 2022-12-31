// Product details to be fetched from backend
export interface Product {
  imgLink: string;
  name: string;
  price: number;
  seller: string;
  desc: string;
  inStock: number;
}

// Object type to store product object for id-key values
export type ProductStorageObjectType = { [key: string]: Product };

// Converts JSON strings to/from ProductStorageObjectType types
export class Convert {
  public static toProducts(json: string): { [key: string]: Product } {
    return JSON.parse(json);
  }

  public static productsToJson(value: { [key: string]: Product }): string {
    return JSON.stringify(value);
  }
}
