//@ts-nocheck
"use client";
import React from "react";
import { Login } from "../components/login/Login";
import { useAppContext } from "@/context/contextLanguage";

export default function LoginPage() {
  const { state, dispatch } = useAppContext();
  return (
    <div className="container__page__signup__login">
      <div className="container__page__wraper__signup__login">
        <div className="container__page__wraper__signup__login__head">
          <h2 className="container__page__wraper__signup__login__head__h2">
            {state?.language?.button?.login}
            {/* //ورود */}
          </h2>
          <p className="container__page__wraper__signup__login__head__p">
            {/* لطفا شماره موبایل که قبلا با آن ثبت نام کرد اید را وارد کنید. */}
            {state?.language?.form?.content}
          </p>
        </div>
        <Login />
      </div>
    </div>
  );
}
