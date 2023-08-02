//@ts-nocheck
"use client";

import React from "react";

//
import Chack from "../../../../public/icon/Vector.svg";
import Logo from "../../../../public/icon/logo.svg";
import { useAppContext } from "@/context/contextLanguage";

//
export default function BoxTow() {
  const { state, dispatch } = useAppContext();

  return (
    <div className="box__tow__container">
      
      <div className="box__tow__container__content">
        <h3 className="box__tow__container__content__h3">
          {/* خدمات آکادمی امید مهربان ; */}
          {state?.language?.boxTow?.head}
        </h3>
        <p className="box__tow__container__content__p">
          {/* مشاوره و آنالیز پیج جهت امنیت-بازگردانی پیج های هک شده و...ودریافت تیک
          آبی-رفع محدودیت های پیج-آنالیز پیج ارتقا-پشتیبانی پیج */}
          {state?.language?.boxTow?.contentMain}
        </p>
      </div>
      <span className="w-flex w-[75px]">
        <Logo />
      </span>
      <span className="-translate-y-[11px] -translate-x-1 sm:translate-y-0 md:-translate-x-1 md:translate-y-3  w-flex w-[22px]">
        <Chack />
      </span>
    </div>
  );
}
