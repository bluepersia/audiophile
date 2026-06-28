import { createContext, type JSX, type PropsWithChildren } from "react";
import type { CartItem } from "../../types/cart.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getCart, updateCartItem } from "../../api/cart.api";
import updateCartItemArray from "../../utils/updateCartItem";

type CartContextType = {
  cart: CartItem[];
  updateProductBy: (productId: number, amount: number) => void;
};

const CartContext = createContext<null | CartContextType>(null);

export default function CartContextProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(true),
  });
  const mutation = useMutation({
    mutationKey: ["cart"],
    mutationFn: (variables: { productId: number; amount: number }) =>
      updateCartItem(variables.productId, variables.amount, true),
    onMutate: async (variables, context) => {
      //Optimistic update should be source of truth, so we disable any external updates to the query cache
      await context.client.cancelQueries({ queryKey: ["cart"] });

      //Set cache immediately as "local state" so that the user action is triggered instantly
      context.client.setQueryData(["cart"], (old: CartItem[]) =>
        updateCartItemArray(old, variables.productId, variables.amount),
      );
    },
    //Resync with server after the last mutation as source of truth
    onSettled: (_data, _err, _variables, _onMutateResult, context) => {
      if (context.client.isMutating({ mutationKey: ["cart"] }) === 1) {
        context.client.invalidateQueries({ queryKey: ["cart"] });
      }
    },
  });

  function updateProductBy(productId: number, amount: number): void {
    mutation.mutate({ productId, amount });
  }

  return (
    <CartContext.Provider value={{ cart, updateProductBy }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };
