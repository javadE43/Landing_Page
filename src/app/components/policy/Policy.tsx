//@ts-nocheck
'use client'
import { useAppContext } from "@/context/contextLanguage";
import React from "react";

export default function Policy() {
  const { state, dispatch } = useAppContext();

  return (
    <div className="footer__container">
      <div className="footer__container__section__one">
        <div className="footer__container__section__one__inner"> </div>
      </div>
      <p className="footer__container__p">
            {state?.language?.footer?.content}
      </p>
    </div>
  );
}
