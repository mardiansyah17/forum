import {
  faBullhorn,
  faHashtag,
  faHome,
  faQuestion,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  const location = useLocation();
  return (
    <div className="basis-[30%] hidden lg:block">
      <div className=" bg-white dark:bg-[#23252E]  shadow-md  rounded-md p-2">
        <h1 className="text-center text-xl font-semibold">Menu</h1>
        <ul className="mt-4">
          <SideBarItem
            path={"/"}
            title="Home"
            icon={faHome}
            active={location.pathname === "/" ? true : false}
          />
          <SideBarItem
            path={"/tags"}
            title="Tags"
            icon={faHashtag}
            active={location.pathname === "/tags" ? true : false}
          />
          <SideBarItem
            path={"/my-topics"}
            title="My topics"
            icon={faBullhorn}
            active={location.pathname === "/my-topics" ? true : false}
          />
          <SideBarItem
            path={"/profil"}
            title="Profil"
            icon={faUser}
            active={location.pathname === "/profil" ? true : false}
          />
        </ul>
      </div>
    </div>
  );
}
