"use client";

import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import LandingPage from "@/components/LandingPage";
import ProjectInfo from "@/components/ProjectInfo";

export default function Home() {
  const [loderFinish, setLoderFinish] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          setLoderFinish(true);
        },
      });

      setTimeline(t1);
    });

    return () => context.revert();
  }, []);

  return (
    <main className="">
      <LandingPage />
      
      <div className="hidden">
        <div className="mb-10">
          <ProjectInfo
            color={"#f7e114"}
            image={"image 7"}
            title={"Shorts"}
            description={
              "Platform to promote, support and recognize all those who use an image as a vehicle to express their creativity, feelings, memories; all that a creative, professional or amateur want to transmit to society."
            }
          />
        </div>
        <div className="mb-10">
          <ProjectInfo
            color={"#ee1d52"}
            image={"image 10"}
            title={"Products"}
            description={
              "Platform to promote, support and recognize all those who use an image as a vehicle to express their creativity, feelings, memories; all that a creative, professional or amateur want to transmit to society."
            }
          />
        </div>
        <div className="mb-10">
          <ProjectInfo
            color={"#00d3c8"}
            image={"image 11"}
            title={"Brands"}
            description={
              "Platform to promote, support and recognize all those who use an image as a vehicle to express their creativity, feelings, memories; all that a creative, professional or amateur want to transmit to society."
            }
          />
        </div>
      </div>
    </main>
  );
}
