import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function BottomNavItemLink({ title, icon, path, active }) {
  return (
    <Link
      className={`${active ? "text-indigo-600" : "dark:text-white"} flex flex-col items-center`}
      to={path}
    >
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
    </Link>
  );
}
