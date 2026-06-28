import type { JSX } from "react/jsx-runtime";
import type { ProductData } from "../../../types/data.types";
import styles from "./Gallery.module.scss";

type GalleryProps = {
  product: ProductData;
};

export default function Gallery({ product }: GalleryProps): JSX.Element {
  return (
    <section className={styles.gallery}>
      <h2 className="sr-only">Gallery</h2>
      <div className={styles.images}>
        <picture className={styles["picture-one"]}>
          <source
            srcSet={product.gallery.first.desktop}
            media="(min-width:1200px)"
          />
          <source
            srcSet={product.gallery.first.tablet}
            media="(min-width:768px)"
          />
          <img
            className={styles["img-one"]}
            src={product.gallery.first.mobile}
            alt={product.gallery.first.alt}
          />
        </picture>
        <picture className={styles["picture-two"]}>
          <source
            srcSet={product.gallery.second.desktop}
            media="(min-width:1200px)"
          />
          <source
            srcSet={product.gallery.second.tablet}
            media="(min-width:768px)"
          />
          <img
            className={styles["img-two"]}
            src={product.gallery.second.mobile}
            alt={product.gallery.second.alt}
          />
        </picture>
        <picture className={styles["picture-three"]}>
          <source
            srcSet={product.gallery.third.desktop}
            media="(min-width:1200px)"
          />
          <source
            srcSet={product.gallery.third.tablet}
            media="(min-width:768px)"
          />
          <img
            className={styles["img-three"]}
            src={product.gallery.third.mobile}
            alt={product.gallery.third.alt}
          />
        </picture>
      </div>
    </section>
  );
}
