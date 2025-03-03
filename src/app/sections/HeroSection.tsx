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
      <div className="h-screen bg-[url('/images/abstract-bg.svg')] bg-cover bg-transparent bg-start flex flex-col gap-4 w-full pt-42 md:pt-48">
        <div className="flex flex-col items-center justify-center gap-[26px]">
          <div className="flex flex-col items-center justify-center gap-[26px] w-[350px] md:w-[760px] lg:[830px] ">
            <div
              className={`${gilroyMedium.className} flex gap-2 items-center justify-center  py-[4px] pl-[5px] pr-[16px] bg-[#F6F6F6]  border-border2 border-[0.89px] rounded-full shadow-custom `}
            >
              <p
                className="bg-white w-[25px] h-[25px] md:w-[32px] md:h-[32px] flex items-center justify-center
              md:text-[16px] rounded-full "
              >
                👋
              </p>
              <p
                className={`${gilroyRegular.className}  text-[12px] md:text-[14px]`}
              >
                Welcome to the Hub of Change
              </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center max-w-[850px]  gap-[18px]">
              <h1
                className={`${manrope.className} text-[40px] lg:text-[64px] md:text-[58px] font-bold w-full px-2`}
              >
                Lead the Change. Shape the{" "}
                <span
                  className={`${baskervville.className} italic font-normal`}
                >
                  Future.
                </span>
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
              <div
                className="absolute bottom-[10px] md:bottom-0 left-[-80px] md:left-[-90px] lg:left-[-100px] mb-10 md:mb-5 lg:mb-0  w-[56px] h-[56px] md:w-[65px] md:h-[65px] lg:w-[85px] lg:h-[85px] 
             lg:rotate-0 md:rotate-[5deg] rotate-[19deg] transition-all duration-300"
              >
                <TwistedArrowIcon />
              </div>

              {/* Centered Button */}
              <Button
                endContent={<ArrowIcon />}
                className={`${manrope.className} bg-sky-blue rounded-full flex gap-1 items-center justify-center text-white text-[12px] md:text-[14px] py-[10px] md:py-[16px] px-[20px]`}
              >
                Start Your Transformation
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center px-2 py-1 gap-3 md:gap-6 w-[350px] max-w-[1112px] md:w-[830px]   ">
            <Image
              src={"/images/image.webp"}
              alt={"people discussing"}
              width={330}
              height={330}
              className="w-[105px] h-[105px] sm:w-[156px] sm:h-[156px] md:w-[196px] md:h-[196px] lg:w-[310px] lg:h-[310px] "
            />
            <Image
              src={"/images/image1.webp"}
              alt={"people interviewing"}
              width={330}
              height={330}
              className="w-[105px] h-[105px] sm:w-[156px] sm:h-[156px] md:w-[196px] md:h-[196px] lg:w-[310px] lg:h-[310px] "
            />
            <Image
              src={"/images/image2.webp"}
              alt={"a man working"}
              width={330}
              height={330}
              className="w-[105px] h-[105px] sm:w-[156px] sm:h-[156px] md:w-[196px] md:h-[196px] lg:w-[310px] lg:h-[310px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
