// To parse this data:
//
//   import { Convert } from "./file";
//
//   const product = Convert.toProduct(json);

export interface Product {
  imgLink: string;
  name: string;
  price: number;
  seller: string;
  desc: string;
  inStock: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toProducts(json: string): { [key: string]: Product } {
    return JSON.parse(json);
  }

  public static productsToJson(value: { [key: string]: Product }): string {
    return JSON.stringify(value);
  }
}
