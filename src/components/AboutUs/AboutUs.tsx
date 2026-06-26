import type { JSX } from "react/jsx-runtime";
import imgMobile from "/src/assets/shared/mobile/image-best-gear.jpg";
import imgTablet from "/src/assets/shared/tablet/image-best-gear.jpg";
import imgDesktop from "/src/assets/shared/desktop/image-best-gear.jpg";
import styles from "./AboutUs.module.scss";
import clsx from "clsx";

export default function AboutUs(): JSX.Element {
  return (
    <section className={styles["about-us"]}>
      <div className={clsx(styles["about-us-inner"], "container")}>
        <picture className={styles.picture}>
          <source srcSet={imgDesktop} media="(min-width:1200px)" />
          <source srcSet={imgTablet} media="(min-width:768px)" />
          <img
            src={imgMobile}
            alt="A young man wearing over-ear headphones, holding one ear cup, against a geometric patterned tile wall."
            className={styles.img}
          />
        </picture>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p className={styles.desc}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
