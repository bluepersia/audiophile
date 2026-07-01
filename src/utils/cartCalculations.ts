import type { CartProduct } from "../types/cart.types";

function calculateTotalPrice(products: CartProduct[]): number {
  const totalPrice = products.reduce(
    (prev, curr) => prev + curr.getSubtotal(),
    0,
  );

  return totalPrice;
}

export { calculateTotalPrice };
