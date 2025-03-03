import React from "react";
import { clashSemibold, gilroyBold, gilroyMedium, manrope } from "../fonts";
import Image from "next/image";
import { Button } from "@heroui/button";
import { ArrowIcon } from "@/components/Icons";
import ValuesAndPrinciples from "@/components/ValuesAndPrinciplesSection";

const AboutUs = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-16 mb-16">
      <div className=" flex flex-col items-center justify-center">
        <div className="max-lg:hidden block absolute inset-y-0 right-0  items-start">
          <Image src={`/images/dots.svg`} alt="dots" width={150} height={150} />
        </div>
        <p
          className={` ${clashSemibold.className} text-[56px] md:text-[96px] lg:text-[128px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          About Us
        </p>
        <div className=" flex flex-col px-4 items-center justify-center gap-1">
          <p className={`${gilroyBold.className} text-sky-blue text-[16px]`}>
            WHO WE ARE
          </p>
          <p
            className={`${manrope.className} text-primary text-center text-[28px] md:text-[36px] lg:text-[48px] max-w-[600px] font-normal`}
          >
            Your Partners in Progress
          </p>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row items-center md:justify-between justify-center gap-24  px-8 max-w-[840px]">
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <Image
            src={"/images/discuss.webp"}
            alt="discuss"
            width={400}
            height={400}
            className="shrink-0"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col  items-center justify-start px-4  gap-8">
          <h1
            className={`${gilroyBold.className} mt-auto md:self-start self-center font-normal lg:text-[32px] md:text-[24px] text-[22px]  text-primary flex gap-2 text-center md:text-left items-center justify-start`}
          >
            {" "}
            About
            <span className="text-sky-blue">Change-hub</span>
          </h1>
          <h2
            className={`${gilroyMedium.className} text-[16px] text-center md:text-left text-charcoal`}
          >
            Change Hub is a collective of seasoned professionals with a passion
            for driving business excellence in Ethiopia Our team brings together
            expertise from various industries, ensuring a holistic approach to
            your challenges.
          </h2>
          <div className="flex mt-auto  md:self-start self-center">
            <Button
              endContent={<ArrowIcon />}
              className="bg-primary text-white py-[10px] px-[24px] rounded-full flex justify-start"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="max-lg:hidden block absolute inset-y-0 right-0 bottom-0 rotate-[90deg] items-end">
        <Image src={`/images/dots.svg`} alt="dots" width={150} height={150} />
      </div> */}
      <ValuesAndPrinciples />
    </div>
  );
};

export default AboutUs;
