import ViyagaLayout from "@/components/layouts/viyaga";
import WebForgeAI from "@/components/web-forge-aI";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ViyagaLayout>
      {children}
      <WebForgeAI />
    </ViyagaLayout>
  );
};

export default Layout;
