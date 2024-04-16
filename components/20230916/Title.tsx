import React from "react";
import FadeInComponent from "./FadeInComponent";

export default function Title({
  subTitle,
  mainTitle,
}: {
  subTitle: string;
  mainTitle: string;
}) {
  return (
    <div className="padded-horizontal mb-10 mt-10 flex flex-col w-full items-center">
      <FadeInComponent>
        <div className="text-primary opacity-70 tracking-[0.2em] text-sm uppercase">
          {subTitle}
        </div>
      </FadeInComponent>
      <FadeInComponent delay={0.4}>
        <div className="text-xl mt-2 font-semibold">{mainTitle}</div>
      </FadeInComponent>
    </div>
  );
}
