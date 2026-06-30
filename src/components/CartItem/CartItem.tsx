import type { JSX } from "react/jsx-runtime";
import type { CartItem } from "../../types/cart.types";
import type { PropsWithChildren } from "react";
import { memo } from "react";
import type { ProductData } from "../../types/data.types";
import { formatted } from "../../utils/formatting";
import styles from "./CartItem.module.scss";

type CartItemProps = PropsWithChildren & {
  product: ProductData;
  quantity: number;
};
function CartItem({ product, children }: CartItemProps): JSX.Element {
  return (
    <article className={styles["cart-item"]}>
      <img
        src={product.image.mobile}
        alt={product.alt}
        className={styles.img}
      />
      <div>
        <h3 className={styles.name}>{product.codename}</h3>
        <p className={styles.price}>{formatted.format(product.price)}</p>
      </div>
      {children}
    </article>
  );
}

export default memo(CartItem, (prev, next) => {
  return prev.quantity === next.quantity && prev.product === next.product;
});
