import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function ModalItem({ text, url }) {
  return (
    <li
      onClick={() => {
        axios.delete(`${import.meta.env.VITE_API_URL}delete`).then(r);
      }}
      id="item-modal"
      className="
  pb-1 mb-2 border-b border-slate-600
  "
    >
      {text}
    </li>
  );
}

export default function ModalOptionCardForum({ closeOption, id, updateForum }) {
  return (
    <ul
      id="modal-option"
      className="absolute right-14 top-8 bg-white dark:bg-[#191a22] rounded-lg border-indigo-900 p-3"
    >
      <li
        onClick={() => {
          {
            axios.delete(`${import.meta.env.VITE_API_URL}forums/${id}`).then((res) => {
              if (res.status == 200) {
                updateForum(id);
                closeOption();
              }
            });
          }
        }}
        id="item-modal"
        className="
  pb-1 mb-2 border-b border-slate-600
  "
      >
        Hapus
      </li>
      <li
        id="item-modal"
        className="
  pb-1 mb-2 border-b border-slate-600
  "
      >
        <Link to={`/edit-forum/${id}`}>Edit</Link>
      </li>
    </ul>
  );
}
