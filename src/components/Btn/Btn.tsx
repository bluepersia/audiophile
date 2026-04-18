import type { JSX, MouseEvent, PropsWithChildren } from "react";
import styles from "./Btn.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

type BtnProps = PropsWithChildren & {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  to?: string;
};
export default function Btn({ children, onClick, to }: BtnProps): JSX.Element {
  if (onclick)
    return (
      <button onClick={onClick} className={clsx(styles.btn, "reset-btn")}>
        {children}
      </button>
    );

  if (to)
    return (
      <Link to={to} className={clsx(styles.btn, "reset-link")}>
        {children}
      </Link>
    );

  console.warn("Button is missing 'onClick' or 'to' prop.");
  return null;
}
