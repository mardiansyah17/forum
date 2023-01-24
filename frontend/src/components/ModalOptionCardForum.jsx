import axios from "axios";
import React from "react";

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

export default function ModalOptionCardForum({ show, id }) {
  return (
    <ul
      id="modal-option"
      className="absolute right-14 top-8 bg-white dark:bg-[#191a22] rounded-lg border-indigo-900 p-3"
    >
      <li
        onClick={() => {
          axios
            .delete(`${import.meta.env.VITE_API_URL}forums/${id}`)
            .then((res) => console.log(res));
        }}
        id="item-modal"
        className="
  pb-1 mb-2 border-b border-slate-600
  "
      >
        Hapus
      </li>
    </ul>
  );
}
