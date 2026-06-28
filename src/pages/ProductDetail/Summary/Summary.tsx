import type { JSX } from "react/jsx-runtime";
import type { ProductData } from "../../../types/data.types";
import styles from "./Summary.module.scss";
import clsx from "clsx";

type SummaryProps = {
  product: ProductData;
};

export default function Summary({ product }: SummaryProps): JSX.Element {
  return (
    <div className={styles.summary}>
      <section className={styles.features}>
        <h2 className={styles["features-title"]}>Features</h2>
        <p className={styles["features-text"]}>{product.features}</p>
      </section>
      <section className={styles["box"]}>
        <h2 className={styles["box-title"]}>In The Box</h2>
        <ul className={clsx(styles["box-list"], "reset-list")}>
          {product.includes.map((item) => (
            <li key={item.item} className={styles["box-item"]}>
              <p className={styles["box-item-quantity"]}>{item.quantity}x</p>
              <p className={styles["box-item-name"]}>{item.item}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
