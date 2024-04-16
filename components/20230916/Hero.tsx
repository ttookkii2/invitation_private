import React, { useEffect } from "react";
import { HERO_CONTENT } from "@/constants/240113/content";
import { useAppStore } from "@/stores/app";
import useConfetti from "@/hooks/useConfetti";

export default function Hero() {
  const { title, date, place } = HERO_CONTENT;
  const modal = useAppStore((state) => state.modal);

  useConfetti();

  return (
    <div className="flex h-screen text-black drop-shadow-3xl w-full bg-[url('/assets/photos/20230916/00-1.jpg')] bg-cover bg-no-repeat bg-center flex-col justify-start items-center">
      {/* <Flowers size={1} /> */}
      <div className="h-1/4 w-full flex flex-col justify-center items-center text-center">
        <div className="text-sm drop-shadow-3xl ">
          {`We're Getting Married`}
        </div>
        <h1 className="text-3xl tracking-widest">
          이정준<span className="text-2xl"> & </span>박효진
        </h1>
        <div
          className={`transition-opacity duration-700 text-sm my-2 delay-[0.5s] tracking-wider ${
            modal ? "opacity-0" : "opacity-100"
          }`}
        >
          {date}
        </div>
        <div
          className={`transition-opacity duration-700 text-xs delay-[1s] ${
            modal ? "opacity-0" : "opacity-100 "
          }`}
        >
          {place}
        </div>
        <div
          className={`transition-opacity duration-700 text-xs delay-[1.6s] ${
            modal ? "opacity-0" : "opacity-100 "
          }`}
        >
          SEOUL SINDORIM
        </div>
      </div>
    </div>
  );
}
