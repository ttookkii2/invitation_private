import { Gowun_Batang } from "next/font/google";
import Hero from "@/components/20230916/Hero";
import Invitation from "@/components/20230916/Invitation";
import Calendar from "@/components/20230916/Calendar";
import BrideGroom from "@/components/20230916/BrideGroom";
import PhotoGallery from "@/components/20230916/PhotoGallery";
import Countdown from "@/components/20230916/Countdown";
import Information from "@/components/20230916/Information";
import SendCash from "@/components/20230916/SendCash";
import Location from "@/components/20230916/Location";
import Footer from "@/components/20230916/Footer";
import Menu from "@/components/20230916/Menu";
import { useAppStore } from "@/stores/app";
import Contact from "@/components/20230916/Contact";
import { useScrollBlock } from "@/hooks/useScrollBlock";
import { useEffect } from "react";

const gowunKR = Gowun_Batang({ weight: ["400", "700"], subsets: ["latin"] });

export default function Home() {
  const modal = useAppStore((state) => state.modal);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (modal) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [modal, blockScroll, allowScroll]);

  return (
    <main
      onScroll={(e) => {
        if (modal) {
          e.preventDefault();
        } else {
          return;
        }
      }}
      className={`flex w-screen justify-center text-black bg-white padded-horizontal scrollbar-hide min-h-screen flex-col items-center ${gowunKR.className}
      `}
    >
      <div className="max-w-lg flex flex-col items-center overflow-hidden">
        <Hero />
        <Menu />
        <Invitation />
        <Contact />
        <Calendar />
        <BrideGroom />
        <PhotoGallery />
        <Countdown />
        <Information />

        <SendCash />
        <Location latitude={126} longitude={37} />
        <Footer />
      </div>
    </main>
  );
}
