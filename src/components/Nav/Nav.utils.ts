function determineActiveLinkStyle(isActive: boolean): string {
  return isActive ? "link--active" : "";
}

function getUserErrorMessage(_error: Error): string {
  return "Something went wrong. Please try again";
}

export { determineActiveLinkStyle, getUserErrorMessage };
