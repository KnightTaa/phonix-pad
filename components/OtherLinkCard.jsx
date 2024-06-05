import Image from "next/image";
import React from "react";

const OtherLinkCard = ({ color, logo }) => {
  return (
    <div className={`w-full sm:w-1/3 h-1/3 sm:h-full bg-[${color}]`}>
      <button className="w-full h-full flex items-center justify-center">
        <Image
          src={`/${logo}.png`}
          width={500}
          height={500}
          alt="MAGAZINE.png"
          className="w-[250px] sm:w-[400px] h-auto object-cover"
        />
      </button>
    </div>
  );
};

export default OtherLinkCard;
