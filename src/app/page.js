"use client";
import { useState, useEffect } from "react";
import FirstSection from "@/components/firstSection/page";
import AboutExperience from "@/components/aboutExperience/AboutExperience";
import "./globals.scss";
import { AnimatePresence } from "framer-motion";
import Factory from "@/components/factory/page";
import Timeline from "@/components/timeline/page";
import Timeline1 from "@/components/timeline/page2";
import DifferenceSection from "@/components/differenceSection/differenceSection";
import PrecisionSection from "@/components/precisionSectionNew/precisionSection";
import StickySection from "@/components/stickySection/page";
import BrochureForm from "@/components/brochure/brochureForm";
import Form1 from "@/components/form1/Form";
import Preloader from "@/components/preloader/index";
import VideoPlayer from "@/components/videoPlayer/videoplayer";

export default function Home() {
  const [width, setWidth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCounter, setCounter] = useState(0);

  // Track window width
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

  // Preloader: wait for all assets (images, videos) to load
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false); // Hide preloader only when all content is loaded
    };

    // If the page is already cached and loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader counter={isCounter} />}
      </AnimatePresence>

      {!isLoading && (
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
      )}
    </>
  );
}
