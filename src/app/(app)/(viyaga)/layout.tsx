import ViyagaLayout from "@/components/layouts/viyaga";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <ViyagaLayout>{children}</ViyagaLayout>;
};

export default Layout;
