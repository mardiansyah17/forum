'use client'

import React from "react";
import BottomNavItemLink from "./BottomNavItemLink";
import {usePathname} from "next/navigation";
import {FaBullhorn, FaHome, FaPlus, FaUser} from "react-icons/fa";


export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="flex bg-white dark:bg-[#161820] border-gray-300 justify-around border-t dark:border-slate-800 pt-2">
      <BottomNavItemLink
        title={"Home"}
        icon={<FaHome/>}
        path={"/"}
        active={pathname === "/"}
      />

      <BottomNavItemLink
        title={"Buat forum"}
        icon={<FaPlus/>}
        path={"/create-forum"}
        active={pathname === "/create-forum" }
      />
      <BottomNavItemLink
        title={"My topic"}
        icon={<FaBullhorn/>}
        path={"/my-topics"}
        active={pathname === "/my-topics" }
      />
      <BottomNavItemLink
        title={"Profile"}
        icon={<FaUser/>}
        path={"/profil"}
        active={pathname === "/profil" }
      />
    </div>
  );
}
