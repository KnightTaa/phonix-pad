import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtherLinkCard = ({ className, logo }) => {
  return (
    <div className={`w-full sm:w-1/3 h-1/3 sm:h-full`}>
      <Link href={`/${logo}`} className={cn("w-full h-full flex items-center justify-center", className)}>
        <Image
          src={`/${logo}.png`}
          width={500}
          height={500}
          alt="MAGAZINE.png"
          className="w-[250px] sm:w-[400px] h-auto object-cover"
        />
      </Link>
    </div>
  );
};

export default OtherLinkCard;
// className={`w-full h-full flex items-center justify-center ${className}`}
