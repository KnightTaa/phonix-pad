"use client";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FileViewer from "@/components/FileViewer";

const WinnersBrand = () => {
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
      <div className="w-full sm:w-[92.5%] items-center justify-center bg-[#ea4747]">
        <div className="w-full flex items-center justify-start h-[200px] pl-3">
        <div className="top-[0%] transform translate-x-0 translate-y-0 inset-0 flex items-center justify-start h-[50px] pl-3">
            <div>
              <Image
                src={"/image 10.png"}
                width={400}
                height={400}
                alt={"logo"}
                className="w-[100px] md:w-[10px] xl:w-[100px] 2xl:w-[100px] h-auto block"
              />
            </div>
            <div className="items-start w-60 m-4">
            <h1 className="text-8xl xl:text-8xl 2xl:text-8xl font-semibold">
               WINNERS
            </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center  h-auto">
          <div className="top-[50%] right-[0%] transform translate-x-0 translate-y-0 inset-0 items-center justify-start w-1/3 p-4">
            <div className="w-full">
              <div className="flex">
                <div className="w-1/12">
                  <span class="absolute left-6 -rotate-90 transform origin-left text-black font-bold text-2xl xl:text-2xl 2xl:text-2xl top-[29%]">
                      Winner
                  </span>
                </div>
                <div className="w-11/12">
                    <Image
                    src={"users/PasinduDhananjaya.jpg"}
                    width={400}
                    height={400}
                    alt={"logo"}
                    className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[150px] h-[150px] block"
                  />
                </div>
              </div>
            </div>
            <div className="items-start my-8 mr-4 w-full">
              <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              Pasindu Dhananjaya
            </h1>
              <p className="text-base xl:text-lg 2xl:text-xl font-medium">
              All designs in brand manual inspired from the breeze chair model and summer theme. Logo, colours and patterns represent brand voice and modern feel of the endless summer
              </p>
              <div className="p-6">
                {/* <h1 className="text-2xl font-semibold mb-4">File Viewer</h1> */}
                <FileViewer fileUrl="BrandsforLife/BFL-1st.pdf" />
                {/* <FileViewer fileUrl="https://example.com/image.jpg" /> */}
              </div>
            </div>
          </div>
          <div className="top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 items-center justify-start w-1/3">
          <div className="w-full">
          <div className="flex">
                <div className="w-1/12">
                  <span class="absolute left-2 -rotate-90 transform origin-left text-black font-bold text-2xl xl:text-2xl 2xl:text-2xl top-[29%]">
                     1st Runner-up
                  </span>
                </div>
                <div className="w-11/12">
                    <Image
                    src={"users/SachinthiWirasinha.jpeg"}
                    width={400}
                    height={400}
                    alt={"logo"}
                    className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[150px] h-[150px] block"
                  />
                </div>
              </div>
            </div>
            <div className="items-start my-8 mr-4 w-full">
              <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              Sachinthi Wirasinha
            </h1>
              <p className="text-base xl:text-lg 2xl:text-xl font-medium mr-4">
              The submission includes the brand identity, brand application and product promotion suggestions for the 'little monsoon' watering can under the prompt, a portal to soothing escape.
              </p>
              <div className="p-6">
                {/* <h1 className="text-2xl font-semibold mb-4">File Viewer</h1> */}
                <FileViewer fileUrl="BrandsforLife/BFL-2nd.pdf" />
                {/* <FileViewer fileUrl="https://example.com/image.jpg" /> */}
              </div>
            </div>
          </div>
          <div className="top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 items-center justify-start w-1/3">
          <div className="w-full">
              <div className="flex">
                <div className="w-1/12">
                  <span class="absolute left-2 -rotate-90 transform origin-left text-black font-bold text-2xl xl:text-2xl 2xl:text-2xl top-[29%]">
                    2nd Runner-up
                  </span>
                </div>
                <div className="w-11/12">
                    <Image
                    src={"users/ShenalMendis.jpg"}
                    width={400}
                    height={400}
                    alt={"logo"}
                    className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[150px] h-auto block top-[44px] position-relative"
                    style={{position: "relative"}}
                  />
                </div>
              </div>
              
            </div>
            <div className="items-start my-8 mr-4 pt-12 w-full">
              <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              Shenal Mendis
            </h1>
              <p className="text-base xl:text-lg 2xl:text-xl font-medium mr-4">
              "Sun Child" is a Ceylon Fragrance brand that creates summer-inspired fragrances capturing the essence of a Sri Lankan summer. Through its fragrances, Sun Child helps both Sri Lankan and international users relive their summer in Sri Lanka from anywhere in the world. The fragrances evoke nostalgia and call for an endless summer.
              </p>
              <div className="p-6">
                {/* <h1 className="text-2xl font-semibold mb-4">File Viewer</h1> */}
                <FileViewer fileUrl="BrandsforLife/BFL-3rd.pdf" />
                {/* <FileViewer fileUrl="https://example.com/image.jpg" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersBrand;
