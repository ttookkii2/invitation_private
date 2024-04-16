import React from "react";
import FadeInComponent from "./FadeInComponent";

export default function Calendar() {
  return (
    <div className="padded-horizontal flex bg-white flex-col items-center w-full">
      <div className="uppercase tracking-[0.25em] text-sm mt-20 text-primary opacity-70">
        WEDDING DAY
      </div>
      <h1 className="text-xl mt-2 mb-3">2023.09.16 토요일 오후 6:30</h1>
      <h1 className="text-xl mb-3">라마다 서울 신도림 호텔</h1>
      <h1 className="text-xl mb-3">2층 그랜드볼룸</h1>
      <div className="grid py-5 my-10 border-t-[1px] border-b-[1px] border-opacity-20 border-primary text-center gap-4 font-light text-xs grid-cols-7">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
          <div
            style={{
              color: i === 0 ? "#ea5a43" : "#000000",
            }}
            className="text-sm"
            key={day}
          >
            {day}
          </div>
        ))}
        {[...Array(5)].map((i) => {
          return (
            <div
              key={`empty-${i}`}
              className="w-7 flex justify-center items-center h-7"
            ></div>
          );
        })}
        {[...Array(31)].map((_, i) => {
          if ((i - 2) % 7 === 0) {
            return (
              <div
                key={i}
                className="w-7 flex justify-center items-center h-7 text-red"
              >
                {i + 1}
              </div>
            );
          } else if (i === 15) {
            return (
              <FadeInComponent direction="pulse" delay={0.4} key={i}>
                <div className="w-7 flex justify-center items-center h-7 rounded-full bg-carrot text-beige">
                  {i + 1}
                </div>
              </FadeInComponent>
            );
          } else {
            return (
              <div className="w-7 flex justify-center items-center h-7" key={i}>
                {i + 1}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
