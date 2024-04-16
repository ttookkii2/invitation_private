import React from "react";
import Image from "next/image";
import groom from "@/public/assets/photos/02-14.jpg";
import bride from "@/public/assets/photos/02-15.jpg";
import Title from "@/components/20230916/Title";
import FadeInComponent from "./FadeInComponent";

export default function BrideGroom() {
  return (
    <div
      id="bride-groom"
      className="flex flex-col padded-horizontal bg-white overflow-hidden w-full items-center"
    >
      <Title subTitle="Bride & Groom" mainTitle="신랑 & 신부" />
      <div className="flex mb-10 flex-col items-center">
        <FadeInComponent className="w-full" direction="left">
          <Image
            src={groom}
            alt="groom"
            className="w-full object-cover object-top bg-origin aspect-square"
            width={800}
            height={800}
          />
        </FadeInComponent>
        <FadeInComponent className="w-full" direction="left">
          <div className="mt-5 text-sm">
            신랑{" "}
            <span className="text-xl tracking-widest font-semibold">
              이정준
            </span>
          </div>
        </FadeInComponent>
        <FadeInComponent className="w-full" direction="left">
          <div className="mt-2 leading-[1.8] text-base">
            {`제가 매 순간 더 나은 사람이 될 수 있도록 인내와 애정으로 이끌고 지지해준 사람입니다. 이 여자다 하는 마음으로 꼭 붙잡았습니다. 서로 부족한 점을 채워가며 다정하고 현명하게 잘 살겠습니다.`}
          </div>
        </FadeInComponent>
      </div>
      <div className="flex flex-col items-center">
        <FadeInComponent className="w-full" direction="right">
          <Image
            src={bride}
            alt="bride"
            className="w-full gap- 3 object-cover object-top aspect-square"
            width={800}
            height={800}
          />
        </FadeInComponent>
        <FadeInComponent className="w-full" direction="right">
          <div className="mt-5 text-sm">
            신부{" "}
            <span className="text-xl tracking-widest font-semibold">
              박효진
            </span>
          </div>
        </FadeInComponent>
        <FadeInComponent className="w-full" direction="right">
          <div className="mt-2 leading-[1.8] text-base">
            {`주변 친구들이 입을 모아 "너는 꼭 저 사람이랑 결혼해야해"라고 말하는
          사람을 만났습니다. 7년간 한결같이 보살펴주고 웃게 해주는 이 사람과
          70년 더 행복하게 살아보겠습니다.`}
          </div>
        </FadeInComponent>
      </div>
    </div>
  );
}
