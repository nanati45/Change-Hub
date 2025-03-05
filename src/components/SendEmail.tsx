"use client";
import { Button } from "@heroui/button";
import React from "react";
import { SendIcon } from "./Icons";
import Image from "next/image";
import { gilroyBold, gilroyRegular } from "@/app/fonts";
import { motion } from "framer-motion";

const SendEmail = () => {
  return (
    <div className="w-full flex md:flex-row flex-col max-w-[1109px] items-center justify-between bg-dark-blue p-16">
      {/* Left section (Contact Us) */}
      <motion.div
        className="flex flex-col items-center w-full md:w-1/2 gap-6 justify-center md:justify-start"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div>
          <p
            className={`${gilroyBold.className} text-center md:text-left font-normal text-[16px] text-light-blue`}
          >
            CONTACT US
          </p>
          <p
            className={`${gilroyBold.className} text-center md:text-left font-normal text-[48px] text-white`}
          >
            Ready to <span className="text-white-dim">Transform</span> Your{" "}
            <span className="text-sky-blue">Business</span>
          </p>
        </div>

        <div className="flex flex-row items-center justify-start gap-4">
          <div className="flex items-center justify-start shrink-0">
            <Image
              src={`/images/contact.webp`}
              alt="contact"
              width={115}
              height={104}
            />
          </div>

          <p
            className={`${gilroyRegular.className} text-[#C4C4C4] font-normal text-[16px] flex items-center justify-start gap-2`}
          >
            Let&#39;s collaborate to accomplish your business objectives,
            explore innovative technologies, or bring your predefined
            requirements to life.
          </p>
        </div>
      </motion.div>

      {/* Right section (Form) */}
      <motion.div
        className="w-full md:w-1/2 text-gray-text p-5"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <form className="flex w-full flex-col gap-10">
          <div>
            <p className="flex items-center text-[#8994A3] text-[14px] justify-end text-sm pr-3">
              Fields with
              <span className="text-[#708DFF]">*</span>
              are required
            </p>

            <div className="flex flex-col text-[14px] gap-2">
              <input
                id="location"
                type="text"
                placeholder="Location*"
                className="mt-2 py-3 px-4 rounded-full bg-blue-black w-full "
                required
              />

              <input
                id="phone"
                placeholder="Phone number*"
                className="mt-2 py-3 px-4 rounded-full bg-blue-black w-full "
                required
              />

              <input
                id="email"
                placeholder="Email*"
                className="mt-2 py-3 px-4 rounded-3xl bg-blue-black w-full "
                required
              />
            </div>
          </div>

          <div className="flex mt-auto items-center justify-center w-full">
            <Button
              endContent={<SendIcon />}
              className="text-white bg-sky-blue py-[10px] px-[24px] w-3/4 rounded-full flex justify-center cursor-pointer"
            >
              Submit
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SendEmail;
