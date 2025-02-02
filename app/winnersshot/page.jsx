import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FileViewer from "@/components/FileViewer";

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
              <div className="flex">
              <div className="w-1/12">
                <span class="absolute left-6 -rotate-90 transform origin-left text-black font-bold text-2xl xl:text-2xl 2xl:text-2xl top-[27%]">
                  Winner
                </span>
              </div>
              <div className="w-11/12">
                <Image
                  src={"users/RaoulRutnam.jpeg"}
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
              Raoul Rutnam
            </h1>
              <p className="text-base xl:text-lg 2xl:text-xl font-medium">
              This photo captures the essence of Whim because after a long journey, coming to the bus stop in Pettah - one of the signs you'd see calling to you is a large LED board that says in bright red "Comfortable Rooms"
              </p>
              <div className="p-6">
                {/* <h1 className="text-2xl font-semibold mb-4">File Viewer</h1> */}
                {/* <FileViewer fileUrl="BrandsforLife/BFL-3rd.pdf" /> */}
                <FileViewer fileUrl="ShotsforLife/pg10thewhim1st.jpg" />
              </div>
            </div>
          </div>
          <div className="top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 items-center justify-start w-1/3">
            <div className="w-full">
              <div className="flex">
                <div className="w-1/12">
                  <span class="absolute left-2 -rotate-90 transform origin-left text-black font-bold text-2xl xl:text-2xl 2xl:text-2xl top-[22%]">
                    1st Runner-up
                  </span>
                </div>
                <div className="w-11/12">
                  <Image
                    src={"/image 7.png"}
                    width={400}
                    height={400}
                    alt={"logo"}
                    className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[150px] h-auto block"
                  />
                </div>
              </div>
            </div>

            <div className="items-start my-8 mr-4 w-full">
              <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              Kaushani bhagya
            </h1>
              <p className="text-base xl:text-lg 2xl:text-xl font-medium mr-4">
              There is no wonder in wonderland. It depicts the results of human behavior distorting natural wonders. It has been creatively captured to portray it in a different way. A naturally occurring hole in the center of a natural tree leaf was used to capture the object in question.
              </p>
              <div className="p-6">
                {/* <h1 className="text-2xl font-semibold mb-4">File Viewer</h1> */}
                {/* <FileViewer fileUrl="BrandsforLife/BFL-3rd.pdf" /> */}
                <FileViewer fileUrl="ShotsforLife/pg24wonderland2nd.jpeg" />
              </div>
            </div>

          </div>
          <div className="top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 items-center justify-start w-1/3">
            <div className="w-full">
              <div className="flex">
                <div className="w-1/12">
                  <span class="absolute left-2 -rotate-90 transform origin-left text-black font-bold text-2xl xl:text-2xl 2xl:text-2xl top-[25%]">
                    2nd Runner-up
                  </span>
                </div>
                <div className="w-11/12">
                  <Image
                    src={"users/NizamR.jpg"}
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
              Nizam Raban
            </h1>
              <p className="text-base xl:text-lg 2xl:text-xl font-medium mr-4">
              A capture of a moment between movement and stillness, time and events yet to come and that has come to pass. A moment where the vivid lights split the darkness. A reminder that the world around you is constantly moving as you the observer stand still cool and collected in time and space.
              </p>
              <div className="p-6">
                {/* <h1 className="text-2xl font-semibold mb-4">File Viewer</h1> */}
                {/* <FileViewer fileUrl="BrandsforLife/BFL-3rd.pdf" /> */}
                <FileViewer fileUrl="ShotsforLife/pg18coolthings3rd.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnersShot;
