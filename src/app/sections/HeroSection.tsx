import { ArrowIcon, HelloIcon } from "@/components/Icons";
import { TwistedArrowIcon } from "@/components/Icons";
import React from "react";
import { gilroyMedium, gilroyRegular } from "@/app/fonts";
import { manrope, baskervville } from "@/app/fonts";
import { Button } from "@heroui/button";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="h-full mb-60">
      <div className="h-screen bg-[url('/images/abstract-bg.svg')]  bg-start flex flex-col gap-4 w-full pt-36">
        <div className="flex flex-col items-center justify-center gap-[26px]">
          <div className="flex flex-col items-center justify-center gap-[26px] w-[350px] md:w-[760px] lg:[830px] ">
            <div
              className={`${gilroyMedium.className} flex gap-2 items-center justify-center w-[282px] py-[4px] pl-[5px] pr-[16px] bg-[#F6F6F6]  border-border2 border-[0.89px] rounded-full shadow-custom `}
            >
              <HelloIcon />
              <p className={`${gilroyRegular.className} text-[14px]`}>
                Welcome to the Hub of Change
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center w-[400px] md:w-[850px]  gap-[18px]">
              <h1
                className={`${manrope.className} text-[40px] lg:text-[64px] md:text-[48px] font-bold w-full px-2  `}
              >
                Lead the Change. Shape the
                <span className={`${baskervville.className} italic pl-2`}>
                  Future
                </span>{" "}
                .
              </h1>
              <p
                className={`${gilroyRegular.className} flex items-center justify-center text-center w-full px-16 text-[16px]`}
              >
                We are not just consultants. We are architects of
                transformation. Whether you&#39;re scaling your operations,
                integrating new technology, or redefining your business model.
                we make change work for you.
              </p>
            </div>
            <div className="relative flex items-center justify-center">
              {/* Twisted Arrow positioned absolutely to the left of the button */}
              <div className="absolute left-[-100px] mb-10 w-[65px] h-[65px] sm:w-[65px] sm:h-[65px] md:w-[85px] md:h-[85px]">
                <TwistedArrowIcon />
              </div>

              {/* Centered Button */}
              <Button
                endContent={<ArrowIcon />}
                className={`${manrope.className} bg-sky-blue rounded-full flex gap-2 items-center justify-center text-white text-[14px] py-4 px-[20px]`}
              >
                Start Your Transformation
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center px-2 py-1 gap-3 md:gap-6 w-[400px] lg:w-[850px] md:w-[730px]   ">
            <Image
              src={"/images/image.webp"}
              alt={"people discussing"}
              width={330}
              height={330}
              className="w-[135px] h-[135px] md:w-[230] lg:w-[330px] lg:h-[330px]"
            />
            <Image
              src={"/images/image1.webp"}
              alt={"people interviewing"}
              width={330}
              height={330}
              className="w-[135px] h-[135px] md:w-[230] lg:w-[330px] lg:h-[330px]"
            />
            <Image
              src={"/images/image2.webp"}
              alt={"a man working"}
              width={330}
              height={330}
              className="w-[135px] h-[135px] md:w-[230] lg:w-[330px] lg:h-[330px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
