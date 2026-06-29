import type { JSX } from "react/jsx-runtime";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import CartContextProvider from "../../contexts/CartContext/CartContext";
import ModalContextProvider from "../../contexts/ModalContext/ModalContext";
import Modal from "../Modal/Modal";
import styles from "./AppLayout.module.scss";

export default function AppLayout(): JSX.Element {
  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>

        <Modal />
        <Footer />
      </CartContextProvider>
    </ModalContextProvider>
  );
}
