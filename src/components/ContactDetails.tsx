import Image from "next/image";
import React from "react";

const ContactDetails = () => {
  return (
    <div className="flex flex-col bg-dark-blue w-full text-grey">
      <p>Change Hub</p>
      <div className="flex md:flex-row md:justify-between gap-6 flex-col">
        <div className="flex md:w-1/3 flex-col items-center justify-start gap-4">
          <p>Change Hub</p>
          <ul>
            <li>Services</li>
            <li>OurApproach</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex  md:w-1/3 flex-col items-center justify-start gap-4">
          <div>
            <Image
              src={`/images/logo.svg`}
              alt="change hub logo"
              width={40}
              height={50}
            />
          </div>
          <p>
            Change-hub is a company based in Addis Ababa, Ethiopia. that offers
            various services such as Change Management, Data Analytics, Data
            Analytics, and ERP Solutions and so much more.
          </p>
        </div>
        <div className="flex  md:w-1/3 flex-col items-center justify-start gap-4">
          <p>Contact-Info</p>
          <div className="flex flex-col items-center justify-start gap-2">
            <div className="grid grid-cols-4 items-center justify-start gap-2">
              <div className="col-span-1 ">
                <Image
                  src={`/images/location.svg`}
                  alt="location"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col col-span-3 items-start gap-2 w-full">
                <p className="text-left w-full">Addis Abeba , Ethiopia</p>
                <p className="text-left w-full">Address</p>
              </div>
            </div>
            <div className="grid grid-cols-4  items-center justify-start gap-2">
              <div className="col-span-1 ">
                <Image
                  src={`/images/call.svg`}
                  alt="call"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col col-span-3 items-start gap-2 w-full">
                <p className="text-left w-full">+251 923 637 271</p>
                <p className="text-left w-full">Mobile</p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center justify-start gap-2">
              <div className="col-span-1 ">
                <Image
                  src={`/images/message.svg`}
                  alt="message"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex flex-col col-span-3 items-start gap-2 w-full">
                <p className="text-left w-full">contact@Example.com</p>
                <p className="text-left w-full">Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContactDetails;
