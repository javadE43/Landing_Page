//@ts-nocheck
"use client";
import { useAppContext } from "../../../context/contextLanguage";

import Button from "../button/Button";
import ButtonCountry from "../buttonCountry/Button";
import { useForm } from "react-hook-form";
import Send from "../../../../public/icon/Send-deactive.svg";
export const Login = () => {
  const { state, dispatch } = useAppContext();
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
        body: JSON.stringify(data),
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
    console.log(val);
  };
  return (
    <section className="section__form">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        <div className="flex flex-col gap-x-1 min-h-[74px]">
          <div className="flex gap-x-1">
            <ButtonCountry handlvalue={handlvalue} />
          </div>
        </div>
        <div className="flex flex-col min-h-[74px]">
          <label
            className="text-white block h-[35px] mt-1 text-text-16 leading-text-16"
            htmlFor="code"
          >
            {/* کد تایید دریافت شده را وارد کنید */}
            {state?.language?.form?.placeholder?.phoneNumber}
          </label>
          <input
            type="number"
            placeholder="کد تایید"
            className="bg-transparent text-white outline-none border-2 border-base-light rounded-xl py-2 px-2 md:h-[66px] focus:border-base-yellow"
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
        <Button
          type="submit"
          // " content="ورود"
          content={state?.language?.button?.login}
        />
      </form>
      {isSubmitSuccessful && (
        <p className="text-dominant-500 text-1"> Message has been Sent</p>
      )}
    </section>
  );
};
