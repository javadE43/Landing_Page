"use client";

import React from "react";
//
import { SvgGroup3, SvgGroup4, SvgGroup5, SvgGroup6, SvgGroup7 } from "./SvgBoxThree";

//
export default function BoxTree() {
  return (
    <div className="relative bg-transparent">
      <div className="">
        <span className="hidden md:block absolute -top-[6rem] right-[20px] text-base-yellow  md:right-[11.2rem] md:-top-[11.5rem] lg:-top-[3rem]">
          <SvgGroup4 />
        </span>
        <span className="md:hidden absolute -top-[6rem] right-[20px] inline-block md:right-[11.2rem] md:-top-[11.5rem] lg:-top-[3rem]">
          <SvgGroup5 />
        </span>
      </div>
      <div className="hidden justify-between items-center relative left-9 -top-5 right-9 md:flex">
        <span className="absolute -bottom-[35px] left-[6rem] text-14 inline-block w-4 h-4 lg:-bottom-[12rem]">
          <SvgGroup6 />
        </span>
        <span className="absolute bottom-0 -top-4 right-[3rem] text-14 inline-block w-4 h-4 lg:hidden">
          <SvgGroup7 />
        </span>
      </div>
    </div>
  );
}
