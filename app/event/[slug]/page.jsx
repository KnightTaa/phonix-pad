"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Uploads = ({ params }) => {
    const [bgColor, setBgColor] = useState("bg-[#f7e114]");
    const [urlT, setUrltem] = useState("/winnersshot");
    const [event, setEvent] = useState("shots");
    useEffect(() => {
      if (params.slug === "shots") {
        setBgColor("bg-[#f7e114]");
        setUrltem("/winnersshot");
        setEvent("shots");
      } else if (params.slug === "brands") {
        setBgColor("bg-[#ea4747]");
        setUrltem("/winnersbrand");
        setEvent("brands");
      } else if (params.slug === "products") {
        setBgColor("bg-[#00d3c8]");
        setUrltem("/winnersproduct");
        setEvent("products");
      }
    }, [params.slug]);

  return (
    <div className="w-full min-h-screen flex flex-col sm:flex-row relative">
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
      <div className={`w-full sm:w-[92.5%] flex items-center justify-center ${bgColor}`}>
        <div className={`w-full sm:w-[50%] flex items-center justify-center  relative ${bgColor}`}>
          <Link href={`${urlT}`}>
            <Image
              src={"/logo24.png"}
              width={400}
              height={400}
              alt={"logo2024"}
              className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto"
            />
          </Link>
        </div>
        {/* Yellow background section */}
        <div className={`w-full sm:w-[50%] flex items-center justify-center  relative ${bgColor}`}>
          <Link href={`/apply/${event}`}>
            <Image
              src={"logo25.png"}
              width={400}
              height={400}
              alt={"logo"}
              className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Uploads;
