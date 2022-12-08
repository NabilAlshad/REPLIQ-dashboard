import React from "react";

export const OverviewCard = ({ type, value }) => {
  return (
    <div className="flex flex-col items-start w-[8rem] mx-auto bg-slate-100 rounded-lg px-2 py-2 shadow-2xl">
      <p className="text-lg">{type}</p>
      <p>{value}</p>
    </div>
  );
};
