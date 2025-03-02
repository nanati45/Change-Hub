import React from "react";
import { clashSemibold, gilroyBold, manrope } from "../fonts";
import Approach from "@/components/Approach";

const OurApproach = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p
          className={` ${clashSemibold.className} text-[56px] md:text-[96px] lg:text-[128px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          Approach
        </p>
        <div className=" flex flex-col px-4 items-center justify-center gap-1">
          <p className={`${gilroyBold.className} text-sky-blue text-[16px]`}>
            OUR METHOD
          </p>
          <p
            className={`${manrope.className} text-primary text-center text-[28px] md:text-[36px] lg:text-[48px] max-w-[600px] font-normal`}
          >
            Strategize. Implement. Transform.
          </p>
        </div>
      </div>
      <div className="max-w-[1015px] px-4 grid grid-cols-6 grid-rows-6 mt-16 items-stretch gap-4">
        <div className="md:col-span-2 col-span-3 md:row-span-3 row-span-2 flex">
          <Approach
            number="01"
            title="Consultation"
            description="We begin by understanding your unique challenges and objectives."
          />
        </div>
        <div className="md:col-span-4 col-span-3 md:row-span-3 row-span-4 flex">
          <Approach
            number="02"
            title="Strategy"
            description="Crafting tailored solutions that align with your business goals."
            imageURL="/images/business1.webp"
          />
        </div>
        <div className="md:col-span-4 col-span-3  md:row-span-3  row-span-4  flex">
          <Approach
            number="03"
            title="Implementation"
            description="Deploying strategies with precision and agility."
            imageURL="/images/targett.webp"
          />
        </div>
        <div className="md:col-span-2 col-span-3 md:row-span-3 row-span-2 flex">
          <Approach
            number="04"
            title="Continuous Support"
            description="Providing ongoing assistance to ensure sustained success."
          />
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
