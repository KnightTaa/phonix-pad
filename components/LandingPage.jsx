"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const LandingPage = () => {
  const logoRef = useRef(null);
  const blackLogoRef = useRef(null);
  const screenRef = useRef(null);
  const loaderLogoRef = useRef(null);
  const loderDivRef = useRef(null);
  const whiteLogoRef = useRef(null);
  const logoDivRef = useRef(null);
  const leftDivRef = useRef(null);
  const contentRef = useRef(null);
  const menuRef = useRef(null);
  const blackMenuRef = useRef(null);
  const blackMenuMobileRef = useRef(null);
  const contentMobileRef = useRef(null);
  const threeDotRef = useRef(null);

  //   section refs
  const yellowRef = useRef(null);
  const teelRef = useRef(null);
  const redRef = useRef(null);

  // mobile section Refs
  const yellowMobileRef = useRef(null);
  const teelMobileRef = useRef(null);
  const redMobileRef = useRef(null);

  const timeline = gsap.timeline({
    repeat: 0,
  });
  useGSAP(() => {
    timeline
      .to(loaderLogoRef.current, {
        scale: 3,
        duration: 2,
        ease: "power1.inOut",
      })
      .to(loaderLogoRef.current, {
        scale: 3,
        duration: 2,
        ease: "power1.inOut",
      })
      .to(
        loaderLogoRef.current,
        {
          scale: 1,
          top: window.innerWidth > 768 ? "-6%" : "0",
          left: 0,
          opacity: 0,
          translateX: "50%",
          translateY: "50%",
          duration: 1,
        },
        "-=2"
      )
      .to(
        screenRef.current,
        {
          opacity: 1,
          duration: 2,
        },
        "-=2"
      );
  });

  const handleClick = () => {
    timeline
      .to(
        logoDivRef.current,
        {
          position: "relative",
          height: "100%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        logoRef.current,
        {
          position: "absolute",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          scale: 2,
          duration: 2,
        },
        "-=2"
      )
      .to(
        blackMenuRef.current,
        {
          right: "0",
          duration: 2,
        },
        "-=2"
      )
      .to(
        blackMenuMobileRef.current,
        {
          top: "0",
          duration: 2,
        },
        "-=2"
      )
      .to(
        contentRef.current,
        {
          x: "100%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        menuRef.current,
        {
          x: "100%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        threeDotRef.current,
        {
          x: "100%",
          duration: 2,
        },
        "-=2"
      )
  };

  const handleBlackMenu = () => {
    timeline
      .to(logoRef.current, {
        rotate: -90,
        duration: 2,
      })
      .to(
        whiteLogoRef.current,
        {
          rotate: -90,
          duration: 2,
        },
        "-=2"
      )
      .to(
        blackMenuRef.current,
        {
          width: "25%",
          left: "-75%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        leftDivRef.current,
        {
          width: window.innerWidth > 768 ? "12.5%" : "0",
          duration: 1,
        },
        "-=2"
      )
      .to(
        logoRef.current,
        {
          scale: 1.9,
          duration: 1,
        },
        "-=2"
      )
      .to(
        yellowRef.current,
        {
          left: window.innerWidth > 768 ? "-50%" : "0",
          duration: 2,
        },
        "-=2"
      )
      .to(
        teelRef.current,
        {
          left: window.innerWidth > 768 ? "-0%" : "0",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redRef.current,
        {
          left: window.innerWidth > 768 ? "50%" : "0",
          duration: 2,
        },
        "-=2"
      )
  };

  const handleBlackMenuMobile = () => {
    timeline
      .to(leftDivRef.current, {
        height: "12.5%",
        duration: 1,
      })
      .to(logoRef.current, {
        scale: 1.04,
        duration: 1,
      })
      .to(
        blackMenuMobileRef.current,
        {
          height: "25%",
          top: "-75%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        blackLogoRef.current,
        {
          scale: 1,
          paddingTop: "60",
          duration: 2,
        },
        "-=2"
      )
      .to(
        yellowMobileRef.current,
        {
          top: "-50%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        teelMobileRef.current,
        {
          top: "0%",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redMobileRef.current,
        {
          top: "50%",
          duration: 2,
        },
        "-=2"
      )
  };

  const handleYellowMenu = () => {
    timeline
      .to(
        yellowRef.current,
        {
            width: '150%',
            duration: 2,
        },
        "-=2"
      )
      .to(teelRef.current, {
        left: "100%",
        duration: 2,
      })
      .to(redRef.current, {
        left: "100%",
        duration: 2,
      },
      "-=2"
    );
      
  };
  return (
    <section className="w-full h-screen overflow-hidden relative">
      {/* loder */}
      <Image
        src={"/image 13.png"}
        width={400}
        height={400}
        alt={"logo"}
        ref={loaderLogoRef}
        className="w-[150px] sm:w-[200px] object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto p-5"
      />
      <div
        className="h-screen w-full opacity-0 flex flex-col sm:flex-row justify-between relative"
        ref={screenRef}
      >
        {/* left */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full"
          ref={leftDivRef}
        >
          <div className="relative" ref={logoDivRef}>
            <button
              onClick={() => {
                handleClick();
              }}
              className="p-5 absolute right-0 block sm:hidden"
              ref={threeDotRef}
            >
              <HiDotsHorizontal size={36} />
            </button>
            <Image
              src={"/image 13.png"}
              width={400}
              height={400}
              alt={"logo"}
              ref={logoRef}
              className="w-[150px] sm:w-[200px] h-auto p-5"
            />
          </div>
        </div>

        {/* right */}
        <div className="w-full sm:w-[50%] h-[50%] sm:h-full flex items-start flex-col gap-4 relative">
          <div
            className="hidden w-full p-5 sm:flex items-center justify-end"
            ref={menuRef}
          >
            <button
              onClick={() => {
                handleClick();
              }}
            >
              <HiDotsHorizontal size={36} />
            </button>
          </div>
          <div className="h-screen p-5 flex items-center" ref={contentRef}>
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

          {/* black desktop section */}
          <div
            className="hidden sm:block h-screen w-full bg-black absolute -right-[100%]"
            ref={blackMenuRef}
          >
            <div className="h-screen flex items-center justify-center">
              <button onClick={() => handleBlackMenu()}>
                <Image
                  src={"/image 1.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  ref={whiteLogoRef}
                  className="w-[150px] sm:w-[200px] scale-[1.8] h-auto p-5"
                />
              </button>
            </div>
          </div>
          {/* black mobile section */}
          <div
            className="sm:hidden block h-screen w-full bg-black absolute top-[100%]"
            ref={blackMenuMobileRef}
          >
            <div className="h-[50%] flex items-center justify-center relative">
              <button onClick={() => handleBlackMenuMobile()}>
                <Image
                  src={"/image 1.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  ref={blackLogoRef}
                  className="w-[150px] sm:w-[200px] scale-[1.8] h-auto p-5"
                />
              </button>
            </div>
          </div>
          {/* color 3 section starts here */}

          {/* section 1  -left-[50%] */}
          <div
            className="h-screen w-[50%] bg-[#f7e114] absolute left-[100%]"
            ref={yellowRef}
          >
            <div className="h-screen flex items-center justify-center">
              <button onClick={() => handleYellowMenu()}>
                <Image
                  src={"/image 7.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  className="w-[150px] sm:w-[150px] scale-[1.8] h-auto p-5"
                />
              </button>
            </div>
          </div>
          {/* section 2 -left-[0%] */}
          <div
            className="h-screen w-[50%] bg-[#00d3c8] absolute left-[100%]"
            ref={teelRef}
          >
            <div className="h-screen flex items-center justify-center">
              <button>
                <Image
                  src={"/image 11.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  className="w-[150px] sm:w-[150px] scale-[1.8] h-auto p-5"
                />
              </button>
            </div>
          </div>
          {/* section 3 left-[50%] */}
          <div
            className="h-screen w-[50%] bg-[#ee1d52] absolute left-[100%]"
            ref={redRef}
          >
            <div className="h-screen flex items-center justify-center">
              <button>
                <Image
                  src={"/image 10.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  className="w-[150px] sm:w-[150px] scale-[1.8] h-auto p-5"
                />
              </button>
            </div>
          </div>

          {/* color 3 section ends here */}

          {/* mobile color 3 section starts here */}

          {/* section 1  -top-[50%] */}
          <div
            className="h-[50%] w-full bg-[#f7e114] absolute top-[100%]"
            ref={yellowMobileRef}
          >
              <button onClick={() => handleYellowMenu()} className="w-full h-full relative">
                <Image
                  src={"/image 7.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  className="w-[100px] scale-[1.8] h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5"
                />
              </button>
          </div>
          {/* section 2 top-[0%] */}
          <div
            className="h-[50%] w-full bg-[#00d3c8] absolute top-[100%]"
            ref={teelMobileRef}
          >
              <button className="w-full h-full relative">
                <Image
                  src={"/image 11.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  className="w-[100px] scale-[1.8] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto p-5"
                />
              </button>
          </div>
          {/* section 3 top-[50%] */}
          <div
            className="h-[50%] w-full bg-[#ee1d52] absolute top-[100%]"
            ref={redMobileRef}
          >
              <button className="w-full h-full relative">
                <Image
                  src={"/image 10.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  className="w-[100px] scale-[1.8] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-auto p-5"
                />
              </button>
          </div>

          {/* mobile color 3 section ends here */}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
