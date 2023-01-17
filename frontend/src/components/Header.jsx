import { faFilter, faMagnifyingGlass, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Search from "./Search";

function Item({ active, title }) {
  return (
    <div
      className={`${
        active
          ? "bg-indigo-600 text-white"
          : "border border-indigo-500 text-slate-700 dark:text-slate-200"
      } px-3 py-2 rounded-xl  mr-3`}
    >
      {title}
    </div>
  );
}

export default function Header({ searchHanler }) {
  return (
    <div className="">
      <div className=" mx-2  flex items-center justify-center ">
        <Search placeholder={"Cari forum"} onChange={searchHanler} />
        {/* <h1>halo</h1> */}
        <FontAwesomeIcon
          icon={faFilter}
          className="bg-indigo-600 ml-3  p-3 text-white rounded-lg"
        />
      </div>
      <div className="flex mt-4 ml-2 justify-center">
        <Item active={true} title="Semua" />
        <Item title={"Terbaru"} />
        <Item title={"Populer"} />
      </div>
    </div>
  );
}
