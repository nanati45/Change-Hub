import { SendIcon } from "@/components/Icons";
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";
import { gilroyBold, gilroyRegular } from "../fonts";
import SendEmail from "@/components/SendEmail";
import ContactDetails from "@/components/ContactDetails";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center bg-blue-black w-full">
      <SendEmail />
      <ContactDetails />
    </div>
  );
};

export default ContactUs;
