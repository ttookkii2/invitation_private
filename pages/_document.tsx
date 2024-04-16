import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://www.jinandjune.com/favicon.ico"
            rel="icon"
            type="image/x-icon"
          />
          <meta property="og:title" content="최보근 ❤️ 홍민지 결혼합니다" />
          <meta
            property="og:image"
            content="https://www.jinandjune.com/og.jpg"
          />
          <meta
            property="og:description"
            content="2024.01.13 토요일 오후 12:30"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=85dcc27223f8590a9070704449045077&libraries=services,clusterer&autoload=false"
            strategy="beforeInteractive"
          />
        </body>
      </Html>
    );
  }
}
