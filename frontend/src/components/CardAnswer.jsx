import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CardAnswer({ name, createdAt, content }) {
  return (
    <div className="p-3 border mb-4 bg-white dark:bg-[#23252E] border-gray-200 dark:border-gray-700 dark:shadow-slate-900  shadow-lg  rounded-lg">
      <div className="mb-3">
        <h1 className="sm:text-lg">{name}</h1>
        <small>{createdAt}</small>
        <p>{content}</p>
      </div>
    </div>
  );
}
