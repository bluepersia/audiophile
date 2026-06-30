import type { JSX } from "react/jsx-runtime";
import CartItem from "../CartItem/CartItem";
import { formatted } from "../../utils/formatting";
import LabelValue from "../LabelValue/LabelValue";
import Btn from "../Btn/Btn";
import styles from "./CartModal.module.scss";
import QuantityPanel from "../QuantityPanel/QuantityPanel";
import { calculateTotalPrice } from "../../utils/cartCalculations";
import useCartItemsQuery from "../../hooks/useCartItemsQuery";

export default function CartModal(): JSX.Element {
  const { jsx } = useCartItemsQuery((cartContext, products) => {
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
  });

  return <div>{jsx}</div>;
}
