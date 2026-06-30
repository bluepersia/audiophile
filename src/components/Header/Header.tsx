import type { JSX } from "react/jsx-runtime";
import styles from "./Header.module.scss";
import hamburgerIcon from "/src/assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "/src/assets/shared/desktop/icon-cart.svg";
import clsx from "clsx";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";

export default function Header(): JSX.Element {
  const modalContext = useContext(ModalContext);

  return (
    <header className={styles.header}>
      <div className={clsx(styles["header-inner"], "container")}>
        <button
          className={styles["menu-btn"]}
          aria-label={`${modalContext.isOpen("mobile-nav") ? "Close" : "Open"} navigation menu`}
          onClick={() => modalContext.toggleModal({ type: "mobile-nav" })}
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
