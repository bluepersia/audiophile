import type { ProductData } from "./data.types";

type CartItem = {
  productId: number;
  quantity: number;
};

type CartProduct = CartItem &
  ProductData & {
    getSubtotal: () => number;
  };

export type { CartItem, CartProduct };
