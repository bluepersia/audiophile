import { AppError } from "../types/error.types";

function getErrorMessage(err: Error): string {
  if (err instanceof AppError) return err.message;

  return "Something went wrong!";
}

export { getErrorMessage };
