import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import imgProfile from "/public/user-profile.png";
export default function Profil() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    let darkVal = localStorage.getItem("is_dark");
    if (!darkVal) {
      setIsDark(false);
    } else {
      darkVal === "true" ? setIsDark(true) : setIsDark(false);
    }
  }, []);

  return (
    <Layout>
      <FontAwesomeIcon icon={faGears} className="text-xl absolute top-0 right-0 px-8 pt-5" />
      <div className="flex flex-col items-center">
        <img src={imgProfile} alt="" className="w-20 mb-2" />
        <h1 className="text-lg mt-3">Muhammad Mardiansyah</h1>
        <span>Fullstack developer</span>
      </div>
      <div className="sm:w-2/3 sm:mt-14 sm:mx-auto">
        <div className="flex justify-between px-5  mt-5 text-lg items-center">
          <span>Dark Mode</span>
          <input
            onChange={(val) => {
              let check = val.target.checked;
              let classDark = document.documentElement.classList;
              setIsDark(check);
              check ? classDark.add("dark") : classDark.remove("dark");
              localStorage.setItem("is_dark", check);
            }}
            type="checkbox"
            className="toggle toggle-primary"
            checked={isDark}
          />
        </div>
      </div>
    </Layout>
  );
}
