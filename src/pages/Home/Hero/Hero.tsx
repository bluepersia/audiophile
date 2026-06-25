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
  const {
    data: hero,
    isFetching: isFetchingSection,
    error: heroError,
  } = useQuery({
    queryKey: ["home-hero"],
    queryFn: getHero,
  });

  const {
    data: product,
    isFetching: isFetchingProduct,
    error: productError,
  } = useQuery({
    queryKey: ["products", hero?.productSlug],
    queryFn: () => getProduct(hero.productSlug),
    enabled: !!hero,
  });

  function render(): JSX.Element {
    if (isFetchingSection || isFetchingProduct) {
      return <img className="spinner" src={spinner} alt="Loading" />;
    }

    if (heroError || productError) {
      return (
        <p className="error">{getErrorMessage(heroError || productError)}</p>
      );
    }

    return (
      <>
        <div className={styles.content}>
          <p className={clsx(styles.new, "overline")}>
            {product.new ? "New Product" : ""}
          </p>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.desc}>{hero.description}</p>
          <Btn className={styles.btn} to={`products/${product.slug}`}>
            See Product
          </Btn>
        </div>

        <picture className={styles.picture}>
          <source media="(min-width: 1200px)" srcSet={hero.image.desktop} />
          <source media="(min-width:768px)" srcSet={hero.image.tablet} />

          <img src={hero.image.mobile} alt={hero.alt} className={styles.img} />
        </picture>
      </>
    );
  }

  return (
    <article className={styles.hero}>
      <div className="container">{render()}</div>
    </article>
  );
}
