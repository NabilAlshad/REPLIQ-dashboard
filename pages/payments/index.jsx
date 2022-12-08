import React from 'react'
import { Payments } from '../../src/components/ui/payments';
import { DashboardLayout } from './../../layouts/DashboardLayout';

const PaymentsPage = () => {
  return (
    <DashboardLayout>   
      <Payments/> 
    </DashboardLayout>
  )
}

export default PaymentsPage;