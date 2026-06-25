import type { JSX } from "react/jsx-runtime";
import type { SectionRendererProps } from "../SectionRenderer.types";
import styles from "./SectionOne.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../../../api/products.api";
import Btn from "../../../../components/Btn/Btn";
import handleQueryRender from "../../../../utils/handleQueryRender";

export default function SectionOne({
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

  return (
    <article className={styles["section-one"]}>
      {handleQueryRender(
        isFetching,
        error,
        <>
          <picture className={styles.picture}>
            <source
              srcSet={section.image.desktop}
              media="(min-width: 1200px)"
            />
            <source srcSet={section.image.tablet} media="(min-width: 768px)" />
            <img
              src={section.image.mobile}
              alt={section.alt}
              className={styles.img}
            />
          </picture>
          <div className={styles.content}>
            <h2 className={styles.name}>{product.name}</h2>
            <p className={styles.desc}>{section.description}</p>
            <Btn
              color="dark"
              className={styles.btn}
              to={`products/${product.slug}`}
            >
              See Product
            </Btn>
          </div>
        </>,
      )}
    </article>
  );
}
