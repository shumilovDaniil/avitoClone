import React, { FC, useEffect } from "react";

interface InputProps {
  label: string;
  type: string;
  register?: (type?: any) => any;
}

export const Input: FC<InputProps> = ({ label, type, register }) => {
  return (
    <div className={"flex items-center"}>
      <label htmlFor={type} className={"mr-8 text-xl text-gray-400"}>
        {label}
      </label>
      <input
        {...(register ? register("title") : "")}
        className={"p-2 border"}
        type="text"
        id={type}
      />
    </div>
  );
};
