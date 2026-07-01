import type { JSX } from "react/jsx-runtime";
import tickIcon from "/src/assets/checkout/icon-order-confirmation.svg";
import CartItemWithQuantity from "../CartItem/CartItemWithQuantity";
import { formatted } from "../../utils/formatting";
import type { CheckoutModalType } from "../../types/modal.types";
import styles from "./CheckoutModal.module.scss";
import Btn from "../Btn/Btn";

type CheckoutModalProps = {
  modal: CheckoutModalType;
  closeModal: () => void;
};
export default function CheckoutModal({
  modal,
  closeModal,
}: CheckoutModalProps): JSX.Element {
  const items = modal.items;
  const firstItem = items[0];

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
      <Btn to="/" className={styles["back-btn"]} onClick={closeModal}>
        Back To Home
      </Btn>
    </section>
  );
}
