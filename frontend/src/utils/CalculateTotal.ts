import { Product } from "../models/Product";
import { CartItem, CartStorageObjectType } from "../models/CartItem";

export default function calculateTotal(
  products: Product[],
  cartItems: CartStorageObjectType
): number[] {
  // Calculate the subtotal
  // const subtotal: number = Object.keys(cartItems).reduce((acc, curr) => {
  //   const product: Product = products[curr];
  //   const cartItem: CartItem = cartItems[curr];
  //   return acc + product.price * cartItem.amount;
  // }, 0);

  // // Shipping cost is free if subtotal is above $500
  // // Otherwise, it is 2% of subtotal
  // const shippingCost = subtotal > 500 ? 0 : subtotal * 0.02;
  // // Tax is 8% of subtotal
  // const tax = subtotal * 0.08;
  // // Total is subtotal + shipping cost + tax
  // const total = subtotal + shippingCost + tax;
  let subtotal = 0;
  let shippingCost = 0;
  let tax = 0;
  let total = 0;
  return [subtotal, shippingCost, tax, total];
}
