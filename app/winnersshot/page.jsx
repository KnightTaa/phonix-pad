import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FileViewer from "@/components/FileViewer";

const WinnersShot = () => {
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
    <div className="w-full sm:w-[92.5%] bg-[#f7e114]">
      {/* Header */}
      <div className="w-full flex items-center h-[200px] pl-3">
        <div className="flex items-center">
          <Image
            src={"/image 7.png"}
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
            src={"users/Images/RaoulRutnam.jpeg"}
            width={400}
            height={400}
            alt="Winner"
            className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">Raoul Rutnam</h2>
          <p className="text-base">
          This photo captures the essence of Whim because after a long journey, coming to the bus stop in Pettah - one of the signs you'd see calling to you is a large LED board that says in bright red "Comfortable Rooms"
          </p>
          <div className="p-4">
            <FileViewer fileUrl="ShotsforLife/pg10thewhim1st.jpg" />
          </div>
        </div>

        {/* 1st Runner-up */}
        <div className="relative text-center p-4">
          <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
            1st Runner-up
          </span>
          <Image
            src={"users/Images/Default.png"}
            width={400}
            height={400}
            alt="1st Runner-up"
            className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">Kaushani bhagya</h2>
          <p className="text-base">
          There is no wonder in wonderland. It depicts the results of human behavior distorting natural wonders. It has been creatively captured to portray it in a different way. A naturally occurring hole in the center of a natural tree leaf was used to capture the object in question.
          </p>
          <div className="p-4">
            <FileViewer fileUrl="ShotsforLife/pg24wonderland2nd.jpeg" />
          </div>
        </div>

        {/* 2nd Runner-up */}
        <div className="relative text-center p-4">
          <span className="absolute left-0 -rotate-90 origin-left text-black font-bold text-2xl top-1/2 -translate-y-1/2">
            2nd Runner-up
          </span>
          <Image
            src={"users/Images/NizamR.jpg"}
            width={400}
            height={400}
            alt="2nd Runner-up"
            className="w-[140px] h-[140px] object-cover rounded-full mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4">Nizam Raban</h2>
          <p className="text-base">
          A capture of a moment between movement and stillness, time and events yet to come and that has come to pass. A moment where the vivid lights split the darkness. A reminder that the world around you is constantly moving as you the observer stand still cool and collected in time and space.
          </p>
          <div className="p-4">
            <FileViewer fileUrl="ShotsforLife/pg18coolthings3rd.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default WinnersShot;
