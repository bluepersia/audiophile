import type { JSX } from "react/jsx-runtime";
import useCartItemsQuery from "../../../hooks/useCartItemsQuery";
import {
  calculateShipping,
  calculateVAT,
  calculateTotalPrice,
} from "../../../utils/cartCalculations";
import LabelValue from "../../../components/LabelValue/LabelValue";
import { formatted } from "../../../utils/formatting";
import Btn from "../../../components/Btn/Btn";
import type { CartProduct } from "../../../types/cart.types";
import clsx from "clsx";
import styles from "./Summary.module.scss";
import CartItemWithQuantity from "../../../components/CartItem/CartItemWithQuantity";

type SummaryProps = {
  pay: (items: CartProduct[], grandTotal: number) => void;
  className: string;
};
export default function Summary({ pay, className }: SummaryProps): JSX.Element {
  const { jsx: cartJSX } = useCartItemsQuery((_cartContext, cartProducts) => {
    const totalPrice = calculateTotalPrice(cartProducts);
    const shippingCost = calculateShipping();
    const VAT = calculateVAT(totalPrice);

    const totalPriceIncVAT = totalPrice + VAT;

    const grandTotal = totalPriceIncVAT + shippingCost;

    return (
      <>
        <ul className={clsx(styles["cart-list"], "reset-list")}>
          {cartProducts.map((cartProduct) => (
            <li key={cartProduct.productId}>
              <CartItemWithQuantity cartProduct={cartProduct} />
            </li>
          ))}
        </ul>
        <ul className={clsx(styles["summary-list"], "reset-list")}>
          <li>
            <LabelValue
              label="Total"
              value={formatted.format(totalPriceIncVAT)}
            />
          </li>
          <li>
            <LabelValue
              label="Shipping"
              value={formatted.format(shippingCost)}
            />
          </li>
          <li>
            <LabelValue label="VAT (Included)" value={formatted.format(VAT)} />
          </li>
          <li>
            <LabelValue
              label="Grand Total"
              value={formatted.format(grandTotal)}
              variant="primary"
            />
          </li>
        </ul>

        <Btn
          onClick={() => pay(cartProducts, grandTotal)}
          className={styles["pay-btn"]}
        >
          Continue & Pay
        </Btn>
      </>
    );
  });

  return (
    <section className={clsx(styles.summary, className)}>
      <h2 className={styles.title}>Summary</h2>
      {cartJSX}
    </section>
  );
}
