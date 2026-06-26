import type { JSX } from "react/jsx-runtime";
import type { SectionRendererProps } from "./SectionRenderer.types";
import SectionOne from "./SectionOne/SectionOne";
import SectionTwo from "./SectionTwo/SectionTwo";
import SectioNThree from "./SectionThree/SectionThree";

export default function SectionRenderer({
  section,
}: SectionRendererProps): JSX.Element {
  if (section.sectionType === 1) return <SectionOne section={section} />;
  if (section.sectionType === 2) return <SectionTwo section={section} />;
  if (section.sectionType === 3) return <SectioNThree section={section} />;
}
