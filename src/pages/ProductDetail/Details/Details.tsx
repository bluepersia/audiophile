import type { JSX } from "react/jsx-runtime";
import type { ProductData } from "../../../types/data.types";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext/CartContext";
import styles from "./Details.module.scss";
import clsx from "clsx";
import { formatted } from "../../../utils/formatting";
import QuantityPanel from "../../../components/QuantityPanel/QuantityPanel";
import Btn from "../../../components/Btn/Btn";

const QUANTITY_MAX = 99;
const QUANTITY_MIN = 1;

type DetailsProps = {
  product: ProductData;
};
export default function Details({ product }: DetailsProps): JSX.Element {
  const cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  function increment(): void {
    setQuantity((prev) => {
      let result = prev + 1;
      if (result > QUANTITY_MAX) result = QUANTITY_MAX;
      return result;
    });
  }

  function decrement(): void {
    setQuantity((prev) => {
      let result = prev - 1;
      if (result < QUANTITY_MIN) result = QUANTITY_MIN;
      return result;
    });
  }

  return (
    <section className={styles.details}>
      <div className={clsx(styles["details-inner"], "container")}>
        <picture className={styles.picture}>
          <source srcSet={product.image.desktop} media="(min-width:1200px)" />
          <source srcSet={product.image.tablet} media="(min-width:768px)" />
          <img
            src={product.image.mobile}
            alt={product.alt}
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          {product.new && (
            <p className={clsx(styles.new, "overline")}>New Product</p>
          )}
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{formatted.format(product.price)}</p>
          <div className={styles.actions}>
            <QuantityPanel
              increment={increment}
              decrement={decrement}
              quantity={quantity}
              className={styles["quantity-panel"]}
            />
            <Btn
              onClick={() => cartContext.updateProductBy(product.id, quantity)}
            >
              Add To Cart
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
