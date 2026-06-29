import { useContext } from "react";
import type { JSX } from "react/jsx-runtime";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import MobileNav from "../MobileNav/MobileNav";
import styles from "./Modal.module.scss";

export default function Modal(): JSX.Element {
  const modalContext = useContext(ModalContext);

  function renderModal(): JSX.Element {
    switch (modalContext.modal.type) {
      case "mobile-nav":
        return <MobileNav />;
    }
  }

  return (
    modalContext.modal && <div className={styles.overlay}>{renderModal()}</div>
  );
}
