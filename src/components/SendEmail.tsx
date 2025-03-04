import { Button } from "@heroui/button";
import React from "react";
import { SendIcon } from "./Icons";
import Image from "next/image";
import { gilroyBold, gilroyRegular } from "@/app/fonts";

const SendEmail = () => {
  return (
    <div className="w-full flex md:flex-row flex-col  items-center justify-between bg-dark-blue p-16">
      <div className="flex flex-col items-center w-full md:w-1/2  justify-center md:justify-start">
        <div>
          <p
            className={`${gilroyBold.className}   text-center md:text-left  font-normal text-[16px] text-light-blue`}
          >
            CONTACT US
          </p>
          {/* <p
          className={`${gilroyBold.className} font-normal text-[48px] bg-gradient-to-r from-white-text to-white-text bg-clip-text text-transparent`}
          >
          Ready to Transform Your */}
          <p
            className={`${gilroyBold.className} text-center md:text-left font-normal text-[48px] text-white`}
          >
            Ready to Transform Your
            {/* <span className="bg-gradient-to-r from-mixed-blue to-mixed-blue bg-clip-text text-transparent">
            Business
            </span> */}
            <span className="text-sky-blue">Business</span>
          </p>
        </div>

        <div className="flex flex-row items-center justify-center">
          <div className="w-1/3 flex items-center justify-start">
            <Image
              src={`/images/contact.webp`}
              alt="contact"
              width={130}
              height={119}
            />
          </div>
          <p
            className={`${gilroyRegular.className} w-2/3 text-white font-normal text-[16px] flex items-center justify-start`}
          >
            Let&#39;s collaborate to accomplish your business objectives,
            explore innovative technologies, or bring your predefined
            requirements to life.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 text-gray-text p-5">
        <form className="flex w-full flex-col gap-6">
          <p className="flex items-center justify-end">
            Fields with
            <span className="text-sky-blue">*</span>
            are required
          </p>
          <div className="flex flex-col gap-6">
            <input
              placeholder="location*"
              className="p-4 rounded-full bg-blue-black"
            />
            <input
              placeholder="Phone number*"
              className="p-4 rounded-full bg-blue-black"
            />
            <input
              placeholder="Email*"
              className="p-4 rounded-full bg-blue-black"
            />
          </div>
          <div className="flex mt-auto items-center justify-center w-full ">
            <Button
              endContent={<SendIcon />}
              className=" text-white bg-sky-blue py-[10px] px-[24px] w-3/4 rounded-full flex justify-center"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
