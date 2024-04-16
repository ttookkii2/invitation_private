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
const ENCODED = encodeURI("라마다서울신도림호텔");

export default function Location({ latitude, longitude }: MapProps) {
  const onClickNaver = () => {
    const lat = 37.5062376254144;
    const lng = 126.885392135733;
    const appScheme =
      // "nmap://map?lat=" + lat + "&lng=" + lng
      "nmap://place?lat=" + lat + "&lng=" + lng + "&name=" + ENCODED;

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
    const lat = 37.5062376254144;
    const lng = 126.885392135733;
    // tmap://search?name=스타벅스
    const url = `tmap://route?goalx=${lng}&goaly=${lat}&goalname=${ENCODED}&appname=테스트앱&coordType=1&returnAppScheme=tmap://app?version=1&bizAppScheme=tmap://app?version=1`;

    window.location.href = url; // Tmap 앱 열기
  };

  const onClickKakao = () => {
    // kakaomap: //open?page=routeSearch

    // kakaomap://search?q=맛집&p=37.537229,127.005515
    const url =
      "kakaomap://search?q=" + ENCODED + "&p=37.5062376254144,126.885392135733";

    window.location.href = url; // 카카오맵 앱 열기
  };

  return (
    <div
      id="location"
      className="flex w-full flex-col text-center pb-20 bg-white justify-center items-center"
    >
      <FadeInComponent>
        <div className="uppercase tracking-[0.25em] text-sm text-primary opacity-70">
          Location
        </div>
      </FadeInComponent>
      <FadeInComponent>
        <h1 className="text-xl mt-2 font-semibold mb-3">오시는 길</h1>
      </FadeInComponent>
      <FadeInComponent>
        <div className="text-lg mt-7">신도림 라마다 2층 그랜드볼룸</div>
        <div className="flex gap-1 h-fit mt-2 mb-10 items-center justify-center">
          <Image src={locationIcon} alt="" width={20} height={20} />
          <div className="text-center text-[#7b6452]">
            서울 구로구 신도림동 427-3 (경인로 624)
          </div>
        </div>
      </FadeInComponent>
      {/* <TouchableCompoent> */}
      <Map
        className="border-border-grey border-[1px] rounded-md"
        center={{ lat: 37.5062376254144, lng: 126.885392135733 }}
        style={{ width: "100%", height: "300px" }}
      >
        <MapMarker
          position={{ lat: 37.5062376254144, lng: 126.885392135733 }}
        ></MapMarker>
      </Map>
      {/* </TouchableCompoent> */}
      <FadeInComponent className="padded-horizontal">
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
        <div className="py-5 border-t-[1px] border-border-grey w-full flex flex-col justify-center items-start">
          <div className="font-semibold text-lg mb-4">자가용</div>
          <div className="flex flex-col gap-2">
            <div className="text-start text-sm">
              라마다 호텔 지하 주차장을 이용하실 수 있습니다. (하객 1시간 30분
              무료) 구로역 쪽에서 라마다호텔 방향으로 오시면 주차장 진입이
              수월합니다.
            </div>
          </div>
        </div>
      </FadeInComponent>
      <FadeInComponent className="padded-horizontal">
        <div className="py-5 leading-loose border-t-[1px] border-border-grey w-full flex flex-col justify-center items-start">
          <div className="font-semibold text-lg mb-4">지하철</div>
          <div className="flex flex-col gap-2">
            <div className="flex text-start">
              <span className="font-bold tracking-widest">ㆍ</span>
              <div className="whitespace-pre text-sm">
                {`1호선, 2호선 신도림역 1번 출구\n신도림역 광장에서 도보 5분 거리`}
              </div>
            </div>
          </div>
        </div>
      </FadeInComponent>
      <FadeInComponent className="padded-horizontal">
        <div className="py-5 border-t-[1px] border-border-grey w-full flex flex-col justify-center items-start">
          <div className="font-semibold text-lg mb-4">
            버스 <span className="font-normal text-base">(정류장 기준)</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex text-start">
              <span className="font-bold leading=">ㆍ</span>
              <div className="whitespace-pre text-sm">{`신도림동 (구로역)\n간선(파랑) : 160, 503, 600, 662, 660\n지선(초록) : 6513, 6515, 6516, 6637, 6640A\n직행(빨강) : 5200\n경기일반 : 10, 11-1, 11-2, 301, 320, 510, 530, 83, 88`}</div>
            </div>
            <div className="flex text-start">
              <span className="font-bold leading=">ㆍ</span>
              <div className="whitespace-pre text-sm">{`신도림중학교\n지선(초록) 5615, 5714, 6512`}</div>
            </div>
          </div>
        </div>
      </FadeInComponent>
    </div>
  );
}
