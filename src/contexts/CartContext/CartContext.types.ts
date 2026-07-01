import type { CartItem } from "../../types/cart.types";

export type CartContextType = {
  cart: CartItem[];
  isPending: boolean;
  error: Error;
  updateProductBy: (productId: number, amount: number) => void;
  removeAll: () => void;
};
