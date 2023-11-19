'use client'

import React from "react";
import Search from "./Search";
import {FaFilter} from "react-icons/fa6";

function Item({active = false, title}: { active?: boolean, title: string }) {
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

export default function Header() {
    return (
        <div className="">
            <div className=" mx-2  flex items-center justify-center ">
                <Search placeholder={"Cari forum"}/>
                {/* <h1>halo</h1> */}
                <div
                    className="bg-indigo-600 ml-3 text-white rounded-lg p-3"

                >
                    <FaFilter
                    />
                </div>
            </div>
            <div className="flex mt-4 ml-2 justify-center">
                <Item active={true} title="Semua"/>
                <Item title={"Terbaru"}/>
                <Item title={"Populer"}/>
            </div>
        </div>
    );
}
