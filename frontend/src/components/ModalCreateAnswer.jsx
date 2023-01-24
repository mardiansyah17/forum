import { faComment, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ModalCreateAnswer() {
  return (
    <>
      <label
        htmlFor="create-answer"
        className="space-x-5 text-xl text-white  bg-indigo-700 px-2 py-1 rounded-lg cursor-pointer"
      >
        <FontAwesomeIcon icon={faPlus} />
        <FontAwesomeIcon icon={faComment} />
      </label>

      <input type="checkbox" id="create-answer" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box  dark:bg-[#161820]">
          <h3 className="font-bold text-lg">Tulis jawabanmu</h3>
          <textarea
            name={"question"}
            className="border-2 mt-3 w-full bg-transparent border-indigo-500 px-3 py-2 rounded-lg outline-none "
            id=""
            rows="5"
            placeholder="isi jawaban"
          ></textarea>
          <div className="modal-action">
            <label htmlFor="create-answer" className="px-3 py-2 bg-red-500 rounded-lg">
              Batal
            </label>
            <label htmlFor="create-answer" className="px-3 py-2 bg-indigo-600 rounded-lg">
              Batal
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
