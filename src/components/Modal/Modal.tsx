import { useContext } from "react";
import type { JSX } from "react/jsx-runtime";
import { ModalContext } from "../../contexts/ModalContext/ModalContext";
import MobileNav from "../MobileNav/MobileNav";
import styles from "./Modal.module.scss";
import * as Dialog from "@radix-ui/react-dialog";

export default function Modal(): JSX.Element {
  const modalContext = useContext(ModalContext);

  const open = modalContext.modal !== null;

  function renderModal(): JSX.Element {
    switch (modalContext.modal?.type) {
      case "mobile-nav":
        return <MobileNav />;
    }
  }

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(value) => {
        if (!value) modalContext.closeModal();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay}>
          <Dialog.Content>{renderModal()}</Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
