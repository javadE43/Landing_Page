//@ts-nocheck
"use client";

import React, { useState } from "react";

//
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

//
import { useAppContext } from "@/context/contextLanguage";
import SendIcone from "../../../../public/icon/Send-deactive.svg";
import { SvgCountryCode1 } from "./SvgCountryCode";

//INTERFACE
interface Props {
  handlvalue: (val: string) => void;
}
export default function ButtonCountry({ handlvalue }: Props) {
  const [code, setCode] = useState<string>("");
  const { state, dispatch } = useAppContext();

  const handlePhoneNumber = () => {
    //VALIDATION PHONE NUMBER

    //FATCH

    //RESPONSE VERIFY CODE

    //
    handlvalue(code);
  };

  return (
    <div className="form__wraper__input">
      <label className="form__label" htmlFor="name">
        {/* شماره موبایل */}
        {state?.language?.form?.phoneNumber}
      </label>
      <div className="flex gap-x-1">
        <button
          onClick={handlePhoneNumber}
          type="button"
          className=" max-w-[71px]  sm:max-w-[71px] md:w-[25%] md:max-w-[25%] order-2 rounded-xl min-w-[70px] min-h-[45px] md:h-[66px]"
        >
          {/* <SendIcone /> */}
          <span className="flex w-auto h-full">
          <SvgCountryCode1/>
          </span>
        </button>
        <input
          type="number"
          className="input__country__code"
          maxLength={4}
          minLength={4}
        />
        {/* <div className="flex-1 w-[80%]"> */}
        <PhoneInput
          containerClass="button__country"
          country={"ir"}
          value={code}
          onChange={(phone) => setCode(phone)}
        />
        {/* </div> */}
      </div>
    </div>
  );
}
