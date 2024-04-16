import React, { useEffect } from "react";
import FadeInComponent from "./FadeInComponent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import confetti from "canvas-confetti";

export default function Hero() {
  function copyToClipboard() {
    const URL = "https://jinandjune.com";

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

  // useEffect(() => {
  //   function randomInRange(min: number, max: number) {
  //     return Math.random() * (max - min) + min;
  //   }

  //   const duration = 6 * 1000;
  //   const animationEnd = Date.now() + duration;
  //   let skew = 1;

  //   (function frame() {
  //     const timeLeft = animationEnd - Date.now();
  //     const ticks = Math.max(100, 100 * (timeLeft / duration));
  //     skew = Math.max(0.7, skew - 0.002);

  //     confetti({
  //       particleCount: 1,
  //       startVelocity: 0,
  //       ticks: ticks,
  //       origin: {
  //         x: Math.random(),
  //         // since particles fall down, skew start toward the top
  //         y: Math.random() * skew - 0.2,
  //       },
  //       colors: ["#ffd9e5"],
  //       shapes: ["circle"],
  //       gravity: randomInRange(0.2, 0.5),
  //       scalar: randomInRange(0.03, 1),
  //       drift: randomInRange(0, 1),
  //     });

  //     if (timeLeft > 0) {
  //       requestAnimationFrame(frame);
  //     }
  //   })();
  // }, []);

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
            이정준 & 박효진
          </div>
        </FadeInComponent>
      </div>
      <div className="flex justify-center mt-5">
        {/* <button
          onClick={() => {
            // window.open(KAKAO_LINK.bride, "_blank");
            const { Kakao, location } = window;
            if (!Kakao.isInitialized()) {
              Kakao.init(process.env.KAKAO_KEY);
            }
            Kakao.Link.sendScrap({
              requestUrl: location.href,
            });
          }}
          className="px-4 py-2 rounded-2xl shadow-lg text-xs w-[130px] bg-[#ffeb02]"
        >
          카톡에 공유하기
        </button> */}
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
