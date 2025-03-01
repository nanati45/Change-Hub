import Services from "@/components/Services";
import React from "react";

const OurServices = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center">
        <p className="text-8xl font-bold bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text  text-transparent">
          Our Services
        </p>
        <div className="w-[585px] flex flex-col items-center justify-center gap-4 ">
          <p className="text-[#5B76E2] text-[16px] font-normal">Services</p>
          <p className="text-[#222222] text-[56px] font-normal">What We Do</p>
          <p className="text-[#222] text-[18px] font-normal flex text-center justify-center">
            We offer a comprehensive suite of services designed to address the
            unique challenges of businesses in Ethiopia.
          </p>
        </div>
      </div>
      <div className="w-full">
        <Services />
      </div>
    </div>
  );
};

export default OurServices;
