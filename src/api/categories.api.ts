type CategoryData = {
  id: number;
  name: string;
  image: string;
};

async function getCategories(): Promise<CategoryData[]> {
  const res = await fetch("/data/categories.json");

  const data = (await res.json()) as CategoryData[];

  return data;
}

export { getCategories };
