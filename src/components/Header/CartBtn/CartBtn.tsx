import type { JSX } from "react";
import clsx from "clsx";

export default function CartBtn(): JSX.Element {
  return (
    <button
      className={clsx("reset-btn", "opacity-hover")}
      aria-label="Toggle mini cart"
    >
      <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
    </button>
  );
}
