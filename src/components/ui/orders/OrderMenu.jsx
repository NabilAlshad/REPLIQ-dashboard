import React from 'react'
import { Button } from './../../Root/Form/Button';
import { allOrders } from './OrdersConfig';

export const OrderMenu = () => {

  return (
    <div className="flex my-5 flex-row gap-4 justify-center">
    {
     allOrders.map((order) =>
    <Button key={order.type} title={order.type} orders={order.orders} buttonClass="bg-blue-700 w-[20%] rounded-2xl text-white p-2">{order.orders}
</Button> 
     )
    }

    </div>
  )
}

