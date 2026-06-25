import type { SectionData } from "../types/data.types";

async function getHighlights(): Promise<SectionData[]> {
  const res = await fetch("/data/home-highlights.json");

  const highlights = (await res.json()) as SectionData[];

  return highlights;
}

export { getHighlights };
