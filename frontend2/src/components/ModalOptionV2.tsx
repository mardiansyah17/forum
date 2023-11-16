import React, { useRef, useState } from "react";

export default function ModalOptionV2({ modal, closeOpenMenus, children }) {
  document.addEventListener("mousedown", closeOpenMenus);
  return (
    <div
      ref={modal}
      className={` absolute right-14 top-8 bg-white dark:bg-[#191a22] rounded-lg border-indigo-900 p-3`}
    >
      {children}
    </div>
  );
}
