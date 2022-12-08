import React from 'react'
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Orders } from '../../src/components/ui/orders';

const OrdersPage = () => {
  return (
    <DashboardLayout>
   <Orders/>

    </DashboardLayout>
  )
}

export default OrdersPage;