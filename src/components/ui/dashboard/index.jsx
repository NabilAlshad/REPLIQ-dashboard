import React from "react";
import { OrderList } from "../orders/OrderList";
import { ActiveOrders } from "./ActiveOrders";
import { HeaderCard } from "./HeaderCard";
import { Overview } from "./Overview";

export const Dashboard = () => {
  return (
    <>
      <HeaderCard />
      <Overview />
      <ActiveOrders />
      <OrderList />
    </>
  );
};
