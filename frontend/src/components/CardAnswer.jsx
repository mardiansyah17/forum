import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function CardAnswer() {
  return (
    <div className="p-3 border mb-4 bg-white dark:bg-[#23252E] border-gray-200 dark:border-gray-700 dark:shadow-slate-900  shadow-lg  rounded-lg">
      <div className="mb-3">
        <h1 className="sm:text-lg">Mardi</h1>
        <small>1 jam lalu</small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus qui non fugiat veritatis
          sunt libero doloremque aut, esse labore assumenda id omnis error iure nostrum. Voluptates
          vero minima possimus eaque.
        </p>
      </div>
    </div>
  );
}
