import { Product } from "../models/Product";

export default function calculateTotal(
  products: string[],
  getProduct: (id: string) => Product
): number[] {
  // Calculate the subtotal
  const subtotal: number = products.reduce((acc: number, curr: string) => {
    const product: Product = getProduct(curr);
    return acc + product.price * (product.amount ?? 0);
  }, 0);

  // Shipping cost is free if subtotal is above $500
  // Otherwise, it is 2% of subtotal
  const shippingCost = subtotal > 500 ? 0 : subtotal * 0.02;
  // Tax is 8% of subtotal
  const tax = subtotal * 0.08;
  // Total is subtotal + shipping cost + tax
  const total = subtotal + shippingCost + tax;
  return [subtotal, shippingCost, tax, total];
}
