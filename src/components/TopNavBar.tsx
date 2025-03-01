import React from "react";
import { Button } from "@heroui/button";
import { gilroyBold, gilroyMedium } from "@/app/fonts";
import { ArrowIcon, HamburgerIcon } from "./Icons";
import { manrope } from "@/app/fonts";
const TopNavBar = () => {
  return (
    <div className="w-full z-20 py-[20px] px-8 lg:px-32 flex items-center justify-between border-borders border-[0.3px] rounded-full bg-white m-4 md:border-0 md:bg-transparent ">
      <div className={`${gilroyBold.className} text-[20px]`}>Change Hub</div>
      <div className={`${gilroyMedium.className} text-[16px] hidden md:block`}>
        <ul className="flex items-center justify-center gap-6">
          <li>Services</li>
          <li>Our Approach</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={`${manrope.className}  text-[14px]  hidden md:block`}>
        <Button
          endContent={<ArrowIcon />}
          className="bg-primary text-white py-[10px] px-[24px]  rounded-full flex"
        >
          Contact Us
        </Button>
      </div>
      <div className="block md:hidden">
        <HamburgerIcon />
      </div>
    </div>
  );
};

export default TopNavBar;
