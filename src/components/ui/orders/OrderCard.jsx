import React from "react";
import { Button } from "./../../Root/Form/Button";
import Image from "next/image";

export const OrderCard = ({ orderId, image, created_at, orders, status }) => {
  return (
    <div className="flex flex-row justify-between items-center w-[40%] gap-4 p-5 rounded-xl bg-slate-300 mb-4">
      {/* left section  */}
      <div>
        <p className="mb-2 text-lg font-mono font-semibold">Order: {orderId}</p>
        <div className="flex flex-row items-center gap-3 w-50 ">
          <Image
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            alt="orders Image"
            width={60}
            height={60}
          />
          <p className="w-[40%] mr-2 font-mono font-semibold">
            Total orders: ({orders})
          </p>
        </div>
        <p
          className={
            status === "Pending"
              ? "bg-orange-400 text-white rounded-xl my-2 text-center p-1 w-20"
              : status === "Accepted"
              ? "bg-green-400 text-white my-2 rounded-xl text-center p-1 w-20"
              : status === "Shipped"
              ? "bg-yellow-400 text-white my-2 rounded-xl text-center p-1 w-20"
              : null
          }
        >
          {status}
        </p>
      </div>
      {/* right section  */}
      <div className="flex flex-col items-start">
        {/* Date  */}
        <p className="p-1 bg-yellow-200 text-black mb-10 font-semibold w-[100%]">
          Created At : {created_at}
        </p>

        <Button
          buttonClass="bg-sky-300 text-gray-500 font-bold p-2 rounded-lg  mr-4"
          title="Details >"
        ></Button>
      </div>
    </div>
  );
};
