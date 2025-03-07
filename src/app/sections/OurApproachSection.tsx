"use client";
import React from "react";
import { clashMedium, gilroyBold, manrope } from "../fonts";
import Approach from "@/components/Approach";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { approachSteps } from "@/data/approachesData";

const OurApproach = () => {
  return (
    <div
      id="our-approach"
      className="relative flex flex-col items-center justify-center mb-8"
    >
      {/* Background Blob */}
      <div className="absolute left-0 top-3/4 -translate-y-1/2 max-md:hidden pointer-events-none">
        <Image
          src="/images/blob.svg"
          alt="shadow"
          width={100}
          height={100}
          className="opacity-10 z-[-10]"
        />
      </div>

      {/* Approach Title and Text with Animation */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 50 }} // Start from below and invisible
        animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
      >
        <p
          className={` ${clashMedium.className} font-medium text-[52px] md:text-[96px] lg:text-[138px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          Approach
        </p>
        <div className=" flex flex-col px-5 md:-mt-8 sm:-mt-4 -mt-2 gap-3 items-center justify-center  ">
          <p
            className={`${gilroyBold.className} font-normal text-sky-blue text-[12px] sm:text-[14px] md:text-[16px]`}
          >
            OUR METHOD
          </p>
          <p
            className={`${manrope.className} text-primary text-center text-[28px] md:text-[36px] lg:text-[48px] max-w-[600px] font-normal`}
          >
            Strategize. Implement. Transform.
          </p>
        </div>
      </motion.div>
      <div className="hidden sm:block absolute inset-y-0 right-0 items-start">
        <Image
          src={`/images/dots.svg`}
          alt="dots"
          width={140}
          height={140}
          className="max-md:w-[100px] max-md:h-[100px]"
        />
      </div>

      {/* Approach Steps with alternating animation */}
      <div className="w-full lg:min-w-[880px] lg:max-w-[1020px] md:w-5/6 px-4 grid grid-cols-12 grid-rows-12 justify-center  mt-16 max-sm:px-8 gap-4">
        {/* First Approach Step */}
        <motion.div
          className="lg:col-span-5 col-span-12 sm:col-span-6 lg:row-span-6 sm:row-span-4 row-span-2 justify-center flex"
          initial={{ opacity: 0, x: -100 }} // Start from left with opacity 0
          animate={{ opacity: 1, x: 0 }} // Animate to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Approach
            number={approachSteps[0].number}
            title={approachSteps[0].title}
            description={approachSteps[0].description()}
          />
        </motion.div>

        {/* Second Approach Step */}
        <motion.div
          className="lg:col-span-7 col-span-12 sm:col-span-6 lg:row-span-6 sm:row-span-8 row-span-4 flex justify-center"
          initial={{ opacity: 0, x: 100 }} // Start from right with opacity 0
          animate={{ opacity: 1, x: 0 }} // Animate to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Approach
            number={approachSteps[1].number}
            title={approachSteps[1].title}
            description={approachSteps[1].description()}
            imageURL1={approachSteps[1].imageURL1}
            imageURL2={approachSteps[1].imageURL2}
          />
        </motion.div>

        {/* Third Approach Step */}
        <motion.div
          className="lg:col-span-7 col-span-12 sm:col-span-6 lg:row-span-6 sm:row-span-8 row-span-4 flex justify-center"
          initial={{ opacity: 0, x: -100 }} // Start from left with opacity 0
          animate={{ opacity: 1, x: 0 }} // Animate to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Approach
            number={approachSteps[2].number}
            title={approachSteps[2].title}
            description={approachSteps[2].description()}
            imageURL1={approachSteps[2].imageURL1}
            imageURL2={approachSteps[2].imageURL2}
          />
        </motion.div>

        {/* Fourth Approach Step */}
        <motion.div
          className="lg:col-span-5 col-span-12 sm:col-span-6 lg:row-span-6 sm:row-span-4 row-span-2 flex justify-center"
          initial={{ opacity: 0, x: 100 }} // Start from right with opacity 0
          animate={{ opacity: 1, x: 0 }} // Animate to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Approach
            number={approachSteps[3].number}
            title={approachSteps[3].title}
            description={approachSteps[3].description()}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurApproach;
// <div className="max-w-[1015px] px-4 grid grid-cols-12 grid-rows-12 mt-16 items-stretch gap-4">
//   {/* First Approach Step */}
//   <motion.div
//     className="md:col-span-5 col-span-12 sm:col-span-6 md:row-span-6 row-span-2 flex"
//     initial={{ opacity: 0, x: -100 }} // Start from left with opacity 0
//     animate={{ opacity: 1, x: 0 }} // Animate to normal position
//     transition={{ duration: 0.8, ease: "easeOut" }}
//   >
//     <Approach
//       number="01"
//       title="Consultation"
//       description="We begin by understanding your unique challenges and objectives."
//     />
//   </motion.div>

//   {/* Second Approach Step */}
//   <motion.div
//     className="md:col-span-7 col-span-12 sm:col-span-6 md:row-span-6 row-span-4 flex"
//     initial={{ opacity: 0, x: 100 }} // Start from right with opacity 0
//     animate={{ opacity: 1, x: 0 }} // Animate to normal position
//     transition={{ duration: 0.8, ease: "easeOut" }}
//   >
//     <Approach
//       number="02"
//       title="Strategy"
//       description="Crafting tailored solutions that align with your business goals."
//       imageURL="/images/business-plan.svg"
//     />
//   </motion.div>

//   {/* Third Approach Step */}
//   <motion.div
//     className="md:col-span-7 col-span-12 sm:col-span-6 md:row-span-6 row-span-4 flex"
//     initial={{ opacity: 0, x: -100 }} // Start from left with opacity 0
//     animate={{ opacity: 1, x: 0 }} // Animate to normal position
//     transition={{ duration: 0.8, ease: "easeOut" }}
//   >
//     <Approach
//       number="03"
//       title="Implementation"
//       description="Deploying strategies with precision and agility."
//       imageURL="/images/tar22.webp"
//     />
//   </motion.div>

//   {/* Fourth Approach Step */}
//   <motion.div
//     className="md:col-span-5 col-span-12 sm:col-span-6 md:row-span-6 row-span-2 flex"
//     initial={{ opacity: 0, x: 100 }} // Start from right with opacity 0
//     animate={{ opacity: 1, x: 0 }} // Animate to normal position
//     transition={{ duration: 0.8, ease: "easeOut" }}
//   >
//     <Approach
//       number="04"
//       title="Continuous Support"
//       description="Providing ongoing assistance to ensure sustained success."
//     />
//   </motion.div>
// </div>

/* <div className="max-lg:hidden block absolute inset-y-0 left-0 items-start">
  <Image
    src={`/images/pink.svg`}
    alt="dots"
    width={150}
    height={150}
    className="opacity-50 bg-blurred"
  />
</div> */
