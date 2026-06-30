import type { JSX } from "react/jsx-runtime";
import Categories from "../Categories/Categories";
import styles from "./MobileNav.module.scss";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import { FocusTrap } from "focus-trap-react";

export default function MobileNav(): JSX.Element {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const modalContext = useContext(ModalContext);

  function handleResize(): void {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (innerWidth >= 1200) {
      modalContext.closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerWidth]);
  return (
    <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
      <div className={styles["mobile-nav"]}>
        <Categories onClickLink={() => modalContext.closeModal()} />
      </div>
    </FocusTrap>
  );
}
