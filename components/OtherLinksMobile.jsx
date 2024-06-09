import Image from "next/image";
import React from "react";
import OtherLinksMobileCard from "./OtherLinksMobileCard";

const OtherLinksMobile = () => {
  return (
    <div className="h-full flex flex-col">
      <OtherLinksMobileCard color={"#3c3c3b"} logo={"MAGAZINE"} />
      <OtherLinksMobileCard color={"#575756"} logo={"WINNER"} />
      <OtherLinksMobileCard color={"#6f6f6c"} logo={"EVENT"} />
    </div>
  );
};

export default OtherLinksMobile;
