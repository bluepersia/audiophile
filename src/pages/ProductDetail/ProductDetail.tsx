import { useParams } from "react-router";
import type { JSX } from "react/jsx-runtime";
import useProductQuery from "../../hooks/useProductQuery";
import Details from "./Details/Details";
import styles from "./ProductDetail.module.scss";
import Summary from "./Summary/Summary";
import Gallery from "./Gallery/Gallery";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Categories from "../../components/Categories/Categories";
import AboutUs from "../../components/AboutUs/AboutUs";
import GoBack from "../../components/GoBack/GoBack";

export default function ProductDetail(): JSX.Element {
  const { slug } = useParams();

  const { jsx: productJSX } = useProductQuery(slug, (product) => (
    <>
      <article>
        <div className={styles["details-mg-btm"]}>
          <Details product={product} />
        </div>
        <div className={styles["summary-mg-btm"]}>
          <Summary product={product} />
        </div>
        <div className={styles["gallery-mg-btm"]}>
          <Gallery product={product} />
        </div>
        <div className={styles["related-mg-btm"]}>
          <RelatedProducts product={product} />
        </div>
        <div className={styles["categories-mg-btm"]}>
          <Categories />
        </div>
        <div className={styles["about-us-mg-btm"]}>
          <AboutUs />
        </div>
      </article>
    </>
  ));
  return (
    <>
      <GoBack />
      {productJSX}
    </>
  );
}
