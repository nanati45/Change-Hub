import { SendIcon } from "@/components/Icons";
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";
import { gilroyBold, gilroyRegular } from "../fonts";
import SendEmail from "@/components/SendEmail";
import ContactDetails from "@/components/ContactDetails";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center bg-dark-blue relative  w-full">
      <div className="absolute inset-0 w-full h-full">
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
      </div>
      <SendEmail />
      <ContactDetails />
    </div>
  );
};

export default ContactUs;
