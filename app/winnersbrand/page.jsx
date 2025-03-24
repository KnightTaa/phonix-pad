"use client";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FileViewer from "@/components/FileViewer";

const WinnersBrand = () => {
  return (
    <div className="w-full min-h-screen flex flex-col sm:flex-row relative">
      {/* Sidebar */}
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

      {/* Main Content */}
      <div className="w-full sm:w-[92.5%] bg-[#ea4747]">
        {/* Header */}
        <div className="w-full flex items-center h-[200px] pl-3">
          <div className="flex items-center">
            <Image
              src={"/image 10.png"}
              width={100}
              height={100}
              alt="trophy"
              className="w-[80px] md:w-[100px] xl:w-[120px] h-auto"
            />
            <h1 className="text-4xl xl:text-8xl font-semibold ml-4">WINNERS</h1>
          </div>
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
          {/* Winner */}
          <div className="relative text-center p-4">
            <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
              Winner
            </span>
            <Image
              src={"users/Images/PasinduDhananjaya.jpg"}
              width={400}
              height={400}
              alt="Winner"
              className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Pasindu Dhananjaya</h2>
            <p className="text-base">
              All designs in brand manual inspired from the breeze chair model and summer theme. Logo, colours and patterns represent brand voice and modern feel of the endless summer
            </p>
            <div className="p-4">
              <FileViewer fileUrl="BrandsforLife/BFL-1st.pdf" />
            </div>
          </div>

          {/* 1st Runner-up */}
          <div className="relative text-center p-4">
            <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
              1st Runner-up
            </span>
            <Image
              src={"users/Images/SachinthiWirasinha.jpeg"}
              width={400}
              height={400}
              alt="1st Runner-up"
              className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Sachinthi Wirasinha</h2>
            <p className="text-base">
              The submission includes the brand identity, brand application and product promotion suggestions for the 'little monsoon' watering can under the prompt, a portal to soothing escape.
            </p>
            <div className="p-4">
              <FileViewer fileUrl="BrandsforLife/BFL-2nd.pdf" />
            </div>
          </div>

          {/* 2nd Runner-up */}
          <div className="relative text-center p-4">
            <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
              2nd Runner-up
            </span>
            <Image
              src={"users/Images/ShenalMendis.jpg"}
              width={400}
              height={400}
              alt="2nd Runner-up"
              className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Shenal Mendis</h2>
            <p className="text-base">
              "Sun Child" is a Ceylon Fragrance brand that creates summer-inspired fragrances capturing the essence of a Sri Lankan summer. Through its fragrances, Sun Child helps both Sri Lankan and international users relive their summer in Sri Lanka from anywhere in the world. The fragrances evoke nostalgia and call for an endless summer.
            </p>
            <div className="p-4">
              <FileViewer fileUrl="BrandsforLife/BFL-3rd.pdf" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 p-6">
          <a href="#">
            <div className="flex items-center justify-center text-center">
              <Image
                src={"/image 10.png"}
                width={100}
                height={100}
                alt="trophy"
                className="w-[80px] md:w-[100px] xl:w-[120px] h-auto"
              />
              <h1 className="text-xl font-semibold ml-4">Click to <br /> Download</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WinnersBrand;
