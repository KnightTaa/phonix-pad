"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import OtherLinks from "./OtherLinks";
import OtherLinksMobileCard from "./OtherLinksMobileCard";
import OtherLinksMobile from "./OtherLinksMobile";

const OtherNewLanding = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const [isMainBack, setIsMainBack] = useState(false);

  const rightBlackRef = useRef(null);
  const threeDotRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const logoRef = useRef(null);
  const logo1Ref = useRef(null);
  const logo2Ref = useRef(null);
  const contentRef = useRef(null);
  const yellowDivRef = useRef(null);
  const teelDivRef = useRef(null);
  const redDivRef = useRef(null);
  const yellowLogoRef = useRef(null);
  const teelLogoRef = useRef(null);
  const redLogoRef = useRef(null);
  const backRef = useRef(null);

  const testRef = useRef(null);
  const test2Ref = useRef(null);

  const otherLinksRef = useRef(null);
  const otherLinksMobileRef = useRef(null);
  const otherLinksThreeDotRef = useRef(null);

  const leftLogoDivRef = useRef(null);

  const logoSFLRef = useRef(null);

  const timeline = gsap.timeline({
    repeat: 0,
  });
  return (
    <section className="w-full h-screen overflow-hidden relative">
      <div className="h-screen w-full flex flex-col sm:flex-row justify-between relative">
        {/* left  */}
        <div className="w-full sm:w-[50%] h-[50%] sm:h-full absolute left-[0]">
          <div className="w-full h-full flex items-center justify-center relative">
            <button>
              <Image
                src={"/image 13.png"}
                width={400}
                height={400}
                alt={"logo"}
                className="w-[150px] sm:w-[250px] h-auto"
              />
            </button>
          </div>
        </div>
        {/* right  */}
        <div className="w-full sm:w-[50%] h-[50%] sm:h-full bg-black z-20 absolute bottom-0 right-[0%]">
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute top-0 right-0 sm:right-1/2 translate-x-0 sm:translate-x-1/2 translate-y-1/2 sm:translate-y-0 rotate-0 sm:rotate-90 mr-2 sm:mr-0 mt-0 sm:mt-2 hidden opacity-0">
              <button>
                <HiDotsHorizontal size={34} className="text-white" />
              </button>
              <button>
                <Image
                  src={"/image 11.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  className="w-[150px] sm:w-[230px] h-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherNewLanding;
