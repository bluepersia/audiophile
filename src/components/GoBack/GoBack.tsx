import clsx from "clsx";
import { useNavigate } from "react-router";
import type { JSX } from "react/jsx-runtime";
import styles from "./GoBack.module.scss";

export default function GoBack(): JSX.Element {
  const navigate = useNavigate();

  return (
    <nav className={clsx(styles.nav, "container")}>
      <button onClick={() => navigate(-1)} className={styles["back-link"]}>
        Go Back
      </button>
    </nav>
  );
}
