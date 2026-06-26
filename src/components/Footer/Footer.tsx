import type { JSX } from "react/jsx-runtime";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import Social from "./Social/Social";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles["footer-inner"], "container")}>
        <div className={styles["primary-line"]}></div>
        <Logo className={styles.logo} />
        <Nav variant="footer" className={styles.nav} />
        <p className={styles.desc}>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        <p className={styles.copyright}>
          Copyright {new Date().getFullYear()}. All Rights Reserved
        </p>
        <Social className={styles.social} />
      </div>
    </footer>
  );
}
