import { Link, useLocation, useParams } from "react-router";
import type { JSX } from "react/jsx-runtime";
import useProductQuery from "../../hooks/useProductQuery";
import Details from "./Details/Details";
import styles from "./ProductDetail.module.scss";
import Summary from "./Summary/Summary";

export default function ProductDetail(): JSX.Element {
  const location = useLocation();
  const { slug } = useParams();

  const { jsx: productJSX } = useProductQuery(slug, (product) => (
    <>
      <article>
        <Details product={product} />
        <Summary product={product} />
      </article>
    </>
  ));
  return (
    <div className="container">
      <nav className={styles.nav}>
        <Link to={location.state?.from || "/"} className={styles["back-link"]}>
          Go Back
        </Link>
      </nav>
      {productJSX}
    </div>
  );
}
