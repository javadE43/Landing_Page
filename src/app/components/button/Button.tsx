import Link from "next/link";
import React from "react";

export default function Button({ type, content, href, style }: SelectButton) {
  const cssSubmit = style
    ? style
    : "w-full text-text-16 leading-24 h-[45px] bg-base-yellow text-base_dark rounded-xl md:h-[66px]";
  const cssLink = style
    ? style
    : "h-[25px] text-16 leading-24 flex p-1 items-center justify-center ml-[12px] text-base-light min-w-[95px] rounded-[5px] border-2 border-base-light md:min-h-[40px] md:min-w-[158px] hover:bg-base-yellow lg:min-w-[200px] lg:min-h-[58px] lg:text-28 lg:rounded-xl";
  const cssButton = style
    ? style
    : "w-full mt-[34px] h-[45px] bg-base-yellow text-base_dark rounded-xl md:h-[66px]";
  const cssInput = style
    ? style
    : "w-full mt-[34px] h-[45px] bg-base-yellow text-base_dark rounded-xl md:h-[66px]";

  switch (type) {
    case "button":
      return (
        <button type="submit" className={`${cssButton}`}>
          {content}
        </button>
      );
      break;
    case "submit":
      return (
        <button type="submit" className={`${cssSubmit}`}>
          {content}
        </button>
      );
      break;
    case "input":
      return (
        <input
          type={type}
          className="w-full mt-[34px] h-[45px] bg-base-yellow text-base_dark rounded-xl md:h-[66px]"
        >
          {content}
        </input>
      );
      break;
    case "link":
      return (
        <Link href={`${href}`} className={`${cssLink}`}>
          {content}
        </Link>
      );
      break;

    default:
      return (
        <button type="button" className={`${cssButton}`}>
          {content?content:"ورود"}
        </button>
      );
      break;
  }
}
