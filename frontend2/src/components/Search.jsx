import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Search({ placeholder, onChange }) {
  return (
    <div className="flex sm:w-2/4 ">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="rounded-l-lg border-2 border-r-0 border-indigo-500 pl-3 text-pu py-3"
      />
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        className="border-2 w-full bg-transparent border-indigo-500 px-3 py-2 rounded-lg rounded-l-none border-l-0 outline-none"
      />
    </div>
  );
}
