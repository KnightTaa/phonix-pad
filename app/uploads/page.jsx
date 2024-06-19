"use client";
import Image from "next/image";
import React, { useState } from "react";
import UploadForm from "@/components/UploadForm";
import Link from "next/link";

const Uploads = () => {
  return (
    <div className="w-full min-h-screen flex flex-col sm:flex-row relative">
      <div className="w-full sm:w-[7.5%] bg-black">
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
      <div className="w-full sm:w-[92.5%] flex items-center justify-center">
        <UploadForm />
      </div>
    </div>
  );
};

export default Uploads;
