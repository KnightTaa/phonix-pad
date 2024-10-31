import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <section className="w-full h-screen overflow-hidden relative">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[400px] lg:text-[700px] 2xl:text-[800px] font-bold text-black/5 -z-10">
        500
      </h1>
      <Wrapper className="w-full h-full flex flex-col md:flex-col lg:flex-row items-center justify-between">
        {/* left */}
        <div className="w-full lg:w-[50%] h-[50%] sm:h-full flex items-center justify-center">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Oops! something went wrong</h1>
            <p className="text-base sm:text-lg font-normal">
               Submissions closed! Await results...
            </p>
            <Link
              className="bg-primary hover:bg-primary-hover px-5 py-2 rounded-full text-base sm:text-lg font-light text-white transition-all duration-300"
              href={"/"}
            >
              Back to Home
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="w-full lg:w-[50%] h-[50%] sm:h-full flex items-center justify-center">
          <Image
            src={"/not-found.png"}
            width={1000}
            height={1000}
            alt={"logo"}
            className="w-[500px] h-auto"
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default Error;
