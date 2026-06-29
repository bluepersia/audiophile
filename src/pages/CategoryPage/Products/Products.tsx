import type { JSX } from "react/jsx-runtime";
import Btn from "../../../components/Btn/Btn";
import clsx from "clsx";
import Error from "../../../components/Error/Error";
import Spinner from "../../../components/Spinner/Spinner";
import { getProductsByCategory } from "../../../api/products.api";
import { useQuery } from "@tanstack/react-query";
import styles from "./Products.module.scss";

type ProductsProps = {
  category: string;
};
export default function Products({ category }: ProductsProps): JSX.Element {
  const {
    data: products,
    isPending,
    error,
  } = useQuery({
    queryKey: ["category", category],
    queryFn: () => getProductsByCategory(category),
  });

  function renderProducts(): JSX.Element | JSX.Element[] {
    if (isPending) return <Spinner />;

    if (error) return <Error error={error} />;

    return products.map((product, index) => (
      <li
        key={product.id}
        className={clsx(
          styles.product,
          index % 2 !== 0 && styles["product--reverse"],
        )}
      >
        <picture className={styles["product-picture"]}>
          <source
            srcSet={product.categoryImage.desktop}
            media="(min-width:1200px)"
          />
          <source
            srcSet={product.categoryImage.tablet}
            media="(min-width:768px)"
          />
          <img
            src={product.categoryImage.mobile}
            alt={product.alt}
            className={styles["product-img"]}
          />
        </picture>
        <div className={styles["product-content"]}>
          {product.new && (
            <p className={clsx(styles.new, "overline")}>New Product</p>
          )}
          <h3 className={styles["product-name"]}>{product.name}</h3>
          <p className={styles["product-desc"]}>{product.description}</p>
          <Btn
            className={styles["product-btn"]}
            to={`/products/${product.slug}`}
          >
            See Product
          </Btn>
        </div>
      </li>
    ));
  }

  return (
    <section className={styles.products}>
      <div className={clsx(styles["products-inner"], "container")}>
        <h2 className="sr-only">Products</h2>
        <ul className={clsx(styles.list, "reset-list")}>{renderProducts()}</ul>
      </div>
    </section>
  );
}
