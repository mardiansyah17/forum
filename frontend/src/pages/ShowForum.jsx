import React from "react";
import Layout from "../components/Layout";
import CardForum from "../components/CardForum";
import CardAnswer from "../components/CardAnswer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Get from "../utils/Get";
import Cookies from "js-cookie";

export default function ShowForum() {
  const { id } = useParams();
  const [forum, setForum] = useState();
  const token = Cookies.get("token");
  useEffect(() => {
    Get(`forums/${id}`, token).then((res) => setForum(res.data));
  }, []);
  if (!forum) {
    return <h1>loading</h1>;
  }
  console.log(forum);
  return (
    <div className="bg-[#FCFBFD] sm:px-10 sm:pt-10  py-3 min-h-screen pb-3 dark:bg-[#161820]  dark:text-sky-100 ">
      <CardForum title={forum.title} question={forum.question} />
      <div className="p-3">
        <h3 className="mb-3">20 jawaban</h3>
        <CardAnswer />
        <CardAnswer />
        <CardAnswer />
        <CardAnswer />
        <CardAnswer />
        <CardAnswer />
        <CardAnswer />
      </div>
    </div>
  );
}
