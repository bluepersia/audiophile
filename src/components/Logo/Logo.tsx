import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";
import logoImg from "/src/assets/shared/desktop/logo.svg";
import styles from "./Logo.module.scss";
import clsx from "clsx";

type LogoProps = {
  className?: string;
};
export default function Logo({ className = "" }: LogoProps): JSX.Element {
  return (
    <Link
      to="/"
      aria-label="Go to home"
      className={clsx(styles["logo-link"], className)}
    >
      <img src={logoImg} alt="Audiophile" className={styles["logo-img"]} />
    </Link>
  );
}
