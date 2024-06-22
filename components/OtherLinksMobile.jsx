import React from "react";
import OtherLinksMobileCard from "./OtherLinksMobileCard";

const OtherLinksMobile = () => {
  return (
    <div className="h-full flex flex-col">
      <OtherLinksMobileCard className={"bg-[#3c3c3b]"} logo={"MAGAZINE"} />
      <OtherLinksMobileCard className={"bg-[#575756]"} logo={"WINNER"} />
      <OtherLinksMobileCard className={"bg-[#6f6f6c]"} logo={"EVENT"} />
    </div>
  );
};

export default OtherLinksMobile;
