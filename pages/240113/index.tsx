"use client";
import { Gowun_Batang } from "next/font/google";
import Hero from "@/components/240113/Hero";
import Contact from "@/components/240113/Contact";
import Invitation from "@/components/240113/Invitation";
import Calendar from "@/components/240113/Calendar";
import Countdown from "@/components/240113/Countdown";
import PhotoGallery from "@/components/240113/PhotoGallery";
import Footer from "@/components/240113/Footer";
import SendCash from "@/components/240113/SendCash";
import Location from "@/components/240113/Location";
import RSVPSolid from "@/components/240113/RsvpSolid";

const gowunKR = Gowun_Batang({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex w-screen justify-center text-black bg-black padded-horizontal scrollbar-hide min-h-screen flex-col items-center ${gowunKR.className}
      `}
    >
      <div className="max-w-md flex flex-col items-center overflow-hidden">
        <Hero />
        <Invitation />
        <Contact />
        <Calendar />
        <Countdown />
        <PhotoGallery />
        <RSVPSolid />
        <SendCash />
        <Location latitude={126} longitude={37} />
        <Footer />
      </div>
    </div>
  );
}
