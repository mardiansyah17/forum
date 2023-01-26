import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FormInput({
  val,
  type = "text",
  placeholder,
  name,
  changeHandler,
  errMsg,
}) {
  return (
    <div className="h-[4.5rem] w-full relative">
      <input
        onChange={changeHandler}
        value={val}
        type={type}
        name={name}
        placeholder={placeholder}
        className="border-2 w-full text-indigo-500 bg-transparent dark:text-white border-indigo-500 px-3 py-2 rounded-lg outline-none "
      />
      {errMsg ? (
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="absolute right-5 top-3 text-red-500"
        />
      ) : (
        ""
      )}
      <span className="ml-3 text-red-500">{errMsg}</span>
    </div>
  );
}
