import React, { useEffect, useState } from "react";
import Image from "next/image";
import bg from "@/public/assets/images/d-day-bg.jpeg";
import FadeInComponent from "./FadeInComponent";

export default function Countdown() {
  const targetDate = new Date("2023-09-16T18:30:00"); // your wedding date and time

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
    <div className="my-20 py-20 flex flex-col h-[400px] justify-center bg-beige relative text-white w-screen items-center">
      <div className="bg-[url('/assets/images/d-day-bg.jpeg')] absolute z-[0] brightness-50 bg-cover bg-no-repeat bg-center w-full h-full" />
      <div className="absolute w-full h-full z-[1] flex my-20 flex-col justify-center items-center">
        <FadeInComponent>
          <div className="uppercase opacity-60">D-Day count</div>
        </FadeInComponent>
        <FadeInComponent>
          <h1 className="text-lg mt-2 tracking-[0.3em]">
            이정준 & 박효진의&nbsp;결혼식까지
          </h1>
        </FadeInComponent>
        <FadeInComponent>
          <h2 className="text-7xl mt-10 tracking-[0.2em]">
            D-{timeLeft["days"]}
          </h2>
        </FadeInComponent>
        <FadeInComponent delay={0.4}>
          <h3 className="mt-3 text-3xl tracking-[0.2em]">
            {("0" + timeLeft["hours"]).slice(-2)}:
            {("0" + timeLeft["minutes"]).slice(-2)}:
            {("0" + timeLeft["seconds"]).slice(-2)}
          </h3>
        </FadeInComponent>
      </div>
    </div>
  );
}
