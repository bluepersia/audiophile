import type { JSX } from "react/jsx-runtime";
import tickIcon from "/src/assets/checkout/icon-order-confirmation.svg";
import CartItemWithQuantity from "../CartItem/CartItemWithQuantity";
import { formatted } from "../../utils/formatting";
import styles from "./CheckoutModal.module.scss";
import Btn from "../Btn/Btn";
import { useCallback, useContext, useEffect } from "react";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import type { CheckoutModalType } from "../../types/modal.types";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { useNavigate } from "react-router";

export default function CheckoutModal(): JSX.Element {
  const modalContext = useContext(ModalContext);
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const modal = modalContext.modal as CheckoutModalType;

  const items = modal.items;
  const firstItem = items[0];

  const onClosed = useCallback(() => {
    cartContext.removeAll();
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    modalContext.addOnClosed(onClosed);

    return () => {
      modalContext.removeOnClosed(onClosed);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles["checkout-modal"]}>
      <img src={tickIcon} alt="Checkmark" className={styles.checkmark} />
      <h2 className={styles.title}>Thank you for your order</h2>
      <p className={styles.desc}>
        You will receive an email confirmation shortly.
      </p>
      <div className={styles.summary}>
        <div className={styles["items-summary"]}>
          <CartItemWithQuantity cartProduct={firstItem} />
          {items.length > 1 && (
            <p className={styles["and-others-text"]}>
              and {items.length - 1} other item(s)
            </p>
          )}
        </div>
        <div className={styles["price-summary"]}>
          <h3 className={styles.total}>Grand Total</h3>
          <p>{formatted.format(modal.grandTotal)}</p>
        </div>
      </div>
      <Btn
        to="/"
        className={styles["back-btn"]}
        onClick={modalContext.closeModal}
      >
        Back To Home
      </Btn>
    </section>
  );
}
