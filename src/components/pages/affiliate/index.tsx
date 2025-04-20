"use client";

import React from "react";
import HeroSection from "./hero";
import ProductOverview from "./product-overview";
import ProgramHighlights from "./program-highlights";
import HowItWorks from "./how-it-works";
import Testimonials from "./testimonials";
import SignupForm from "./signup-form";
import AffiliateLandingPageLayout from "@/components/layouts/affiliate/landing-page";

export default function AffiliateLandingPage() {
  return (
    <div className="bg-background text-foreground">
      <AffiliateLandingPageLayout>
        <HeroSection />
        <ProductOverview />
        <ProgramHighlights />
        <HowItWorks />
        <Testimonials />
        <SignupForm />
      </AffiliateLandingPageLayout>
    </div>
  );
}
