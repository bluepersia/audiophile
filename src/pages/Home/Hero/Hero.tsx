import type { JSX } from "react";
import styles from "./Hero.module.css";
import NewProduct from "../../../components/NewProduct/NewProduct";
import { useQuery } from "@tanstack/react-query";
import { getHero } from "../../../api/home-sections.api";
import { getUserErrorMessage } from "./Hero.utils";
import { getProductBySlug } from "../../../api/products.api";
import Btn from "../../../components/Btn/Btn";

export default function Hero(): JSX.Element {
  const sectionQuery = useQuery({
    queryKey: ["hero"],
    queryFn: getHero,
  });

  const productQuery = useQuery({
    queryKey: ["product", sectionQuery.data?.productSlug],
    queryFn: () => getProductBySlug(sectionQuery.data.productSlug),
    enabled: Boolean(sectionQuery.data),
  });

  const isLoaded = sectionQuery.data && productQuery.data;

  function render() {
    if (sectionQuery.error || productQuery.error)
      return (
        <p className="error">
          {getUserErrorMessage(sectionQuery.error, productQuery.error)}
        </p>
      );

    if (isLoaded)
      return (
        <>
          <div className={"container"}>
            <div className={styles.content}>
              <NewProduct className={styles["new-product"]} />
              <h1 className={styles.title}>{productQuery.data.name}</h1>
              <p className={styles.desc}>{sectionQuery.data.description}</p>
              <Btn to={`/product/${sectionQuery.data.productSlug}`}>
                See Product
              </Btn>
            </div>
          </div>
          <picture className={styles.picture}>
            <source
              srcSet="/assets/home/desktop/image-hero.jpg"
              media="(min-width:1200px)"
            />
            <source
              srcSet="/assets/home/tablet/image-header.jpg"
              media="(min-width:768px)"
            />

            <img
              src="/assets/home/mobile/image-header.jpg"
              alt="Minimalist product shot of black over-ear headphones centered against a dark background, with soft lighting highlighting the ear cushions and headband for a sleek, modern look."
              className={styles.img}
            />
          </picture>
        </>
      );
  }
  return <article className={styles.hero}>{render()}</article>;
}
