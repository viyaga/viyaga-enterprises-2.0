import React from 'react'
import AffiliateLandingPageLayout from "@/components/layouts/affiliate/landing-page";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <AffiliateLandingPageLayout>{ children }</AffiliateLandingPageLayout>
};

export default layout;
