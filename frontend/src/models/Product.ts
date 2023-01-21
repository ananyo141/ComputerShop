// Product details to be fetched from backend
export interface Product {
  _id: string;
  imgLink: string;
  name: string;
  price: number;
  seller: string;
  desc: string;
  inStock: number;
  amount?: number;
  isWishlisted?: boolean;
}

// Converts JSON strings to/from Product arrays
export class Convert {
  public static toProducts(json: string): Product[] {
    return JSON.parse(json);
  }

  public static productsToJson(value: Product[]): string {
    return JSON.stringify(value);
  }
}
