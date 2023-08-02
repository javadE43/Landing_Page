//@ts-nocheck
"use client";

import Link from "next/link";
import Button from "../button/Button";
import { useAppContext } from "../../../context/contextLanguage";
import Arreow from "../../../../public/icon/Group 3.svg";
import { SvgBoxOne1, SvgBoxOne2, SvgBoxOne3, SvgBoxOne4, SvgBoxOne5, SvgBoxOne6, SvgBoxOne7 } from "./SvgBoxOne";
export default function BoxOne() {
  const { state, dispatch } = useAppContext();
  return (
    <div className="box__one__container">
      <div className="box__one__container__svg__top__box__one">
        <span className="opacity-50 order-2 text-14 inline-block w-4 h-4 md:absolute md:-left-[3rem] md:-bottom-[4rem] lg:-left-[23.5rem]">
          <SvgBoxOne1 />
        </span>
        <span className=" hidden absolute -left-[4px] bottom-[42px] md:-left-[0.5rem] md:bottom-[29px] lg:bottom-[43px] lg:left-[3.5rem] md:text-dominant-500 order-2 text-14 lg:inline-block w-4 h-4">
          <SvgBoxOne2 />
          <SvgBoxOne7/>
        </span>
        <span className=" text-14 inline-block w-4 h-4 md:hidden lg:inline-block lg:-top-[3.3rem] lg:absolute lg:right-[7rem]">
          <SvgBoxOne3 />
        </span>
      </div>
      <div className="box__one__container__title">
        <h1 className="box__one__container__title__h1">
          {/* هیچوقت امیدتو از دست نده! */}
          {state?.language?.boxone?.head}
        </h1>
      </div>
      <div className="box__one__container__content">
        <p className="box__one__container__content__P">
          {/* اکنون امید مهربان اینجاست تا بهترین خدمات اینستاگرام را 
          به شما ارائه
          دهد. */}
          {state?.language?.boxone?.contentMain}
        </p>
        <div className="box__one__container__content__section__2">
          <p className="box__one__container__content__section__2__P">
            {/* لطفا وارد حساب کاربری شوید */}

            {state?.language?.boxone?.content}
          </p>
          <div className="box__one__container__content__section__2__container__button">
            {/* <Button type="link" 
            // content="ثبت نام" 
            content={state?.language?.button?.signUp} 
            href="/signup" /> */}
            <Link
              href="/signup"
              className="box__one__container__content__section__2__container__button__signup"
            >
              {state?.language?.button?.signUp}
            </Link>
            <Link
              href="/login"
              className="box__one__container__content__section__2__container__button__signup login__home"
            >
              {state?.language?.button?.login}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center absolute left-3 -bottom-5 right-0">
        <span className="absolute right-[14%] md:right-[31%] lg:right-[50%] lg:-bottom-[35px] order-2 text-14 inline-block w-4 h-4">
          <SvgBoxOne4 />
        </span>
        <span className="absolute -left-[4px] bottom-[42px] md:-left-[2rem] md:bottom-[29px] md:text-dominant-500 order-2 text-14 inline-block w-4 h-4 md:hidden">
          <SvgBoxOne5 />
        </span>
        <span className="hidden absolute md:-left-[1rem] md:bottom-[2.87rem] md:text-dominant-500 order-2 text-14 md:inline-block w-4 h-4 lg:hidden">
          <SvgBoxOne6/>
        </span>
      </div>
    </div>
  );
}
