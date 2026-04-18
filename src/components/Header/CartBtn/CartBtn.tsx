import type { JSX } from "react";
import clsx from "clsx";

export default function CartBtn(): JSX.Element {
  return (
    <button className={clsx("reset-btn", "opacity-hover")}>
      <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
    </button>
  );
}
