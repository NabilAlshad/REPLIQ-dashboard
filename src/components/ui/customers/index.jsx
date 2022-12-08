import React from "react";
import { Table } from "../../Root/Table";
import { Input } from "../../Root/Form/Input";

const CustomersData = require("./CustomersData.json");

export const Customers = () => {
  return (
    <div>
      <h2 className="text-center text-gray-800 text-2xl mb-5 underline decoration-3">
        All Customers
      </h2>
      <Input
        type="text"
        inputClass="w-[20%] mb-5 bg-gray-300 me-10 border border-rounded-gray-200 text-gray-800 text-sm rounded-lg focus:w-[40%] focus:ring-blue-500 focus:border-rounded-blue-500 p-2"
        placeholder="search customers...."
      ></Input>
      <Table data={CustomersData}></Table>
    </div>
  );
};
