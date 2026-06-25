type CategoryData = {
  id: number;
  name: string;
};

type SectionData = {
  id: number;
  productSlug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description?: string;
  alt: string;
};

type ProductData = {
  id: number;
  name: string;
  new: boolean;
  slug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export type { CategoryData, SectionData, ProductData };
