import { createContext, type JSX, type PropsWithChildren } from "react";
import type { CartItem } from "../../types/cart.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCart, updateCartItem, clearCart } from "../../api/cart.api";
import {
  updateCartItem as updateCartItemArray,
  clearCart as clearCartArray,
} from "../../utils/updateCartItem";

type CartContextType = {
  cart: CartItem[];
  isPending: boolean;
  error: Error;
  updateProductBy: (productId: number, amount: number) => void;
  removeAll: () => void;
};

type CartAction =
  | {
      type: "updateQuantity";
      productId: number;
      amount: number;
    }
  | {
      type: "clearCart";
    };

const CartContext = createContext<null | CartContextType>(null);

export default function CartContextProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const {
    data: cart,
    isPending,
    error,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(true),
  });
  const mutation = useMutation({
    mutationKey: ["cart"],
    mutationFn: (cartAction: CartAction) => {
      switch (cartAction.type) {
        case "updateQuantity":
          return updateCartItem(cartAction.productId, cartAction.amount, true);

        case "clearCart":
          return clearCart(true);
      }
    },
    onMutate: async (cartAction: CartAction, context) => {
      //Optimistic update should be source of truth, so we disable any external updates to the query cache
      await context.client.cancelQueries({ queryKey: ["cart"] });

      //Set cache immediately as "local state" so that the user action is triggered instantly
      context.client.setQueryData(["cart"], (old: CartItem[]) => {
        switch (cartAction.type) {
          case "updateQuantity":
            return updateCartItemArray(
              old,
              cartAction.productId,
              cartAction.amount,
            );
          case "clearCart":
            return clearCartArray();
        }
        return old;
      });
    },
    //Resync with server after the last mutation as source of truth
    onSettled: (_data, _err, _variables, _onMutateResult, context) => {
      if (context.client.isMutating({ mutationKey: ["cart"] }) === 1) {
        context.client.invalidateQueries({ queryKey: ["cart"] });
      }
    },
  });

  function updateProductBy(productId: number, amount: number): void {
    mutation.mutate({ type: "updateQuantity", productId, amount });
  }

  function removeAll(): void {
    mutation.mutate({ type: "clearCart" });
  }

  return (
    <CartContext.Provider
      value={{ cart, updateProductBy, removeAll, isPending, error }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
