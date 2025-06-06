"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Uploads = () => {
  return (
    <div className="w-full min-h-screen flex flex-col sm:flex-row relative">
      {/* Left (logo) bar */}
      <div className="w-full max-h-screen sticky top-0 sm:w-[7.5%] z-50 bg-black">
        <div className="w-full h-full rotate-0 sm:-rotate-[90deg] flex items-center justify-center">
          <Link href={"/"}>
            <Image
              src={"/image 1.png"}
              width={400}
              height={400}
              alt={"logo"}
              className="w-[150px] sm:w-[250px] h-auto p-5 sm:p-0"
            />
          </Link>
        </div>
      </div>

      {/* Yellow background section */}
      <div className="w-full sm:w-[46.25%] flex items-center justify-center bg-[#f7e114] relative">
        <Link href={"/event"}>
          <Image
            src={"/image 7.png"}
            width={400}
            height={400}
            alt={"logo"}
            className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto"
          />
        </Link>
      </div>
      {/* Yellow background section */}
      <div className="w-full sm:w-[46.25%] flex items-center justify-center bg-[#f7e114] relative">
        <Link href={"/event"}>
          <Image
            src={"/image 7.png"}
            width={400}
            height={400}
            alt={"logo"}
            className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default Uploads;
