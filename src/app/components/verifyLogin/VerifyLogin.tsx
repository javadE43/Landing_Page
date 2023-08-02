'use client'

import React from "react";
import Chack from "../../../../public/icon/check.svg"
import Button from "../button/Button";
export default function VerifyLogin() {
  return (
    <section className="h-full min-w-[355px]">
      <div className=" h-full w-full flex flex-col justify-center items-center">
        {/* ICONE__START */}
        <div className="">
         <Chack/>
        </div>
        {/* ICONE__END */}
        {/* HEADERMEASSGE__START */}
        <div className="">
          <h2 className="text-white text-[1.7rem] lg:text-[2rem] lg:my-[1rem]">
            {" "}
            ثبت نام با موفقیت انجام شد
          </h2>
        </div>
        {/* HEADERMEASSGE__END */}
        {/* CONTENT__STATRT */}
        <div className="">
          <p className="text-white text-[0.8rem] lg:text-[1.2rem]">
            {" "}
            اکنون میتوانید وارد پنل کاربری شوید و از خدمات استفاده کنید.
          </p>
        </div>
        {/* CONTENT__END */}
        {/* BUTTON__START */}
        <div className="mt-4 lg:mt-0 min-w-[190px] md:min-w-[200px] lg:min-w-[300px]">
          <Button type="link" href="/dashboard" content=" ورود به پنل کاربری" style="flex items-center justify-center  text-base_dark border border-base-yellow py-[1rem] px-[1rem] rounded-lg bg-base-yellow lg:min-w-[348px] lg:text-[2rem] lg:min-h-[66px] lg:mt-[24px]"/>
        </div>
        {/* BUTTIN__END */}
      </div>
    </section>
  );
}
