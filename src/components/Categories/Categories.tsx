import { useQuery } from "@tanstack/react-query";
import type { JSX } from "react/jsx-runtime";
import { getCategories } from "../../api/categories.api";
import styles from "./Categories.module.scss";
import iconArrowRight from "/src/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router";
import clsx from "clsx";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

export default function Categories(): JSX.Element {
  const {
    data: categories,
    isFetching,
    error,
  } = useQuery({ queryKey: ["categories"], queryFn: getCategories });

  function render(): JSX.Element {
    if (isFetching) {
      return <Spinner />;
    }

    if (error) {
      return <Error error={error} />;
    }

    return (
      <>
        <h2 className="sr-only">Categories</h2>
        <ul className={clsx(styles.list, "reset-list")}>
          {categories.map((category) => (
            <li key={category.name} className={styles.category}>
              <img
                src={category.image}
                alt=""
                className={styles["category-img"]}
              />
              <h3 className={styles["category-name"]}>{category.name}</h3>
              <Link
                to={`/categories/${category.name}`}
                className={styles["category-link"]}
              >
                <span className={styles["category-link-text"]}>Shop</span>
                <img
                  src={iconArrowRight}
                  alt=""
                  className={styles["category-shop-arrow-img"]}
                />
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <section className={styles.categories}>
      <div className={clsx(styles["categories-inner"], "container")}>
        {render()}
      </div>
    </section>
  );
}
