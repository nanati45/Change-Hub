import React from "react";
import { clashSemibold, gilroyBold, manrope } from "../fonts";
import Approach from "@/components/Approach";
import Image from "next/image";

const OurApproach = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="absolute left-0 top-3/4 -translate-y-1/2 max-md:hidden pointer-events-none">
        <Image
          src="/images/blob.svg"
          alt="shadow"
          width={100} // Adjust width to fit the area
          height={100}
          className="opacity-10 z-[-10]"
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <p
          className={` ${clashSemibold.className} text-[56px] md:text-[96px] lg:text-[128px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          Approach
        </p>
        <div className=" block absolute inset-y-0 right-0  items-start">
          <Image
            src={`/images/dots.svg`}
            alt="dots"
            width={140}
            height={140}
            className="max-md:w-[100px] max-md:h-[100px]"
          />
        </div>
        {/* <div className="max-lg:hidden block absolute inset-y-0 left-0 items-start">
          <Image
            src={`/images/pink.svg`}
            alt="dots"
            width={150}
            height={150}
            className="opacity-50 bg-blurred"
          />
        </div> */}
        <div className="flex flex-col px-4 items-center justify-center gap-1">
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

      <div className="max-w-[1015px] px-4 grid grid-cols-12 grid-rows-12 mt-16 items-stretch gap-4">
        <div className="md:col-span-5 col-span-12  sm:col-span-6  md:row-span-6 row-span-2 flex">
          <Approach
            number="01"
            title="Consultation"
            description="We begin by understanding your unique challenges and objectives."
          />
        </div>
        <div className="md:col-span-7  col-span-12  sm:col-span-6 md:row-span-6 row-span-4 flex">
          <Approach
            number="02"
            title="Strategy"
            description="Crafting tailored solutions that align with your business goals."
            imageURL="/images/business1.webp"
          />
        </div>
        <div className="md:col-span-7  col-span-12  sm:col-span-6 md:row-span-6 row-span-4 flex">
          <Approach
            number="03"
            title="Implementation"
            description="Deploying strategies with precision and agility."
            imageURL="/images/tar22.webp"
          />
        </div>
        <div className="md:col-span-5  col-span-12  sm:col-span-6 md:row-span-6 row-span-2 flex">
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
