import { SendIcon } from "@/components/Icons";
import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div>
        <p>CONTACT US</p>
        <p>Ready to Transform Your Business</p>
        <div>
          <div>
            <Image
              src={`/images/contact.webp`}
              alt="contact"
              width={130}
              height={119}
            />
          </div>
          <p>
            Let&#39;s collaborate to accomplish your business objectives,
            explore innovative technologies, or bring your predefined
            requirements to life.
          </p>
        </div>
      </div>
      <div>
        <form>
          <p>Fields with * are required</p>
          <div>
            <input placeholder="location*" />
            <input placeholder="Phone number*" />
            <input placeholder="Email*" />
          </div>
          <div className="flex mt-auto  md:self-start self-center">
            <Button
              endContent={<SendIcon />}
              className="bg-primary text-white py-[10px] px-[24px] rounded-full flex justify-start"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
