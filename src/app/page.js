"use client"
import FirstSection from "@/components/firstSection/page";
import AboutExperience from "@/components/aboutExperience/AboutExperience";
import "./globals.scss";


export default function Home() {
  return (
    <>
      <main className="main">
        <FirstSection />
        <AboutExperience />
      </main>
    </>
  );
}
