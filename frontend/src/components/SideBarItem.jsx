import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function SideBarItem({ icon, title, active, path }) {
  return (
    <li className="">
      <Link
        to={path}
        className={`inline-block w-full mb-4 ${
          active ? "border-l-4 border-l-indigo-500     bg-indigo-500" : ""
        } bg-opacity-20 mb-2 rounded-lg text-slate-700 dark:text-slate-100 pl-2 py-2`}
      >
        <FontAwesomeIcon icon={icon} /> <span className="ml-3">{title}</span>
      </Link>
    </li>
  );
}
