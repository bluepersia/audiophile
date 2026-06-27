import { useQuery } from "@tanstack/react-query";
import type { JSX } from "react/jsx-runtime";
import { getProduct } from "../api/products.api";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import type { ProductData } from "../types/data.types";

export default function useProductQuery(
  productSlug: string,
  productRender: (product: ProductData) => JSX.Element,
): {
  sectionJSX: JSX.Element;
} {
  const {
    data: product,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["products", productSlug],
    queryFn: () => getProduct(productSlug),
  });

  function render(): JSX.Element {
    if (isFetching) {
      return <Spinner />;
    }

    if (error) {
      return <Error error={error} />;
    }

    return productRender(product);
  }

  return {
    sectionJSX: render(),
  };
}
