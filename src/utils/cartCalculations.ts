import type { CartProduct } from "../types/cart.types";

function calculateTotalPrice(products: CartProduct[]): number {
  const totalPrice = products.reduce(
    (prev, curr) => prev + curr.getSubtotal(),
    0,
  );

  return totalPrice;
}

function calculateShipping(): number {
  return 50;
}

function calculateVAT(totalPrice: number): number {
  return totalPrice * 0.2;
}

export { calculateTotalPrice, calculateShipping, calculateVAT };
