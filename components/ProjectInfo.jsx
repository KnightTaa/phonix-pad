import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectInfo = ({ color, image, title, description, link }) => {
  return (
    <section className={`w-full h-screen bg-[${color}] relative`}>
      {/* logo */}
      <div className="absolute top-0 right-0 flex flex-col gap-4 mr-6 mt-6">
        <Image
          src={`/${image}.png`}
          width={400}
          height={400}
          alt="logo"
          className="w-[80px] sm:w-[200px] h-auto"
        />
        <Link href={`/sign-up/${link}`}>
          <Image
            src={"/REGISTER1.png"}
            width={400}
            height={400}
            alt={"logo"}
            className="w-[60px] sm:w-[160px] h-auto"
          />
        </Link>
      </div>
      {/* info */}
      <div className="absolute left-0 bottom-[28%] sm:bottom-0 p-4 sm:p-10">
        <div className="flex items-start flex-col gap-4">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-3xl sm:text-6xl font-bold uppercase text-white">
              {title}
            </h1>
            <h1 className="text-3xl sm:text-6xl font-bold uppercase">
              For Life
            </h1>
          </div>
          <div className="w-full sm:w-[50%]">
            <p className="text-xl leading-8 font-medium">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
// #f7e114
