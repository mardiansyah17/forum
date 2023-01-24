import { faComment } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import moment from "moment";
import { Link } from "react-router-dom";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
moment.locale("id");
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import ModalOption from "./ModalOption";
export default function CardForum({ data, updateForum }) {
  const user = jwtDecode(Cookies.get("token"));
  const [showModal, setShowModal] = useState(false);
  if (showModal) {
    document.documentElement.addEventListener("click", function (event) {
      let id = event.target.id;
      if (id !== "modal-option" && id !== "item-modal" && id !== "button-opsi") {
        setShowModal(false);
      }
    });
  }

  return (
    <div className="relative">
      {showModal ? (
        <ModalOption
          closeOption={() => setShowModal(false)}
          updateData={updateForum}
          id={data.id}
          url="forums"
        >
          <li
            id="item-modal"
            className="
  pb-1 mb-2 border-b border-slate-600
  "
          >
            <Link to={`/edit-forum/${data.id}`}>Edit</Link>
          </li>
        </ModalOption>
      ) : (
        <></>
      )}
      <Link to={`/forum/${data.id}`}>
        <div className="p-3 border mb-4 bg-white dark:bg-[#23252E] border-gray-200 dark:border-gray-700 dark:shadow-slate-900  shadow-lg mx-3 rounded-lg">
          <div className="border-b border-gray-300 pb-3 mb-3">
            <div className="flex justify-between items-center">
              <h1 className="sm:text-lg">{data.title}</h1>
              {user.id === data.userId ? (
                <FontAwesomeIcon
                  id="button-opsi"
                  icon={faEllipsisV}
                  className={"py-3 px-4  rounded-full active:bg-black active:bg-opacity-10"}
                  onClick={(event) => {
                    event.preventDefault();
                    setShowModal(true);
                  }}
                />
              ) : (
                ""
              )}
            </div>
            <small className="mr-4  mb-3 font-extralight">
              Dibuat oleh <span className="text-indigo-400 font-medium ">Mardi</span>
            </small>
            <p className="text-sm">{data.question}</p>
          </div>
          <div className="flex justify-between text-sm">
            {/* <span>{updatedAt}</span> */}
            <span>{moment(data.updatedAt).fromNow()}</span>

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
