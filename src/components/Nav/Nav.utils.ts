function determineNavLinkClass(isActive: boolean): string {
  return isActive ? "link--active" : "";
}

export { determineNavLinkClass };
