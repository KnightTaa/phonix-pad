import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WinnersShot = () => {
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
      <div className="w-full sm:w-[92.5%] items-center justify-center bg-[#f7e114]">
        <div className="w-full flex items-center justify-start h-[200px] pl-3">
          <div className="top-[0%] transform translate-x-0 translate-y-0 inset-0 flex items-center justify-start h-[50px] pl-3">
            <div>
              <Image
                src={"/image 7.png"}
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
              <Image
                src={"/image 7.png"}
                width={400}
                height={400}
                alt={"logo"}
                className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto block"
              />
            </div>
            <div className="items-start my-8 mr-4 w-full">
              {/* <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              Winner
            </h1> */}
              <p className="text-base xl:text-lg 2xl:text-xl font-medium">
                Is a platform dedicated to supporting and raising awareness for,
                designers, artists and creatives in Sri Lanka and the region.
              </p>
            </div>
          </div>
          <div className="top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 items-center justify-start w-1/3">
            <div className="w-full">
              <Image
                src={"/image 7.png"}
                width={400}
                height={400}
                alt={"logo"}
                className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto block"
              />
            </div>

            <div className="items-start my-8 mr-4 w-full">
              {/* <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              Winner
            </h1> */}
              <p className="text-base xl:text-lg 2xl:text-xl font-medium mr-4">
                Is a platform dedicated to supporting and raising awareness for,
                designers, artists and creatives in Sri Lanka and the region.
              </p>
            </div>

          </div>
          <div className="top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 items-center justify-start w-1/3">
          <div className="w-full">
              <Image
                src={"/image 7.png"}
                width={400}
                height={400}
                alt={"logo"}
                className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto block"
              />
            </div>

            <div className="items-start my-8 mr-4 w-full">
              {/* <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              Winner
            </h1> */}
              <p className="text-base xl:text-lg 2xl:text-xl font-medium mr-4">
                Is a platform dedicated to supporting and raising awareness for,
                designers, artists and creatives in Sri Lanka and the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersShot;
