import React from "react";
import { useAppStore } from "@/stores/app";

export default function Burger() {
  const burger = useAppStore((state) => state.burger);
  const setBurger = useAppStore((state) => state.setBurger);

  const handleChange = () => {
    setBurger(!burger);
  };

  return (
    <button
      onClick={handleChange}
      className="w-5 h-4 relative cursor-pointer block"
    >
      <span
        className="block absolute top-0 transition-all duration-500 h-[2px] w-full bg-primary rounded-[9px]"
        style={{
          transform: burger ? "rotate(45deg)" : "rotate(0deg)",
          left: burger ? "2.5px" : "0",
          transformOrigin: "left center",
        }}
      />
      <span
        className="block absolute transition-all duration-500 h-[2px] w-full bg-primary rounded-[9px] left-0 top-1/2 -translate-y-1/2"
        style={{
          opacity: burger ? 0 : 1,
        }}
      />
      <span
        className="block absolute transition-all duration-500 h-[2px] w-full bg-primary rounded-[9px] left-0 top-[100%]"
        style={{
          transform: burger ? "rotate(-45deg)" : "translateY(-100%)",
          left: burger ? "2.5px" : "0",
          top: burger ? "14px" : "",
          transformOrigin: "left center",
        }}
      />
    </button>
  );
}
