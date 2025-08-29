"use client"
import FirstSection from "@/components/firstSection/page";
import AboutExperience from "@/components/aboutExperience/AboutExperience";
import "./globals.scss";
import Timeline from "@/components/real_timeline/page"
import DifferenceSection from "@/components/differenceSection/differenceSection";
import PrecisionSection from "@/components/precisionSection/precisionSection";
import BrochureForm from "@/components/brochure/brochureForm";
import Form1 from "@/components/form1/Form";


export default function Home() {
  return (
    <>
      <main className="main">
        <FirstSection />
        <AboutExperience />
        <DifferenceSection />
        {/* <Timeline /> */}
        <PrecisionSection />
        <BrochureForm />
        <Form1 />
      </main>
    </>
  );
}
