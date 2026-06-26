import type { JSX } from "react/jsx-runtime";
import spinner from "/src/assets/spinner.svg";

export default function Spinner(): JSX.Element {
  return <img className="spinner" src={spinner} alt="Loading" />;
}
