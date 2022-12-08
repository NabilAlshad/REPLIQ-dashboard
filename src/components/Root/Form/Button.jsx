import React from "react";

export const Button = ({ title, buttonClass }) => {
  return <button className={buttonClass}>{title}</button>;
};
