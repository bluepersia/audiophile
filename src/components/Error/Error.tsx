import type { JSX } from "react/jsx-runtime";
import { getErrorMessage } from "../../utils/handleError";

type ErrorProps = {
  error: Error;
};
export default function Error({ error }: ErrorProps): JSX.Element {
  return <p className="error">{getErrorMessage(error)}</p>;
}
