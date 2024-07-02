"use client";

import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import OtherTestLanding from "@/components/OtherTestLanding";
import Toast from "../components/ToastContainer";

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
    <main className="bg-slate-100">
      <OtherTestLanding />
      <Toast />
    </main>
  );
}
