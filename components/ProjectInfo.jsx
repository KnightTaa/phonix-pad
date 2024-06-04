import Image from "next/image";
import React from "react";

const ProjectInfo = ({color, image, title, description}) => {
  return (
    <section className={`w-full h-screen bg-[${color}] relative`}>
      {/* logo */}
      <div className="absolute top-0 right-0">
        <Image
          src={`/${image}.png`}
          width={400}
          height={400}
          alt="logo"
          className="w-[240px] sm:w-[300px] h-auto p-10"
        />
      </div>
      {/* info */}
      <div className="absolute left-0 bottom-0 p-10">
        <div className="flex items-start flex-col gap-4">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-3xl sm:text-6xl font-bold uppercase text-white">{title}</h1>
            <h1 className="text-3xl sm:text-6xl font-bold uppercase">For Life</h1>
          </div>
          <div className="w-full sm:w-[50%]">
            <p className="text-xl leading-8 font-medium">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
// #f7e114