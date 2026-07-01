import type { JSX } from "react/jsx-runtime";
import CartItem from "../CartItem/CartItem";
import { formatted } from "../../utils/formatting";
import LabelValue from "../LabelValue/LabelValue";
import Btn from "../Btn/Btn";
import styles from "./CartModal.module.scss";
import QuantityPanel from "../QuantityPanel/QuantityPanel";
import { calculateTotalPrice } from "../../utils/cartCalculations";
import useCartItemsQuery from "../../hooks/useCartItemsQuery";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import clsx from "clsx";

export default function CartModal(): JSX.Element {
  const modalContext = useContext(ModalContext);

  const { jsx } = useCartItemsQuery((cartContext, cartProducts) => {
    const totalPrice = calculateTotalPrice(cartProducts);

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
              <ul className={clsx(styles["items-list"], "reset-list")}>
                {cartProducts.map((cartProduct) => (
                  <li key={cartProduct.productId}>
                    <CartItem
                      product={cartProduct}
                      quantity={cartProduct.quantity}
                    >
                      <QuantityPanel
                        variant="small"
                        className={styles["quantity-panel"]}
                        increment={() =>
                          cartContext.updateProductBy(cartProduct.productId, 1)
                        }
                        decrement={() =>
                          cartContext.updateProductBy(cartProduct.productId, -1)
                        }
                        quantity={cartProduct.quantity}
                      />
                    </CartItem>
                  </li>
                ))}
              </ul>
              <div className={styles["total-mg-btm"]}>
                <LabelValue
                  label="Total"
                  value={formatted.format(totalPrice)}
                />
              </div>
              <Btn
                to="checkout"
                className={styles["checkout-btn"]}
                onClick={() => modalContext.closeModal()}
              >
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
