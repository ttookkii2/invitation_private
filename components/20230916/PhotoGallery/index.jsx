import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { photos } from "@/constants/20230916/photos";
import Title from "../Title";
import closeIcon from "@/public/assets/icons/close-grey@2x.png";
import { useSwipeable } from "react-swipeable";
import FadeInComponent from "../FadeInComponent";
import { useScrollBlock } from "@/hooks/useScrollBlock";

export default function PhotoGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
    blockScroll();
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentImage((currentImage + 1) % photos.length),
    onSwipedRight: () => {
      if (currentImage === 0) {
        setCurrentImage(photos.length - 1);
      } else {
        setCurrentImage((currentImage - 1) % photos.length);
      }
    },
    //if swipe up or down, disable scrolling
    onSwiped: (eventData) => {
      if (eventData.dir === "Up" || eventData.dir === "Down") {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  });

  return (
    <div className="mt-10 padded-horizontal w-full" id="gallery">
      <Title subTitle="" mainTitle="GALLERY" />
      <div className="grid grid-cols-3 gap-2">
        {photos.map((photo, index) => {
          return (
            <>
              <div
                key={`${index} + ${photo}`}
                className={`${
                  index === photos.length - 1
                    ? "col-span-2 row-span-1"
                    : "aspect-square"
                }  w-full active:scale-[1.1]  transition-all ease-in-out duration-150 object-cover overflow-hidden`}
              >
                <Image
                  priority
                  width={200}
                  height={200}
                  onClick={(e) => openLightbox(e, { photo, index })}
                  src={photo}
                  className={`${
                    index === photos.length - 1
                      ? "w-full aspect-246120"
                      : "h-auto"
                  } overflow-hidden`}
                  alt=""
                />
              </div>
            </>
          );
        })}
      </div>
      <div
        {...handlers}
        className={`w-screen h-screen transition-opacity duration-1000 z-[10000] fixed top-0 left-0 bg-black bg-opacity-[89%] flex items-center justify-center
          ${
            !viewerIsOpen
              ? "opacity-0 pointer-events-none"
              : "pointer-events-auto opacity-100"
          }
          `}
      >
        <Image
          className="absolute top-0 right-0 m-4 text-white text-3xl"
          onClick={() => {
            setViewerIsOpen(false);
            allowScroll();
          }}
          src={closeIcon}
          width={18}
          height={18}
          alt=""
        />
        <div className="w-full h-auto flex justify-center max-w-3xl">
          <div className="flex items-center justify-center mt-4">
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-[10] aspect-square h-6 rotate-45 border-l-2 border-b-2 border-[#838695] active:scale-[1.1]"
              onClick={() => {
                if (currentImage === 0) {
                  setCurrentImage(photos.length - 1);
                } else {
                  setCurrentImage((currentImage - 1) % photos.length);
                }
              }}
            ></button>
            <Image
              key={currentImage}
              priority
              className="w-screen h-auto duration-[1s] animate-fadeIn"
              width={1200}
              height={1800}
              src={photos[currentImage].src}
              alt=""
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-[10] aspect-square h-6 rotate-45 border-r-2 border-t-2 border-[#838695] active:scale-[1.1]"
              onClick={() => {
                if (currentImage === photos.length - 1) {
                  setCurrentImage(0);
                } else {
                  setCurrentImage((currentImage + 1) % photos.length);
                }
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
