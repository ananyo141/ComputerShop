"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotal(
  subtotal,
  shippingLimit = 500,
  shippingFactor = 0.2,
  taxFactor = 0.08
) {
  const shippingCost = subtotal > shippingLimit ? 0 : subtotal * shippingFactor;
  const tax = subtotal * taxFactor;
  const total = subtotal + shippingCost + tax;
  return { subtotal, shippingCost, tax, total };
}
exports.default = calculateTotal;
