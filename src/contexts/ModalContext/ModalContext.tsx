import {
  createContext,
  useState,
  type JSX,
  type PropsWithChildren,
} from "react";
import type { CheckoutModalType } from "../../types/modal.types";

type ModalContextType = {
  openModal: (modal: ModalType) => void;
  toggleModal: (modal: ModalType) => void;
  closeModal: () => void;
  isOpen: (modalType: string) => boolean;
  modal: ModalType;
  addOnClosed: (callback: () => void) => void;
  removeOnClosed: (callback: () => void) => void;
};

type ModalType =
  | {
      type: "mobile-nav";
    }
  | {
      type: "cart";
    }
  | CheckoutModalType
  | null;

const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalContextProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [modal, setModal] = useState<ModalType>(null);
  const [onClosed, setOnClosed] = useState<Array<() => void>>([]);

  function openModal(modal: ModalType): void {
    setModal(modal);
  }

  function toggleModal(modal: ModalType): void {
    setModal((prev) => (prev?.type === modal.type ? null : modal));
  }

  function closeModal(): void {
    setModal(null);
    onClosed.forEach((el) => el());
  }

  function isOpen(modalType: string): boolean {
    return modal?.type === modalType;
  }

  function addOnClosed(callback: () => void): void {
    setOnClosed((prev) => [...prev, callback]);
  }

  function removeOnClosed(callback: () => void): void {
    setOnClosed((prev) => prev.filter((cb) => cb !== callback));
  }

  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal,
        toggleModal,
        closeModal,
        isOpen,
        addOnClosed,
        removeOnClosed,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext };
