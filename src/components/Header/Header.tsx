import type { JSX } from "react/jsx-runtime";
import styles from "./Header.module.scss";
import hamburgerIcon from "/src/assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "/src/assets/shared/desktop/icon-cart.svg";
import clsx from "clsx";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import { CartContext } from "../../contexts/CartContext/CartContext";

export default function Header(): JSX.Element {
  const modalContext = useContext(ModalContext);
  const cartContext = useContext(CartContext);

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
        <Nav className={styles.nav} />
        <button
          className={styles["cart-btn"]}
          aria-label={`${modalContext.isOpen("cart") ? "Close" : "Open"} cart`}
          onClick={() => modalContext.toggleModal({ type: "cart" })}
        >
          <img src={cartIcon} alt="" />
          {cartContext.cart?.length > 0 ? (
            <span className={styles["cart-count"]}>
              {cartContext.cart?.length}
            </span>
          ) : null}
        </button>
      </div>
    </header>
  );
}
