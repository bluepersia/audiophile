import type { ProductData } from "../types/data.types";
import { AppError } from "../types/error.types";

async function getProduct(slug: string): Promise<ProductData> {
  const res = await fetch("/data/products.json");

  const products = (await res.json()) as ProductData[];

  const product = products.find((product) => product.slug === slug);

  if (!product) throw new AppError(`Product ${slug} was not found!`, 404);

  return product;
}

async function getProductsByCategory(category: string): Promise<ProductData[]> {
  const res = await fetch("/data/products.json");

  const products = (await res.json()) as ProductData[];

  return products.filter((product) => product.category === category).reverse();
}

export { getProduct, getProductsByCategory };
