import {
  clashSemibold,
  gilroyBold,
  gilroyMedium,
  gilroyRegular,
  gilroyRegularItalic,
} from "@/app/fonts";
import Image from "next/image";
import React from "react";

const ContactDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1107px] text-grey mx-auto gap-6">
      <div className="flex flex-col items-center justify-center w-full">
        <p
          className={`${clashSemibold.className} text-[56px] md:text-[96px] lg:text-[165px] w-full text-center bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF00] bg-clip-text text-transparent`}
        >
          Change Hub
        </p>
        <div className="grid grid-cols-8   md:justify-between gap-6 w-full p-4">
          <div className=" md:hidden  col-span-8 flex flex-col items-center justify-start gap-4 w-full  p-4">
            <div>
              <Image
                src={`/images/logo.svg`}
                alt="change hub logo"
                width={40}
                height={50}
              />
            </div>
            <p className="text-center">
              Change-hub is a company based in Addis Ababa, Ethiopia. That
              offers various services such as Change Management, Data Analytics,
              Data Analytics, ERP Solutions, and much more.
            </p>
          </div>
          {/* Left Section */}
          <div className="flex col-span-8 p-4 sm:col-span-4 md:col-span-2  flex-col items-center sm:items-start justify-start gap-4">
            <p
              className={`${gilroyBold.className} text-[28px] sm:text-left text-center`}
            >
              Change Hub
            </p>
            <ul
              className={`${gilroyMedium.className} flex flex-col justify-start font-normal text-[16px] sm:text-left text-center`}
            >
              <li>Services</li>
              <li>Our Approach</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Middle Section (Larger Space) */}
          <div className="flex max-md:hidden flex-col items-center justify-start gap-4 w-full  col-span-4  p-4">
            <div>
              <Image
                src={`/images/logo.svg`}
                alt="change hub logo"
                width={40}
                height={50}
              />
            </div>
            <p className="text-center">
              Change-hub is a company based in Addis Ababa, Ethiopia. That
              offers various services such as Change Management, Data Analytics,
              Data Analytics, ERP Solutions, and much more.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex col-span-8 sm:col-span-4 md:col-span-2  flex-col items-center justify-center sm:items-start  gap-4  p-4">
            <p
              className={`${gilroyBold.className} text-[28px] sm:text-left text-center`}
            >
              Contact Info
            </p>
            <div className="flex flex-col items-center justify-start gap-2 w-full">
              {/* Location */}
              <div className="flex items-center gap-3 w-full">
                <div className="flex-shrink-0">
                  <Image
                    src={`/images/location.svg`}
                    alt="location"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p
                    className={` ${gilroyMedium.className} text-[16px] font-normal text-left w-full`}
                  >
                    Addis Abeba, Ethiopia
                  </p>
                  <p
                    className={` ${gilroyRegularItalic.className} text-left w-full`}
                  >
                    Address
                  </p>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-center gap-3 w-full">
                <div className="flex-shrink-0">
                  <Image
                    src={`/images/call.svg`}
                    alt="call"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p
                    className={` ${gilroyMedium.className} text-[16px] font-normal text-left w-full`}
                  >
                    +251 923 637 271
                  </p>
                  <p
                    className={`${gilroyRegularItalic.className} text-left w-full`}
                  >
                    Mobile
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 w-full">
                <div className="flex-shrink-0">
                  <Image
                    src={`/images/message.svg`}
                    alt="call"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <p
                    className={` ${gilroyMedium.className} text-[16px] font-normal text-left w-full`}
                  >
                    contact@Example.com
                  </p>
                  <p
                    className={` ${gilroyRegularItalic.className} text-left w-full`}
                  >
                    Email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[500px] pb-16">
          <ul
            className={` ${gilroyRegular.className} text-[16px] flex flex-wrap justify-center sm:justify-between items-center gap-x-8 gap-y-4`}
          >
            {/* Telegram & LinkedIn */}
            <li className="flex gap-4 sm:gap-8 flex-col sm:flex-row text-center">
              <span>Telegram</span>
              <span>LinkedIn</span>
            </li>

            {/* Instagram - Centered (Desktop) */}
            <li className="hidden sm:block text-center flex-1">Instagram</li>

            {/* Facebook & Twitter */}
            <li className="flex gap-4 sm:gap-8 flex-col sm:flex-row text-center">
              <span>Facebook</span>
              <span>Twitter</span>
            </li>

            {/* Instagram (Mobile) - Moves Below */}
            <li className="block sm:hidden text-center w-full">Instagram</li>
          </ul>
        </div>
        <div className="w-full px-6 py-5">
          <div className="h-[1px] bg-custom-gradient mb-6"></div>
          <p
            className={` ${gilroyMedium.className} text-[14px] text-center text-grey opacity-90`}
          >
            &copy; AutoHelp USA, all rights reserved 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
