"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const RotatingSpinner = () => {
  return (
    <div className="relative flex items-center justify-center w-[360px] h-[360px] sm:w-[400px] sm:h-[400px]">
      {/* Rotating Outer Dotted Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute w-[340px] h-[340px] sm:w-[365px] sm:h-[365px] custom-dotted-circle rounded-full "
      ></motion.div>

      {/* Outer Circle Rotating Images Container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute w-full h-full flex items-center justify-center"
      >
        {/* Image 1 (Top) */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          <Image src="/images/spinner1.webp" alt="1" width={47} height={47} />
        </motion.div>

        {/* Image 2 (Right) */}
        {/* <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          <Image src="/images/spinner2.webp" alt="2" width={50} height={50} />
        </motion.div> */}

        {/* Image 3 (Bottom left) */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          <Image src="/images/spinner3.webp" alt="3" width={50} height={50} />
        </motion.div>

        {/* Image 4 (Bottom Right) */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          <Image src="/images/spinner4.webp" alt="4" width={50} height={50} />
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] custom-dotted-circle-small rounded-full"
      ></motion.div>

      {/* Inner Rotating Images */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        className="absolute w-full h-full flex items-center justify-center"
      >
        {/* Image 1 (Top) */}
        <motion.div
          className="absolute top-1/3 right-1/6 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        >
          <Image src="/images/spinner1.webp" alt="1" width={38} height={38} />
        </motion.div>
      </motion.div>

      <div className="absolute w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] flex items-center justify-center rounded-full">
        <Image src="/images/Mask-group.webp" alt="1" width={220} height={220} />
      </div>
    </div>
  );
};

export default RotatingSpinner;
