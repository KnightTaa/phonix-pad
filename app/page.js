"use client";

import { useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import OtherTestLanding from "@/components/OtherTestLanding";
import Toast from "../components/ToastContainer";
import LandingPage from "@/components/LandingPage";

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

  // Prevent ctrl scroll
  useEffect(() => {
    const preventZoom = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };
  
    window.addEventListener('wheel', preventZoom, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', preventZoom);
    };
  }, []);

  return (
    <main className="bg-slate-100">
      {/* <OtherTestLanding /> */}
      <LandingPage />
      <Toast />
    </main>
  );
}
