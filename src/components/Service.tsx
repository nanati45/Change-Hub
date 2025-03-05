import Image from "next/image";
import React from "react";
import { TitleDescription } from "./type";
import { gilroyMedium, gilroySemiBold } from "@/app/fonts";
import { Button } from "@heroui/button";
import { ArrowIcon } from "./Icons";

interface ServicesProps {
  title: string;
  description: string;
  details: {
    title: string;
    url: string;
  };
  imageURL: string;
  subServices: TitleDescription[];
}

const Service: React.FC<ServicesProps> = ({
  title,
  description,
  details,
  imageURL,
  subServices,
}) => {
  return (
    <div className="flex lg:flex-row flex-col gap-3 items-center justify-between">
      <div className="flex flex-col items-center gap-[20px] py-[20px] px-[16px] text-center lg:text-left ">
        <p
          className={`${gilroySemiBold.className} lg:text-[36px] md:text-[30px] text-[26px] text-primary`}
        >
          {title}
        </p>
        <p
          className={`${gilroyMedium.className} lg:text-[18px] md:text-[16px] text-[15px] text-charcoal`}
        >
          {description}
        </p>
        <div className="hidden lg:flex mt-auto self-start">
          <Button
            endContent={<ArrowIcon />}
            className="bg-primary text-white py-[10px] px-[24px] rounded-full flex justify-start"
          >
            {details.title}
          </Button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-3 items-center justify-center md:justify-between">
        {/* Image container with full height */}
        <div className="w-[345px] h-[240px] md:w-[395px] md:h-full flex rounded-full">
          <Image
            src={imageURL}
            alt="a woman rating 5 stars on a customer service machine"
            width={395}
            height={240}
            className="rounded-3xl w-full h-full object-cover"
          />
        </div>

        {/* Text container, centered and height-restricted */}
        <div className="flex flex-col justify-center px-[32px] md:h-full">
          <div className="flex flex-col items-center md:items-start justify-center w-full md:max-h-full">
            {subServices.map((service, index) => (
              <div key={index} className="space-y-[28px] max-w-[320px] w-full">
                <div className="space-y-[14px] w-full">
                  <p
                    className={`${gilroySemiBold.className} text-center md:text-left font-normal lg:text-[24px] md:text-[20px] text-[18px] text-primary`}
                  >
                    {service.title}
                  </p>
                  <p
                    className={`${gilroyMedium.className} text-center md:text-left font-normal lg:text-[16px] md:text-[15px] text-[14px] text-charcoal`}
                  >
                    {service.description}
                  </p>
                </div>
                {index !== subServices.length - 1 && (
                  <div className="h-[1px] mb-[14px] bg-line"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden mt-4">
        <Button
          endContent={<ArrowIcon />}
          className="bg-primary text-white py-[10px] px-[24px] rounded-full flex"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Service;
