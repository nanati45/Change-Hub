import Image from "next/image";
import React from "react";
import { TitleDescription } from "./type";

const subServices: TitleDescription[] = [
  {
    title: "Process Automation",
    description: "Streamline workflows to enhance efficiency.",
  },
  {
    title: "Customer Experience Enhancement",
    description: "Utilize digital platforms to improve client engagement.",
  },
  {
    title: "Cloud Integration",
    description: "Leverage cloud technologies for scalability and flexibility.",
  },
];

const Services = () => {
  return (
    <div className="w-[1005px] flex items-center justify-center gap-4">
      <div>
        <p>Digital Transformation</p>
        <p>
          Revolutionize your operations with the latest digital tools and
          strategies.
        </p>
      </div>
      <div className="">
        <Image
          src={"/assets/images/digitalt.svg"}
          alt="picture"
          width={316}
          height={551}
          className="rounded-3xl"
        />
      </div>
      <div>
        {subServices.map((service, index) => (
          <div key={index}>
            <p className="font-normal text-[24px] ">{service.title}</p>
            <p className="font-normal text-[16px] ">{service.description}</p>
            {index !== subServices.length - 1 && (
              <div className="h-[1px] bg-black"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
