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
import ProjectInfo from "./ProjectInfo";

const NewLanding = () => {
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

  const yellowContentRef = useRef(null);

  const leftLogoRef = useRef(null);

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
        threeDotRef.current,
        {
          right: "0",
          duration: 2,
        },
        "-=2"
      );
  });

  // top-[12.5%] sm:top-0
  const handleLeftClick = () => {
    timeline
      .to(rightBlackRef.current, {
        position: "absolute",
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
      )
      .to(
        testRef.current,
        {
          scale: window.innerWidth > 768 ? 2 : 1,
          duration: 2,
        },
        "-=2"
      )
      // .to(
      //   leftLogoRef.current,
      //   {
      //     left: window.innerWidth > 768 ? "" : "0",
      //     top: window.innerWidth > 768 ? "" : "0",
      //     paddingLeft: "10px",
      //     paddingTop: "10px",
      //     duration: 2,
      //   },
      //   "-=2"
      // );
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
      )
      .to(
        testRef.current,
        {
          scale: window.innerWidth > 768 ? 1 : 1,
          duration: 2,
        },
        "-=2"
      )
      // .to(
      //   leftLogoRef.current,
      //   {
      //     left: window.innerWidth > 768 ? "" : "30%",
      //     top: window.innerWidth > 768 ? "" : "40%",
      //     duration: 2,
      //   },
      //   "-=2"
      // );
  };

  const handleLeftClick2 = () => {
    timeline
      .to(rightBlackRef.current, {
        opacity: 0,
        duration: 2,
      })
      .to(
        contentRef.current,
        {
          right: window.innerWidth > 768 ? "0" : "-50%",
          bottom: window.innerWidth > 768 ? "0" : "0",
          left: window.innerWidth > 768 ? "50%" : "0",
          top: window.innerWidth > 768 ? "0" : "12.5%", //New
          zIndex: window.innerWidth > 768 ? "100" : "0",
          // zIndex: "100",
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

  const handleRightClick = () => {
    setIsRotated(!isRotated);
    setIsBack(true);
    timeline
      .to(logoRef.current, {
        rotate: window.innerWidth > 768 ? -90 : 0,
        width: window.innerWidth > 768 ? "180px" : "80px",
        duration: 2,
      })
      .to(
        logo1Ref.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          width: window.innerWidth > 768 ? "180px" : "80px",
          duration: 2,
        },
        "-=2"
      )
      .to(
        logo2Ref.current,
        {
          rotate: "-90",
          duration: 2,
        },
        "-=2"
      )
      .to(
        testRef.current,
        {
          pointerEvents: "pointer",
        },
        "-=2"
      )
      .to(
        backRef.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=2"
      )
      .to(
        leftDivRef.current,
        {
          width: window.innerWidth > 768 ? "7%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "7%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        rightBlackRef.current,
        {
          left: window.innerWidth > 768 ? "7%" : "0",
          top: window.innerWidth > 768 ? "0" : "7%",
          width: window.innerWidth > 768 ? "7%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "7%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        yellowDivRef.current,
        {
          width: yellowDivRef.current.style.width === "86%" ? "28.7%" : "",
          height: yellowDivRef.current.style.height === "86%" ? "28.7%" : "",
          left: window.innerWidth > 768 ? "14%" : "0",
          top: window.innerWidth > 768 ? "0" : "14%",
          zIndex: yellowDivRef.current.style.zIndex === "-100" ? "1" : "",
          duration: 2,
        },
        "-=2"
      )
      .to(
        teelDivRef.current,
        {
          width: teelDivRef.current.style.width === "86%" ? "28.7%" : "",
          height: teelDivRef.current.style.height === "86%" ? "28.7%" : "",
          left: window.innerWidth > 768 ? "42.7%" : "0",
          zIndex: teelDivRef.current.style.zIndex === "-100" ? "1" : "",
          top: window.innerWidth > 768 ? "0" : "42.7%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redDivRef.current,
        {
          width: redDivRef.current.style.width === "86%" ? "28.7%" : "",
          height: redDivRef.current.style.height === "86%" ? "28.7%" : "",
          left: window.innerWidth > 768 ? "71.4%" : "0",
          top: window.innerWidth > 768 ? "0" : "71.4%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        otherLinksThreeDotRef.current,
        {
          display: "block",
          opacity: 1,
          duration: 2,
        },
        "-=2"
      )
      .to(
        threeDotRef.current,
        {
          opacity: 0,
          duration: 2,
        },
        "-=2"
      );
  };

  const handleYellowContent = () => {
    timeline
      .to(yellowDivRef.current, {
        width: window.innerWidth > 768 ? "87%" : "100%",
        height: window.innerWidth > 768 ? "100vh" : "87%",
        duration: 2,
      })
      .to(
        teelDivRef.current,
        {
          left: window.innerWidth > 768 ? "87%" : "0",
          top: window.innerWidth > 768 ? "0" : "87%",
          width: window.innerWidth > 768 ? "7%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "7%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redDivRef.current,
        {
          left: window.innerWidth > 768 ? "94%" : "0",
          top: window.innerWidth > 768 ? "0" : "94%",
          width: window.innerWidth > 768 ? "7%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "7%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        teelLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          width: window.innerWidth > 768 ? "80px" : "60px",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          width: window.innerWidth > 768 ? "80px" : "60px",
          duration: 2,
        },
        "-=2"
      )
      .to(
        yellowLogoRef.current,
        {
          display: "none",
          opacity: "0",
          duration: 2,
        },
        "-=2"
      )
      .to(
        yellowContentRef.current,
        {
          display: "block",
          opacity: 1,
          duration: 2,
        },
        "-=2"
      );
  };

  const handleTeelContent = () => {
    timeline
      .to(teelDivRef.current, {
        width: window.innerWidth > 768 ? "86%" : "100%",
        height: window.innerWidth > 768 ? "100vh" : "86%",
        left: window.innerWidth > 768 ? "21%" : "0",
        top: window.innerWidth > 768 ? "0" : "21%",
        duration: 2,
      })
      .to(
        yellowDivRef.current,
        {
          left: window.innerWidth > 768 ? "14%" : "0",
          top: window.innerWidth > 768 ? "0" : "14%",
          width: window.innerWidth > 768 ? "7%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "7%",
          // zIndex: "-100",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redDivRef.current,
        {
          left: window.innerWidth > 768 ? "94%" : "0",
          top: window.innerWidth > 768 ? "0" : "94%",
          width: window.innerWidth > 768 ? "7%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "7%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        yellowLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          width: window.innerWidth > 768 ? "80px" : "60px",
          display: "flex",
          opacity: "1",
          duration: 2,
        },
        "-=2"
      )
      .to(
        yellowContentRef.current,
        {
          display: "none",
          opacity: "0",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          width: window.innerWidth > 768 ? "80px" : "60px",
          duration: 2,
        },
        "-=2"
      );
  };

  const handleRedContent = () => {
    timeline
      .to(redDivRef.current, {
        width: window.innerWidth > 768 ? "86%" : "100%",
        height: window.innerWidth > 768 ? "100vh" : "86%",
        left: window.innerWidth > 768 ? "28%" : "0",
        top: window.innerWidth > 768 ? "0" : "28%",
        duration: 2,
      })
      .to(
        yellowDivRef.current,
        {
          left: window.innerWidth > 768 ? "14%" : "0",
          top: window.innerWidth > 768 ? "0" : "14%",
          width: window.innerWidth > 768 ? "7%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "7%",
          // zIndex: "-100",
          duration: 2,
        },
        "-=2"
      )
      .to(
        teelDivRef.current,
        {
          left: window.innerWidth > 768 ? "21%" : "0",
          top: window.innerWidth > 768 ? "0" : "21%",
          width: window.innerWidth > 768 ? "7%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "7%",
          // zIndex: "-100",
          duration: 2,
        },
        "-=2"
      )
      .to(
        yellowLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          width: window.innerWidth > 768 ? "80px" : "60px",
          duration: 2,
        },
        "-=2"
      )
      .to(
        teelLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          width: window.innerWidth > 768 ? "80px" : "60px",
          duration: 2,
        },
        "-=2"
      );
  };

  const handleBackClick = () => {
    setIsMainBack(true);
    setIsBack(false);
    timeline
      .to(redDivRef.current, {
        left: window.innerWidth > 768 ? "150%" : "0",
        top: window.innerWidth > 768 ? "0" : "100%",
        duration: 2,
      })
      .to(
        teelDivRef.current,
        {
          left: window.innerWidth > 768 ? "125%" : "0",
          top: window.innerWidth > 768 ? "0" : "100%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        yellowDivRef.current,
        {
          left: window.innerWidth > 768 ? "100%" : "0",
          top: window.innerWidth > 768 ? "0" : "100%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        rightBlackRef.current,
        {
          left: window.innerWidth > 768 ? "50%" : "0",
          width: window.innerWidth > 768 ? "50%" : "100%",
          height: window.innerWidth > 768 ? "100vh" : "50%",
          top: window.innerWidth > 768 ? "0" : "50%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        leftDivRef.current,
        {
          width: window.innerWidth > 768 ? "50%" : "100%",
          height: window.innerWidth > 768 ? "100vh" : "50%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        logoRef.current,
        {
          rotate: 0,
          scale: window.innerWidth > 768 ? 1.2 : 1,
          duration: 2,
        },
        "-=2"
      )
      .to(
        logo1Ref.current,
        {
          rotate: 0,
          scale: window.innerWidth > 768 ? 1.2 : 1,
          duration: 2,
        },
        "-=2"
      )
      .to(
        testRef.current,
        {
          pointerEvents: "auto",
        },
        "-=2"
      )
      .to(
        backRef.current,
        {
          opacity: 0,
        },
        "-=2"
      )
      .to(
        otherLinksThreeDotRef.current,
        {
          display: "none",
          opacity: 0,
          duration: 2,
        },
        "-=2"
      )
      .to(
        threeDotRef.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=2"
      );
  };

  const handleOtherLinks = () => {
    timeline
      .to(otherLinksRef.current, {
        left: otherLinksRef.current.style.left === "14%" ? "100%" : "14%",
        zIndex: "40",
        duration: 2,
      })
      .to(
        otherLinksMobileRef.current,
        {
          left: otherLinksMobileRef.current.style.left === "0%" ? "100%" : "0%",
          duration: 2,
          zIndex: "40",
        },
        "-=2"
      );
  };

  const getClickHandler = () => {
    if (isBack) {
      return handleBackClick;
    } else {
      if (isMainBack) {
        return handleLeftClick2;
      } else {
        return handleLeftClick;
      }
    }
  };

  const clickHandler = getClickHandler();
  return (
    <section className="w-full h-screen overflow-hidden relative">
      <div className="h-screen w-full flex flex-col sm:flex-row justify-between relative">
        <div
          className="block sm:hidden absolute top-0 right-[-100%] z-10 mr-2 mt-2 opacity-1"
          ref={threeDotRef}
        >
          <button onClick={handleThreeDotsClick}>
            <HiDotsHorizontal size={36} />
          </button>
        </div>
        {/* left */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full absolute left-[-100%]"
          ref={leftDivRef}
        >
          <div
            className="w-full h-full flex items-center justify-center relative"
            ref={leftLogoDivRef}
          >
            {/* <button
              onClick={handleBackClick}
              className="opacity-0 mt-2 ml-2 flex flex-row items-center justify-center absolute top-0 left-0 gap-2"
              ref={backRef}
            >
              <IoIosArrowBack size={26} className="text-black" />
              <h1 className="font-semibold text-lg">Back</h1>
            </button> */}
            <div className="absolute" ref={leftLogoRef}>
              <button onClick={clickHandler} ref={testRef}>
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
        </div>
        {/* absolute bottom-0 -right-3 */}
        {/* top-[12.5%] sm:top-0 */}
        {/* right */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full bg-black z-20 absolute bottom-0 right-[-100%]"
          ref={rightBlackRef}
        >
          <div
            className="w-full h-full flex items-center justify-center relative"
            ref={test2Ref}
          >
            {/* hidden opacity-0 top-0 right-1/2 translate-x-1/2 rotate-90*/}
            <div
              className="absolute top-0 right-0 sm:right-1/2 translate-x-0 sm:translate-x-1/2 translate-y-1/2 sm:translate-y-0 rotate-0 sm:rotate-90 mr-2 sm:mr-0 mt-0 sm:mt-2 hidden opacity-0"
              ref={otherLinksThreeDotRef}
            >
              <button onClick={handleOtherLinks}>
                <HiDotsHorizontal size={34} className="text-white" />
              </button>
            </div>
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

        {/* content */}
        {/* absolute right-0 sm:-right-[50%] -bottom-[50%] h-[85%] top-[12.5%] sm:top-0*/}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full opacity-0 flex items-start justify-between flex-col z-10 absolute right-0 sm:-right-[50%] -bottom-[50%] sm:bottom-0"
          ref={contentRef}
        >
          <div className="hidden w-full p-5 sm:flex items-center justify-end">
            <button onClick={handleThreeDotsClick}>
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

        {/* other links section Desktop */}
        {/* 
        Step 1: left-[25%]
        Step 2: width-[75%]

        className="hidden sm:block h-[25%] sm:h-screen w-full sm:w-[75%] bg-[#8f8f8f] absolute left-0 sm:left-[100%]"
        */}
        <div
          className="hidden sm:block w-[86%] bg-[#8f8f8f] absolute left-[100%]"
          ref={otherLinksRef}
        >
          <OtherLinks />
        </div>

        {/* other links section Mobile left-[100%] to left-0*/}
        <div
          className="block sm:hidden h-[86%] w-full bg-[#3c3c3b] absolute left-[100%] top-[14%]"
          ref={otherLinksMobileRef}
        >
          <OtherLinksMobile />
        </div>

        {/* yellow content left-0 sm:left-[25%] top-[25%] sm:top-0*/}
        <div
          className="h-[28.7%] sm:h-screen w-full sm:w-[28.7%] bg-[#f7e114] absolute left-0 sm:left-[100%] top-[100%] sm:top-0"
          ref={yellowDivRef}
        >
          {/* absolute -left-[50%] top-0 translate-x-1/2 */}
          <button
            onClick={handleYellowContent}
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
          <div className="w-[84%] opacity-0 hidden" ref={yellowContentRef}>
            <ProjectInfo
              color={"#f7e114"}
              image={"image 7"}
              title={"Shorts"}
              description={
                "Platform to promote, support and recognize all those who use an image as a vehicle to express their creativity, feelings, memories; all that a creative, professional or amateur want to transmit to society."
              }
            />
          </div>
        </div>

        {/* teel content left-0 sm:left-[50%] top-[50%] sm:top-0*/}
        <div
          className="h-[28.7%] sm:h-screen w-full sm:w-[28.7%] bg-[#00d3c8] absolute left-0 sm:left-[100%] top-[100%] sm:top-0"
          ref={teelDivRef}
        >
          <button
            onClick={handleTeelContent}
            className="w-full h-full flex items-center justify-center"
          >
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
          className="h-[28.7%] sm:h-screen w-full sm:w-[28.7%] bg-[#ee1d52] absolute left-0 sm:left-[100%] top-[100%] sm:top-0"
          ref={redDivRef}
        >
          <button
            onClick={handleRedContent}
            className="w-full h-full flex items-center justify-center"
          >
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

export default NewLanding;