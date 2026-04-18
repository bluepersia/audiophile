import type { JSX } from "react";
import clsx from "clsx";
import styles from "./MenuBtn.module.css";

export default function MenuBtn(): JSX.Element {
  return (
    <button
      className={clsx(styles.btn, "reset-btn", "opacity-hover")}
      aria-label="Toggle navigation menu"
    >
      <img src="/assets/shared/tablet/icon-hamburger.svg" alt="" />
    </button>
  );
}
