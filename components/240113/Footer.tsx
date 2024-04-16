"use client";
import React, { useEffect } from "react";
import FadeInComponent from "./FadeInComponent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function Hero() {
  function copyToClipboard() {
    const URL = "https://jinandjune.com/240113";

    navigator.clipboard.writeText(URL).then(() =>
      toast.success("복사가 완료되었습니다", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    );
  }

  return (
    <div className="flex h-fit py-[120px] text-black drop-shadow-3xl w-screen bg-beige relative flex-col justify-start items-center">
      <ToastContainer
        className="h-2"
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="h-1/4 w-full flex flex-col justify-center items-center text-center">
        <FadeInComponent>
          <div className="text-xl tracking-widest">
            언제나 곁을 따뜻하게 지켜주신
          </div>
        </FadeInComponent>
        <FadeInComponent>
          <div className="text-xl tracking-widest">
            모든 분들께 감사드립니다.
          </div>
        </FadeInComponent>

        <FadeInComponent delay={1}>
          <div
            className={`transition-opacity duration-700 text-sm mt-10 delay-[0.5s] tracking-wider`}
          >
            최보근 & 홍민지
          </div>
        </FadeInComponent>
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={async () => {
            if (!window.Kakao) return;
            await window.Kakao.Share.sendDefault({
              objectType: "feed",
              content: {
                title: "최보근 & 홍민지 결혼합니다",
                description: "2024년 1월 13일",
                imageUrl: "https://jinandjune.com/og.jpg",
                link: {
                  mobileWebUrl: "https://jinandjune.com/240113",
                  webUrl: "https://jinandjune.com/240113",
                },
              },
            });
          }}
          className="px-4 py-2 rounded-2xl shadow-lg text-xs mt-6 w-[130px] bg-[#ffeb02]"
        >
          카톡에 공유하기
        </button>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 rounded-2xl mt-6 text-xs bg-white w-[130px] shadow-lg ml-2"
        >
          링크 복사하기
        </button>
      </div>
    </div>
  );
}
