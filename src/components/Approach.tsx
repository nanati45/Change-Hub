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
    <div className="rounded-[32px] flex bg-gray-box w-full h-full md:flex-row flex-col items-center justify-between p-6 gap-4">
      <div>
        <p
          className={`${clashSemibold.className} text-[36px] md:text-[54px] lg:text-[72px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          {number}
        </p>
        <h1
          className={` ${gilroyBold.className} text-[20px] md:text-[24px] font-normal`}
        >
          {title}
        </h1>
        <h2
          className={` ${gilroyMedium.className} max-w-[245px] text-[16px] md:text-[18px] font-normal`}
        >
          {description}
        </h2>
      </div>
      {imageURL && (
        <div className="flex-1 flex justify-center max-w-full">
          <Image
            src={imageURL}
            alt="approach symbol"
            width={400}
            height={400}
            className="w-1/2 h-auto object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Approach;
