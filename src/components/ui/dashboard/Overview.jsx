import React from "react";
import { OverviewData } from "./DashboardData";
import { OverviewCard } from "./OverviewCard";
export const Overview = () => {
  return (
    <div className="flex flex-col bg-gray-300 py-3 items-center w-[70%] my-10 mx-auto">
      <div className="flex flew-row justify-between w-[50%] p-4 mx-auto my-5">
        <h5 className="font-bold font-sans text-gray-800">Overview</h5>
        <p className="font-bold font-sans text-gray-800">Last Week </p>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly gap-10 mx-auto w-[50%]">
        {OverviewData.map((o) => (
          <OverviewCard key={o.value} value={o.value} type={o.type} />
        ))}
      </div>
    </div>
  );
};
