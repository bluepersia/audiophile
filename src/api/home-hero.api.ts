import type { SectionData } from "../types/data.types";

async function getHero(): Promise<SectionData> {
  const res = await fetch("/data/home-hero.json");

  const data = (await res.json()) as SectionData;

  return data;
}

export { getHero };
