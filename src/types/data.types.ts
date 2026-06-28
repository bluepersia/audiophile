type CategoryData = {
  id: number;
  name: string;
  image: string;
};

type SectionData = {
  id: number;
  sectionType?: number;
  productSlug: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  description?: string;
  alt: string;
  alias?: string;
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
  alt: string;
  description: string;
  price: number;
  features: string;
  includes: [
    {
      item: string;
      quantity: number;
    },
  ];
  gallery: {
    first: {
      alt: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      alt: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      alt: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
};

export type { CategoryData, SectionData, ProductData };
