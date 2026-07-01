import { useContext } from "react";
import type { JSX } from "react/jsx-runtime";
import {
  CartContext,
  type CartContextType,
} from "../contexts/CartContext/CartContext";
import { useQuery } from "@tanstack/react-query";
import { getProductsByIDs } from "../api/products.api";
import Error from "../components/Error/Error";
import Spinner from "../components/Spinner/Spinner";
import type { CartProduct } from "../types/cart.types";

export default function useCartItemsQuery(
  cartRender: (
    cartContext: CartContextType,
    cartProducts: CartProduct[],
  ) => JSX.Element,
): { jsx: JSX.Element } {
  const cartContext = useContext(CartContext);
  const productIds =
    cartContext.cart?.map((cartItem) => cartItem.productId) || undefined;

  const {
    data: products,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products", productIds],
    queryFn: () => getProductsByIDs(productIds),
    enabled: Boolean(productIds),
  });

  function render(): JSX.Element {
    if (cartContext.isPending || isPending) return <Spinner />;

    if (cartContext.error || error)
      return <Error error={cartContext.error || error} />;

    return cartRender(
      cartContext,
      cartContext.cart.map((cartItem, index) => {
        const product = products[index];
        return {
          ...cartItem,
          ...product,
          getSubtotal: () => cartItem.quantity * product.price,
        };
      }),
    );
  }

  return {
    jsx: render(),
  };
}
