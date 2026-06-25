import { useQuery } from "@tanstack/react-query";
import type { JSX } from "react/jsx-runtime";
import { getHero } from "../../../api/home-hero.api";
import { getProduct } from "../../../api/products.api";
import Btn from "../../../components/Btn/Btn";
import styles from "./Hero.module.scss";
import clsx from "clsx";
import handleQueryRender from "../../../utils/handleQueryRender";

export default function Hero(): JSX.Element {
  const { data: hero, isFetching: isFetchingSection } = useQuery({
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

  return (
    <article className={styles.hero}>
      <div className="container">
        {handleQueryRender(
          isFetchingSection || isFetchingProduct,
          productError,
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

              <img
                src={hero.image.mobile}
                alt={hero.alt}
                className={styles.img}
              />
            </picture>
          </>,
        )}
      </div>
    </article>
  );
}
