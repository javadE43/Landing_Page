//@ts-nocheck
"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
//
import { useAppContext } from "../../../context/contextLanguage";
import {
  CHANGE_TO_ENGLISHE,
  CHANGE_TO_PERSION,
  STORE__LANGUAGE,
} from "../../../context/constants/language";

//

import Info from "../../../../public/icon/info-circle.svg";
import { languages } from "../../../../public/data/data";
import { HiChevronDown } from "react-icons/hi2";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function Header() {
  const { state, dispatch } = useAppContext();

  const trigger = useRef<any>(null);

  const [val, setval] = useState<{
    code: string;
    label: string;
    icon: React.JSX.Element;
  }>();
  const [valModal, setvalModal] = useState<{
    code: string;
    label: string;
    icon: React.JSX.Element;
  }>();
  const [flag, setFlag] = useState<boolean>(false);

  //HANDLE CHANGE LANGUAGE START
  const handlChangeLanguagToEnglishe = (key: string) => {
    const language = state?.data?.[key];
    if (language)
      dispatch({ type: CHANGE_TO_ENGLISHE, payload: { key, language } });
  };
  const handlChangeLanguagToPersion = (key: string) => {
    const language = state?.data?.[key];
    if (language)
      dispatch({ type: CHANGE_TO_ENGLISHE, payload: { key, language } });
  };
  //HANDLE CHANGE LANGUAGE END

  //FETCH API LANGUAGE START TEST
  useEffect(() => {
    const res = async () => {
      const response = await fetch("/api/lan", {next:{cache:"no-store"},
        cache: "no-store",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data && !state?.language?.key) {
        dispatch({ type: STORE__LANGUAGE, payload: data });
      }
    };
    res();
  }, []);

  //FETCH API LANGUAGE END TEST
  const handle = () => {
    const country = languages.filter((item) => item.code !== val?.code);
    const countryModal = languages.filter(
      (item) => item.code !== country[0].code
    );
    if (country[0].code === "en") {
      handlChangeLanguagToEnglishe(country[0].code);
      document.dir = "ltl";
    }
    if (country[0].code === "fa") {
      handlChangeLanguagToPersion(country[0].code);
      document.dir = "rtl";
    }
    setval(country[0]);
    setvalModal(countryModal[0]);
    setFlag(false);
  };

  //CLOSE ON CLICK OUTSIDE START
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      //check
      // if (!sidebar.current || !trigger.current) return;
      if (!flag || trigger.current?.contains(target)) return;
      setFlag(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  //CLOSE ON CLICK OUTSIDE END

  //CHANGE SELECTORE BITTON LANGUAGE START
  useEffect(() => {
    if (!val?.code) {
      if (state.key) {
        setval(languages.filter((l) => l.code === state.key)[0]);
        setvalModal(languages.filter((l) => l.code !== state.key)[0]);
        document.dir = languages.filter((l) => l.code === state.key)[0].dir;
        return;
      }
      setval(languages[0]);
      setvalModal(languages[1]);
      document.dir = languages[0].dir;
    } else {
      const country = languages.filter((item) => item.code !== val?.code);
      setval(country[0]);
      const countryModal = languages.filter(
        (item) => item.code !== country[0].code
      );
      document.dir = setval.dir;
      setvalModal(countryModal[0]);
    }
  }, []);
  //CHANGE SELECTORE BITTON LANGUAGE END
  return (
    <header className="">
      <div className="header__nav__item">
        <div className="header__nav__item__flag__languag">
          <button
            onClick={() => setFlag(true)}
            className="header__nav__item__flag__languag__button"
          >
            <span className="text-16">{val?.label}</span>
            <span className="text-16">{val?.icon}</span>
            <span className="text-16">
              <HiChevronDown />
            </span>
          </button>
          <button
            className={`${
              flag ? "flex" : "hidden"
            } header__nav__item__flag__languag__modal `}
            onClick={handle}
          >
            <span className="lg:text-text-16">{valModal?.label}</span>
            <span className="lg:text-text-16">{valModal?.icon}</span>
          </button>
        </div>

        <div className="header__nav__item__about">
          <Link className="header__nav__item__about__link" href="/about">
            <Info />
            <span>{state?.language?.header?.about}</span>
          </Link>
        </div>
      </div>
      <div className="header__nav__item__logo">
        <Link href="/">
          <img src={`/images/logo1.png`} />
        </Link>
      </div>
    </header>
  );
}
