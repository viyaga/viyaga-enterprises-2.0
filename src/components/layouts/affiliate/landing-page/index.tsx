import React from "react";
import Topbar from "./topbar";
import Footer from "./footer";

const AffiliateLandingPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Topbar />
      {children}
      <Footer />
    </div>
  );
};

export default AffiliateLandingPageLayout;
