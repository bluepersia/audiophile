import type { JSX } from "react";
import styles from "./NewProduct.module.css";
import clsx from "clsx";

type NewProductProps = {
  className?: string;
};
export default function NewProduct({
  className,
}: NewProductProps): JSX.Element {
  return <p className={clsx(styles["new-product"], className)}>New Product</p>;
}
