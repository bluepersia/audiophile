import type { JSX } from "react/jsx-runtime";
import Hero from "./Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Highlights from "./Highlights/Highlights";
import AboutUs from "../../components/AboutUs/AboutUs";
import styles from "./Home.module.scss";

export default function Home(): JSX.Element {
  return (
    <>
      <div className={styles["hero-mg-btm"]}>
        <Hero />
      </div>
      <div className={styles["categories-mg-btm"]}>
        <Categories />
      </div>
      <div className={styles["highlights-mg-btm"]}>
        <Highlights />
      </div>
      <div className={styles["about-us-mg-btm"]}>
        <AboutUs />
      </div>
    </>
  );
}
