import Image from "next/image";
import React from "react";

const OtherLinksMobileCard = ({ color, logo }) => {
  return (
    <div className={`h-1/3 bg-[${color}]`}>
      <button className="w-full h-full flex items-center justify-center">
        <Image
          src={`/${logo}.png`}
          width={400}
          height={400}
          alt="logo"
          className="w-[200px] h-auto object-cover"
        />
      </button>
    </div>
  );
};

export default OtherLinksMobileCard;
