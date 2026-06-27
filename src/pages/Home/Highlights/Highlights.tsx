import { useQuery } from "@tanstack/react-query";
import type { JSX } from "react/jsx-runtime";
import { getHighlights } from "../../../api/home-highlights.api";
import spinner from "/src/assets/spinner.svg";
import { getErrorMessage } from "../../../utils/handleError";
import SectionRenderer from "./SectionRenderer";
import styles from "./Highlights.module.scss";

export default function Highlights(): JSX.Element {
  const {
    data: sections,
    isPending,
    error,
  } = useQuery({ queryKey: ["highlights"], queryFn: getHighlights });

  function render(): JSX.Element {
    if (isPending) {
      return <img className="spinner" src={spinner} alt="Loading" />;
    }

    if (error) {
      return <p className="error">{getErrorMessage(error)}</p>;
    }

    return (
      <div className={styles.highlights}>
        {sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </div>
    );
  }

  return <section className="container">{render()}</section>;
}
