import React from "react";
import { Button } from "./../../Root/Form/Button";
import { RiWhatsappFill } from "react-icons/ri";

export const HeaderCard = () => {
  return (
    <div className="flex flex-col items-start w-[50%] shadow-2xl p-2 mx-auto shadow-slate-300">
      <h4 className="mb-4">Lorem, ipsum dolor sit amet consectetur . </h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora dolor
        omnis porro ea quae explicabo excepturi nemo libero natus esse vitae,
        accusamus illum quos! Necessitatibus provident excepturi quos
        accusantium perspiciatis.
      </p>
      <div className="flex flex-row justify-between items-center gap-20 my-10">
        <p className="text-orange-400">
          Lorem ipsum, dolor sit amet consectetur{" "}
        </p>
        <span>
          <Button
            title="share"
            buttonClass="bg-green-400 text-white p-2 rounded-lg w-[100px]"
          />
          
        </span>
      </div>
    </div>
  );
};
