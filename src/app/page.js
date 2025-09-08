"use client"
import FirstSection from "@/components/firstSection/page";
import AboutExperience from "@/components/aboutExperience/AboutExperience";
import "./globals.scss";
import Factory from "@/components/factory/page"
import Timeline from "@/components/timeline/page";
import Timeline1 from "@/components/timeline/page2";
import DifferenceSection from "@/components/differenceSection/differenceSection";
import PrecisionSection from "@/components/precisionSection/precisionSection";
import StickySection from "@/components/stickySection/page"
import BrochureForm from "@/components/brochure/brochureForm";
import Form1 from "@/components/form1/Form";
import VideoPlayer from "@/components/videoPlayer/videoplayer";


export default function Home() {
  return (
    <>
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
