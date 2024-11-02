"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const loadingBarRef = useRef(null);

  useEffect(() => {
    gsap.to(loadingBarRef.current, {
      width: "50%",
      duration: 2,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center relative space-y-4">
      <Image
        src="/image 13.png"
        width={400}
        height={400}
        alt="logo"
        className="w-[150px] sm:w-[300px] h-auto"
      />
      <div
        ref={loadingBarRef}
        className="w-0 h-5 bg-black border-[1px] border-black transition-all duration-300 relative"
      >
        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-sm font-semibold">
          Loading...
        </span>
      </div>
    </section>
  );
}
