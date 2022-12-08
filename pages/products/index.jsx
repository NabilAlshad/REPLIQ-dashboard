import React from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { Products } from "../../src/components/ui/products";
import { LoadPosts } from "../../src/lib/LoadPosts";

const ProductsPage = ({ allProducts }) => {

    const data=allProducts;
  return (
    <DashboardLayout>
      <Products data={data} />
    </DashboardLayout>
  );
};
export async function getStaticProps() {
  const allProducts = await LoadPosts("https://fakestoreapi.com/products/");
  
  return {
    props: {
      allProducts,
    },
  };
}
export default ProductsPage;
