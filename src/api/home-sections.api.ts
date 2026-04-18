type SectionData = {
  id: 0;
  productSlug: string;
  newProduct: boolean;
  description: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

async function getHero(): Promise<SectionData> {
  const res = await fetch("/data/hero-product.json");

  const data = (await res.json()) as SectionData;

  return data;
}

export { getHero };
