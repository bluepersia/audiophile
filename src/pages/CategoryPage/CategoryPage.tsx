import type { JSX } from "react/jsx-runtime";
import styles from "./CategoryPage.module.scss";
import { useParams } from "react-router";
import Categories from "../../components/Categories/Categories";
import AboutUs from "../../components/AboutUs/AboutUs";

import Products from "./Products/Products";

export default function CategoryPage(): JSX.Element {
  const { category } = useParams();

  return (
    <>
      <h1 className={styles.title}>{category}</h1>
      <div className={styles["products-mg-btm"]}>
        <Products category={category} />
      </div>
      <div className={styles["categories-mg-btm"]}>
        <Categories />
      </div>
      <div className={styles["about-us-mg-btm"]}>
        <AboutUs />
      </div>
    </>
  );
}
