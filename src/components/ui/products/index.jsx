
import React from "react";
import { LoadPosts } from "../../../lib/LoadPosts";

import { Url_Of_Products } from "./productConfig";
 const Products = ({ data }) => {
  console.log(data);
  return <></>;
};

export async function getStaticProps() {
  const data = await LoadPosts(Url_Of_Products);
  return {
    props: {
      data,
    },
  };
}
export default Products;