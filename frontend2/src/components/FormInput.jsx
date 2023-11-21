import React from "react";

export default function FormInput({val, type = "text", placeholder, name, changeHandler, errMsg,}) {
    return (
        <div className="h-[4.5rem] w-full relative mb-3">
            <input
                onChange={changeHandler}
                value={val}
                type={type}
                name={name}
                placeholder={placeholder}
                className="border-2 w-full text-indigo-500 bg-transparent dark:text-white border-indigo-500 px-3 py-2 rounded-lg outline-none "
            />

            <span className={`ml-3 text-red-500 ${!errMsg ? "invisible" : ""}`}>{errMsg}</span>
        </div>
    );
}
