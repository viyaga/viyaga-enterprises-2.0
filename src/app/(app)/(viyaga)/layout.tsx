import ActivityTracker from "@/components/activity-tracker";
import ViyagaLayout from "@/components/layouts/viyaga";
import WebForgeAI from "@/components/web-forge-aI";
import React, { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViyagaLayout>
      {children}
      <Suspense fallback={<div>Loading...</div>}>
        <ActivityTracker />
        <WebForgeAI />
      </Suspense>
    </ViyagaLayout>
  );
};

export default Layout;
