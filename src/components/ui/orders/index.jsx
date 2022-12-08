import React from "react";
import { Header } from "./Header";
import { OrderMenu } from "./OrderMenu";
import { OrderList } from "./OrderList";
export const Orders = () => {
  return (
    <>
      <Header />
      <OrderMenu />
      <OrderList />
    </>
  );
};
