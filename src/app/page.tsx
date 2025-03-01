import React from "react";

import TopNavBar from "@/components/TopNavBar";
import HeroSection from "./sections/HeroSection";
const page = () => {
  return (
    <div className="relative w-full ">
      <div className="absolute top-2 w-full">
        <TopNavBar />
      </div>
      <HeroSection />
    </div>
  );
};

export default page;
