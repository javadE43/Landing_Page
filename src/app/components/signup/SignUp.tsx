//@ts-nocheck
"use client";
import { useAppContext } from "../../../context/contextLanguage";
import { useState } from "react";
import ButtonCountry from "../buttonCountry/Button";
import { useForm } from "react-hook-form";
import Button from "../button/Button";

export const SignUp = () => {
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
      console.log(
        "There was a problem with the fetch operation " + error.message
      );
    }
  };

  const handlvalue = (val: any) => {
    // setCode()
    console.log(val);
  };
  return (
    <section className="section__form">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        <div className="form__wraper__input">
          <label className="form__label" htmlFor="name">
            {/* نام و نام خانوادگی */}
            {state?.language?.form?.fullName}
          </label>
          <input
            type="text"
            // placeholder="نام و نام خانوادگی خود را وارد کنید"
            placeholder={state?.language?.form?.placeholder?.fullName}
            className="form__input"
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
          {errors.fullName && (
            <p className="text-dominant-500 text-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <ButtonCountry handlvalue={handlvalue} />
        <div className="form__wraper__input">
          <label className="form__label" htmlFor="name">
            {/* کد تایید دریافت شده را وارد کنید */}
            {state?.language?.form?.verifycode}
          </label>
          <input
            type="number"
            // placeholder="کد تایید"
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
          {errors.fullName && (
            <p className="text-dominant-500 text-1">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="form__wraper__input">
          <Button 
            type="submit"
            // content={"ثبت نام"}
            content={state?.language?.button?.signUp}
          />
        </div>
      </form>
      {isSubmitSuccessful && (
        <p className="text-dominant-500 text-1"> Message has been Sent</p>
      )}
    </section>
  );
};
