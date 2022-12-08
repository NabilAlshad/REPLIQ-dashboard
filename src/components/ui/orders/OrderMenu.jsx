import React from "react";
import { Button } from "./../../Root/Form/Button";
import { allOrders } from "./OrdersConfig";

export const OrderMenu = () => {
  return (
    <div className="flex my-5 flex-row gap-4 justify-center">
      <Button
        buttonClass="bg-blue-700 w-[20%] rounded-2xl text-white p-2"
        title="Alltime(300)"
      ></Button>
      <Button
        buttonClass="bg-gray-300 text-black w-[20%] rounded-2xl text-white p-2"
        title="Today(100)"
      ></Button>
      <Button
        buttonClass="bg-gray-300 text-black w-[20%] rounded-2xl text-white p-2"
        title="Yesterday(89)"
      ></Button>
    </div>
  );
};
