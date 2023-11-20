'use client'
import React from "react";
import {usePathname} from "next/navigation";

import SideBarItem from "./SideBarItem";
import {FaBullhorn, FaHome, FaPlus, FaTags, FaUser} from "react-icons/fa";

export default function SideBar() {
    const pathname = usePathname();
    return (
        <div className="basis-[30%] hidden lg:block">
            <div className=" bg-white dark:bg-[#23252E]  shadow-md  rounded-md p-2">
                <h1 className="text-center text-xl font-semibold">Menu</h1>
                <ul className="mt-4">
                    <SideBarItem
                        path={"/forums"}
                        title="Forum"
                        icon={<FaHome/>}
                        active={pathname.startsWith('/forums')}
                    />
                    <SideBarItem
                        path={"/tags"}
                        title="Tags"
                        icon={<FaTags/>}
                        active={pathname === "/tags"}
                    />
                    <SideBarItem
                        path={"/create-forum"}
                        title="Buat forum"
                        icon={<FaPlus/>}
                        active={pathname === "/create-forum"}
                    />
                    <SideBarItem
                        path={"/my-topics"}
                        title="My topics"
                        icon={<FaBullhorn/>}
                        active={pathname === "/my-topics"}
                    />
                    <SideBarItem
                        path={"/profil"}
                        title="Profil"
                        icon={<FaUser/>}
                        active={pathname === "/profil"}
                    />
                </ul>
            </div>
        </div>
    );
}
