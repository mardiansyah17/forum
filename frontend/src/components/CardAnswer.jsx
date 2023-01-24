import { faComment, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ModalEditAnswer from "./ModalEditAnswer";
import ModalOption from "./ModalOption";

export default function CardAnswer({ data, deleteAnswer }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", function (event) {
        let id = event.target.id;
        if (id !== "modal-option" && id !== "item-modal") return setShow(false);
      });
    }
  }, [show]);

  return (
    <div className="p-3 border relative mb-4 bg-white dark:bg-[#23252E] border-gray-200 dark:border-gray-700 dark:shadow-slate-900  shadow-lg  rounded-lg">
      <ModalEditAnswer data={data} />
      <div className="mb-3">
        <div className="flex justify-between items-center pr-4">
          <h1 className="sm:text-lg">{data.user.name}</h1>
          <FontAwesomeIcon
            onClick={() => setShow(true)}
            className=" px-3.5 py-2 rounded-full bg-red-500"
            icon={faEllipsisV}
          />
        </div>
        <small>{data.createdAt}</small>
        <p>{data.answer}</p>
      </div>
    </div>
  );
}
