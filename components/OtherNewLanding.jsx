"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const OtherNewLanding = () => {
  const [isRotated, setIsRotated] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const [isMainBack, setIsMainBack] = useState(false);

  const rightBlackRef = useRef(null);
  const threeDotRef = useRef(null);
  const dotsRef = useRef(null);
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

  const yellowContentRef = useRef(null);
  const timeline = gsap.timeline({
    repeat: 0,
  });

  useGSAP(() => {
    timeline
      .to(leftDivRef.current, {
        left: "0",
        duration: 2,
      })
      .to(
        rightBlackRef.current,
        {
          right: "0",
          duration: 2,
        },
        "-=2"
      )
      .to(
        dotsRef.current,
        {
          right: "0",
          duration: 2,
        },
        "-=2"
      );
  });

  const handleLeftClick = () => {
    timeline
      .to(rightBlackRef.current, {
        right: window.innerWidth > 768 ? "-50%" : "0",
        bottom: window.innerWidth > 768 ? "0" : "-50%",
        duration: 2,
      })
      .to(
        contentRef.current,
        {
          right: window.innerWidth > 768 ? "0" : "-50%",
          bottom: window.innerWidth > 768 ? "0" : "0",
          left: window.innerWidth > 768 ? "50%" : "0",
          top: window.innerWidth > 768 ? "0" : "12.5%", //New
          opacity: 1,
          duration: 2,
        },
        "-=2"
      )
      .to(
        leftDivRef.current,
        {
          height: window.innerWidth > 768 ? "100%" : "15%",
          duration: 2,
        },
        "-=2"
      );
  };

  const handleThreeDotsClick = () => {
    timeline
      .to(contentRef.current, {
        right: window.innerWidth > 768 ? "-50%" : "0",
        bottom: window.innerWidth > 768 ? "0" : "-50%",
        left: window.innerWidth > 768 ? "100%" : "0",
        top: window.innerWidth > 768 ? "0" : "100%", //New
        opacity: 0,
        duration: 2,
      })
      .to(
        rightBlackRef.current,
        {
          position: "absolute",
          opacity: 1,
          right: "0",
          bottom: "0",
          duration: 2,
        },
        "-=2"
      )
      .to(
        leftDivRef.current,
        {
          height: window.innerWidth > 768 ? "100%" : "50%",
          duration: 2,
        },
        "-=2"
      );
  };

  const handleRightClick = () => {
    timeline
      .to(logo1Ref.current, {
        rotate: window.innerWidth > 768 ? -90 : 0,
        duration: 2,
      })
      .to(
        logoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          duration: 2,
        },
        "-=2"
      )
      .to(
        leftDivRef.current,
        {
          width: window.innerWidth > 768 ? "6.5%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "6.5%",
          duration: 2,
          duration: 2,
        },
        "-=2"
      )
      .to(
        rightBlackRef.current,
        {
          left: window.innerWidth > 768 ? "6.5%" : "0",
          top: window.innerWidth > 768 ? "0" : "6.5%",
          width: window.innerWidth > 768 ? "6.5%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "6.5%",
          duration: 2,
        },
        "-=2"
      );
  };
  return (
    <section className="w-full h-screen overflow-hidden relative">
      <div className="h-screen w-full flex flex-col sm:flex-row justify-between relative">
        <div
          className="flex items-center justify-center sm:hidden absolute right-[-100%] mt-6 mr-2 z-10 opacity-1"
          ref={dotsRef}
        >
          <button onClick={handleThreeDotsClick}>
            <HiDotsHorizontal size={36} />
          </button>
        </div>
        {/* left */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full absolute -left-[100%] bg-green-300"
          ref={leftDivRef}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            <button onClick={handleLeftClick}>
              <Image
                src={"/image 13.png"}
                width={400}
                height={400}
                alt={"logo"}
                ref={logo1Ref}
                className="w-[150px] sm:w-[250px] h-auto"
              />
            </button>
          </div>
        </div>
        {/* right */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full bg-black z-20 absolute bottom-0 right-[-100%]"
          ref={rightBlackRef}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            <button onClick={handleRightClick}>
              <Image
                src={"/image 1.png"}
                width={400}
                height={400}
                alt={"logo"}
                ref={logoRef}
                className="w-[150px] sm:w-[230px] h-auto"
              />
            </button>
          </div>
        </div>
        {/* content  */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full opacity-0 flex items-start justify-between flex-col z-10 absolute right-0 sm:-right-[50%] -bottom-[50%] sm:bottom-0"
          ref={contentRef}
        >
          <div className="hidden w-full p-5 sm:flex items-center justify-end">
            <button onClick={handleThreeDotsClick} ref={threeDotRef}>
              <HiDotsHorizontal size={36} />
            </button>
          </div>
          <div className="p-5 flex items-end flex-col gap-2 sm:gap-10">
            <h1 className="text-2xl sm:text-5xl font-semibold text-end">
              Phoenix Arts and Design (PAD)
            </h1>
            <p className="text-base sm:text-xl font-medium text-end">
              Is a platform dedicated to supporting and raising awareness for,
              designers, artists and creatives in Sri Lanka and the region.
              <br />
              <br />
              Phoenix Industries is committed to fostering culture for a better
              society. We have created PAD to be the voice of the cultural world
              by promoting Arts and Design, across all disciplines. PAD is a
              home for all those who use culture as a vehicle to express
              themselves and promote culture as a benefit for society.
              <br />
              <br />
              PAD is designed to encourage the ARTISTIC expression, to push
              boundaries, to challenge the established perceptions, and
              ultimately, to build a better future for our communities.
            </p>
          </div>
          <div className="hidden sm:block"></div>
        </div>

        <div
          className="h-[28.66%] sm:h-screen w-full sm:w-[29%] bg-[#f7e114] absolute left-0 sm:left-[13%] top-[100%] sm:top-0"
          ref={yellowDivRef}
        >
          {/* absolute -left-[50%] top-0 translate-x-1/2 */}
          <button
            className="w-full h-full flex items-center justify-center"
            ref={yellowLogoRef}
          >
            <Image
              src={"/image 7.png"}
              width={400}
              height={400}
              alt={"logo"}
              ref={logoSFLRef}
              className="w-[120px] sm:w-[200px] h-auto"
            />
          </button>
          {/* <div className="w-[84%] opacity-0 hidden" ref={yellowContentRef}>
            <ProjectInfo
              color={"#f7e114"}
              image={"image 7"}
              title={"Shorts"}
              description={
                "Platform to promote, support and recognize all those who use an image as a vehicle to express their creativity, feelings, memories; all that a creative, professional or amateur want to transmit to society."
              }
            />
          </div> */}
        </div>
        {/* teel content left-0 sm:left-[50%] top-[50%] sm:top-0*/}
        <div
          className="h-[28.7%] sm:h-screen w-full sm:w-[29%] bg-[#00d3c8] absolute left-0 sm:left-[42%] top-[100%] sm:top-0"
          ref={teelDivRef}
        >
          <button className="w-full h-full flex items-center justify-center">
            <Image
              src={"/image 11.png"}
              width={400}
              height={400}
              alt={"logo"}
              ref={teelLogoRef}
              className="w-[120px] sm:w-[200px] h-auto"
            />
          </button>
        </div>

        {/* red content left-0 sm:left-[75%] top-[75%] sm:top-0*/}
        <div
          className="h-[28.7%] sm:h-screen w-full sm:w-[29%] bg-[#ee1d52] absolute left-0 sm:left-[71%] top-[100%] sm:top-0"
          ref={redDivRef}
        >
          <button className="w-full h-full flex items-center justify-center">
            <Image
              src={"/image 10.png"}
              width={400}
              height={400}
              alt={"logo"}
              ref={redLogoRef}
              className="w-[120px] sm:w-[200px] h-auto"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OtherNewLanding;
