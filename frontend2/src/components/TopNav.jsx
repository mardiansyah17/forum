import { faMoon, faSun, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function TopNav() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList[0] == "dark" ? setIsDark(true) : setIsDark(false);
  }, [isDark]);
  function toggleDarkMode() {
    let valueToggle = document.getElementById("dark-mode-button");
    // console.log(valueToggle.checked);
  }
  return (
    <div className="flex justify-between py-2 pt-4 items-center px-5 mb-4 bg-white shadow-sm dark:border-b dark:border-b-slate-700 dark:bg-[#161820]">
      <h1></h1>
      <div className="flex items-center">
        <FontAwesomeIcon
          onClick={() => {
            document.documentElement.classList.toggle("dark");
            document.documentElement.classList[0] == "dark" ? setIsDark(true) : setIsDark(false);
          }}
          icon={isDark === true ? faSun : faMoon}
          className="text-lg mr-4"
        />

        <FontAwesomeIcon icon={faUserNinja} className="p-2 text-lg border bordergr rounded-full" />
      </div>
    </div>
  );
}
