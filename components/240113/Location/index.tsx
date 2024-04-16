"use client";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import locationIcon from "@/public/assets/icons/location-1.svg";
import Image from "next/image";
import naver from "@/public/assets/icons/naver.png";
import tmap from "@/public/assets/icons/tmap.svg";
import kakao from "@/public/assets/icons/kakao.png";
import FadeInComponent from "../FadeInComponent";
import TouchableCompoent from "../TouchableComponent";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  latitude: number;
  longitude: number;
}
const ENCODED = encodeURI("서울대학교 교수회관");

export default function Location({ latitude, longitude }: MapProps) {
  const onClickNaver = () => {
    const lat = 37.4578541805703;
    const lng = 126.953866127509;
    const appScheme =
      "nmap://route/car?dlat=" +
      lat +
      "&dlng=" +
      lng +
      "&dname=" +
      ENCODED +
      "&appname=jinandjune";

    const iOSAppStoreUrl = "itms-apps://itunes.apple.com/app/id311867728"; // 네이버 지도 iOS 앱스토어 URL
    const googlePlayUrl =
      "https://play.google.com/store/apps/details?id=com.nhn.android.nmap"; // 네이버 지도 Google Play URL

    const isAndroid = /Android/i.test(navigator.userAgent);
    const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    const redirectToAppStore = () => {
      if (isiOS) {
        window.location.href = iOSAppStoreUrl; // iOS 앱스토어로 이동
      } else {
        window.location.href = googlePlayUrl; // Google Play로 이동
      }
    };

    if (isAndroid) {
      // 안드로이드 기기인 경우
      const isNaverMapInstalled =
        window.navigator.userAgent.indexOf("Naver") > -1;
      if (isNaverMapInstalled) {
        // 네이버 지도 앱이 설치되어 있는 경우 네이버 지도 앱으로 이동
        window.location.href = appScheme;
      } else {
        // 네이버 지도 앱이 설치되어 있지 않은 경우 앱스토어로 이동
        redirectToAppStore();
      }
    } else if (isiOS) {
      // iOS 기기인 경우
      window.location.href = appScheme; // 네이버 지도 앱으로 이동 (iOS에서는 앱 설치 여부 체크가 어렵기 때문에 바로 이동)
    } else {
      // 기타 기기인 경우 (PC 등)
      redirectToAppStore(); // 앱스토어로 이동
    }
  };

  const onClickTmap = () => {
    const lat = 37.4578541805703;
    const lng = 126.953866127509;
    const url = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${ENCODED}&appname=테스트앱&coordType=1&returnAppScheme=tmap://app?version=1&bizAppScheme=tmap://app?version=1`;

    const isAndroid = /Android/i.test(navigator.userAgent);
    const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    const isTmapInstalled = window.navigator.userAgent.indexOf("Tmap") > -1;
    if (isTmapInstalled) {
      window.location.href = url; // Tmap 앱 열기
    } else if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.skt.tmap.ku"; // Tmap Google Play URL
    } else if (isiOS) {
      window.location.href =
        "https://apps.apple.com/us/app/tmap-for-all-new-tmap/id431589174"; // Tmap App Store URL
    }
  };

  const onClickKakao = () => {
    const url = "kakaomap://place?id=11477726";

    const isAndroid = /Android/i.test(navigator.userAgent);
    const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    const isKakaoMapInstalled =
      window.navigator.userAgent.indexOf("KakaoMap") > -1;
    if (isKakaoMapInstalled) {
      window.location.href = url; // 카카오맵 앱 열기
    } else if (isAndroid) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=net.daum.android.map"; // KakaoMap Google Play URL
    } else if (isiOS) {
      window.location.href =
        "https://apps.apple.com/us/app/kakaomap-korea-no-1-map/id304608425"; // KakaoMap App Store URL
    }
  };

  return (
    <div
      id="location"
      className="flex w-full flex-col text-center pb-20 bg-white justify-center items-center"
    >
      <FadeInComponent>
        <h1 className="text-xl mt-2 font-semibold mb-3">오시는 길</h1>
      </FadeInComponent>
      <FadeInComponent className="mb-10">
        <div className="text-lg mt-7">서울대학교 교수회관 2층 컨벤션홀</div>
        <div className="flex gap-1 h-fit mt-2 items-center justify-center">
          <Image src={locationIcon} alt="" width={20} height={20} />
          <div className="text-center text-[#7b6452]">
            서울 관악구 관악로 1 65동
          </div>
        </div>
        <div className="text-center text-[#7b6452] text-sm">
          (신림동 산 65-1)
        </div>
      </FadeInComponent>
      <Map
        className="border-border-grey border-[1px] rounded-md"
        center={{ lat: 37.4578541805703, lng: 126.953866127509 }}
        style={{ width: "100%", height: "300px" }}
      >
        <MapMarker
          position={{ lat: 37.4578541805703, lng: 126.953866127509 }}
        ></MapMarker>
      </Map>
      <FadeInComponent className="padded-horizontal px-5">
        <div className="font-semibold text-lg text-start mb-4 mt-7">
          지도 앱
        </div>
        <div className="grid grid-cols-3 w-full mb-7 gap-3">
          <button
            onClick={onClickNaver}
            type="button"
            className={`px-2 flex justify-center gap-1 bg-white border-[1px] border-[#a2a2a2] border-opacity-30 transition-[border] w-full h-8 text-xs py-2 rounded-md 
               shadow-lg
          `}
          >
            <Image
              src={naver}
              alt=""
              className="border-[1px] border-opacity-40 border-border-grey rounded-md"
              width={15}
              height={15}
            />
            네이버 지도
          </button>
          <button
            onClick={onClickTmap}
            type="button"
            className={`px-2 flex justify-center gap-1 bg-white border-[1px] border-[#a2a2a2] border-opacity-30 transition-[border] w-full h-8 text-xs py-2 rounded-md 
               shadow-lg
          `}
          >
            <Image
              src={tmap}
              alt=""
              className="border-[1px] border-opacity-40 border-border-grey rounded-md"
              width={15}
              height={15}
            />
            티맵
          </button>
          <button
            type="button"
            onClick={onClickKakao}
            className={`px-2 flex justify-center gap-1 bg-white border-[1px] border-[#a2a2a2] border-opacity-30 transition-[border] w-full h-8 text-xs py-2 rounded-md 
               shadow-lg
          `}
          >
            <Image
              src={kakao}
              alt=""
              className="border-[1px] border-opacity-40 border-border-grey rounded-md"
              width={15}
              height={15}
            />
            카카오맵
          </button>
        </div>
        <div className="py-5 leading-loose border-t-[1px] border-border-grey w-full flex flex-col justify-center items-start">
          <div className="font-semibold text-lg mb-4">대중교통</div>
          <div className="flex flex-col gap-2">
            <div className="relative pl-3 text-sm text-start before:absolute before:left-0 before:top-[10px] before:-translate-y-1/2 before:transform before:content-['•']">
              <span className="font-bold">2호선 낙성대역</span>(4번출구) ➔
              마을버스 2번 ➔ ‘공동기기원’ 정류장에서 하차
            </div>
            <div className="relative pl-3 text-sm text-start before:absolute before:left-0 before:top-[10px] before:-translate-y-1/2 before:transform before:content-['•']">
              <span className="font-bold">2호선 서울대입구</span>(3번출구) ➔
              5511번 버스 ➔ ‘공동기기원’ 정류장에서 하차
            </div>
            <div className="relative pl-3 text-sm text-start before:absolute before:left-0 before:top-[10px] before:-translate-y-1/2 before:transform before:content-['•']">
              <span className="font-bold">신림선 관악산역</span>(1번출구) ➔
              5516번 버스 ➔ ‘공동기기원’ 또는 ‘교수회관입구’ 정류장에서 하차
            </div>
          </div>
        </div>
      </FadeInComponent>
      <FadeInComponent className="padded-horizontal">
        <div className="py-5 border-t-[1px] border-border-grey w-full flex flex-col justify-center items-start">
          <div className="font-semibold text-lg mb-4">자가용</div>
          <div className="flex flex-col gap-2">
            <div className="relative pl-3 text-sm text-start before:absolute before:left-0 before:top-[10px] before:-translate-y-1/2 before:transform before:content-['•']">
              교수회관 앞 지상 주차장 이용
            </div>
            <div className="relative pl-3 text-sm text-start before:absolute before:left-0 before:top-[10px] before:-translate-y-1/2 before:transform before:content-['•']">
              서울대역, 낙성대역에서 택시로 5-10분 소요
            </div>
            <div className="relative pl-3 text-sm text-start before:absolute before:left-0 before:top-[10px] before:-translate-y-1/2 before:transform before:content-['•']">
              내비게이션: 서울대학교 교수회관
            </div>
            <div className="relative pl-3 text-sm font-bold text-start before:absolute before:left-0 before:top-[10px] before:-translate-y-1/2 before:transform before:content-['•']">
              예식 당일 2층 접수대에서 2시간 주차권을 드립니다
            </div>
          </div>
        </div>
      </FadeInComponent>
    </div>
  );
}
