import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";

export default function ModalOption({ closeOption, id, updateData, url, children }) {
  return (
    <ul
      id="modal-option"
      className="absolute right-14 top-8 bg-white dark:bg-[#191a22] rounded-lg border-indigo-900 p-3"
    >
      <li
        onClick={() => {
          {
            axios
              .delete(`${import.meta.env.VITE_API_URL}${url}/${id}`, {
                headers: { token: Cookies.get("token") },
              })
              .then((res) => {
                if (res.status == 200) {
                  updateData(id);
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
      {children}
    </ul>
  );
}
