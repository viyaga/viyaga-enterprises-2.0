import React from "react";
import { CompanyHeader } from "./company-header";
import { WhoWeAreSection } from "./who-we-are";
import { FeaturesAndGallerySection } from "./features-and-gallery-section";

const Company = () => {
  return (
    <div className="flex flex-col">
      <CompanyHeader />
      <WhoWeAreSection />
      <FeaturesAndGallerySection />
    </div>
  );
};

export default Company;
