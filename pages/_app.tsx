import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const kakaoInit = () => {
    if (window.Kakao && !window.Kakao?.isInitialized())
      window.Kakao?.init("85dcc27223f8590a9070704449045077");
  };
  useEffect(() => {
    kakaoInit();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        onLoad={kakaoInit}
      />
    </>
  );
}
