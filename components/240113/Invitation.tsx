"use client";
import React from "react";
import { INVITATION_CONTENT } from "@/constants/20230916/content";
import Image from "next/image";
import phone from "@/public/assets/icons/phone.svg";
import { useAppStore } from "@/stores/app";
import FadeInComponent from "./FadeInComponent";
import subImage from "@/public/assets/photos/240113/sub.jpg";

export default function Invitation() {
  const setContact = useAppStore((state) => state.setContact);
  const {
    title,
    groom,
    bride,
    groomFather,
    groomMother,
    brideFather,
    brideMother,
  } = INVITATION_CONTENT;
  return (
    <div className="w-full bg-white flex flex-col text-center pb-20 justify-center items-center">
      <FadeInComponent>
        <div className="uppercase tracking-[0.25em] text-sm mt-20 text-primary opacity-70">
          Invitation
        </div>
      </FadeInComponent>
      <FadeInComponent>
        <h1 className="text-xl mt-2 font-semibold mb-3">{title}</h1>
      </FadeInComponent>
      <FadeInComponent>
        <div className="flex flex-col font-normal leading-loose mt-7 mb-3">
          <div>
            서로에게 반짝이는{" "}
            <span className="text-xl font-bold relative">
              <div className="absolute w-8 rounded-full animate-fadeIn duration-500 blur-[8px] h-8 z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue bg-opacity-50" />
              보
            </span>
            석이 될 그대와
          </div>
          <div>
            우리의 두
            <span className="text-xl font-bold relative">
              <div className="absolute w-8 rounded-full animate-fadeIn duration-500 blur-[8px] h-8 z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-50 bg-blue" />
              근
            </span>
            두근한 여정을
          </div>
          <div>시작하고자 합니다</div>
        </div>
      </FadeInComponent>
      <FadeInComponent>
        <div className="flex flex-col leading-loose my-3">
          <div>
            다정히 내
            <span className="text-xl font-bold relative mr-1">
              <div className="absolute w-8 rounded-full animate-fadeIn duration-500 blur-[8px] h-8 z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-50 bg-pink" />
              민
            </span>
            서로의 손을 잡고
          </div>
          <div>
            평생 사랑하며
            <span className="text-xl ml-1 font-bold relative">
              <div className="absolute w-8 rounded-full animate-fadeIn duration-500 blur-[8px] h-8 z-[-1] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-50 bg-pink" />
              지
            </span>
            혜롭게 살아가겠습니다
          </div>
        </div>
      </FadeInComponent>
      <FadeInComponent>
        <div className="flex flex-col leading-loose mt-7">
          <div>두 사람의 첫 걸음에 부디 함께 하시어</div>
          <div>축복해주시면 감사하겠습니다.</div>
        </div>
      </FadeInComponent>
      <Image
        src={subImage}
        className="mt-20 aspect-auto w-full"
        alt="sub"
        width={1000}
      />
      <div className="mt-10 tracking-widest">
        <FadeInComponent>
          <div className="font-semibold flex justify-center text-lg items-center">
            <div className="">
              {groomFather.name} · {groomMother.name}
            </div>
            <span className="font-normal text-sm ml-2">의</span>
            <span className="font-normal text-sm w-10 mr-1"> 아들</span>
            {groom.name}
          </div>
        </FadeInComponent>
        <FadeInComponent>
          <div className="font-semibold flex justify-center items-center text-lg">
            <div className="">
              {brideFather.name} · {brideMother.name}
            </div>
            <span className="font-normal text-sm ml-2">의</span>
            <span className="font-normal text-sm w-10 mr-1"> 딸</span>
            {bride.name}
          </div>
        </FadeInComponent>
        <FadeInComponent>
          <button
            onClick={() => setContact(true)}
            className="mt-5 px-[60px] items-center gap-2 flex py-2.5 border-[1px] border-border-grey rounded-lg"
          >
            <Image src={phone} alt="phone" width={13} height={13} />
            전화로 축하 인사하기
          </button>
        </FadeInComponent>
      </div>
    </div>
  );
}
