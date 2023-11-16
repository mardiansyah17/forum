
import React from "react";
import {FaHome} from "react-icons/fa";
import {FaMagnifyingGlass} from "react-icons/fa6";

export default function Search({ placeholder, onChange }) {
  return (
    <div className="flex sm:w-2/4 items-center ">
<span className={`border-l-indigo-500 border-l-2  p-3 border-y-2 border-y-indigo-500 rounded-l-lg`}>
      <FaMagnifyingGlass className=""/>

</span>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 w-full bg-transparent border-indigo-500 px-3 py-2 rounded-lg rounded-l-none border-l-0 outline-none"
      />
    </div>
  );
}
