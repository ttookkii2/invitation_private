import React from "react";
import FadeInComponent from "./FadeInComponent";

export default function Calendar() {
  return (
    <div className="padded-horizontal flex bg-lightGrey flex-col pt-10 items-center w-full">
      <h1 className="text-xl mt-2 mb-3">2024.01.13</h1>
      <h1 className="text-xl mb-3">토요일 오후 12시 30분</h1>
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
        {[...Array(1)].map((i) => {
          return (
            <div
              key={`empty-${i}`}
              className="w-7 flex justify-center items-center h-7"
            ></div>
          );
        })}
        {[...Array(31)].map((_, i) => {
          if ((i - 6) % 7 === 0) {
            return (
              <div
                key={i}
                className="w-7 flex justify-center items-center h-7 text-red"
              >
                {i + 1}
              </div>
            );
          } else if (i === 12) {
            return (
              <FadeInComponent direction="pulse" delay={0.4} key={i}>
                <div className="w-7 flex justify-center items-center h-7 rounded-full bg-[#858585] text-beige">
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
