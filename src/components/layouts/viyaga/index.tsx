import React from "react";
import Header from "./header";

const ViyagaLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ViyagaLayout;
