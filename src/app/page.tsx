import React from "react";

import TopNavBar from "@/components/TopNavBar";
import HeroSection from "./sections/HeroSection";
import OurServices from "./sections/OurServicesSection";
import OurApproach from "./sections/OurApproachSection";
const page = () => {
  return (
    <div className="relative w-full  ">
      <div className="absolute top-2 w-full">
        <TopNavBar />
      </div>
      <HeroSection />
      <OurServices />
      <OurApproach />
    </div>
  );
};

export default page;
