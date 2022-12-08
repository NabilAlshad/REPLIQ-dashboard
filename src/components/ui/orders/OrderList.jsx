import React from "react";
import { OrderCard } from "./OrderCard";
const ordersList = require("./OrderList.json");
export const OrderList = () => {
  return (
    <div className="flex flex-row flex-wrap gap-8 ml-[8rem]">
      {ordersList.map((order) => (
        <OrderCard
          key={order.id}
          orderId={order.orderId}
          orders={order.orders}
          created_at={order.created_at}
          status={order.status}
        ></OrderCard>
      ))}
    </div>
  );
};
