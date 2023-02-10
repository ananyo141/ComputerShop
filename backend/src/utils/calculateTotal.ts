interface PurchaseDetails {
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
}

export default function calculateTotal(
  subtotal: number,
  shippingLimit: number = 500,
  shippingFactor: number = 0.2,
  taxFactor: number = 0.08
): PurchaseDetails {
  // Calculate the subtotal
  // Shipping cost is free if subtotal is above $500
  // Otherwise, it is 2% of subtotal
  const shippingCost = subtotal > shippingLimit ? 0 : subtotal * shippingFactor;
  // Tax is 8% of subtotal
  const tax = subtotal * taxFactor;
  // Total is subtotal + shipping cost + tax
  const total = subtotal + shippingCost + tax;
  return { subtotal, shippingCost, tax, total };
}
