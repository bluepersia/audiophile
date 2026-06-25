import { useQuery } from "@tanstack/react-query";
import type { JSX } from "react/jsx-runtime";
import { getCategories } from "../../api/categories.api";

import styles from "./Categories.module.scss";
import iconArrowRight from "/src/assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router";
import clsx from "clsx";
import handleQueryRender from "../../utils/handleQueryRender";

export default function Categories(): JSX.Element {
  const {
    data: categories,
    isFetching,
    error,
  } = useQuery({ queryKey: ["categories"], queryFn: getCategories });

  return (
    <section className={styles.categories}>
      <div className={clsx(styles["categories-inner"], "container")}>
        {handleQueryRender(
          isFetching,
          error,
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
          </>,
        )}
      </div>
    </section>
  );
}
