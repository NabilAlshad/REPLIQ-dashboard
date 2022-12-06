import React from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { Products } from "../../src/components/ui/products";
import { LoadPosts } from "../../src/lib/LoadPosts";

const ProductsPage = ({ allProducts }) => {
    console.log(allProducts)
  return (
    <DashboardLayout>
      {/* <Products data={data} /> */}
    </DashboardLayout>
  );
};
export default ProductsPage;
export async function getStaticProps() {
  const allProducts = await LoadPosts("https://dummyjson.com/products");
  return {
    props: {
      allProducts,
    },
  };
}


