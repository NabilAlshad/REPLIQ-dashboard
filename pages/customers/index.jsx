import React from "react";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { Customers } from "../../src/components/ui/customers";


const CustomersPage = () => {
  return (
    <>
      <DashboardLayout>
        <Customers />
      </DashboardLayout>
    </>
  );
};

export default CustomersPage;
