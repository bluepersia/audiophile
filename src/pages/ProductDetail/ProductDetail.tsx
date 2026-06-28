import { useNavigate, useParams } from "react-router";
import type { JSX } from "react/jsx-runtime";
import useProductQuery from "../../hooks/useProductQuery";
import Details from "./Details/Details";
import styles from "./ProductDetail.module.scss";
import Summary from "./Summary/Summary";
import Gallery from "./Gallery/Gallery";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import Categories from "../../components/Categories/Categories";
import AboutUs from "../../components/AboutUs/AboutUs";

export default function ProductDetail(): JSX.Element {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { jsx: productJSX } = useProductQuery(slug, (product) => (
    <>
      <article>
        <Details product={product} />
        <Summary product={product} />
        <Gallery product={product} />
        <RelatedProducts product={product} />
        <Categories />
        <AboutUs />
      </article>
    </>
  ));
  return (
    <div className="container">
      <nav className={styles.nav}>
        <button onClick={() => navigate(-1)} className={styles["back-link"]}>
          Go Back
        </button>
      </nav>
      {productJSX}
    </div>
  );
}
