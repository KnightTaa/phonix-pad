import React from "react";
import OtherLinkCard from "./OtherLinkCard";

const OtherLinks = () => {
  return (
    <section className="">
      <div className="w-full h-screen flex flex-col sm:flex-row">
        <OtherLinkCard className={"bg-[#3c3c3b]"} logo={"MAGAZINE"}/>
        <OtherLinkCard className={"bg-[#575756]"} logo={"WINNER"}/>
        <OtherLinkCard className={"bg-[#6f6f6c]"} logo={"EVENT"}/>
      </div>
    </section>
  );
};

export default OtherLinks;
