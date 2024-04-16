"use client";
import React from "react";
import Image from "next/image";
import { KAKAO_LINK } from "@/constants/240113/content";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FadeInComponent from "./FadeInComponent";

export default function SendCash() {
  const [groomCollapsed, setGroomCollapsed] = React.useState(true);
  const [brideCollapsed, setBrideCollapsed] = React.useState(true);

  const copyToClipboard = (account: string) => {
    navigator.clipboard.writeText(account).then(() =>
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
  };

  return (
    <div
      id="send-cash"
      className="w-full py-20 bg-white flex text-center flex-col justify-center h-full padded-horizontal"
    >
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
      <FadeInComponent>
        <h1 className="text-xl mt-2 font-semibold mb-3">마음 전하실 곳</h1>
      </FadeInComponent>
      <FadeInComponent>
        <div className="mt-7 mb-[50px] whitespace-pre font-normal text-base">
          {`저희 두 사람의 소중한 시작을\n축하해주시는 분들께 감사드립니다.\n따뜻한 진심을 감사히 오래도록 간직하고\n행복하게 잘 살겠습니다.`}
        </div>
      </FadeInComponent>
      <div className="shadow-xl">
        <div
          onClick={() => setGroomCollapsed(!groomCollapsed)}
          className="flex rounded-t-sm justify-between bg-opacity-40 bg-blue px-5 py-3 items-center"
        >
          <div>신랑측</div>
          <div
            className={`border-t-2  border-r-2 w-3 h-3 transition-all duration-700 ${
              !groomCollapsed
                ? "-rotate-45 translate-y-1/4"
                : "rotate-[135deg] -translate-y-1/4"
            }`}
          />
        </div>
        <h3
          className={`grid w-full px-4 h-fit transition-[grid-template-rows] duration-500 ${
            groomCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
          } break-words text-lg`}
        >
          {/* {groomCollapsed ? longIntro?.substring(0, 200) + '...' : longIntro} */}
          <div className="overflow-hidden">
            <div className="flex flex-col my-5">
              <div className="flex w-full justify-between">
                <div className="font-bold text-lg">
                  <span className="font-normal text-sm mr-1">혼주</span>최용한
                </div>
                <div className="text-sm">SC 6072-0437-547</div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  onClick={() => {
                    copyToClipboard("6072-0437-547");
                  }}
                  className="px-4 py-2 rounded-2xl text-xs bg-white w-[130px] shadow-lg ml-2"
                >
                  계좌번호 복사
                </button>
              </div>
            </div>
            <div className="flex flex-col my-5">
              <div className="flex w-full justify-between">
                <div className="font-bold text-lg">
                  <span className="font-normal text-sm mr-1">혼주</span>김애선
                </div>
                <div className="text-sm">국민 2466-0204-337698</div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  onClick={() => {
                    copyToClipboard("2466-0204-337698");
                  }}
                  className="px-4 py-2 rounded-2xl text-xs bg-white w-[130px] shadow-lg ml-2"
                >
                  계좌번호 복사
                </button>
              </div>
            </div>
            <div className="flex flex-col my-6">
              <div className="flex w-full justify-between">
                <div className="font-bold text-lg">
                  <span className="font-normal text-sm mr-1">신랑</span>최보근
                </div>
                <div className="text-sm">기업 321-052-52801-015</div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  onClick={() => {
                    window.open(KAKAO_LINK.groom, "_blank");
                  }}
                  className="px-4 py-2 rounded-2xl shadow-lg text-xs w-[130px] bg-[#ffeb02]"
                >
                  카카오페이<span>송금</span>
                </button>
                <button
                  onClick={() => {
                    copyToClipboard("321-052-52801-015");
                  }}
                  className="px-4 py-2 rounded-2xl text-xs bg-white w-[130px] shadow-lg ml-2"
                >
                  계좌번호 복사
                </button>
              </div>
            </div>
          </div>
        </h3>
      </div>
      <div className="mt-5 shadow-xl">
        <div
          onClick={() => setBrideCollapsed(!brideCollapsed)}
          className="flex rounded-sm justify-between bg-pink bg-opacity-40 px-5 py-3 items-center"
        >
          <div>신부측</div>
          <div
            className={`border-t-2  border-r-2 w-3 h-3 transition-all duration-700 ${
              !brideCollapsed
                ? "-rotate-45 translate-y-1/4"
                : "rotate-[135deg] -translate-y-1/4"
            }`}
          />
        </div>
        <h3
          className={`grid w-full px-4 h-fit transition-[grid-template-rows] duration-500 ${
            brideCollapsed ? "grid-rows-[0fr]" : "grid-rows-[1fr]"
          } break-words text-lg`}
        >
          {/* {groomCollapsed ? longIntro?.substring(0, 200) + '...' : longIntro} */}
          <div className="overflow-hidden">
            <div className="flex flex-col my-5">
              <div className="flex w-full justify-between">
                <div className="font-bold text-lg">
                  <span className="font-normal text-sm mr-1">혼주</span>홍준표
                </div>
                <div className="text-sm">국민 4787-2592-1211-62</div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  onClick={() => {
                    copyToClipboard("4787-2592-1211-62");
                  }}
                  className="px-4 py-2 rounded-2xl text-xs bg-white w-[130px] shadow-lg ml-2"
                >
                  계좌번호 복사
                </button>
              </div>
            </div>
            <div className="flex flex-col my-5">
              <div className="flex w-full justify-between">
                <div className="font-bold text-lg">
                  <span className="font-normal text-sm mr-1">혼주</span>최종혜
                </div>
                <div className="text-sm">우리 1002-752-261853</div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  onClick={() => {
                    copyToClipboard("1002-752-261853");
                  }}
                  className="px-4 py-2 rounded-2xl text-xs bg-white w-[130px] shadow-lg ml-2"
                >
                  계좌번호 복사
                </button>
              </div>
            </div>
            <div className="flex flex-col my-6">
              <div className="flex w-full items-center justify-between">
                <div className="font-bold text-lg">
                  <span className="font-normal text-sm mr-1">신부</span>홍민지
                </div>
                <div className="text-sm">신한 110-340-036302</div>
              </div>
              <div className="flex justify-center mt-5">
                <button
                  onClick={() => {
                    window.open(KAKAO_LINK.bride, "_blank");
                  }}
                  className="px-4 py-2 rounded-2xl shadow-lg text-xs w-[130px] bg-[#ffeb02]"
                >
                  카카오페이<span>송금</span>
                </button>
                <button
                  onClick={() => {
                    copyToClipboard("110-340-036302");
                  }}
                  className="px-4 py-2 rounded-2xl text-xs bg-white w-[130px] shadow-lg ml-2"
                >
                  계좌번호 복사
                </button>
              </div>
            </div>
          </div>
        </h3>
      </div>
    </div>
  );
}
