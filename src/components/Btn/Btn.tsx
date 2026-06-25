import type { MouseEvent, PropsWithChildren } from "react";
import { NavLink } from "react-router";
import type { JSX } from "react/jsx-runtime";
import styles from "./Btn.module.scss";
import clsx from "clsx";

type BtnProps = PropsWithChildren & {
  className?: string;
  to?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};
export default function Btn({
  to,
  onClick,
  children,
  className = "",
}: BtnProps): JSX.Element {
  if (to)
    return (
      <NavLink to={to} className={clsx(styles.btn, className)}>
        {children}
      </NavLink>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={clsx(styles.btn, className)}>
        {children}
      </button>
    );

  throw Error("Button must have 'to' or 'onClick' set");
}
