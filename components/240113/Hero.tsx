"use client";
import React, { useEffect } from "react";
import { HERO_CONTENT } from "@/constants/20230916/content";
import { useAppStore } from "@/stores/app";
import Image from "next/image";
import useConfetti from "@/hooks/useConfetti";

export default function Hero() {
  const { title, date, place } = HERO_CONTENT;
  const modal = useAppStore((state) => state.modal);

  useConfetti();

  return (
    <div className="flex relative bg-white h-screen text-black w-full flex-col justify-start items-center">
      <div className="absolute w-[calc(100%-50px)] bottom-0 h-[calc(100vh-20px)] border-[1.5px] border-[#e0e0e0] z-[1]" />
      <Image
        priority={true}
        className="h-[70%] text-black w-[1000px] object-cover"
        src="/assets/photos/240113/main.jpg"
        alt=""
        width={700}
        height={680}
      />
      <div className="h-1/4 w-full text-weakText flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl justify-center items-center gap-9 flex">
          최보근
          <div className="flex flex-col w-[35px] leading-none gap-3">
            <span className="">01</span>
            <hr className="w-full" />
            <span className="">13</span>
          </div>
          홍민지
        </h1>
        <div
          className={`transition-opacity duration-700 text-xs mt-5 my-2 delay-[0.5s] text-weakText tracking-[0.24em] ${
            modal ? "opacity-0" : "opacity-100"
          }`}
        >
          {date}
        </div>
        <div
          className={`transition-opacity duration-700 text-base text-weakText delay-[1s] ${
            modal ? "opacity-0" : "opacity-100 "
          }`}
        >
          {place}
        </div>
      </div>
    </div>
  );
}
