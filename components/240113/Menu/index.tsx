import React from "react";
import Burger from "./Burger";
import { useAppStore } from "@/stores/app";

export default function Menu() {
  const burger = useAppStore((state) => state.burger);
  const setBurger = useAppStore((state) => state.setBurger);

  return (
    <div className="text-black bg-white shadow-md shadow-border-grey sticky z-[1000] top-0 h-fit w-full flex justify-between">
      <div className="flex w-full h-12 px-5 items-center border-primary border-opacity-50 justify-between bg-white">
        <div className="text-primary flex text-base font-normal">
          정준 & 효진
        </div>
        <Burger />
      </div>
      <div
        className={`absolute top-12 bg-beige left-0 z-10 w-full flex-col bg-bg transition-opacity duration-500 ${
          burger ? "opacity-1" : "pointer-events-none opacity-0"
        }`}
      >
        <MenuItem title="신랑 & 신부" />
        <MenuItem title="사진첩" />
        <MenuItem title="예식 안내" />
        <MenuItem title="참석 여부" />
        <MenuItem title="마음 전하실 곳" />
        <MenuItem title="오시는 길" />
      </div>
    </div>
  );

  function MenuItem({ title }: { title: string }) {
    return (
      <button
        onClick={() => {
          const id = titleToId(title);
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

          setBurger(false);
        }}
        className="flex items-center border-b-[1px] border-opacity-20 border-primary h-[54px] w-full justify-start bg-white bg-opacity-50 border-input-border px-4 text-start text-sm text-primary"
      >
        {title}
      </button>
    );
  }
}

function titleToId(title: string) {
  if (title === "신랑 & 신부") return "bride-groom";
  else if (title === "사진첩") return "gallery";
  else if (title === "예식 안내") return "information";
  else if (title === "참석 여부") return "rsvp";
  else if (title === "마음 전하실 곳") return "send-cash";
  else if (title === "오시는 길") return "location";
  else throw new Error("Invalid title");
}
