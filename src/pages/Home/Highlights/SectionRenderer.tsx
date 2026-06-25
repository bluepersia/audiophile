import type { JSX } from "react/jsx-runtime";
import type { SectionRendererProps } from "./SectionRenderer.types";
import SectionOne from "./SectionOne/SectionOne";

export default function SectionRenderer({
  section,
}: SectionRendererProps): JSX.Element {
  if (section.sectionType === 1) return <SectionOne section={section} />;
}
