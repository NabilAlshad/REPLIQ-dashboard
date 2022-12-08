import React from 'react'
import { Header } from './Header';
import { OrderMenu } from './OrderMenu';
import { OrderList } from './OrderList';
export const Orders = () => {
  // console.log(OrderList);
  return (
    <div>
      <Header/>
      <OrderMenu/>
      <OrderList/>
    </div>
  )
}

