import React from "react";
import Layout from "../components/Layout";
import CardForum from "../components/CardForum";
import CardAnswer from "../components/CardAnswer";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Get from "../utils/Get";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faComment, faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalCreateAnswer from "../components/ModalCreateAnswer";

export default function ShowForum() {
  const { id } = useParams();
  const [forum, setForum] = useState();
  const token = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    Get(`forums/${id}`, token).then((res) => setForum(res.data));
  }, []);
  if (!forum) {
    return (
      <div className=" dark:bg-[#161820] h-screen flex justify-center items-center">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }
  console.log(forum);
  return (
    <div className="bg-[#FCFBFD] sm:px-10 sm:pt-10  py-3 min-h-screen pb-3 dark:bg-[#161820]  dark:text-sky-100 ">
      <FontAwesomeIcon icon={faArrowLeft} className={"p-3 text-xl"} onClick={() => navigate("/")} />
      <CardForum title={forum.title} question={forum.question} id={forum.id} />
      <div className="p-3">
        <div className="flex justify-between px-3  items-center mb-4">
          <h3 className="mb-3">{forum.answers.length} jawaban</h3>
          <ModalCreateAnswer />
        </div>
        {forum.answers.map((data) => {
          return (
            <CardAnswer name={data.user.name} createdAt={data.createdAt} content={data.answer} />
          );
        })}
      </div>
    </div>
  );
}
