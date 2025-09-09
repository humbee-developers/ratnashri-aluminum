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
import Form1 from "@/components/form1/Form";
import Preloader from "@/components/preloader/index";
import VideoPlayer from "@/components/videoPlayer/videoplayer";


export default function Home() {
  const [width, setWidth] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [isCounter, setCounter] = useState(0);
    useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize(); // Initialize width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Timer to hide the preloader after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set to false after 5 seconds
    }, 8000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // Clear the timer on cleanup
  }, []);

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
      <main className="main">
        <FirstSection />
        <VideoPlayer />
        <Factory />
        <AboutExperience />
        <DifferenceSection />
        <Timeline />
        <Timeline1 />
        
        <PrecisionSection />
        <StickySection />
        <BrochureForm />
        <Form1 />
      </main>
    </>
  );
}
