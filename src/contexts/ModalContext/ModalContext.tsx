import {
  createContext,
  useState,
  type JSX,
  type PropsWithChildren,
} from "react";

type ModalContextType = {
  openModal: (modal: ModalType) => void;
  toggleModal: (modal: ModalType) => void;
  closeModal: () => void;
  isOpen: (modalType: string) => boolean;
  modal: ModalType;
};

type ModalType = {
  type: "mobile-nav";
} | null;

const ModalContext = createContext<ModalContextType | null>(null);

export default function ModalContextProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [modal, setModal] = useState<ModalType>(null);

  function openModal(modal: ModalType): void {
    setModal(modal);
  }

  function toggleModal(modal: ModalType): void {
    setModal((prev) => (prev?.type === modal.type ? null : modal));
  }

  function closeModal(): void {
    setModal(null);
  }

  function isOpen(modalType: string): boolean {
    return modal?.type === modalType;
  }

  return (
    <ModalContext.Provider
      value={{ modal, openModal, toggleModal, closeModal, isOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalContext };
