import { faComment, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Delete from "../utils/Crud/Delete";
import ModalEditAnswer from "./ModalEditAnswer";
import ModalOption from "./ModalOption";
import ModalOptionV2 from "./ModalOptionV2";

export default function CardAnswer({ data, deleteAnswer }) {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(true);
  const [answer, setAnswer] = useState(data.answer);
  const modal = useRef(null);
  const user = jwtDecode(Cookies.get("token"));
  const closeOpenMenus = (e) => {
    if (modal.current && showModal && !modal.current.contains(e.target)) {
      setShowModal(false);
    }
  };
  useEffect(() => {
    setAnswer(data.answer);
  }, [data]);

  const updateAnswer = (text) => {
    return setAnswer(text);
  };

  return (
    <div className="p-3 border relative mb-4 bg-white dark:bg-[#23252E] border-gray-200 dark:border-gray-700 dark:shadow-slate-900  shadow-lg  rounded-lg">
      <ModalEditAnswer key={`modal-edit.${data.id}`} data={data} updateAnswer={updateAnswer} />

      {showModal ? (
        <ModalOptionV2
          key={`modal-option.${data.id}`}
          modal={modal}
          closeOpenMenus={closeOpenMenus}
        >
          <label htmlFor={`edit-answer${data.id}`} className=" pb-1 mb-2 border-b border-slate-600">
            Edit
          </label>
          <div
            onClick={() => {
              Delete(`answers/${data.id}`, Cookies.get("token")).then((res) => {
                setShowModal(false);
                deleteAnswer(data.id);
              });
            }}
            className=" pb-1 mb-2 border-b border-slate-600"
          >
            Hapus
          </div>
        </ModalOptionV2>
      ) : (
        ""
      )}
      <div className="mb-3">
        <div className="flex justify-between items-center pr-4">
          <h1 className="sm:text-lg">{data.user.name}</h1>
          {user.id === data.user.id ? (
            <FontAwesomeIcon
              onClick={() => setShowModal(true)}
              className=" px-3.5 py-2 rounded-full "
              icon={faEllipsisV}
            />
          ) : (
            ""
          )}
        </div>
        <small>{data.createdAt}</small>
        <p>{answer}</p>
      </div>
    </div>
  );
}
