import type { JSX } from "react/jsx-runtime";
import { getErrorMessage } from "./handleError";
import spinner from "/src/assets/spinner.svg";

export default function handleQueryRender(
  isFetching: boolean,
  error: Error | null,
  render: JSX.Element,
): JSX.Element {
  if (isFetching) {
    return <img className="spinner" src={spinner} alt="Loading" />;
  }

  if (error) {
    return <p className="error">{getErrorMessage(error)}</p>;
  }

  return render;
}
