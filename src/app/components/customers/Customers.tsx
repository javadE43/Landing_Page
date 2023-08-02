//@ts-nocheck
"use client";

import React from "react";
import Divider from "../divider/Divider";
import ProfileCoustomer from "../profileCustomer/ProfileCoustomer";
import { useAppContext } from "../../../context/contextLanguage";
import { SvgCustomer1 } from "./SvgCustomer";

export default function Customers() {
  const { state, dispatch } = useAppContext();

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
          {/* {data?.map((item) => (
            <>
             {
              item.id===7 && item.id <=8?
            <ProfileCoustomer username={item.username} image={item.image} hidden={{display:"hidden"}} display={{size:"lg",display:"flex"}}/>
            :item.id===5 && item.id<7?
            <ProfileCoustomer username={item.username} image={item.image} hidden={{display:"hidden"}} display={{size:"md",display:"flex"}}/>
            :
            <ProfileCoustomer username={item.username} image={item.image}/>
             }
            </>
          ))} */}
          {/* API DATA END */}
          {/* HARD CODE START*/}
          <ProfileCoustomer
            username={state?.language?.customer?.username}
            image="/images/customer/customer1.png"
          />
          <ProfileCoustomer
            username={state?.language?.customer?.username}
            image="/images/customer/customer2.png"
          />
          <ProfileCoustomer
            username={state?.language?.customer?.username}
            image="/images/customer/customer3.png"
          />
          <ProfileCoustomer
            username={state?.language?.customer?.username}
            image="/images/customer/customer4.png"
          />
              <ProfileCoustomer
            username={state?.language?.customer?.username}
            image="/images/customer/customer4.png"
            hidden={{ display: "hidden" }}
            display={{ size: "md", display: "flex" }}
          />
          <ProfileCoustomer
            username={state?.language?.customer?.username}
            image="/images/customer/customer2.png"
            hidden={{ display: "hidden" }}
            display={{ size: "md", display: "flex" }}
          />
          <ProfileCoustomer
            username={state?.language?.customer?.username}
            image="/images/customer/customer5.png"
            hidden={{ display: "hidden" }}
            display={{ size: "lg", display: "flex" }}
          />
          <ProfileCoustomer
            username={state?.language?.customer?.username}
            image="/images/customer/customer6.png"
            hidden={{ display: "hidden" }}
            display={{ size: "lg", display: "flex" }}
          />
          <ProfileCoustomer
            username={state?.language?.customer?.username}
            image="/images/customer/customer4.png"
            hidden={{ display: "hidden" }}
            display={{ size: "xl", display: "flex" }}
          />
      
          {/* HARD CODE END*/}
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
          <SvgCustomer1/>
        </span>
      </div>
    </div>
  );
}
