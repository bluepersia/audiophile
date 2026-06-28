import type { CartItem } from "../types/cart.types";

export default function updateCartItem(
  cart: CartItem[],
  productId: number,
  amount: number,
): CartItem[] {
  const itemInCart: CartItem | undefined = cart.find(
    (cartItem) => cartItem.productId === productId,
  );

  if (itemInCart) {
    const newItem: CartItem = { ...itemInCart };
    newItem.quantity += amount;
    if (newItem.quantity <= 0) {
      return cart.filter((cartItem) => cartItem.productId != productId);
    }
    const newCart: CartItem[] = [...cart];
    newCart[cart.indexOf(itemInCart)] = newItem;
    return newCart;
  }

  if (amount < 0) return cart;

  return [
    ...cart,
    {
      productId,
      quantity: amount,
    },
  ];
}
