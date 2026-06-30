import type { JSX } from "react/jsx-runtime";
import styles from "./LabelValue.module.scss";

type LabelValueProps = {
  label: string;
  value: string;
};

export default function LabelValue({
  label,
  value,
}: LabelValueProps): JSX.Element {
  return (
    <div className={styles["label-value"]}>
      <p className={styles.label}>{label}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
