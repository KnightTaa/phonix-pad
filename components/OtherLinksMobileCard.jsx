import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtherLinksMobileCard = ({ className, logo }) => {
  return (
    <div className={cn("h-1/3", className)}>
      <Link href={`/${logo}`} className="w-full h-full flex items-center justify-center">
        <Image
          src={`/${logo}.png`}
          width={400}
          height={400}
          alt="logo"
          className="w-[200px] h-auto object-cover"
        />
      </Link>
    </div>
  );
};

export default OtherLinksMobileCard;

// className={`h-1/3 ${className}`}

