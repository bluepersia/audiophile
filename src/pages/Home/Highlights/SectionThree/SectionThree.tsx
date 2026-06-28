import type { JSX } from "react/jsx-runtime";
import type { SectionRendererProps } from "../SectionRenderer.types";
import styles from "./SectionThree.module.scss";
import Btn from "../../../../components/Btn/Btn";
import useProductQuery from "../../../../hooks/useProductQuery";
import { useLocation } from "react-router";

export default function SectioNThree({
  section,
}: SectionRendererProps): JSX.Element {
  const location = useLocation();

  const { jsx: sectionJSX } = useProductQuery(
    section.productSlug,
    (product) => (
      <>
        <picture className={styles.picture}>
          <source srcSet={section.image.desktop} media="(min-width:1200px)" />
          <source srcSet={section.image.tablet} media="(min-width:768px)" />
          <img
            src={section.image.mobile}
            alt={section.alt}
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h2 className={styles.name}>{section.alias || product.name}</h2>
          <Btn
            color="transparent"
            to={`products/${product.slug}`}
            state={{ from: location.pathname }}
          >
            See Product
          </Btn>
        </div>
      </>
    ),
  );

  return <article className={styles["section-three"]}>{sectionJSX}</article>;
}
