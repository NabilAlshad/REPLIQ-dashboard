import React from "react";
import { Button } from "../../Root";
import { Input } from "./../../Root/Form/Input";

export const Header = () => {
  return (
    <div className="mb-7">
      <h5 className="bg-gray-400 p-2 text-white w-[50%] m-auto underlin text-2xl text-center mb-7">
        All Orders(502)
      </h5>
      <div className="">
        <Input
          type="text"
          placeholder="search orders or phone numbers"
          inputClass="w-[25%] bg-gray-300 mb-7  m-auto my-4 p-3 rounded-xl"
        />
        <Button
          buttonClass="bg-green-600 rounded-lg w-[10%] text-white p-2 ml-2 "
          title="search"
        ></Button>
      </div>
    </div>
  );
};
