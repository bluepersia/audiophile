import type { JSX } from "react";
import styles from "./Header.module.css";
import clsx from "clsx";
import Logo from "../Logo/Logo";
import MenuBtn from "./MenuBtn/MenuBtn";
import CartBtn from "./CartBtn/CartBtn";
import Nav from "../Nav/Nav";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={clsx(styles.inner, "container")}>
        <MenuBtn />
        <Logo className={styles.logo} />
        <Nav className={styles.nav} />
        <CartBtn />
      </div>
    </header>
  );
}
