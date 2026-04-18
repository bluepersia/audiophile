import type { JSX } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps): JSX.Element {
  return (
    <Link
      className={clsx("reset-link", "opacity-hover", className)}
      to="/"
      aria-label="Go to home"
    >
      <img src="/assets/shared/desktop/logo.svg" alt="" />
    </Link>
  );
}
