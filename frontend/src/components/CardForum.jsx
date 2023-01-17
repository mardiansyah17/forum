import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import moment from "moment";
moment.locale("id");

export default function CardForum({ title, question, updatedAt }) {
  return (
    <div className="p-3 border mb-4 bg-white dark:bg-[#23252E] border-gray-200 dark:border-gray-700 dark:shadow-slate-900  shadow-lg mx-3 rounded-lg">
      <div className="border-b border-gray-300 pb-3 mb-3">
        <h1 className="sm:text-lg">{title}</h1>
        <small className="mr-4  mb-3 font-extralight">
          Dibuat oleh <span className="text-indigo-400 font-medium ">Mardi</span>
        </small>
        <p className="text-sm">{question}</p>
      </div>
      <div className="flex justify-between text-sm">
        {/* <span>{updatedAt}</span> */}
        <span>{moment(updatedAt).fromNow()}</span>

        <div className="flex items-center text-indigo-500">
          <FontAwesomeIcon icon={faComment} />
          <span className="ml-2">50</span>
        </div>
      </div>
    </div>
  );
}
