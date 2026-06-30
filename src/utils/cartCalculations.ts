import type { CartItem } from "../types/cart.types";
import type { ProductData } from "../types/data.types";

function calculateTotalPrice(
  cart: CartItem[],
  products: ProductData[],
): number {
  const subtotals = cart.map(
    (cartItem, index) => cartItem.quantity * products[index].price,
  );

  const totalPrice = subtotals.reduce((prev, curr) => prev + curr, 0);

  return totalPrice;
}

export { calculateTotalPrice };
