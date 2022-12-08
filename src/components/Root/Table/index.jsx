/* eslint-disable react/jsx-key */
import React from "react";
export const Table = ({ data }) => {

  return (
    <table class="table-auto w-full text-sm text-left text-black-700 dark:text-gray-700 p-2">
      <thead>
        <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-200">
          <th className="text-xl p-2">#</th>
          <th className="text-xl p-2">Name</th>
          <th className="text-xl p-2">Orders</th>
          <th className="text-xl p-2">Email</th>
          <th className="text-xl p-2">Country</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr className="bg-white border-b dark:bg-gray-200 dark:border-gray-200">
            <td className="text-md p-2">{index + 1}</td>
            <td className="text-md p-2">
              {data.first} {data.last}
            </td>
            <td className="text-md p-2">{data.orders}</td>
            <td className="text-md p-2">{data.email}</td>
            <td className="text-md p-2">{data.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
