//@ts-nocheck
"use client";

import React, { use } from "react";
import Divider from "../divider/Divider";
import ProfileCoustomer from "../profileCustomer/ProfileCoustomer";
import { useAppContext } from "../../../context/contextLanguage";
import { SvgCustomer1 } from "./SvgCustomer";
import { useMediaQuery } from "@/hooks/useMedia";

interface Props {
  data: Customer[];
}

export default function Customers({ data }: Props) {
  const xl =  useMediaQuery(1440);
  const lg =  useMediaQuery(1024);
  const md =  useMediaQuery(768)
  const { state, dispatch } = useAppContext();

  //Change the number of display numbers
  const arrayCustomer = ():Customer[] => {
    if (xl) {
      return data;
    } else if (lg) {
      const customers = data.slice(0, 8);
      return customers;
    } else if (md) {
      const customers = data.slice(0, 7);
      return customers;
    } else {
      const customers = data.slice(0, 5);
      return customers;
    }
  };

  return (
    <div className="customer__container">
      {/* DIVIDER PROFILE START*/}
      <div className="customer__container__head__top ">
        <Divider />
        <p className="customer__container__head__top__p">
          {/* با افرادی که افتخار همکاری داشته ایم */}
          {state?.language?.customer?.headTop}
        </p>
        <Divider />
      </div>
      {/* DIVIDER PROFILE START*/}
      {/* CUSTOMERS PROFILE START*/}
      <div className="customer__container__profile__customer">
        <div className="customer__container__profile__customer__wraper">
          {/* API DATA START */}
          {arrayCustomer()?.length>0 &&
            arrayCustomer().map((item) => (
              <React.Fragment key={item.id}>
                {item.id === 7 && item.id <= 8 ? (
                  <ProfileCoustomer
                    username={item.username}
                    image={item.image}
                    hidden={{ display: "hidden" }}
                    display={{ size: "lg", display: "flex" }}
                  />
                ) : item.id === 5 && item.id < 7 ? (
                  <ProfileCoustomer
                    username={item.username}
                    image={item.image}
                    hidden={{ display: "hidden" }}
                    display={{ size: "md", display: "flex" }}
                  />
                ) : (
                  <ProfileCoustomer username={item.username} image={item.image} />
                )}
              </React.Fragment>
            ))}
          {/* API DATA END */}
          {/* CUSTOMERS PROFILE END*/}
        </div>
        <div className="customer__container__box__text">
          <p>
            {/* و صد ها افراد معروف و محبوب دیگر */}
            {state?.language?.customer?.headBottom}
          </p>
        </div>
      </div>
      {/* DIVIDER PROFILE START*/}
      <div className="customer__container__head__buttom">
        <Divider />
        <p className="customer__container__head__buttom__p">
          {" "}
          {/* و صد ها افراد معروف و محبوب دیگر */}
          {state?.language?.customer?.headBottom}
        </p>
        <Divider />
      </div>
      {/* DIVIDER PROFILE END*/}
      <div className="block absolute left-6 md:hidden">
        <span className="absolute opacity-60 -top-1 inline-block`">
          <SvgCustomer1 />
        </span>
      </div>
    </div>
  );
}
