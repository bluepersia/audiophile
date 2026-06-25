import { useQuery } from "@tanstack/react-query";
import type { JSX } from "react/jsx-runtime";
import { getHero } from "../../../api/home-hero.api";
import { getProduct } from "../../../api/products.api";
import Btn from "../../../components/Btn/Btn";
import styles from "./Hero.module.scss";
import spinner from "/src/assets/spinner.svg";
import { getErrorMessage } from "../../../utils/handleError";
import clsx from "clsx";

export default function Hero(): JSX.Element {
  const { data: sectionData, isFetching: isFetchingSection } = useQuery({
    queryKey: ["home-hero"],
    queryFn: getHero,
  });

  const {
    data: productData,
    isFetching: isFetchingProduct,
    error: productError,
  } = useQuery({
    queryKey: ["products", sectionData?.productSlug],
    queryFn: () => getProduct(sectionData.productSlug),
    enabled: !!sectionData,
  });

  if (isFetchingSection || isFetchingProduct) {
    return (
      <div className={clsx(styles.hero)}>
        <div className="container">
          <img src={spinner} alt="Loading" />
        </div>
      </div>
    );
  }

  if (productError) {
    return (
      <div className={clsx(styles.hero)}>
        <div className="container">
          <p className="error">{getErrorMessage(productError)}</p>
        </div>
      </div>
    );
  }

  return (
    <article className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <p className={clsx(styles.new, "overline")}>
            {productData.new ? "New Product" : ""}
          </p>
          <h1 className={styles.name}>{productData.name}</h1>
          <p className={styles.desc}>{sectionData.description}</p>
          <Btn className={styles.btn} to={`products/${productData.slug}`}>
            See Product
          </Btn>
        </div>

        <picture className={styles.picture}>
          <source
            media="(min-width: 1200px)"
            srcSet={sectionData.image.desktop}
          />
          <source media="(min-width:768px)" srcSet={sectionData.image.tablet} />

          <img
            src={sectionData.image.mobile}
            alt={sectionData.alt}
            className={styles.img}
          />
        </picture>
      </div>
    </article>
  );
}
