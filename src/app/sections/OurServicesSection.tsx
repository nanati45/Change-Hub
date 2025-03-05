"use client";
import Service from "@/components/Service";
import React, { useState } from "react";
import { clashSemibold, gilroyBold, gilroyRegular, manrope } from "../fonts";
import { SlideRightIcon, SlideLeftIcon } from "@/components/Icons";

const serviceList = [
  {
    title: "Digital Transformation",
    description:
      "Revolutionize your operations with the latest digital tools and strategies.",

    details: {
      title: "Contact Us",
      url: "",
    },
    imageURL: "/images/ser.webp",
    subServices: [
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
        description:
          "Leverage cloud technologies for scalability and flexibility.",
      },
    ],
  },
  {
    title: "Change Management",
    description: "Navigate organizational change with confidence.",
    details: {
      title: "Contact Us",
      url: "",
    },
    imageURL: "/images/img2.webp",
    subServices: [
      {
        title: "Training & Development",
        description:
          "Equip your team with the skills needed for new initiatives.",
      },
      {
        title: "Risk Mitigation",
        description: "Identify and address potential challenges proactively.",
      },
      {
        title: "Stakeholder Engagement",
        description: "Ensure all parties are aligned and informed.",
      },
    ],
  },

  {
    title: "Data Analytics",
    description: "Transform data into actionable insights.",

    details: {
      title: "Contact Us",
      url: "",
    },
    imageURL: "/images/img3.webp",
    subServices: [
      {
        title: "Business Intelligence",
        description: "Make informed decisions with real-time data analysis.",
      },
      {
        title: "Predictive Analytics",
        description: "Anticipate market trends and customer needs.",
      },
      {
        title: "Data Visualization",
        description: " Present complex data in an easily digestible format.",
      },
    ],
  },
  {
    title: "ERP Solutions",
    description: "Optimize your resources with tailored ERP systems.",
    details: {
      title: "Get ERP Solution",
      url: "",
    },
    imageURL: "/images/img4.webp",
    subServices: [
      {
        title: "System Selection & Implementation",
        description:
          "Choose and deploy the right ERP solution for your business.",
      },
      {
        title: "Customization & Integration",
        description: "Adapt ERP systems to fit your specific processes.",
      },
      {
        title: "Ongoing Support & Maintenance",
        description:
          " Ensure your ERP system evolves with your business needs.",
      },
    ],
  },
  {
    title: "Technology Consulting",
    description:
      "Revolutionize your operations with the latest digital tools and strategies.",
    details: {
      title: "Get Free Consultation",
      url: "",
    },
    imageURL: "/images/img55.webp",
    subServices: [
      {
        title: "IT Infrastructure Assessment",
        description: "Evaluate and enhance your current tech setup.",
      },
      {
        title: "Cybersecurity Strategies",
        description: "Protect your business from digital threats.",
      },
      {
        title: "Emerging Technology Adoption",
        description:
          "Integrate AI, IoT, and other innovations into your operations.",
      },
    ],
  },
  // Add more services here as needed
];

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
    <div className="relative flex flex-col items-center justify-center w-full gap-6 ">
      {/* <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/liquid-bg-unscreen.gif"
          alt="bg"
          fill
          unoptimized
          className="object-cover z-[-2]"
        />

        <div
          className="absolute inset-0 z-[-1] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.3) 100%)",
          }}
        />
      </div> */}

      <div className="flex flex-col items-center justify-center px-4">
        <p
          className={` ${clashSemibold.className} text-[56px] md:text-[96px] lg:text-[128px] bg-gradient-to-b from-[#2222221a] to-[#2222220] bg-clip-text text-transparent`}
        >
          Our Services
        </p>
        <div className=" flex flex-col px-4 items-center justify-center gap-1">
          <p
            className={`${gilroyBold.className} text-sky-blue text-[12px] max-sm:text-[16px]`}
          >
            SERVICES
          </p>
          <p
            className={`${manrope.className} text-primary text-[32px] md:text-[48px] lg:text-[56px] font-normal`}
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
            className="absolute left-3 z-10  hidden md:flex items-center justify-center transition"
          >
            <SlideLeftIcon />
          </button>
        )}

        {/* Sliding Services Container */}
        <div className="overflow-hidden w-full max-w-[1005px]">
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
            className="absolute right-3 z-10 hidden md:flex items-center justify-center transition"
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
    </div>
  );
};

export default OurServices;
