import { faComment, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import Post from "../utils/Crud/Post";
import Update from "../utils/Crud/Update";

export default function ModalEditAnswer({ data, updateAnswer }) {
  const [answer, setAnswer] = useState(data.answer);

  function submitHandler() {
    Update(`answers/${data.id}`, { answer, forumId: data.forumId }, Cookies.get("token")).then(
      (res) => {
        updateAnswer(res.data.answer);
      }
    );
  }

  return (
    <>
      <input type="checkbox" id={`edit-answer${data.id}`} className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  dark:bg-[#161820]">
          <h3 className="font-bold text-lg">Tulis jawabanmu</h3>
          <textarea
            name={"question"}
            className="border-2 mt-3 w-full bg-transparent border-indigo-500 px-3 py-2 rounded-lg outline-none "
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            rows="5"
            placeholder="isi jawaban"
          ></textarea>
          <div className="modal-action">
            <label htmlFor={`edit-answer${data.id}`} className="px-3 py-2 bg-red-500 rounded-lg">
              Batal
            </label>
            <label
              onClick={submitHandler}
              htmlFor={`edit-answer${data.id}`}
              className="px-3 py-2 bg-indigo-600 rounded-lg"
            >
              Kirim
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
