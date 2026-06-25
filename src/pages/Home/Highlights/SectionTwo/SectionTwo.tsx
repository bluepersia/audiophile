import type { JSX } from "react/jsx-runtime";
import type { SectionRendererProps } from "../SectionRenderer.types";
import styles from "./SectionTwo.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../../../api/products.api";
import Btn from "../../../../components/Btn/Btn";
import spinner from "/src/assets/spinner.svg";
import { getErrorMessage } from "../../../../utils/handleError";

export default function SectionTwo({
  section,
}: SectionRendererProps): JSX.Element {
  const {
    data: product,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["products", section.productSlug],
    queryFn: () => getProduct(section.productSlug),
  });

  function render(): JSX.Element {
    if (isFetching) {
      return <img className="spinner" src={spinner} alt="Loading" />;
    }

    if (error) {
      return <p className="error">{getErrorMessage(error)}</p>;
    }

    return (
      <>
        <div className={styles.content}>
          <h2 className={styles.name}>{product.name}</h2>
          <Btn color="transparent" to={`products/${product.slug}`}>
            See Product
          </Btn>
        </div>
        <picture className={styles.picture}>
          <source srcSet={section.image.desktop} media="(min-width:1200px)" />
          <source srcSet={section.image.tablet} media="(min-width:768px)" />
          <img
            src={section.image.mobile}
            alt={section.alt}
            className={styles.img}
          />
        </picture>
      </>
    );
  }

  return <article className={styles["section-two"]}>{render()}</article>;
}
