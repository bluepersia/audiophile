import { useQuery } from "@tanstack/react-query";
import type { JSX } from "react/jsx-runtime";
import { getHighlights } from "../../../api/home-highlights.api";
import spinner from "/src/assets/spinner.svg";
import { getErrorMessage } from "../../../utils/handleError";
import SectionRenderer from "./SectionRenderer";

export default function Highlights(): JSX.Element {
  const {
    data: sections,
    isFetching,
    error,
  } = useQuery({ queryKey: ["highlights"], queryFn: getHighlights });

  function render(): JSX.Element {
    if (isFetching) {
      return <img className="spinner" src={spinner} alt="Loading" />;
    }

    if (error) {
      return <p className="error">{getErrorMessage(error)}</p>;
    }

    return (
      <>
        {sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </>
    );
  }

  return <section className="container">{render()}</section>;
}
