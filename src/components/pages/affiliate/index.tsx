"use client";

import React from "react";
import HeroSection from "./hero";
import ProductOverview from "./product-overview";
import ProgramHighlights from "./program-highlights";
import HowItWorks from "./how-it-works";
import Testimonials from "./testimonials";
import SignupForm from "./signup-form";
import Footer from "./footer";

export default function AffiliateLandingPage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <ProductOverview />
      <ProgramHighlights />
      <HowItWorks />
      <Testimonials />
      <SignupForm />
      <Footer />
    </div>
  );
}
