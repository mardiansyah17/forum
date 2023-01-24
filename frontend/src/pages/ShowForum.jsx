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
  const [forum, setForum] = useState([]);
  const [answers, setAnswers] = useState([]);
  const token = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    Get(`forums/${id}`, token).then((res) => {
      setForum(res.data);
      setAnswers(res.data.answers);
    });
  }, []);
  if (!forum) {
    return (
      <div className=" dark:bg-[#161820] h-screen flex justify-center items-center">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }

  function addAnswer(answer) {
    setAnswers((data) => [...data, answer]);
    console.log(answer);
  }

  function deleteAnswer(id) {
    const resAnswer = answers.filter((data) => {
      return data.id != id;
    });
    setAnswers(resAnswer);
  }

  return (
    <div className="bg-[#FCFBFD] sm:px-10 sm:pt-10  py-3 min-h-screen pb-3 dark:bg-[#161820]  dark:text-sky-100 ">
      <FontAwesomeIcon icon={faArrowLeft} className={"p-3 text-xl"} onClick={() => navigate("/")} />
      <CardForum data={forum} />
      <div className="p-3">
        <div className="flex justify-between px-3  items-center mb-4">
          <h3 className="mb-3">{answers.length} jawaban</h3>
          <ModalCreateAnswer forumId={forum.id} addAnswer={addAnswer} />
        </div>
        {answers
          .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
          .map((data, idx) => {
            return <CardAnswer key={`answers.${idx}`} data={data} deleteAnswer={deleteAnswer} />;
          })}
      </div>
    </div>
  );
}
