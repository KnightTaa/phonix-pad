"use client";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import Link from "next/link";
import OtherLinks from "./OtherLinks";
import OtherLinksMobile from "./OtherLinksMobile";

const OtherTestLanding = () => {
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

      // After Finalize bellow code please delete

      // .to(
      //   contentRef.current,
      //   {
      //     right: window.innerWidth > 768 ? "0" : "-50%",
      //     bottom: window.innerWidth > 768 ? "0" : "0",
      //     left: window.innerWidth > 768 ? "50%" : "0",
      //     top: window.innerWidth > 768 ? "0" : "12.5%",
      //     duration: 2,
      //     ease: "power3.inOut",
      //   },
      //   "-=2"
      // )

      // After Finalize above code please delete

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
              paddingTop: "10px",
              paddingLeft: "10px",
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
        // right: window.innerWidth > 768 ? "-50%" : "0",
        // bottom: window.innerWidth > 768 ? "0" : "-50%",
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

      // After Finalize bellow code please delete

      // .to(
      //   contentRef.current,
      //   {
      //     right: window.innerWidth > 768 ? "0" : "-50%",
      //     bottom: window.innerWidth > 768 ? "0" : "0",
      //     left: window.innerWidth > 768 ? "50%" : "0",
      //     top: window.innerWidth > 768 ? "0" : "12.5%",
      //     duration: 2,
      //     ease: "power3.inOut",
      //   },
      //   "-=2"
      // )

      // After Finalize above code please delete

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
              paddingTop: "30px",
              paddingLeft: "40px",
              duration: 2,
              ease: "power3.inOut",
            });
          },
        },
        "-=2"
      )
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
          paddingTop: "10px", //New
          paddingLeft: "10px", //New
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
          scale: isAwardsLogoNotFresh ? 1 : '1',
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
          scale: window.innerWidth > 768 ? `${isNotFresh ? 2.6 : 1}` : "1.1",
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
              top: '0',
              left: '0',
              translateX: '0',
              pointerEvents: 'auto',
              width: '100%', 
              translateY: '0',
            })
          }
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
              top: '0',
              left: '0',
              translateX: '0',
              pointerEvents: 'auto',
              width: '100%', 
              translateY: '0',
            })
          }
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
              top: '0',
              left: '0',
              translateX: '0',
              pointerEvents: 'auto',
              width: '100%', 
              translateY: '0',
            })
          }
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
          rotate: '0',
          // scale: window.innerWidth > 768 ? '1': `${isBackNew ? `${isOpen ? '1' : '1.8'}` : '1'}`,
          duration: 2,
        },
        "-=2"
      )
      // 1
      .to(
        teelLogoRef.current,
        {
          rotate: '0',
          // scale: window.innerWidth > 768 ? '1': `${isBackNew ? `${isTOpen ? '1' : '1.8'}` : '1'}`,
          duration: 2,
        },
        "-=2"
      )
      .to(
        redLogoRef.current,
        {
          rotate: '0',
          // scale: window.innerWidth > 768 ? '1': `${isBackNew ? `${isROpen ? '1' : '1.8'}` : '1'}`,
          duration: 2,
        },
        "-=2"
      )
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
          scale:
            window.innerWidth > 768 ? "1" : `${isTeelButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
        },
        "-=2"
      )
      .to(
        redLogoRef.current,
        {
          rotate: window.innerWidth > 768 ? -90 : 0,
          scale:
            window.innerWidth > 768 ? "1" : `${isRedButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
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
              zIndex: window.innerWidth > 768 ? '' : 40, // After mobile
              pointerEvents: 'none',
            })
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
          pointerEvents: 'auto',
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
          pointerEvents: 'auto',
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
          scale:
            window.innerWidth > 768 ? "1" : `${isTeelButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
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
              zIndex: window.innerWidth > 768 ? '' : 40, // After mobile
              pointerEvents: 'none',
            })
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
          scale:
            window.innerWidth > 768 ? "1" : `${isTeelButtonNotFresh ? 1 : "1"}`,
          width: window.innerWidth > 768 ? "" : "60px",
          duration: 2,
          ease: "power3.inOut",
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
              zIndex: window.innerWidth > 768 ? '' : 40, // After mobile
              pointerEvents: 'none',
            })
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
    .to(
      redDivRef.current,
      {
        left: window.innerWidth > 768 ? "100%" : "0",
        top: window.innerWidth > 768 ? "0" : "100%",
        duration: 2,
        ease: "power3.inOut",
      }
    )
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
          })
        }
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
          })
        },
      },
      "-=2"
    )
    .to(
      otherLinksThreeDotRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: 'power3.inOut'
      },
      "-=2"
    )
    .to(
      registerLogoRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: 'power3.inOut'
      },
      "-=2"
    )
    .to(
      tregisterLogoRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: 'power3.inOut'
      },
      "-=2"
    )
    .to(
      rregisterLogoRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: 'power3.inOut'
      },
      "-=2"
    )
    .to(
      ycontentRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: 'power3.inOut'
      },
      "-=2"
    )
    .to(
      tcontentRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: 'power3.inOut'
      },
      "-=2"
    )
    .to(
      rcontentRef.current,
      {
        opacity: 0,
        duration: 2,
        ease: 'power3.inOut'
      },
      "-=2"
    )
    .to(
      redClickButtonRef.current,
      {
        zIndex: '10',

      },
      "-=2"
    )
  }

  const getClickHandler = () => {
    if(isBack) {
      return handleBackClick
    } else {
      if(isMainBack) {
        return handleLeftClick2
      } else {
        return handleLeftClick
      }
    }
  }

  const clickHandler = getClickHandler()

  return (
    <section className="w-full h-screen overflow-hidden relative">
      <div className="w-full h-screen flex flex-col sm:flex-row justify-between relative">
        <div
          className="block sm:hidden absolute top-0 right-[0%] z-10 mr-2 mt-2 opacity-0 outline-none"
          ref={threeDotsRef}
        >
          <button onClick={handleThreeDotsClick} className="outline-none">
            <HiDotsHorizontal size={36} />
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
                className="flex items-center justify-center outline-none"
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
          className="w-full sm:w-[50%] h-[50%] sm:h-full flex items-start justify-between flex-col absolute right-0 sm:-right-[50%] -bottom-[50%] sm:bottom-0"
          ref={contentRef}
        >
          <div className="hidden w-full p-5 sm:flex items-center justify-end outline-none">
            <button onClick={handleThreeDotsClick} className="outline-none">
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
            <button
              className="absolute top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 flex items-center justify-center outline-none"
              onClick={handleYellowClick}
              ref={yellowClickButtonRef}
            >
              <Image
                src={"/image 7.png"}
                width={400}
                height={400}
                alt={"logo"}
                ref={yellowLogoRef}
                className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto"
              />
            </button>
            {/* Register Button */}
            <div className="absolute right-[15%] xl:right-[6.4%] 2xl:right-[5.8%] top-[22%] sm:top-[20%] z-10">
              <Link href={"/uploads"}>
                <Image
                  src={"/REGISTER1.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  ref={registerLogoRef}
                  className="w-[60px] md:w-[80px] xl:w-[100px] 2xl:w-[150px] h-auto opacity-0"
                />
              </Link>
            </div>
            {/* Content -z-[1]*/}
            <div
              className="absolute left-0 bottom-0 ml-5 sm:ml-10 mb-5 sm:mb-10 opacity-0 -z-[1]"
              ref={ycontentRef}
            >
              <div className="flex items-start flex-col gap-4">
                <div className="flex items-center justify-center gap-3">
                  <h1 className="text-2xl sm:text-6xl font-bold uppercase text-white font-arial">
                    Shots
                  </h1>
                  <h1 className="text-3xl sm:text-6xl font-bold uppercase font-arial">
                    For Life
                  </h1>
                </div>
                <div className="w-full sm:w-[50%]">
                  <p className="text-lg leading-8 font-medium font-arial">
                    Platform to promote, support and recognize all those who use
                    an image as a vehicle to express their creativity, feelings,
                    memories; all that a creative, professional or amateur want
                    to transmit to society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* teel content absolute left-[44%]*/}
        <div
          className="h-[28%] sm:h-screen w-full sm:w-[28%] absolute left-0 sm:left-[100%] top-[100%] sm:top-0 bg-[#00d3c8]"
          ref={teelDivRef}
        >
          <div className="w-full h-full relative">
            <button
              className="absolute top-[0%] right-[0%] transform translate-x-0 translate-y-0 inset-0 flex items-center justify-center outline-none"
              onClick={handleTeelClick}
              ref={teelClickButtonRef}
            >
              <Image
                src={"/image 11.png"}
                width={400}
                height={400}
                alt={"logo"}
                ref={teelLogoRef}
                className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto"
              />
            </button>
            {/* Register Button */}
            <div className="absolute right-[15%] xl:right-[6.4%] 2xl:right-[5.8%] top-[22%] sm:top-[20%] z-10">
              <Link href={"/uploads"}>
                <Image
                  src={"/REGISTER1.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  ref={tregisterLogoRef}
                  className="w-[60px] md:w-[80px] xl:w-[100px] 2xl:w-[150px] h-auto opacity-0"
                />
              </Link>
            </div>
            {/* Content */}
            <div
              className="absolute left-0 bottom-0 ml-5 sm:ml-10 mb-5 sm:mb-10 opacity-0 -z-[1]"
              ref={tcontentRef}
            >
              <div className="flex items-start flex-col gap-4">
                <div className="flex items-center justify-center gap-3">
                  <h1 className="text-2xl sm:text-6xl font-bold uppercase text-white font-arial">
                    Produts
                  </h1>
                  <h1 className="text-3xl sm:text-6xl font-bold uppercase font-arial">
                    For Life
                  </h1>
                </div>
                <div className="w-full sm:w-[50%]">
                  <p className="text-lg leading-8 font-medium font-arial">
                    Platform to promote all those who want to bring color to our
                    lives, by creating bold, impactful, and meaningful visual
                    languages that tell important stories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* red content absolute left-[72%]*/}
        <div
          className="h-[28%] sm:h-screen w-full sm:w-[28%] absolute left-0 sm:left-[100%] top-[100%] sm:top-0 bg-[#ee1d52]"
          ref={redDivRef}
        >
          <div className="w-full h-full relative">
            <button
              className="absolute inset-0 flex items-center justify-center outline-none"
              onClick={handleRedClick}
              ref={redClickButtonRef}
            >
              <Image
                src={"/image 10.png"}
                width={400}
                height={400}
                alt={"logo"}
                ref={redLogoRef}
                className="w-[100px] md:w-[130px] xl:w-[140px] 2xl:w-[200px] h-auto"
              />
            </button>
            {/* Register Button */}
            <div className="absolute right-[15%] xl:right-[6.4%] 2xl:right-[5.8%] top-[22%] sm:top-[20%] z-10">
              <Link href={"/uploads"}>
                <Image
                  src={"/REGISTER1.png"}
                  width={400}
                  height={400}
                  alt={"logo"}
                  ref={rregisterLogoRef}
                  className="w-[60px] md:w-[80px] xl:w-[100px] 2xl:w-[150px] h-auto opacity-0"
                />
              </Link>
            </div>
            {/* Content */}
            <div
              className="absolute left-0 bottom-0 ml-5 sm:ml-10 mb-5 sm:mb-10 opacity-0 -z-[1]"
              ref={rcontentRef}
            >
              <div className="flex items-start flex-col gap-4">
                <div className="flex items-center justify-center gap-3">
                  <h1 className="text-2xl sm:text-6xl font-bold uppercase text-white font-arial">
                    Brands
                  </h1>
                  <h1 className="text-3xl sm:text-6xl font-bold uppercase font-arial">
                    For Life
                  </h1>
                </div>
                <div className="w-full sm:w-[50%]">
                  <p className="text-lg leading-8 font-medium font-arial">
                    Platform to join and promote all individuals who want to
                    improve peoples lives by creating better products, objects,
                    services to solve specific or general challenges. By
                    creating better and respectful products we will grow as a
                    society, the soul of PAD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherTestLanding;
