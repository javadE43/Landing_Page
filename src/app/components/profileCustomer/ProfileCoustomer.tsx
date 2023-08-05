"use client";
import React from "react";

export default function ProfileCoustomer({
  username,
  image,
  hidden,
  display,
}: ProfileCoustomerProps) {
  const size: string[] = ["sm", "md", "lg", "xl"];
  if (size.includes(`${hidden?.size?.trim()}`) || size.includes(`${display?.size?.trim()}`)) {
    return (
      <div
        className={`profile__customer__container ${
          hidden?.size ? `${hidden?.size}:${hidden?.display}` : `${hidden?.display}`
        } ${display?.size ? `${display?.size}:${display?.display}` : `${display?.display}`}`}
      >
        <span className="profile__customer__container__img">
          <img src={image} alt="customer" />
        </span>
        <span className="profile__customer__container__username">{username}</span>
      </div>
    );
  }
  return (
    <div className={`profile__customer__container`}>
      <span className="profile__customer__container__img">
        <img src={image} alt="customer" />
      </span>
      <span className="profile__customer__container__username">{username}</span>
    </div>
  );
}
