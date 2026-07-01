import type { CartProduct } from "./cart.types";

type CheckoutModalType = {
  type: "checkout-confirmation";
  items: CartProduct[];
  grandTotal: number;
};

export type { CheckoutModalType };
