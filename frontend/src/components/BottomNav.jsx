import React from "react";
import { Link, useLocation } from "react-router-dom";
import BottomNavItemLink from "./BottomNavItemLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa3,
  faBullhorn,
  faHashtag,
  faHome,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function BottomNav() {
  const location = useLocation();
  return (
    <div className="flex bg-white dark:bg-[#161820] border-gray-300 justify-around border-t dark:border-slate-800 pt-2">
      <BottomNavItemLink
        title={"Home"}
        icon={faHome}
        path={"/"}
        active={location.pathname === "/" ? true : false}
      />
      {/* <BottomNavItemLink
        title={"Tags"}
        icon={faHashtag}
        path={"/tags"}
        active={location.pathname === "/tags" ? true : false}
      /> */}
      <BottomNavItemLink
        title={"Buat forum"}
        icon={faPlus}
        path={"/create-forum"}
        active={location.pathname === "/create-forum" ? true : false}
      />
      <BottomNavItemLink
        title={"My topic"}
        icon={faBullhorn}
        path={"/my-topics"}
        active={location.pathname === "/my-topics" ? true : false}
      />
      <BottomNavItemLink
        title={"Profile"}
        icon={faUser}
        path={"/profil"}
        active={location.pathname === "/profil" ? true : false}
      />
    </div>
  );
}
