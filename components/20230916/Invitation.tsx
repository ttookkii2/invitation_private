import React from "react";
import { INVITATION_CONTENT } from "@/constants/240113/content";
import Image from "next/image";
import phone from "@/public/assets/icons/phone.svg";
import { useAppStore } from "@/stores/app";
import FadeInComponent from "./FadeInComponent";

export default function Invitation() {
  const setContact = useAppStore((state) => state.setContact);
  const {
    title,
    paragraph1,
    paragraph2,
    paragraph3,
    groom,
    bride,
    groomFather,
    groomMother,
    brideFather,
    brideMother,
  } = INVITATION_CONTENT;
  return (
    <div className="w-full bg-beige flex flex-col text-center pb-20 justify-center items-center">
      <FadeInComponent>
        <div className="uppercase tracking-[0.25em] text-sm mt-20 text-primary opacity-70">
          Invitation
        </div>
      </FadeInComponent>
      <FadeInComponent>
        <h1 className="text-xl mt-2 font-semibold mb-3">{title}</h1>
      </FadeInComponent>
      <FadeInComponent>
        <div className="whitespace-pre leading-loose mt-7">{paragraph1}</div>
      </FadeInComponent>
      <FadeInComponent>
        <div className="whitespace-pre leading-loose mt-7">{paragraph2}</div>
      </FadeInComponent>
      <div className="mt-10 tracking-widest">
        <FadeInComponent>
          <div className="font-semibold flex justify-center text-lg items-center">
            <div className="w-[117px]">
              {groomFather.name} {groomMother.name}
            </div>
            <span className="font-normal text-base mx-2">의 장남</span>
            {groom.name}
          </div>
        </FadeInComponent>
        <FadeInComponent>
          <div className="font-semibold flex justify-center items-center text-lg">
            <div className="w-[117px]">
              {brideFather.name} {brideMother.name}
            </div>
            <span className="font-normal text-base mx-2">의 장녀</span>
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
