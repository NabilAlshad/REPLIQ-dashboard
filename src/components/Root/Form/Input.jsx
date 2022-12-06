import React from "react";

export const Input = ({ inputClass, type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className={inputClass}></input>
  );
};
