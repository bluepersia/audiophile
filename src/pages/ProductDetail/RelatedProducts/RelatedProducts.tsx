import type { JSX } from "react/jsx-runtime";
import type { ProductData } from "../../../types/data.types";
import styles from "./RelatedProducts.module.scss";
import Btn from "../../../components/Btn/Btn";
import clsx from "clsx";

type RelatedProps = {
  product: ProductData;
};

export default function RelatedProducts({
  product,
}: RelatedProps): JSX.Element {
  return (
    <section className={styles.related}>
      <h2 className={styles.title}>You May Also Like</h2>
      <ul className={clsx(styles.list, "reset-list")}>
        {product.others.map((other) => (
          <li key={other.slug}>
            <article className={styles.product}>
              <picture className={styles["product-picture"]}>
                <source
                  srcSet={other.image.desktop}
                  media="(min-width:1200px)"
                />
                <source srcSet={other.image.tablet} media="(min-width:768px)" />
                <img
                  src={other.image.mobile}
                  alt={other.image.alt}
                  className={styles["product-img"]}
                />
              </picture>
              <h3 className={styles["product-name"]}>{other.name}</h3>
              <Btn
                to={`/products/${other.slug}`}
                className={styles["product-btn"]}
              >
                See Product
              </Btn>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
