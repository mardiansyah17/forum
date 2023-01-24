import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import ModalOptionCardForum from "./ModalOptionCardForum";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
moment.locale("id");

export default function CardForum({ title, question, updatedAt, id, updateForum }) {
  const [showModal, setShowModal] = useState(false);
  if (showModal) {
    document.documentElement.addEventListener("click", function (event) {
      let id = event.target.id;
      if (id !== "modal-option" && id !== "item-modal" && id !== "button-opsi") {
        setShowModal(false);
        console.log(id);
      }
    });
  }
  return (
    <div className="relative">
      {showModal ? (
        <ModalOptionCardForum updateForum={updateForum} show={showModal} id={id} />
      ) : (
        <></>
      )}
      <Link to={`/forum/${id}`}>
        <div className="p-3 border mb-4 bg-white dark:bg-[#23252E] border-gray-200 dark:border-gray-700 dark:shadow-slate-900  shadow-lg mx-3 rounded-lg">
          <div className="border-b border-gray-300 pb-3 mb-3">
            <div className="flex justify-between items-center">
              <h1 className="sm:text-lg">{title}</h1>
              <FontAwesomeIcon
                id="button-opsi"
                icon={faEllipsisV}
                className={"py-3 px-4  rounded-full active:bg-black active:bg-opacity-10"}
                onClick={(event) => {
                  event.preventDefault();
                  setShowModal(true);
                }}
              />
            </div>
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
      </Link>
    </div>
  );
}
