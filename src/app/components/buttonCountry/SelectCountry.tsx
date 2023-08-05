"use client";

import React, { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { ArrayCountryCode } from "../../../../data/countryCode.ts/code";

interface Props {
  dir: string;
  handleValueCounterCode: (code: number) => void;
}

export default function SelectCountry({ handleValueCounterCode, dir }: Props) {
  const [val, setVal] = useState<number>(98);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const handleLi = (value: number) => {
    const int=Number(value)
    if (int) {
      setVal(int);
      handleValueCounterCode(int);
      setDropdown(false)
    }
  };

  return (
    <div className="bg-transparent w-full h-full relative inline-block ">
      <button
        onClick={() => setDropdown(!dropdown)}
        value={val}
        defaultValue="98"
        className="w-full h-full bg-transparent focus:ring"
      >
        {dir === "en" ? `+${val}` : `${val}+`}
      </button>
      <ul
        className={`bg-base_gray bg-opacity-50 overflow-hidden overflow-y-auto h-[12rem] w-[8rem] absolute top-[100%] mt-[10px] flex-col justify-between ${
          dropdown ? "flex" : "hidden"
        } ${dir === "en" ? "-left-[30px] md:-left-[8px]" : "-left-[8px]"}`}
      >
        {ArrayCountryCode?.map((item) => (
          <li
            key={item.name}
            onClick={(e) => handleLi(item.value)}
            className="text-base-light cursor-pointer w-full h-[3rem] m-l-[5px] flex justify-between items-center m-l-[0.5rem] text-[1.5rem]"
          >
            <span className={`${item.flag} !w-[3rem] h-[3rem]`}></span>
            {dir === "en" ? `${item.name}` : `${item.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
