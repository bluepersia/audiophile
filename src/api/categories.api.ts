import type { CategoryData } from "../types/data.types";

async function getCategories(): Promise<CategoryData[]> {
  const res = await fetch("/data/categories.json");
  const data: CategoryData[] = await res.json();

  return data;
}

export { getCategories };
