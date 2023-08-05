//@ts-nocheck
"use client";
import { useAppContext } from "../../../context/contextLanguage";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { SvgCountryCode1 } from "../buttonCountry/SvgCountryCode";
import SelectCountry from "../buttonCountry/SelectCountry";
import { useState } from "react";

export const Login = () => {
  const { state, dispatch } = useAppContext();

  const [code, setCode] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ ...data, verifyCode: code }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("HTTP error! status: " + response.status);
      }
      reset();
    } catch (error: any) {
      console.log("There was a problem with the fetch operation " + error.message);
    }
  };

  //handleMainValueCounterCode
  const handleMainValueCounterCode = (code: number) => {
    if (code) {
      setCode(code);
    }
    console.log(code);
  };
  return (
    <section className="section__form">
      {/* SECTION START*/}
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/*FORM START*/}
        {/* BOX PGONENUMBER AND COUNTRY CODE ------ START */}
        <div className="form__wraper__input">
          <label className="form__label" htmlFor="name">
            {/* phoneNumber*/}
            {state?.language?.form?.phoneNumber}
          </label>
          <div className="box__select__phonenumber__wraper">
            <div className="box__select__countery  wraper__cuntrycode">
              <input
                type="tel"
                placeholder={state?.language?.form?.placeholder?.fullName}
                className={`form__input__box__country w-[65%]`}
                {...register("fullName", {
                  required: true,
                  minLength: {
                    value: 7,
                    message: "حداقل کاراکتر (10)",
                  },
                  maxLength: {
                    value: 200,
                    message: "بیشترین کارکتر (200)",
                  },
                })}
              />
              <span
                className={`h-[2px] w-[30px] md:w-[55px] absolute bg-base-light rotate-90  bottom-[50%] ${
                  state.key === "en" ? "right-[106px]" : "left-[106px]"
                }`}
              ></span>
              <div className={`form__input__box__country w-[40%] text-end`}>
                <SelectCountry
                  handleValueCounterCode={handleMainValueCounterCode}
                  dir={state?.key}
                />
              </div>
            </div>
            <button
              type="button"
              className={`w-[20%] rounded-xl h-full mx-h-[66px] ${
                state.key === "en" ? "rotate-[180deg]" : "rotate-0"
              }`}
            >
              <SvgCountryCode1 />
            </button>
          </div>
        </div>
        {/* BOX PGONENUMBER AND COUNTRY CODE ------ END */}
        {/* START VERIFYCODE BOX */}
        <div className="form__wraper__input">
          <label className="form__label" htmlFor="name">
            {state?.language?.form?.verifycode}
          </label>
          <input
            type="number"
            placeholder={state?.language?.form?.placeholder?.verifyCode}
            className="form__input"
            {...register("code", {
              required: true,
              minLength: {
                value: 55,
                message: "code requires at least 55 characters",
              },
              maxLength: {
                value: 55,
                message: "code requires up to 55 characters",
              },
            })}
          />
          {errors.fullName && <p className="text-dominant-500 text-1">{errors.fullName.message}</p>}
        </div>
        {/* END VERIFYCODE BOX */}
        {/* START SUBMIT BOX */}
        <div className="form__wraper__input">
          <Button type="submit" content={state?.language?.button?.signUp} />
        </div>
        {/* END SUBMIT BOX */}
        {/*FORM END*/}
      </form>
      {/* SECTION END */}
    </section>
  );
};
