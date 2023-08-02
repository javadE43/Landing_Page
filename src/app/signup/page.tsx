//@ts-nocheck
"use client";
import { useAppContext } from "@/context/contextLanguage";
import { SignUp } from "../components/signup/SignUp";

export default function SignUpPage() {
  const { state, dispatch } = useAppContext();
  return (
    <div className="container__page__signup__login">
      <div className="container__page__wraper__signup__login">
        <div className="container__page__wraper__signup__login__head">
          <h2 className="container__page__wraper__signup__login__head__h2">
            {/* ثبت نام */}
            {state?.language?.form?.titlesignup}
          </h2>
          <p className="container__page__wraper__signup__login__head__p">
            {/* پس از ثبت نام شما میتوانید از خدمات سایت استفاده کنید و در صورت نیاز
            با شما تماس خواهیم گرفت. */}
            {state?.language?.form?.content}
          </p>
        </div>
        <SignUp />
      </div>
    </div>
  );
}
