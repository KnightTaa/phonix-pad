"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import OtherLinks from "./OtherLinks";
import OtherLinksMobileCard from "./OtherLinksMobileCard";

const LayoutTest = () => {
    const [isRotated, setIsRotated] = useState(false);
  const [isBack, setIsBack] = useState(false);

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
          opacity: 1,
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
        opacity: 0,
        duration: 2,
      })
      .to(
        rightBlackRef.current,
        {
          position: "absolute",
          right: "0",
          bottom: "0",
          duration: 2,
        },
        "-=2"
      );
  };

  const handleLeftClick2 = () => {
    console.log("second click");
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
          zIndex: "100",
          opacity: 1,
          duration: 2,
        },
        "-=2"
      );
  };

  const handleRightClick = () => {
    setIsRotated(!isRotated);
    timeline
      .to(logoRef.current, {
        rotate: window.innerWidth > 768 ? -90 : 0,
        width: window.innerWidth > 768 ? "180px" : "120px",
        duration: 2,
      })
      .to(
        logo1Ref.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          width: window.innerWidth > 768 ? "180px" : "120px",
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
          pointerEvents: "none",
        },
        "-=2"
      )
      .to(
        backRef.current,
        {
          // remove this display none and make opacity 1 to activate back menu
          //   display: "none",
          opacity: 1,
          duration: 2,
        },
        "-=2"
      )
      .to(
        leftDivRef.current,
        {
          width: window.innerWidth > 768 ? "8%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "12.5%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        rightBlackRef.current,
        {
          left: window.innerWidth > 768 ? "8%" : "0",
          top: window.innerWidth > 768 ? "0" : "12.5%",
          width: window.innerWidth > 768 ? "8%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "12.5%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        yellowDivRef.current,
        {
          width: yellowDivRef.current.style.width === "68%" ? "28%" : "",
          height: yellowDivRef.current.style.height === "75%" ? "25%" : "",
          left: window.innerWidth > 768 ? "16%" : "0",
          top: window.innerWidth > 768 ? "0" : "25%",
          zIndex: yellowDivRef.current.style.zIndex === "-100" ? "1" : "",
          duration: 2,
        },
        "-=2"
      )
      .to(
        teelDivRef.current,
        {
          width: teelDivRef.current.style.width === "75%" ? "25%" : "",
          height: teelDivRef.current.style.height === "75%" ? "25%" : "",
          left: window.innerWidth > 768 ? "44%" : "0",
          zIndex: teelDivRef.current.style.zIndex === "-100" ? "1" : "",
          top: window.innerWidth > 768 ? "0" : "50%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redDivRef.current,
        {
          width: redDivRef.current.style.width === "75%" ? "25%" : "",
          height: redDivRef.current.style.height === "75%" ? "25%" : "",
          left: window.innerWidth > 768 ? "72%" : "0",
          top: window.innerWidth > 768 ? "0" : "75%",
          duration: 2,
        },
        "-=2"
      );
  };

  const handleYellowContent = () => {
    timeline
      .to(yellowDivRef.current, {
        width: window.innerWidth > 768 ? "68%" : "100%",
        height: window.innerWidth > 768 ? "100vh" : "75%",
        duration: 2,
      })
      .to(
        teelDivRef.current,
        {
          left: window.innerWidth > 768 ? "84%" : "0",
          top: window.innerWidth > 768 ? "0" : "100%",
          width: '8%',
          duration: 2,
        },
        "-=2"
      )
      .to(
        redDivRef.current,
        {
          left: window.innerWidth > 768 ? "92%" : "0",
          top: window.innerWidth > 768 ? "0" : "125%",
          width: '8%',
          duration: 2,
        },
        "-=2"
      );
  };

  const handleTeelContent = () => {
    timeline
      .to(teelDivRef.current, {
        width: window.innerWidth > 768 ? "75%" : "100%",
        height: window.innerWidth > 768 ? "100vh" : "75%",
        left: window.innerWidth > 768 ? "25%" : "0",
        top: window.innerWidth > 768 ? "0" : "25%",
        duration: 2,
      })
      .to(
        yellowDivRef.current,
        {
          left: window.innerWidth > 768 ? "12.5%" : "0",
          top: window.innerWidth > 768 ? "0" : "12.5%",
          zIndex: "-100",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redDivRef.current,
        {
          left: window.innerWidth > 768 ? "100%" : "0",
          top: window.innerWidth > 768 ? "0" : "100%",
          duration: 2,
        },
        "-=2"
      );
  };

  const handleRedContent = () => {
    timeline
      .to(redDivRef.current, {
        width: window.innerWidth > 768 ? "75%" : "100%",
        height: window.innerWidth > 768 ? "100vh" : "75%",
        left: window.innerWidth > 768 ? "25%" : "0",
        top: window.innerWidth > 768 ? "0" : "25%",
        duration: 2,
      })
      .to(
        yellowDivRef.current,
        {
          left: window.innerWidth > 768 ? "12.5%" : "0",
          top: window.innerWidth > 768 ? "0" : "12.5%",
          zIndex: "-100",
          duration: 2,
        },
        "-=2"
      )
      .to(
        teelDivRef.current,
        {
          left: window.innerWidth > 768 ? "12.5%" : "0",
          top: window.innerWidth > 768 ? "0" : "12.5%",
          //   zIndex: "-100",
          duration: 2,
        },
        "-=2"
      );
  };

  const handleBackClick = () => {
    setIsBack(true);
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
          scale: window.innerWidth > 768 ? 1.4 : 1,
          duration: 2,
        },
        "-=2"
      )
      .to(
        logo1Ref.current,
        {
          rotate: 0,
          scale: window.innerWidth > 768 ? 1.4 : 1,
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
      );
  };
  return (
    <section className="w-full h-screen overflow-hidden relative">
      <div className="h-screen w-full flex flex-col sm:flex-row justify-between relative">
        <div
          className="block sm:hidden absolute top-0 right-[-100%] z-10 mr-2 mt-2"
          ref={threeDotRef}
        >
          <button onClick={handleThreeDotsClick}>
            <HiDotsHorizontal size={36} />
          </button>
        </div>
        {/* left */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full absolute left-[-100%] bg-green-500"
          ref={leftDivRef}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            <button
              onClick={handleBackClick}
              className="opacity-0 mt-2 ml-2 flex flex-row items-center justify-center absolute top-0 left-0 gap-2"
              ref={backRef}
            >
              <IoIosArrowBack size={26} className="text-black" />
              <h1 className="font-semibold text-lg">Back</h1>
            </button>
            <button
              onClick={isBack ? handleLeftClick2 : handleLeftClick}
              ref={testRef}
            >
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
        {/* absolute bottom-0 -right-3 */}
        {/* top-[12.5%] sm:top-0 */}
        {/* right */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full bg-black z-20 absolute bottom-0 right-[-100%]"
          ref={rightBlackRef}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            ref={test2Ref}
          >
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
        {/* absolute right-0 sm:-right-[50%] -bottom-[50%] */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full opacity-0 flex items-start flex-col z-10 absolute right-0 sm:-right-[50%] -bottom-[50%] sm:bottom-0"
          ref={contentRef}
        >
          <div className="hidden w-full p-5 sm:flex items-center justify-end">
            <button onClick={handleThreeDotsClick}>
              <HiDotsHorizontal size={36} />
            </button>
          </div>
          <div className="h-screen p-5 flex items-center">
            <p className="text-base sm:text-xl font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              sapiente illum consequuntur. Laborum placeat eum laboriosam
              reiciendis hic neque perspiciatis iure dolorem nesciunt nobis.
              Facere fuga cumque rem possimus placeat fugiat amet.Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Mollitia sapiente
              illum consequuntur. Laborum placeat eum laboriosam reiciendis hic
              neque perspiciatis iure dolorem nesciunt nobis. Facere fuga cumque
              rem possimus placeat fugiat amet. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Mollitia sapiente illum
              consequuntur. Laborum placeat eum laboriosam reiciendis hic neque
              perspiciatis iure dolorem nesciunt nobis. Facere fuga cumque rem
              possimus placeat fugiat amet.
            </p>
          </div>
        </div>

        {/* yellow content left-0 sm:left-[25%] top-[25%] sm:top-0*/}
        <div
          className="h-[25%] sm:h-screen w-full sm:w-[28%] bg-[#f7e114] absolute left-0 sm:left-[100%] top-[100%] sm:top-0"
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
              className="w-[120px] sm:w-[200px] h-auto"
            />
          </button>
        </div>

        {/* teel content left-0 sm:left-[50%] top-[50%] sm:top-0*/}
        <div
          className="h-[25%] sm:h-screen w-full sm:w-[28%] bg-[#00d3c8] absolute left-0 sm:left-[100%] top-[100%] sm:top-0"
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
          className="h-[25%] sm:h-screen w-full sm:w-[28%] bg-[#ee1d52] absolute left-0 sm:left-[100%] top-[100%] sm:top-0"
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

export default LayoutTest