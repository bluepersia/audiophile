import { useContext } from "react";
import type { JSX } from "react/jsx-runtime";
import { CartContext } from "../../contexts/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import { useQuery } from "@tanstack/react-query";
import { getProductsByIDs } from "../../api/products.api";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import { formatted } from "../../utils/formatting";
import LabelValue from "../LabelValue/LabelValue";
import Btn from "../Btn/Btn";
import styles from "./CartModal.module.scss";
import QuantityPanel from "../QuantityPanel/QuantityPanel";
import { calculateTotalPrice } from "../../utils/cartCalculations";

export default function CartModal(): JSX.Element {
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

    const totalPrice = calculateTotalPrice(cartContext.cart, products);

    return (
      <div className="container">
        <div className={styles["cart-modal"]}>
          <div className={styles.header}>
            <h2 className={styles.title}>Cart ({cartContext.cart.length})</h2>{" "}
            <button
              onClick={cartContext.removeAll}
              className={styles["remove-all-btn"]}
            >
              Remove all
            </button>
          </div>
          {cartContext.cart.length > 0 ? (
            <>
              <ul className={styles["items-list"]}>
                {cartContext.cart.map((cartItem, index) => (
                  <CartItem
                    key={cartItem.productId}
                    product={products[index]}
                    quantity={cartItem.quantity}
                  >
                    <QuantityPanel
                      variant="small"
                      className={styles["quantity-panel"]}
                      increment={() =>
                        cartContext.updateProductBy(cartItem.productId, 1)
                      }
                      decrement={() =>
                        cartContext.updateProductBy(cartItem.productId, -1)
                      }
                      quantity={cartItem.quantity}
                    />
                  </CartItem>
                ))}
              </ul>
              <div className={styles["total-mg-btm"]}>
                <LabelValue
                  label="Total"
                  value={formatted.format(totalPrice)}
                />
              </div>
              <Btn to="checkout" className={styles["checkout-btn"]}>
                Checkout
              </Btn>
            </>
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>
      </div>
    );
  }

  return <div>{render()}</div>;
}
