import React from "react";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { Dashboard } from "../src/components/ui/dashboard";
import DashboardPage from './dashboard/index';

const home = () => {
  return (
    <>
      <DashboardLayout>
        <Dashboard/>
      </DashboardLayout>
    </>
  );
};

export default home;
