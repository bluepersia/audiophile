import type { JSX } from "react/jsx-runtime";
import styles from "./QuantityPanel.module.scss";
import clsx from "clsx";

type QuantiyPanelProps = {
  quantity: number;
  increment: () => void;
  decrement: () => void;
  variant?: "default" | "small";
  className?: string;
};
export default function QuantityPanel({
  quantity,
  increment,
  decrement,
  variant = "default",
  className = "",
}: QuantiyPanelProps): JSX.Element {
  return (
    <div
      className={clsx(
        styles["quantity-panel"],
        styles[`quantity-panel--${variant}`],
        className,
      )}
    >
      <button onClick={decrement} className={styles["quantity-btn"]}>
        -
      </button>
      <p className={styles.quantity}>{quantity}</p>
      <button onClick={increment} className={styles["quantity-btn"]}>
        +
      </button>
    </div>
  );
}
