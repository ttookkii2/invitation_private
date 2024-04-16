import React, { useState } from "react";
import Title from "./Title";
import Image, { StaticImageData } from "next/image";
import LocationImage from "@/public/assets/images/place.png";
import busImage from "@/public/assets/images/bus.png";
import mealImage from "@/public/assets/images/food.jpeg";
import ceremonyImage from "@/public/assets/images/wedding.jpeg";

const TAB_TEXT = {
  Place: "장소",
  Bus: "셔틀",
  Ceremony: "예식",
  Meal: "식사",
};

interface TabContent {
  image: StaticImageData;
  title: {
    subTitle: string;
    mainTitle: string;
  };
  content: string[];
}

const tabContents: TabContent[] = [
  {
    image: LocationImage,
    title: {
      subTitle: "venue",
      mainTitle: "장소 안내",
    },
    content: [
      "신도림 라마다 호텔 2층 그랜드볼룸 홀에서 저희 두 사람의 예식이 진행됩니다.",
      "분리예식으로 진행되니 예식도 뷔페도 편하게 즐겨주시면 감사하겠습니다.",
      "화환은 정중히 사양합니다. 감사한 마음만 받겠습니다.",
    ],
  },
  {
    image: busImage,
    title: {
      subTitle: "shuttle",
      mainTitle: "셔틀버스 안내",
    },
    content: [
      "신도림역에서 호텔까지 약 5~10분 간격으로 끊임없이 셔틀을 운행하고 있습니다.",
      "신도림역 1번출구쪽으로 나가는 게이트 앞에 붉은 배경의 안내판이 있습니다.",
      "광장 계단을 쭉 걸어올라오셔서 살짝 오른쪽 앞을 보시면 마지막 계단 너머에 노란 셔틀이 정차해 있습니다.",
    ],
  },
  {
    image: ceremonyImage,
    title: {
      subTitle: "ceremony",
      mainTitle: "예식 안내",
    },
    content: [
      "오셔서 기념이 될 사진을 찍을 수 있는 포토부스를 마련했습니다. 포토부스는 예식 1시간 전부터 오픈됩니다.",
      "인원수만큼 무료 인화가 가능하니 가족, 친구 및 친지분들과 함께 예쁜 사진을 남기세요.",
      "신부대기실은 식장이 있는 층에서 반 층 올라가는 계단 위에 있습니다.",
      "주차는 라마다 지하 주차장을 기준으로 1시간 반까지 무료입니다.",
    ],
  },
  {
    image: mealImage,
    title: {
      subTitle: "dining",
      mainTitle: "식사 안내",
    },
    content: [
      "손꼽히는 음식 맛으로 소문난 라마다에서 180여 가지의 정갈하고 고급스러운 뷔페식 식사를 준비하였습니다.",
      "예식과 별개의 층에 연회가 준비된 분리 예식으로 진행됩니다. 연회장은 예식 30분 전부터 이용 가능합니다.",
      "웨딩과 함께 저녁 연회를 즐기고 계시면 저희가 한 분 한 분 소중한 마음으로 인사 드리겠습니다.",
    ],
  },
];

export default function Information() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const onTabClick = (tabIndex: number) => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <div
      id="information"
      className="overflow-hidden bg-white h-[700px] padded-horizontal w-full"
    >
      <Title subTitle="information" mainTitle="예식 안내" />
      <div className="flex justify-between border-b-2 border-primary">
        {Object.values(TAB_TEXT).map((tab, index) => (
          <button
            key={index}
            className={`py-2 border-b-[2px] w-1/4 text-[13px] transition-all h-10 duration-200 ease-in-out ${
              activeTabIndex === index ? "border-primary" : "border-transparent"
            }`}
            onClick={() => onTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        key={activeTabIndex}
        className={`relative h-20 animate-fadeIn transition-opacity ease-in-out `}
      >
        <div className="absolute">
          <Image
            priority
            width={600}
            height={600}
            src={tabContents[activeTabIndex].image}
            className="w-full my-5 flex whitespace-pre-wrap aspect-video"
            alt=""
          />

          <div className="pl-3 mb-4 text-lg font-semibold">
            {tabContents[activeTabIndex].title.mainTitle}
            <span className="text-primary uppercase font-semibold opacity-40">
              {"   "} / {"   "}
              {tabContents[activeTabIndex].title.subTitle}
            </span>
          </div>
          <div className="flex flex-col justify-start">
            {tabContents[activeTabIndex].content.map((line, i) => {
              return (
                <div className="flex mt-2 text-sm" key={i}>
                  <span className="h-full">ㆍ</span>
                  <span>{line}</span>
                </div>
              );
            })}
            {activeTabIndex === 1 && (
              <div className="flex mt-2 text-sm">
                <span className="h-full">ㆍ</span>
                <span>
                  <a
                    href="https://www.youtube.com/watch?v=GhluqqKoj-c"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    영상 링크
                  </a>
                  를 참고해주세요.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
