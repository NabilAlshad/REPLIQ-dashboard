import React from "react";
import { OrderList } from "../orders/OrderList";
import { LayoutOne } from "./../../../../layouts/Common/LayoutOne";
import { Button } from "./../../Root/Form/Button";

export const Payments = () => {
  return (
    <div className="items-center">
      <h1 className="text-center text-2xl text-slate-700 mb-10 underline bg-gray-300 w-[40%] mx-auto p-3">
        Payments
      </h1>
      <LayoutOne left="Defualt Method" right="Both Options >" />
      <LayoutOne left="Payment Profile" right="Bank Account >" />
      <div className="my-10">
        <LayoutOne left="Payments overview" right="LifeTime >" />
      </div>
      <div className="flex flex-row w-[50%] mx-auto gap-3">
        {/* 1st card  */}
        <div className="flex flex-col px-3 rounded-lg w-[50%] py-5 bg-green-400 items-start">
          <h3 className="text-white font-bold">Amount on hold</h3>
          <h2 className="text-white font-bold">$701</h2>
        </div>
        {/* 2nd card  */}
        <div className="flex flex-col  px-3 rounded-lg w-[50%] py-5 bg-red-500 items-start">
          <h3 className="text-white font-bold">Amount Received</h3>
          <h2 className="text-white font-bold">$2310</h2>
        </div>
      </div>
      <LayoutOne left="transactions" />
      {/* payements status  */}
      <div className="w-[50%] flex flex-row justify-between  py-5 gap-8 mx-auto">
        <Button
          title="on hold(5)"
          buttonClass="w-[10rem] bg-gray-500 p-2 text-white rounded-xl"
        />
        <Button
          title="Pay outs(2)"
          buttonClass="w-[10rem] bg-blue-500 p-2 text-white rounded-xl"
        />
        <Button
          title="Refund(1)"
          buttonClass="w-[10rem] text-white p-2 bg-gray-500 rounded-xl"
        />
      </div>
      <OrderList />
    </div>
  );
};
