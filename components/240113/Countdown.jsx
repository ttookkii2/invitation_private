"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "@/public/assets/images/d-day-bg.jpeg";
import FadeInComponent from "./FadeInComponent";
import heartIcon from "@/public/assets/icons/heart.svg";

export default function Countdown() {
  const targetDate = new Date("2024-01-13T12:30:00"); // your wedding date and time

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className="flex flex-col justify-center bg-lightGrey relative text-black pb-20 w-screen items-center">
      <FadeInComponent delay={0.4}>
        <div className="mt-3 text-xl grid grid-flow-col text-center w-fit">
          <div className="flex w-10 flex-col">
            <span className="uppercase leading-loose text-black/40 text-[10px]">
              days
            </span>
            {("0" + timeLeft["days"]).slice(-2)}
          </div>
          <span className="self-end font-normal">:</span>
          <div className="flex w-10 flex-col">
            <span className="uppercase leading-loose text-black/40 text-[10px]">
              hour
            </span>
            {("0" + timeLeft["hours"]).slice(-2)}
          </div>
          <span className="self-end font-normal">:</span>
          <div className="flex w-10 flex-col">
            <span className="uppercase leading-loose text-black/40 text-[10px]">
              min
            </span>
            {("0" + timeLeft["minutes"]).slice(-2)}
          </div>
          <span className="self-end align-middle font-normal">:</span>
          <div className="flex w-10 flex-col">
            <span className="uppercase leading-loose text-black/40 text-[10px]">
              sec
            </span>
            {("0" + timeLeft["seconds"]).slice(-2)}
          </div>
        </div>
      </FadeInComponent>
      <FadeInComponent>
        <h2 className="text-base gap-1 flex mt-5">
          보근 <Image width={10} src={heartIcon} alt="heart" /> 민지의 결혼식이{" "}
          <span className="text-carrot">{timeLeft["days"]}일</span> 남았습니다.
        </h2>
      </FadeInComponent>
    </div>
  );
}
