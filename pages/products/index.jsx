import React from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { Products } from "../../src/components/ui/products";
import { LoadPosts } from "../../src/lib/LoadPosts";

const ProductsPage = ({ allProducts }) => {
    console.log(allProducts);
    const data=allProducts;
  return (
    <DashboardLayout>
      <Products data={data} />
    </DashboardLayout>
  );
};
export async function getStaticProps() {
  const allProducts = await LoadPosts("https://dummyjson.com/products");
  return {
    props: {
      allProducts,
    },
  };
}
export default ProductsPage;
