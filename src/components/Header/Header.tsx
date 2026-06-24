import type { JSX } from "react/jsx-runtime";
import styles from "./Header.module.scss";
import hamburgerIcon from "/src/assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "/src/assets/shared/desktop/icon-cart.svg";
import clsx from "clsx";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={clsx(styles["header-inner"], "container")}>
        <button
          className={styles["menu-btn"]}
          aria-label="Open navigation menu"
        >
          <img src={hamburgerIcon} alt="" />
        </button>
        <Logo className={styles.logo} />
        <Nav />
        <button className={styles["cart-btn"]} aria-label="Open cart">
          <img src={cartIcon} alt="" />
        </button>
      </div>
    </header>
  );
}
