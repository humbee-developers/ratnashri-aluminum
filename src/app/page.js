"use client"
import { useState, useEffect } from "react";
import FirstSection from "@/components/firstSection/page";
import AboutExperience from "@/components/aboutExperience/AboutExperience";
import "./globals.scss";
import { AnimatePresence } from "framer-motion";
import Factory from "@/components/factory/page"
import Timeline from "@/components/timeline/page";
import Timeline1 from "@/components/timeline/page2";
import DifferenceSection from "@/components/differenceSection/differenceSection";
import PrecisionSection from "@/components/precisionSectionNew/precisionSection";
import StickySection from "@/components/stickySection/page"
import BrochureForm from "@/components/brochure/brochureForm";
import Form1 from "@/components/form1New/FormNew";
import Preloader from "@/components/preloader/index";
import VideoPlayer from "@/components/videoPlayer/videoplayer";


export default function Home() {
  const [width, setWidth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCounter, setCounter] = useState(0);

  const [framesLoaded, setFramesLoaded] = useState({
    factory: false,
    precision: false,
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
     console.log("Frame Load Status:", framesLoaded); // ✅ Debug frame status
    if (framesLoaded.factory && framesLoaded.precision) {
      setIsLoading(false);
    }
  }, [framesLoaded]);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isLoading]);
  // Timer to hide the preloader after 5 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false); // Set to false after 5 seconds
  //   }, 8000); // 5000ms = 5 seconds

  //   return () => clearTimeout(timer); // Clear the timer on cleanup
  // }, []);



  return (
    <>
      <AnimatePresence
        mode="wait"
      >
        {isLoading &&
          <Preloader
            counter={isCounter}
          />
        }
      </AnimatePresence>
      {!isLoading && (
      <main className="main">
        <FirstSection />
        <VideoPlayer />
        {/* <Factory /> */}
        <Factory
          onFramesLoaded={() =>
            setFramesLoaded((prev) => ({ ...prev, factory: true }))
          }
        />

        <AboutExperience />
        <DifferenceSection />
        <Timeline />
        <Timeline1 />
        <PrecisionSection />
        <StickySection />
        <BrochureForm />
        <Form1 />
      </main>
      )}
    </>
  );
}
