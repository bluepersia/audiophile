import type { JSX } from "react/jsx-runtime";
import styles from "./LabelValue.module.scss";
import clsx from "clsx";

type LabelValueProps = {
  label: string;
  value: string;
  variant?: "default" | "primary";
};

export default function LabelValue({
  label,
  value,
  variant = "default",
}: LabelValueProps): JSX.Element {
  return (
    <div
      className={clsx(styles["label-value"], styles[`label-value--${variant}`])}
    >
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
