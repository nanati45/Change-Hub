"use client";
import Service from "@/components/Service";
import React, { useState } from "react";
import {
  clashMedium,
  clashSemibold,
  gilroyBold,
  gilroyRegular,
  manrope,
} from "../fonts";
import { SlideRightIcon, SlideLeftIcon } from "@/components/Icons";
import { serviceList } from "@/data/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const OurServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalServices = serviceList.length;

  const goNext = () => {
    if (currentIndex < totalServices - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <motion.div
      id="services"
      className="relative flex flex-col items-center justify-center w-full gap-6 pt-8"
      initial={{ opacity: 0, y: 200 }} // Start from bottom and transparent
      animate={{ opacity: 1, y: 0 }} // End at normal position with full opacity
      transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration and easing
    >
      <div className="absolute flex items-center justify-center  top-1/6 opacity-3 mix-blend-exclusion  w-full h-full ">
        <Image
          src="/images/liquid-bg-unscreen.gif"
          alt="bg"
          fill
          unoptimized
          className=" object-contain w-full scale-y-[-1]"
        />

        <div className="absolute top-0 right-0 w-full h-full bg-overlay" />
      </div>
      <div className="flex flex-col items-center justify-center px-4">
        <p
          className={` ${clashMedium.className} font-medium text-[52px] md:text-[96px] lg:text-[138px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          Our Services
        </p>

        <div className=" flex flex-col px-4 items-center justify-center  ">
          <p
            className={`${gilroyBold.className} font-normal text-sky-blue text-[12px] max-sm:text-[16px]`}
          >
            SERVICES
          </p>
          <p
            className={`${manrope.className}  font-bold text-primary text-[32px] md:text-[48px] lg:text-[56px]`}
          >
            What We Do
          </p>
          <p
            className={`${gilroyRegular.className} max-w-[585px] text-primary text-[14px] md:text-[16px] lg:text-[18px]  font-normal text-center`}
          >
            We offer a comprehensive suite of services designed to address the
            unique challenges of businesses.
          </p>
        </div>
      </div>

      {/* Services Section with Pagination */}
      <div className="relative flex items-center justify-center w-full max-w-[1221px] px-[32px] ">
        {/* Left Arrow - Hidden on First Slide */}
        {currentIndex > 0 && (
          <button
            onClick={goPrev}
            className="absolute left-3 z-10  md:flex items-center justify-center transition cursor-pointer"
          >
            <SlideLeftIcon />
          </button>
        )}

        {/* Sliding Services Container */}
        <div className="overflow-hidden min-w-[350px] w-full max-w-[1005px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {serviceList.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Service
                  title={service.title}
                  description={service.description}
                  details={service.details}
                  imageURL={service.imageURL}
                  subServices={service.subServices}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow - Hidden on Last Slide */}
        {currentIndex < totalServices - 1 && (
          <button
            onClick={goNext}
            className="absolute right-3 z-10 md:flex items-center justify-center transition cursor-pointer"
          >
            <SlideRightIcon />
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-[6px] mb-4 ">
        {serviceList.map((_, index) => (
          <span
            key={index}
            className={`w-[7px] h-[7px] rounded-full ${
              index === currentIndex
                ? "bg-sky-blue w-[21px] h-[7px]"
                : "bg-dots"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default OurServices;
