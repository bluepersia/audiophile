import type { MouseEvent, PropsWithChildren } from "react";
import { NavLink } from "react-router";
import type { JSX } from "react/jsx-runtime";
import styles from "./Btn.module.scss";
import clsx from "clsx";

type BtnProps = PropsWithChildren & {
  className?: string;
  to?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  color?: string;
  state?: unknown;
};
export default function Btn({
  to,
  onClick,
  children,
  className = "",
  color = "primary",
  state,
}: BtnProps): JSX.Element {
  if (to)
    return (
      <NavLink
        to={to}
        className={clsx(styles.btn, styles[`btn--${color}`], className)}
        state={state}
        onClick={onClick ? onClick : () => {}}
      >
        {children}
      </NavLink>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        className={clsx(styles.btn, styles[`btn--${color}`], className)}
      >
        {children}
      </button>
    );

  throw Error("Button must have 'to' or 'onClick' set");
}
