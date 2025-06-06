"use client";

import { useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import OtherTestLanding from "@/components/OtherTestLanding";
import Toast from "../components/ToastContainer";
import LandingPage from "@/components/LandingPage";
import { useRouter } from 'next/navigation';

export default function Home() {
  // State to track whether the loader animation has finished
  const [loderFinish, setLoderFinish] = useState(false);
  // State to track the timeline object for the animation
  const [timeline, setTimeline] = useState(null);

  // Get the router object
  const router = useRouter();

  // Effect to check if the page has been reloaded
  useEffect(() => {
    // Check if the page has been reloaded
    if (typeof window !== 'undefined') {
      console.log(performance.getEntriesByType('navigation')[0].type, 'reload');
      if (performance.getEntriesByType('navigation')[0].type === 'reload') {
        // Redirect to image page on reload
        router.refresh('/apply');
      }
    }
  }, []);

  // Effect to create the animation timeline
  useLayoutEffect(() => {
    // Create a context for the animation
    const context = gsap.context(() => {
      // Create a timeline for the animation
      const t1 = gsap.timeline({
        // Set the onComplete function to set the loader finish state to true
        onComplete: () => {
          setLoderFinish(true);
        },
      });

      // Set the timeline state to the created timeline
      setTimeline(t1);
    });

    // Return a function to clean up the animation context
    return () => context.revert();
  }, []);

  // Effect to prevent the page from zooming when the user scrolls with the mouse wheel
  useEffect(() => {
    // Define a function to prevent the page from zooming
    const preventZoom = (event) => {
      // Check if the user is holding down the ctrl key
      if (event.ctrlKey) {
        // If they are, prevent the page from zooming
        event.preventDefault();
      }
    };

    // Add an event listener to the window to listen for the mouse wheel event
    window.addEventListener('wheel', preventZoom, { passive: false });

    // Return a function to clean up the event listener
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
