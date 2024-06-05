import Image from "next/image";
import React from "react";
import OtherLinksMobileCard from "./OtherLinksMobileCard";

const OtherLinksMobile = () => {
  return (
    <section className="block sm:hidden h-[50%] w-full">
      <div className="w-full h-screen flex flex-col">
        <OtherLinksMobileCard color={"#3c3c3b"} logo={"MAGAZINE"} />
        <OtherLinksMobileCard color={"#575756"} logo={"WINNER"} />
        <OtherLinksMobileCard color={"#6f6f6c"} logo={"EVENT"} />
        {/* <div className="h-1/4 bg-[#6f6f6c]">Item 3</div> */}
      </div>
    </section>
  );
};

export default OtherLinksMobile;
