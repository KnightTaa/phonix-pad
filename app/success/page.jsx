import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 border rounded-lg bg-white shadow-lg animate-fadeIn">
        <div className="text-5xl text-green-500 animate-bounce">✔️</div>
        <h1 className="text-2xl font-bold mt-4">Submission Successful</h1>
        <p className="mt-2">Thank you for your submission to the Creative Awards. We have received your work.</p>
        <Link href="/" className="block mt-4 text-blue-500 font-semibold hover:underline">
          Go to Home Page
        </Link>
      </div>
    </div>
    // <section className="w-full h-screen overflow-hidden relative">
    //   <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] md:text-[400px] lg:text-[700px] 2xl:text-[800px] font-bold text-black/5 -z-10">
    //     200
    //   </h1>
    //   <Wrapper className="w-full h-full flex flex-col md:flex-col lg:flex-row items-center justify-between">
    //     {/* left */}
    //     <div className="w-full lg:w-[50%] h-[50%] sm:h-full flex items-center justify-center">
    //       <div className="flex flex-col items-center lg:items-start gap-4">
    //         <h1 className="text-3xl sm:text-4xl font-bold">Congratulations!</h1>
    //         <p className="text-base sm:text-lg font-normal">
    //           Your submission was successful. Thank you for your submission!
    //         </p>
    //         <Link
    //           className="bg-primary hover:bg-primary-hover px-5 py-2 rounded-full text-base sm:text-lg font-light text-white transition-all duration-300"
    //           href={"/"}
    //         >
    //           Back to Home
    //         </Link>
    //       </div>
    //     </div>
    //     {/* right */}
    //     <div className="w-full lg:w-[50%] h-[50%] sm:h-full flex items-center justify-center">
    //       <Image
    //         src='/success.png'
    //         width={500}
    //         height={500}
    //         alt={"Success Image"}
    //         className="w-[500px] h-auto"
    //       />
    //     </div>
    //   </Wrapper>
    // </section>
  );
};

export default Success;