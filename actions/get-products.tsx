import { Product } from "@/types";
import queryString from "query-string";

interface query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: query): Promise<Product[]> => {
  // use a query string to filter the products based on the query parameters
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
    },
  });

  const res = await fetch(URL);
  return res.json();
};

export default getProducts;
