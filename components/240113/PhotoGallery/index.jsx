"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { photos } from "@/constants/240113/photos";
import Title from "../Title";
import closeIcon from "@/public/assets/icons/close-grey@2x.png";
import { useSwipeable } from "react-swipeable";
import FadeInComponent from "../FadeInComponent";
import { useScrollBlock } from "@/hooks/useScrollBlock";
import { motion, AnimatePresence } from "framer-motion";

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

  console.log(photos);

  return (
    <div className="bg-white pb-20 padded-horizontal w-full" id="gallery">
      <Title subTitle="" mainTitle="갤러리" />
      <div className="grid grid-cols-3 pt-10 gap-2">
        {photos.map((photo, index) => {
          return (
            <motion.div
              key={photo + index}
              className={`aspect-square w-full active:scale-[1.1]  transition-all ease-in-out duration-150 object-cover overflow-hidden`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: (index % 3) * 0.3 }}
              whileTap={{ scale: 1.03 }}
            >
              <Image
                width={200}
                height={200}
                onClick={(e) => openLightbox(e, { photo, index })}
                src={photo}
                className={`overflow-hidden h-full ${
                  [5, 9, 12, 14, 16, 13].includes(index)
                    ? "object-bottom"
                    : [20, 19, 1].includes(index)
                    ? "object-center"
                    : "object-top"
                } object-cover`}
                alt=""
              />
            </motion.div>
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
        <div className="flex w-full items-center justify-center">
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
            className="w-screen h-auto duration-[1s] animate-fadeIn"
            width={1200}
            height={1600}
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
  );
}
