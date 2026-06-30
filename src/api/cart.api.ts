import type { CartItem } from "../types/cart.types";
import { updateCartItem as updateCartItemArray } from "../utils/updateCartItem";

async function updateCartItem(
  productId: number,
  amount: number,
  guestMode: boolean,
): Promise<void> {
  if (guestMode) {
    let cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");

    cart = updateCartItemArray(cart, productId, amount);

    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

async function clearCart(guestMode: boolean): Promise<void> {
  if (guestMode) {
    localStorage.setItem("cart", "[]");
  }
}

async function getCart(guestMode: boolean): Promise<CartItem[]> {
  if (guestMode) {
    const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    return cart;
  }
  return [];
}

export { updateCartItem, getCart, clearCart };
