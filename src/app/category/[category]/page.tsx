import Product from "@/components/common/Product";
import { ProductT } from "@/interfaces";
import axios from "axios";
import React from "react";

type Props = {};
const fetchProductByCetegory = async (
  productCategory: string
): Promise<ProductT[] | null> => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products?category=${productCategory}`
    );
    return response.data.products as ProductT[];
  } catch (error) {
    console.log(error);
    return null;
  }
};
export default async function Category({}: Props) {
  const products = await fetchProductByCetegory("moble");

  return (
    <main className="flex min-h-screen flex-col justify-normal mx-2">
      {products?.map((product: ProductT) => (
        <Product key={product._id} product={product} />
      ))}
    </main>
  );
}
