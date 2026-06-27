import type { JSX } from "react/jsx-runtime";
import type { SectionRendererProps } from "../SectionRenderer.types";
import styles from "./SectionOne.module.scss";
import Btn from "../../../../components/Btn/Btn";
import useProductQuery from "../../../../hooks/useProductQuery";

export default function SectionOne({
  section,
}: SectionRendererProps): JSX.Element {
  const { jsx: sectionJSX } = useProductQuery(
    section.productSlug,
    (product) => (
      <>
        <picture className={styles.picture}>
          <source srcSet={section.image.desktop} media="(min-width: 1200px)" />
          <source srcSet={section.image.tablet} media="(min-width: 768px)" />
          <img
            src={section.image.mobile}
            alt={section.alt}
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h2 className={styles.name}>{section.alias || product.name}</h2>
          <p className={styles.desc}>{section.description}</p>
          <Btn
            color="dark"
            className={styles.btn}
            to={`products/${product.slug}`}
          >
            See Product
          </Btn>
        </div>
      </>
    ),
  );

  return <article className={styles["section-one"]}>{sectionJSX}</article>;
}
