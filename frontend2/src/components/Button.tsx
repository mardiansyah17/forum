import React, {ButtonHTMLAttributes, ReactNode} from "react";
import {AiOutlineLoading} from "react-icons/ai";

export default function Button({
                                   children,
                                   type = "button",
                                   ...props
                               }: ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: "button" | "submit" | "reset";
    children: ReactNode;
}) {

    return (
        <button
            type={type}
            className="px-3 py-2 bg-indigo-600 flex justify-center items-center space-x-3 active:bg-indigo-800 hover:bg-indigo-500 rounded-lg mt-4 text-white w-full disabled:opacity-50 disabled:cursor-not-allowed"
            {...props}
        >
            <span>   {children}</span>
            <AiOutlineLoading className={`animate-spin ${!props.disabled ? "invisible" : ""}`}/>
        </button>
    );
}
