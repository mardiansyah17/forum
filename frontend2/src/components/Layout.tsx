import React, { useEffect, useState } from "react";
import TopNav from "./TopNav";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faHome, faQuestion, faTag, faUser } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar";
import { Link, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function Layout({ children }) {
  return (
    <div className="bg-[#FCFBFD] overflow-y-hidden  h-screen pb-3 dark:bg-[#161820]  dark:text-sky-100 ">
      {/* <TopNav /> */}
      <div className="lg:flex mt-10 lg:px-5">
        <SideBar />
        <div className="basis-[90%]">{children}</div>
      </div>
      <div className="lg:hidden absolute bottom-0 right-0 left-0 ">
        <BottomNav />
      </div>
    </div>
  );
}
