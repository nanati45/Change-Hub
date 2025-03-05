import { clashSemibold, gilroyBold, gilroyMedium } from "@/app/fonts";
import Image from "next/image";
import React, { FC } from "react";

interface ApproachProps {
  number: string;
  title: string;
  description: string;
  imageURL?: string; // Optional prop
}

const Approach: FC<ApproachProps> = ({
  number,
  title,
  description,
  imageURL,
}) => {
  return (
    <div className="relative rounded-[20px] md:rounded-[32px] flex bg-gray-box w-full h-full flex-col md:flex-row justify-between ">
      {/* Left Text Content */}
      <div
        className={`flex flex-col items-start gap-6 p-4 md:p-6 ${
          imageURL ? "md:w-5/13" : "w-full"
        }`}
      >
        <p
          className={`${clashSemibold.className} text-[36px] md:text-[54px] lg:text-[72px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          {number}
        </p>
        <div className="flex flex-col gap-4">
          <h1
            className={`${gilroyBold.className} text-[20px] md:text-[24px] font-normal`}
          >
            {title}
          </h1>
          <h2
            className={`${gilroyMedium.className} max-w-[245px] text-[16px] md:text-[18px] font-normal`}
          >
            {description}
          </h2>
        </div>
      </div>

      {/* Right Image (if exists) */}
      {imageURL && (
        <div className="flex-1 md:w-8/13 w-full h-auto md:h-full  flex justify-center bg-overlay mix-blend-multiply  md:justify-end">
          <Image
            src={imageURL}
            alt="approach symbol"
            width={500}
            height={300}
            className="w-full h-full object-contain rounded-b-[20px] md:rounded-r-[42px] md:rounded-b-none"
          />
          <div className="absolute top-0 right-0 w-full h-full bg-overlay  " />
        </div>
      )}
    </div>
  );
};

export default Approach;
