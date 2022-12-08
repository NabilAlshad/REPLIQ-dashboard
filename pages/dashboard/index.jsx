import React from 'react'
import { DashboardLayout } from '../../layouts/DashboardLayout';
import { Dashboard } from './../../src/components/ui/dashboard/index';

const DashboardPage = () => {
  return (
    <>
   <DashboardLayout>
    <Dashboard/>
   </DashboardLayout>
    </>
  )
}

export default DashboardPage;