import React from "react";

export default function FormInput({ val, type = "text", placeholder, name, changeHandler }) {
  return (
    <>
      <input
        onChange={changeHandler}
        value={val}
        type={type}
        name={name}
        placeholder={placeholder}
        className="border-2 w-full bg-transparent border-indigo-500 px-3 py-2 rounded-lg outline-none mb-4"
      />
    </>
  );
}
