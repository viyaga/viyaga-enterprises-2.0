import React from "react";
import { Footer } from "./footer";
import { TopBar } from "./top-bar";

const ViyagaLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopBar />
      {children}
      <Footer />
    </div>
  );
};

export default ViyagaLayout;
