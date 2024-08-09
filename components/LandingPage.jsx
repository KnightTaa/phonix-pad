"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import Link from "next/link";
import OtherLinks from "./OtherLinks";
import OtherLinksMobile from "./OtherLinksMobile";
// import TransitionLinks from "@/utils/TransitionLinks";

const LandingPage = () => {
  const logo1Ref = useRef(null);
  const logo2Ref = useRef(null);
  const leftLogoRef = useRef(null);
  const rightDivRef = useRef(null);
  const leftDivRef = useRef(null);
  const contentRef = useRef(null);
  const leftClickButtonRef = useRef(null);
  const yellowDivRef = useRef(null);
  const teelDivRef = useRef(null);
  const redDivRef = useRef(null);

  const yellowLogoRef = useRef(null);
  const teelLogoRef = useRef(null);
  const redLogoRef = useRef(null);

  // New refs 7/10/24 start
  const afyellowLogoRef = useRef(null);
  const afteelLogoRef = useRef(null);
  const afredLogoRef = useRef(null);
  // New refs 7/10/24 end

  const yellowClickButtonRef = useRef(null);
  const teelClickButtonRef = useRef(null);
  const redClickButtonRef = useRef(null);

  const registerLogoRef = useRef(null);
  const tregisterLogoRef = useRef(null);
  const rregisterLogoRef = useRef(null);

  const ycontentRef = useRef(null);
  const tcontentRef = useRef(null);
  const rcontentRef = useRef(null);

  const threeDotsRef = useRef(null);

  const otherLinksThreeDotRef = useRef(null);

  const otherLinksRef = useRef(null);
  const otherLinksMobileRef = useRef(null);

  const [isNotFresh, setIsNotFresh] = useState(false);
  const [isYellowNotFresh, setIsYellowNotFresh] = useState(false);
  const [isRightClicked, setIsRightClicked] = useState(false);

  const [isYellowButtonNotFresh, setIsYellowButtonNotFresh] = useState(false);
  const [isTeelButtonNotFresh, setIsTeelButtonNotFresh] = useState(false);
  const [isRedButtonNotFresh, setIsRedButtonNotFresh] = useState(false);
  const [isAwardsLogoNotFresh, setIsAwardsLogoNotFresh] = useState(false);
  const [isleftlogoNotFresh, setIsleftlogoNotFresh] = useState(false);

  const [isBack, setIsBack] = useState(false);
  const [isMainBack, setIsMainBack] = useState(false);

  const [isBackNew, setIsBackNew] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTOpen, setIsTOpen] = useState(false);
  const [isROpen, setIsROpen] = useState(false);

  useLayoutEffect(() => {
    // Ensure GSAP animations are client-side only
    if (typeof window !== "undefined") {
      gsap.timeline();
    }
  }, []);

  const handleLeftClick = () => {
    setIsNotFresh(true);
    const timeline = gsap.timeline();

    timeline
      .to(rightDivRef.current, {
        right: window.innerWidth > 768 ? "-50%" : "0",
        bottom: window.innerWidth > 768 ? "0" : "-50%",
        duration: 2,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(contentRef.current, {
            right: window.innerWidth > 768 ? "0" : "-50%",
            bottom: window.innerWidth > 768 ? "0" : "0",
            left: window.innerWidth > 768 ? "50%" : "0",
            top: window.innerWidth > 768 ? "0" : "16%",
            duration: 2,
            ease: "power3.inOut",
          });
        },
      })

      .to(
        threeDotsRef.current,
        {
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )

      .to(
        leftClickButtonRef.current,
        {
          scale: 2,
          duration: 2,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.to(leftClickButtonRef.current, {
              scale: 1,
              duration: 2,
              ease: "power3.inOut",
            });
            gsap.to(leftLogoRef.current, {
              left: "0",
              top: "0",
              translateX: "0",
              translateY: "0",
              marginTop: window.innerWidth > 768 ? "70px" : "20px",
              marginLeft: window.innerWidth > 768 ? "70px" : "20px",
              // marginTop: "40px",
              // marginLeft: "40px",
              duration: 2,
              ease: "power3.inOut",
            });
          },
        },
        "-=2"
      );
  };

  const handleLeftClick2 = () => {
    setIsNotFresh(true);
    const timeline = gsap.timeline();

    timeline
      .to(rightDivRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(contentRef.current, {
            right: window.innerWidth > 768 ? "0" : "-50%",
            bottom: window.innerWidth > 768 ? "0" : "0",
            left: window.innerWidth > 768 ? "50%" : "0",
            top: window.innerWidth > 768 ? "0" : "16%",
            duration: 2,
            ease: "power3.inOut",
          });
        },
      })

      .to(
        threeDotsRef.current,
        {
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )

      .to(
        leftClickButtonRef.current,
        {
          scale: 2,
          duration: 2,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.to(leftClickButtonRef.current, {
              scale: 1,
              duration: 2,
              ease: "power3.inOut",
            });
            gsap.to(leftLogoRef.current, {
              left: "0",
              top: "0",
              translateX: "0",
              translateY: "0",
              marginTop: window.innerWidth > 768 ? "70px" : "40px",
              marginLeft: window.innerWidth > 768 ? "80px" : "60px",
              duration: 2,
              ease: "power3.inOut",
            });
          },
        },
        "-=2"
      );
  };

  const handleThreeDotsClick = () => {
    setIsleftlogoNotFresh(true);
    const timeline = gsap.timeline();

    timeline
      .to(rightDivRef.current, {
        right: "0%",
        bottom: "0%",
        opacity: 1,
        duration: 2,
        ease: "power3.inOut",
      })
      .to(
        contentRef.current,
        {
          right: window.innerWidth > 768 ? "-50%" : "0",
          bottom: window.innerWidth > 768 ? "0" : "-50%",
          left: window.innerWidth > 768 ? "100%" : "0",
          top: window.innerWidth > 768 ? "0" : "100%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        leftLogoRef.current,
        {
          left: "50%",
          top: "50%",
          translateX: "-50%",
          translateY: "-50%",
          margin: "auto",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        threeDotsRef.current,
        {
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      );
  };

  const handleRightClick = () => {
    setIsBack(true);
    setIsRightClicked(true);
    const timeline = gsap.timeline();

    timeline
      .to(logo1Ref.current, {
        rotate: window.innerWidth > 768 ? -90 : 0,
        width: window.innerWidth > 768 ? "180px" : "70px",
        duration: 2,
        ease: "power3.inOut",
      })
      .to(
        logo2Ref.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          width: window.innerWidth > 768 ? "180px" : "70px",
          scale: isAwardsLogoNotFresh ? 1 : "1",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        leftDivRef.current,
        {
          width: window.innerWidth > 768 ? "8%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "8%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        logo1Ref.current,
        {
          scale: window.innerWidth > 768 ? `${isNotFresh ? 2 : 1}` : "1.1",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )

      .to(
        rightDivRef.current,
        {
          left: window.innerWidth > 768 ? "8%" : "0",
          top: window.innerWidth > 768 ? "0" : "8%",
          width: window.innerWidth > 768 ? "8%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "8%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        yellowDivRef.current,
        {
          width: yellowDivRef.current.style.width === "68%" ? "28%" : "",
          height: yellowDivRef.current.style.height === "68%" ? "28%" : "",
          left: window.innerWidth > 768 ? "16%" : "0",
          top: window.innerWidth > 768 ? "0" : "16%",
          duration: 2,
          ease: "power3.inOut",

          //New for back
          onStart: () => {
            gsap.to(yellowClickButtonRef.current, {
              top: "0",
              left: "0",
              translateX: "0",
              pointerEvents: "auto",
              width: "100%",
              translateY: "0",
            });
          },

          //New 7/10/24
          onComplete: () => {
            gsap.to(yellowClickButtonRef.current, {
              zIndex: "10",
            });
          },
        },
        "-=2"
      )
      .to(
        teelDivRef.current,
        {
          width: teelDivRef.current.style.width === "68%" ? "28%" : "",
          height: teelDivRef.current.style.height === "68%" ? "28%" : "",
          left: window.innerWidth > 768 ? "44%" : "0",
          top: window.innerWidth > 768 ? "0" : "44%",
          duration: 2,
          ease: "power3.inOut",

          //New for back
          onStart: () => {
            gsap.to(teelClickButtonRef.current, {
              top: "0",
              left: "0",
              translateX: "0",
              pointerEvents: "auto",
              width: "100%",
              translateY: "0",
            });
          },
          //New 7/10/24
          onComplete: () => {
            gsap.to(teelClickButtonRef.current, {
              zIndex: "10",
            });
          },
        },
        "-=2"
      )
      .to(
        redDivRef.current,
        {
          width: redDivRef.current.style.width === "68%" ? "28%" : "",
          height: redDivRef.current.style.height === "68%" ? "28%" : "",
          left: window.innerWidth > 768 ? "72%" : "0",
          top: window.innerWidth > 768 ? "0" : "72%",
          duration: 2,
          ease: "power3.inOut",

          //New for back
          onStart: () => {
            gsap.to(redClickButtonRef.current, {
              top: "0",
              left: "0",
              translateX: "0",
              pointerEvents: "auto",
              width: "100%",
              translateY: "0",
            });
          },
          //New 7/10/24
          onComplete: () => {
            gsap.to(redClickButtonRef.current, {
              zIndex: "10",
            });
          },
        },
        "-=2"
      )
      .to(
        otherLinksThreeDotRef.current,
        {
          display: "block",
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        yellowLogoRef.current,
        {
          rotate: "0",
          duration: 2,
        },
        "-=2"
      )
      // 1
      .to(
        teelLogoRef.current,
        {
          rotate: "0",
          duration: 2,
        },
        "-=2"
      )
      .to(
        redLogoRef.current,
        {
          rotate: "0",
          duration: 2,
        },
        "-=2"
      );
  };

  const handleYellowClick = () => {
    setIsOpen(true);
    setIsTeelButtonNotFresh(true);
    setIsRedButtonNotFresh(true);
    setIsYellowButtonNotFresh(true);
    const timeline = gsap.timeline();

    timeline
      .to(redDivRef.current, {
        width: window.innerWidth > 768 ? "8%" : "100%",
        height: window.innerWidth > 768 ? "100%" : "8%",
        left: window.innerWidth > 768 ? "92%" : "0",
        top: window.innerWidth > 768 ? "0" : "92%",
        duration: 2,
        ease: "power3.inOut",
      })
      .to(
        teelDivRef.current,
        {
          width: window.innerWidth > 768 ? "8%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "8%",
          left: window.innerWidth > 768 ? "84%" : "0",
          top: window.innerWidth > 768 ? "0" : "84%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        yellowDivRef.current,
        {
          width: window.innerWidth > 768 ? "68%" : "100%",
          height: window.innerWidth > 768 ? "100vh" : "68%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        yellowLogoRef.current,
        {
          // rotate: isYellowNotFresh ? 0 : 0,
          rotate: 0,
          duration: 2,
          scale:
            window.innerWidth > 768
              ? "1"
              : `${isYellowButtonNotFresh ? 1.7 : "1"}`,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        teelLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          display: "block", // New 7/10/24
          scale:
            window.innerWidth > 768 ? "1" : `${isTeelButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      // New 7/10/24
      .to(
        afteelLogoRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=2"
      )
      .to(
        redLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          display: "block", // New 7/10/24
          scale:
            window.innerWidth > 768 ? "1" : `${isRedButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      // New 7/10/24
      .to(
        afredLogoRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=2"
      )
      .to(
        yellowClickButtonRef.current,
        {
          top: window.innerWidth > 768 ? "-80vh" : "-52vh",
          right: window.innerWidth > 768 ? "-55vw" : "-65vw",
          translateX: window.innerWidth > 768 ? "27.5vw" : "32vw", //New for back
          duration: 2,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.to(registerLogoRef.current, {
              opacity: 1,
              duration: 2,
            });
            gsap.to(ycontentRef.current, {
              opacity: 1,
              zIndex: 1,
              duration: 2,
            });
            gsap.to(yellowClickButtonRef.current, {
              zIndex: window.innerWidth > 768 ? "" : 40, // After mobile
              pointerEvents: "none",
            });

            // New 7/10/24
            gsap.set(afyellowLogoRef.current, {
              opacity: 1,
              duration: 1,
              onComplete: () => {
                gsap.set(yellowLogoRef.current, {
                  display: "none",
                });
              },
            });
          },
        },
        "-=2"
      )
      .to(
        teelClickButtonRef.current,
        {
          top: "0",
          right: "0",
          translateX: "0",
          translateY: "0",
          pointerEvents: "auto",
          duration: 2,
          onStart: () => {
            gsap.to(tregisterLogoRef.current, {
              opacity: 0,
            });
            gsap.to(tcontentRef.current, {
              opacity: 0,
              zIndex: -1,
            });
          },
        },
        "-=2"
      )
      .to(
        redClickButtonRef.current,
        {
          top: "0",
          right: "0",
          translateX: "0",
          translateY: "0",
          pointerEvents: "auto",
          duration: 2,
          onStart: () => {
            gsap.to(rregisterLogoRef.current, {
              opacity: 0,
            });
            gsap.to(rcontentRef.current, {
              opacity: 0,
              zIndex: -1,
            });
          },
        },
        "-=2"
      );
  };

  const handleTeelClick = () => {
    setIsTOpen(true);
    setIsTeelButtonNotFresh(true);
    setIsRedButtonNotFresh(true);
    setIsYellowButtonNotFresh(true);
    setIsYellowNotFresh(true);
    const timeline = gsap.timeline();

    timeline
      .to(yellowDivRef.current, {
        left: window.innerWidth > 768 ? "16%" : "0",
        top: window.innerWidth > 768 ? "0" : "16%",
        width: window.innerWidth > 768 ? "8%" : "100%",
        height: window.innerWidth > 768 ? "100%" : "8%",
        duration: 2,
        ease: "power3.inOut",
      })
      .to(
        yellowLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          display: "block", // New 7/10/24
          scale:
            window.innerWidth > 768
              ? "1"
              : `${isYellowButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      // New 7/10/24
      .to(
        afyellowLogoRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=2"
      )

      .to(
        redDivRef.current,
        {
          width: window.innerWidth > 768 ? "8%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "8%",
          left: window.innerWidth > 768 ? "92%" : "0",
          top: window.innerWidth > 768 ? "0" : "92%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        redLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          display: "block", // New 7/10/24
          scale:
            window.innerWidth > 768 ? "1" : `${isTeelButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      // New 7/10/24
      .to(
        afredLogoRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=2"
      )
      .to(
        yellowClickButtonRef.current,
        {
          top: "0",
          right: "0",
          translateX: "0",
          translateY: "0",
          pointerEvents: "auto",
          zIndex: window.innerWidth > 768 ? "" : "2",
          duration: 2,
          onStart: () => {
            gsap.to(registerLogoRef.current, {
              opacity: 0,
            });
            gsap.to(ycontentRef.current, {
              opacity: 0,
              zIndex: -1,
            });
          },
        },
        "-=2"
      )
      .to(
        teelDivRef.current,
        {
          width: window.innerWidth > 768 ? "68%" : "100%",
          height: window.innerWidth > 768 ? "100vh" : "68%",
          left: window.innerWidth > 768 ? "24%" : "0",
          top: window.innerWidth > 768 ? "0" : "24%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        teelLogoRef.current,
        {
          rotate: 0,
          scale:
            window.innerWidth > 768
              ? "1"
              : `${isTeelButtonNotFresh ? 1.7 : "1"}`, //New
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        teelClickButtonRef.current,
        {
          top: window.innerWidth > 768 ? "-80vh" : "-52vh",
          right: window.innerWidth > 768 ? "-55vw" : "-65vw",
          translateX: window.innerWidth > 768 ? "27.5vw" : "32vw", //New for back
          duration: 2,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.to(tregisterLogoRef.current, {
              opacity: 1,
              duration: 2,
            });
            gsap.to(tcontentRef.current, {
              opacity: 1,
              zIndex: 1,
              duration: 2,
            });
            gsap.to(teelClickButtonRef.current, {
              zIndex: window.innerWidth > 768 ? "" : 40, // After mobile
              pointerEvents: "none",
            });

            // New 7/10/24
            gsap.to(afteelLogoRef.current, {
              opacity: 1,
              duration: 1,
              onComplete: () => {
                gsap.to(teelLogoRef.current, {
                  display: "none",
                });
              },
            });
          },
        },
        "-=2"
      )
      .to(
        redClickButtonRef.current,
        {
          top: "0",
          right: "0",
          translateX: "0",
          translateY: "0",
          pointerEvents: "auto",
          duration: 2,
          onStart: () => {
            gsap.to(rregisterLogoRef.current, {
              opacity: 0,
            });
            gsap.to(rcontentRef.current, {
              opacity: 0,
              zIndex: -1,
            });
          },
        },
        "-=2"
      );
  };

  const handleRedClick = () => {
    setIsROpen(true);
    setIsTeelButtonNotFresh(true);
    setIsRedButtonNotFresh(true);
    setIsYellowButtonNotFresh(true);
    const timeline = gsap.timeline();

    timeline
      .to(teelDivRef.current, {
        width: window.innerWidth > 768 ? "8%" : "100%",
        height: window.innerWidth > 768 ? "100%" : "8%",
        left: window.innerWidth > 768 ? "24%" : "0",
        top: window.innerWidth > 768 ? "0" : "24%",
        duration: 2,
        ease: "power3.inOut",
      })
      .to(
        teelLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          display: "block", //New 7/10/24
          scale:
            window.innerWidth > 768 ? "1" : `${isTeelButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      // New 7/10/24
      .to(
        afteelLogoRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=2"
      )
      .to(
        yellowDivRef.current,
        {
          left: window.innerWidth > 768 ? "16%" : "0",
          top: window.innerWidth > 768 ? "0" : "16%",
          width: window.innerWidth > 768 ? "8%" : "100%",
          height: window.innerWidth > 768 ? "100%" : "8%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        yellowLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          display: "block", // New 7/10/24
          scale:
            window.innerWidth > 768
              ? "1"
              : `${isYellowButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      // New 7/10/24
      .to(
        afyellowLogoRef.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=2"
      )

      .to(
        yellowClickButtonRef.current,
        {
          top: "0",
          right: "0",
          translateX: "0",
          translateY: "0",
          pointerEvents: "auto",
          zIndex: window.innerWidth > 768 ? "" : "1",
          duration: 2,
          onStart: () => {
            gsap.to(registerLogoRef.current, {
              opacity: 0,
            });
            gsap.to(ycontentRef.current, {
              opacity: 0,
              zIndex: -1,
            });
          },
        },
        "-=2"
      )
      .to(
        teelClickButtonRef.current,
        {
          top: "0",
          right: "0",
          translateX: "0",
          translateY: "0",
          pointerEvents: "auto",
          zIndex: window.innerWidth > 768 ? "" : "1",
          duration: 2,
          onStart: () => {
            gsap.to(tregisterLogoRef.current, {
              opacity: 0,
            });
            gsap.to(tcontentRef.current, {
              opacity: 0,
              zIndex: -1,
            });
          },
        },
        "-=2"
      )
      .to(
        redDivRef.current,
        {
          width: window.innerWidth > 768 ? "68%" : "100%",
          height: window.innerWidth > 768 ? "100vh" : "68%",
          left: window.innerWidth > 768 ? "32%" : "0",
          top: window.innerWidth > 768 ? "0" : "32%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )

      .to(
        redLogoRef.current,
        {
          rotate: 0,
          duration: 2,
          scale:
            window.innerWidth > 768
              ? "1"
              : `${isRedButtonNotFresh ? 1.7 : "1"}`, //New
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        redClickButtonRef.current,
        {
          top: window.innerWidth > 768 ? "-80vh" : "-52vh",
          right: window.innerWidth > 768 ? "-55vw" : "-65vw",
          translateX: window.innerWidth > 768 ? "27.5vw" : "32vw", //New for back
          duration: 2,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.to(rregisterLogoRef.current, {
              opacity: 1,
              duration: 2,
            });
            gsap.to(rcontentRef.current, {
              opacity: 1,
              zIndex: 1,
              duration: 2,
            });
            gsap.to(redClickButtonRef.current, {
              zIndex: window.innerWidth > 768 ? "" : 40, // After mobile
              pointerEvents: "none",
            });

            // New 7/10/24
            gsap.to(afredLogoRef.current, {
              opacity: 1,
              duration: 1,
              onComplete: () => {
                gsap.to(redLogoRef.current, {
                  display: "none",
                });
              },
            });
          },
        },
        "-=2"
      );
  };

  const handleOtherLinks = () => {
    const timeline = gsap.timeline();

    timeline
      .to(otherLinksRef.current, {
        left: otherLinksRef.current.style.left === "16%" ? "100%" : "16%",
        duration: 2,
        zIndex: "40",
        ease: "power3.inOut",
      })
      .to(
        otherLinksMobileRef.current,
        {
          left: otherLinksMobileRef.current.style.left === "0%" ? "100%" : "0%",
          duration: 2,
          zIndex: "999",
          ease: "power3.inOut",
        },
        "-=2"
      );
  };

  const handleBackClick = () => {
    setIsMainBack(true);
    setIsBack(false);
    setIsBackNew(true);
    setIsRightClicked(false);
    setIsAwardsLogoNotFresh(true);

    const timeline = gsap.timeline();
    timeline
      .to(redDivRef.current, {
        left: window.innerWidth > 768 ? "100%" : "0",
        top: window.innerWidth > 768 ? "0" : "100%",
        duration: 2,
        ease: "power3.inOut",
      })
      .to(
        teelDivRef.current,
        {
          left: window.innerWidth > 768 ? "100%" : "0",
          top: window.innerWidth > 768 ? "0" : "100%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        yellowDivRef.current,
        {
          left: window.innerWidth > 768 ? "100%" : "0",
          top: window.innerWidth > 768 ? "0" : "100%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        rightDivRef.current,
        {
          left: window.innerWidth > 768 ? "50%" : "0",
          width: window.innerWidth > 768 ? "50%" : "100%",
          height: window.innerWidth > 768 ? "100vh" : "50%",
          top: window.innerWidth > 768 ? "0" : "50%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        leftDivRef.current,
        {
          width: window.innerWidth > 768 ? "50%" : "100%",
          height: window.innerWidth > 768 ? "100vh" : "50%",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        logo1Ref.current,
        {
          rotate: 0,
          duration: 2,
          ease: "power3.inOut",
          onStart: () => {
            gsap.to(logo1Ref.current, {
              scale: window.innerWidth > 768 ? "1.4" : "2.1",
              duration: 2,
              ease: "power3.inOut",
            });
          },
        },
        "-=2"
      )
      .to(
        logo2Ref.current,
        {
          rotate: 0,
          duration: 2,
          ease: "power3.inOut",
          onStart: () => {
            gsap.to(logo2Ref.current, {
              scale: window.innerWidth > 768 ? "1.4" : "2.1",
              duration: 2,
              ease: "power3.inOut",
            });
          },
        },
        "-=2"
      )
      .to(
        otherLinksThreeDotRef.current,
        {
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        registerLogoRef.current,
        {
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        tregisterLogoRef.current,
        {
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        rregisterLogoRef.current,
        {
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        ycontentRef.current,
        {
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        tcontentRef.current,
        {
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        rcontentRef.current,
        {
          opacity: 0,
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        redClickButtonRef.current,
        {
          zIndex: "10",
        },
        "-=2"
      )

      // New Start 7/10/24
      .to(
        afyellowLogoRef.current,
        {
          opacity: 0,
        },
        "-=2"
      )

      .to(
        yellowLogoRef.current,
        {
          display: "block",
          onStart: () => {
            gsap.to(yellowClickButtonRef.current, {
              zIndex: "",
              // zIndex: window.innerWidth > 1440 ? "" : "10",
            });
          },
        },
        "-=2"
      )

      .to(
        afteelLogoRef.current,
        {
          opacity: 0,
        },
        "-=2"
      )

      .to(
        teelLogoRef.current,
        {
          display: "block",
          onStart: () => {
            gsap.to(teelClickButtonRef.current, {
              zIndex: "",
              // zIndex: window.innerWidth > 1440 ? "" : "10",
            });
          },
        },
        "-=2"
      )

      .to(
        afredLogoRef.current,
        {
          opacity: 0,
        },
        "-=2"
      )

      .to(
        redLogoRef.current,
        {
          display: "block",
          onStart: () => {
            gsap.to(redClickButtonRef.current, {
              zIndex: "",
              // zIndex: window.innerWidth > 1440 ? "" : "10",
            });
          },
        },
        "-=2"
      );

    // New End 7/10/24
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
      <div className="w-full h-screen flex flex-col sm:flex-row justify-between relative">
        <div
          className="block sm:hidden absolute top-0 right-[0%] z-10 mr-2 mt-2 opacity-0 outline-none"
          ref={threeDotsRef}
        >
          <button
            onClick={handleThreeDotsClick}
            className="outline-none hidden"
          >
            <HiDotsHorizontal size={38} />
          </button>
        </div>
        {/* left */}
        <div className="w-full sm:w-[50%] h-[50%] sm:h-full" ref={leftDivRef}>
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="absolute" ref={leftLogoRef}>
              <button onClick={clickHandler} ref={leftClickButtonRef}>
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
        {/* right */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full bg-black absolute bottom-0 right-[0%]"
          ref={rightDivRef}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            <div
              className="absolute top-1/2 right-0 sm:top-0 sm:left-1/2 transform -translate-y-1/2 sm:translate-y-1/2 sm:-translate-x-1/2 rotate-0 sm:rotate-90 opacity-1 sm:flex items-center justify-center mr-2 sm:mr-0 mt-0 sm:mt-2 z-20 hidden opacity-0"
              ref={otherLinksThreeDotRef}
            >
              <button
                onClick={handleOtherLinks}
                // flex items-center justify-center outline-none
                className="items-center justify-center outline-none hidden"
              >
                <HiDotsHorizontal
                  size={34}
                  className="text-white w-8 sm:w-9 h-auto"
                />
              </button>
            </div>
            <div>
              <button
                onClick={handleRightClick}
                style={{ pointerEvents: isRightClicked ? "none" : "auto" }}
              >
                {/*               <button onClick={handleRightClick}> */}
                <Image
                  src={"/image 1.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  ref={logo2Ref}
                  className="w-[150px] sm:w-[250px] h-auto"
                />
              </button>
            </div>
          </div>
        </div>
        {/* content */}
        <div
          className="w-full sm:w-[50%] h-[50%] sm:h-full flex items-start sm:items-end justify-between flex-col absolute right-0 sm:-right-[50%] -bottom-[50%] sm:bottom-0"
          ref={contentRef}
        >
          <div className="hidden mr-10 mt-10 sm:flex self-end outline-none ssss">
            <button onClick={handleThreeDotsClick} className="outline-none">
              <HiDotsHorizontal size={36} />
            </button>
          </div>
          <div className="mr-2 ml-2 sm:mr-10 sm:ml-0 mt-10 sm:mt-0 flex items-start flex-col gap-2 sm:gap-10 sm:w-[70%] text-justify">
            <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold">
              Phoenix Arts and Design (PAD)
            </h1>
            <p className="text-base xl:text-lg 2xl:text-xl font-medium">
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

        {/* other links desktop left-[16%]*/}
        <div
          className="hidden sm:block w-[84%] bg-[#8f8f8f] absolute left-[100%]"
          ref={otherLinksRef}
        >
          <OtherLinks />
        </div>

        {/* other links mobile */}
        <div
          className="block sm:hidden h-[84%] w-full bg-[#3c3c3b] absolute left-[100%] top-[16%]"
          ref={otherLinksMobileRef}
        >
          <OtherLinksMobile />
        </div>
        {/* yellow content absolute left-[16%]*/}
        <div
          className="h-[28%] sm:h-screen w-full sm:w-[28%] absolute left-0 sm:left-[100%] top-[100%] sm:top-0 bg-[#f7e114]"
          ref={yellowDivRef}
        >
          <div className="w-full h-full relative">
            <Link
              href={"/apply/shots"}
              className="absolute top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 flex items-center justify-center outline-none"
            >
              <Image
                src={"/image 7.png"}
                width={400}
                height={400}
                alt={"logo"}
                className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto block"
              />
            </Link>
          </div>
        </div>

        {/* teel content absolute left-[44%]*/}
        <div
          className="h-[28%] sm:h-screen w-full sm:w-[28%] absolute left-0 sm:left-[100%] top-[100%] sm:top-0 bg-[#00d3c8]"
          ref={teelDivRef}
        >
          <div className="w-full h-full relative">
            <Link
              href={`/apply/products`}
              className="absolute top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 flex items-center justify-center outline-none"
            >
              <Image
                src={"/image 11.png"}
                width={400}
                height={400}
                alt={"logo"}
                className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto block"
              />
            </Link>
          </div>
        </div>
        {/* red content absolute left-[72%]*/}
        <div
          className="h-[28%] sm:h-screen w-full sm:w-[28%] absolute left-0 sm:left-[100%] top-[100%] sm:top-0 bg-[#ea4747]"
          ref={redDivRef}
        >
          <div className="w-full h-full relative">
            <Link
              href={"/apply/brands"}
              className="absolute inset-0 flex items-center justify-center outline-none"
            >
              <Image
                src={"/image 10.png"}
                width={400}
                height={400}
                alt={"logo"}
                className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto block"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
