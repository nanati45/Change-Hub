import Services from "@/components/Services";
import React from "react";
import { clashSemibold, gilroyBold, gilroyRegular, manrope } from "../fonts";

const OurServices = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center">
        <p
          className={` ${clashSemibold.className} text-[56px] md:text-[96px] lg:[128px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text  text-transparent`}
        >
          Our Services
        </p>
        <div className="w-[585px] flex flex-col items-center justify-center gap-2 ">
          <p className={` ${gilroyBold.className} text-sky-blue text-[16px] `}>
            Services
          </p>
          <p
            className={` ${manrope.className} text-primary text-[56px] font-normal`}
          >
            What We Do
          </p>
          <p
            className={` ${gilroyRegular.className} text-primary text-[18px] font-normal flex text-center justify-center`}
          >
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
