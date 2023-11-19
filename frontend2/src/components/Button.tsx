import React from "react";

export default function Button({submitHandler, text}: { submitHandler: () => void, text: string }) {
    return (
        <button
            type="button"
            onClick={submitHandler}
            className="px-3 py-2 bg-indigo-600 active:bg-indigo-800 hover:bg-indigo-500 rounded-lg mt-4 text-white w-full "
        >
            {text}
        </button>
    );
}
