import React from "react";
import { LoadPosts } from "../../../lib/LoadPosts";
import { Card } from "../../Root";
import { Button } from "../../Root/Form/Button";
import { Input } from "./../../Root/Form/Input";

export const Products = ({ data }) => {
  const products = data;
  return (
    <>
      <div className="flex flex-col gap-10 justify-evenly">
        <h1 className="text-3xl text-slate-600 underline decoration-inherit">
          All Products
        </h1>
        <div className="flex flex-row gap-5 items-center">
          <Input
            type="text"
            placeholder="Add a new product"
            inputClass="w-[30%] bg-gray-300 p-3 rounded-xl"
          />
          <Button
            title="Add Product"
            buttonClass="bg-green-400 text-white rounded-lg text-center p-2 h-[3rem] w-[8rem]"
          />
        </div>

        <div className="flex flex-wrap w-full gap-5">
          {products.map((product) => (
            <Card
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              rating={product.rating}
              stock={product.stock}
              key={product.id}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
};
