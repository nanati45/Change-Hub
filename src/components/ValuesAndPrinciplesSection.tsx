import React from "react";
import { gilroyBold, gilroyMedium, manrope } from "../app/fonts";
import { CollaborationIcon, InnovationIcon, IntegrityIcon } from "./Icons";
import Image from "next/image";

const ValuesAndPrinciples = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-16 ">
      <p
        className={`${manrope.className} text-primary text-center text-[28px] md:text-[36px] lg:text-[48px] max-w-[600px] font-normal`}
      >
        Our Values & Principles
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1024px] px-4">
        {[
          {
            title: "Innovation",
            description: "Constantly seeking and applying new ideas.",
            Icon: InnovationIcon,
          },
          {
            title: "Integrity",
            description: "Upholding the highest standards of professionalism.",
            Icon: IntegrityIcon,
          },
          {
            title: "Collaboration",
            description:
              "Working closely with clients to achieve shared goals.",
            Icon: CollaborationIcon,
            span: "md:col-span-2 lg:col-span-1", // Collaboration spans full width on md
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`bg-gray-box rounded-[36px] h-[248px] p-6 flex flex-col md:items-start items-center justify-between ${
              item.span || ""
            }`}
          >
            <div className="flex items-center self-start">
              <item.Icon />
            </div>
            <div className="flex flex-col gap-2 text-left ">
              <h1
                className={`${gilroyBold.className} font-normal text-[24px] text-primary`}
              >
                {item.title}
              </h1>
              <h2
                className={`${gilroyMedium.className} font-normal text-[16px] text-charcoal`}
              >
                {item.description}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValuesAndPrinciples;
