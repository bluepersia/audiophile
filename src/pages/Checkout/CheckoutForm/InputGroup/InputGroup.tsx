import type { ChangeEvent } from "react";
import type { JSX } from "react/jsx-runtime";
import styles from "./InputGroup.module.scss";
import clsx from "clsx";

type InputGroupProps = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  className?: string;
};
export default function InputGroup({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  error = "",
  className = "",
}: InputGroupProps): JSX.Element {
  return (
    <div className={clsx(styles["input-group"], className)}>
      <div className={styles.top}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        {error && <p className={styles.error}>{error}</p>}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
}
